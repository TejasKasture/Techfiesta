import React from "react";
import FirstHeader from "../Header/FirstHeader";
import SearchBar from "../Header/SearchBar";
import Container from "../UI/Container";
import FilterDropdown from "../UI/FilterDropdown";

function SecondPage() {
  return (
    <>
      <div
        style={{
          backgroundColor: "#d6e5e3",
          width: "100%",
          height: "30rem",
          minHeight: "28rem",
        }}
      >
        <div
          className="flex items-center"
          style={{ width: "100%", height: "7rem" }}
        >
          <div
            className="flex justify-between"
            style={{ width: "100%", height: "3rem" }}
          >
            <FirstHeader />
          </div>
        </div>
        <div className="flex justify-center items-center w-full h-[22rem]">
          <div className="w-[74%] h-[22.4rem]">
            <h1
              class="text-left font-semibold text-4xl md:text-5xl text-bluelagoon-400 mb-6 mt-4 md:mt-8"
              style={{ color: "#08656e" }}
            >
              Online Yoga Classes
            </h1>

            <p>
              Find your perfect match with online yoga classes for everyone.
              Work on strength and mobility with Vinyasa, Hatha or Ashtanga,
              relax deeply with a Yin or Restorative yoga class, gain clarity
              and focus through meditation and breathwork, or sit back and watch
              our talks and tutorials.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[100%] flex justify-center">
        <div className="w-[79%] h-[22.4rem] mt-8">
          <div className=" flex justify-between">
            <div className="flex items-center">
              <ul
                className="flex items-center justify-between w-[27rem] ml-10 font-[600]"
                style={{ color: "#08656e" }}
              >
                <li>Classes</li>
                <li>Live Classes</li>
                <li>Programs</li>
                <li>Playlists</li>
              </ul>
            </div>
            <div>
              <SearchBar />
            </div>
          </div>

          <div className="mt-9 ml-5 flex justify-start gap-6">
            <FilterDropdown title="Teachers" />
            <FilterDropdown title="Style" />
            <FilterDropdown title="Duration" />
            <FilterDropdown title="Level" />
            <FilterDropdown title="Specific use" />
          </div>

          <div className="mt-10">
            <Container />
          </div>
        </div>
      </div>
    </>
  );
}

export default SecondPage;
