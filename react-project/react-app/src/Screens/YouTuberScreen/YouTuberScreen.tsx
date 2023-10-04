import React, { useState } from "react";
import { BsStars } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import ATMTextField from "../../component/atom/ATMTextField/ATMTextField";
import BitlyLinkDialog from "../DialogBox/BitlyLinkDialog";
type Props = {};

const Home = (props: Props) => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const [urlDomain, setUrlDomain] = useState("");
  const [domain, setDomain] = useState("");
  const [backhalf, setBackhalf] = useState("");

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="p-10">
      <div className="sm:w-[30%] p-2 w-full">
        <h1 className="font-bold md:text-[30px] sm:text-[26px] text-[24px]">
          {" "}
          A simple link but a powerful tool for
          <span className="">
            <a
              href="/youTibr.com"
              className="font-bold sm: text-[35px] text-[26px] inline-block text-center bg-gradient-to-r from-pink-500 to-teal-500 bg-clip-text text-transparent"
            >
              YouTubers!
            </a>
          </span>
        </h1>
      </div>

      <div className="grid sm:grid-cols-2">
        <div className="sm:w-[70%] ">
          <p className="text-[12px] gap-10">
            Our tool allows you to seamlessly track your audience with simple
            and easy-to-remember yet powerful links and provide your customers a
            unique tailored experience.
          </p>
          <div className="grid sm:grid-cols-2 items-center gap-2 py-2">
            <ATMTextField
              name=""
              value={inputValue}
              placeholder="https://youTube.com"
              onChange={handleInputChange}
              label=" "
              className="p-1  outline-none rounded-full"
              size="medium"
            />
            <div className="">
              <button  className=" bg-gradient-to-r from-pink-500 to-purple-700 text-[12px] text-white rounded-full px-4 py-1">
                Try Now
              </button>
            </div>
          </div>
          <div className="flex gap-2 py-4">
            <button
              className=" bg-gradient-to-r from-pink-700 to-pink-500 text-[12px] text-white rounded-full sm:px-6 py-1 px-2"
  onClick={()=>{navigate("/liveSong")}}
            >
              Get started
            </button>
            <button className="bg-white rounded-full shadow-md sm:px-6 py-1 px-2">
              Learn More{" "}
            </button>
          </div>
        </div>
        <div className="">
          <div>
            <ATMTextField
              name=""
              value={urlDomain}
              onChange={(e)=>{setUrlDomain(e.target.value)}}
              label="Pastey a long URL Domain "
              placeholder="Example:http//super-long-link.com/shorten"
              className="p-1 border-gray-300 outline-none"
              size="medium"
            />
            <div className="grid grid-cols-2 gap-4">
              <ATMTextField
                name=""
                value={domain}
                onChange={(e)=>{setDomain(e.target.value)}}
                label="Domain "
                placeholder="bit/ly"
                className="p-1 outline-none border-gray-300"
                size="medium"
              />
              <ATMTextField
                name=""
                value={backhalf}
                onChange={(e)=>{setBackhalf(e.target.value)}}
                className="p-1 outline-none border-gray-300"
                label="Enter a back half"
                size="medium"
                placeholder="exmple:favorite-link"
              />
            </div>
            <div className="py-6 w-full ">
              <a
                href="/"
                className="bg-[#C1F4F4] py-3 text-[12px] text-[#188CFF]  px-[20px]  flex items-center gap-2"
              >
                <BsStars /> End your link with words that will make it unique
              </a>
            </div>
            <div>
              {" "}
              <span className="text-[12px] font-bold"> QR code</span>
              <div className="text-[10px] font-medium">
                Generate a OR code share anywhere people can scane it{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center py-10">
        <BitlyLinkDialog />
      </div>
    </div>
  );
};

export default Home;