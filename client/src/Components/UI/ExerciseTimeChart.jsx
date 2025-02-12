import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { auth, db } from "../FireBase/FireBase";
import { doc, getDoc } from "firebase/firestore";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const SkeletonLoader = () => {
  return (
    <div className="flex justify-center items-center w-full h-80">
      <div className="relative w-48 h-48 bg-gray-300 animate-pulse rounded-full"></div>
      <div className="ml-3">
        <div className="w-24 h-4 bg-gray-300 animate-pulse mb-3"></div>
        <div className="w-20 h-4 bg-gray-300 animate-pulse mb-3"></div>
        <div className="w-28 h-4 bg-gray-300 animate-pulse"></div>
      </div>
    </div>
  );
};

const ExerciseTimeChart = () => {
  const [exerciseData, setExerciseData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchExerciseTime = async () => {
      const userId = auth.currentUser?.uid;
      if (!userId) {
        setIsLoading(false);
        return;
      }

      try {
        const userRef = doc(db, "users", userId);
        const userDoc = await getDoc(userRef);

        if (userDoc.exists()) {
          const userData = userDoc.data();
          const exerciseTime = userData.exerciseTime || {};
          const today = new Date().toISOString().split("T")[0];

          const exercises = Object.keys(exerciseTime);
          const timeData = exercises.map((exercise) => {
            return exerciseTime[exercise][today] || 0;
          });

          setExerciseData({
            labels: exercises,
            datasets: [
              {
                data: timeData,
                backgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56",
                  "#4BC0C0",
                  "#FF9F40",
                ],
                hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56",
                  "#4BC0C0",
                  "#FF9F40",
                ],
              },
            ],
          });
        } else {
          console.log("User document does not exist.");
        }
      } catch (error) {
        console.error("Error fetching exercise time:", error);
      } finally {
        setTimeout(() => setIsLoading(false), 900);
      }
    };

    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        fetchExerciseTime();
      } else {
        setIsLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="flex justify-center">
      <div style={{ width: "100%" }}>
        {isLoading ? (
          <SkeletonLoader />
        ) : (
          <Pie
            data={exerciseData}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: "right",
                  labels: {
                    boxWidth: 15,
                    paddingtop: 5,
                  },
                },
              },
            }}
          />
        )}
      </div>
    </div>
  );
};

export default ExerciseTimeChart;
