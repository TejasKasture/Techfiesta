import React from "react";
import { data } from "../../data";

function Container() {
  return (
    <div
      className="grid ml-7 mr-7 gap-4 cursor-pointer"
      style={{
        gridTemplateColumns: "repeat(3, 1fr)",
        placeItems: "center",
      }}
    >
      {data.map((datas, index) => (
        <div key={index} className="flex flex-col items-center">
          <img
            src={datas.img}
            alt=""
            className="w-[21.7rem] h-[12.4rem] object-cover"
          />
          <div className="content p-[0.7rem] pb-[0rem]">
            <h4 className="mt-2 text-[#3F6E71] font-[700] leading-[1.5rem] mb-[0.5rem]">
              {datas.name}
            </h4>
            <p className="leading-[1.5rem] text-[#343D3C] mb-[1rem]">
              {datas.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Container;
