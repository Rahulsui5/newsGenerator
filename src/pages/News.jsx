import React from "react";
import { useState } from "react";
import loadingGif from "../assets/loadingg.gif";
const News = ({ newdata }) => {
  return (
    <div className="bg-white">
      <h1 className="text-center text-3xl pt-5 ">
         NewsIndia - Top Bussinessc Headlines
      </h1>
      <div className="flex flex-wrap justify-evenly mt-5">
        {newdata.map((news, index) => (
          <div
            key={index}
            className="m-5 p-4 sm:h-[500px] w-[100vw] sm:w-[400px] border bg-gray-100 rounded-xl shadow-lg hover:scale-105 flex flex-col"
          >
           {news.urlToImage && (<img
              className=" rounded-xl shadow-md w-[100vw] h-[200px] sm:w-[400px]"
              src={(news.urlToImage)}
              alt=""
            />)}
            <div className=" py-3 flex flex-col justify-between flex-grow">
              <h3 className="font-bold m-1">{news.title}</h3>
              <p>{news.description}</p>
              <p className=" text-gray-500 m-0.5">
                {news.author} on {news.publishedAt}
              </p>
              <a href={news.url} className="">
                <button className="m-0.5 hover:shadow-lg w-full bg-slate-500 cursor-pointer text-white px-3 py-1 font-bold rounded-md">
                  Read more
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center py-10">
        <img src={loadingGif} alt="Loading..." className="w-10 h-10" />
      </div>
    </div>
  );
};
export default News;
