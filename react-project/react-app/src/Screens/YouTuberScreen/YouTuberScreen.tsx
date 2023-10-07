import React from "react";
import { AiFillLock } from "react-icons/ai";
import { BsStars } from "react-icons/bs";
import { FormikProps } from "formik";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import ATMSwitchButton from "../../component/atom/ATMTextField/ATMSwitchButton/ATMSwitchButton";
import ATMTextField from "../../component/atom/ATMTextField/ATMTextField";
import { loginProps } from "./YouTuberScreenWrapper";
type Props = {
  loginProps: FormikProps<loginProps>;
};

const YouTuberScreen = ({ loginProps }: Props) => {
  const { values, setFieldValue } = loginProps;
  const navigate = useNavigate();
  const showToast = () => {
    toast.success("Login Succesfully");
  };
  const homeNavigation = () => {
    setTimeout(() => {
      navigate("/home");
    }, 3000);
  };
  return (
    <>
      <div className=" flex flex-col sm:justify-center items-center h-screen bg-white gap-4">
        <div className="sm:w-[600px] md:w-[800px] w-full xl:[1000px]  py-4 px-8">
          <div className="w-full">
            <div className="sm:text-[18px] text-blue-500 text-[16px] cursor-pointer text font-medium "><a href="/">Go to Video</a></div>
            <h1 className="font-medium md:text-[30px] sm:text-[26px] text-[24px]">
              {" "}
              A simple link but a powerful tool for </h1>
             <h1><a
                href="https://www.youtube.com/"
                className="font-medium sm:text-[35px] text-[26px] inline-block text-center bg-gradient-to-r from-pink-600 to-pink-400 bg-clip-text text-transparent"
              >
                Video Editor!
              </a>
              </h1>
          </div>
          <div className="w-full py-4 ">
            <p className="text-[14px] sm:text-[16px] ext-gray-600">
              Our tool allows you to seamlessly track your audience with simple
              and easy-to-remember yet powerful links and provide your customers
              a unique tailored experience.
            </p>
          </div>
          <div className="">
            <ATMTextField
              name="url"
              value={values.url}
              onChange={(e) => {
                setFieldValue("url", e.target.value);
              }}
              label=" Paste a long URL to shorten it"
              placeholder="Example:http//super-long-link.com/shorten"
              className="w-full p-2 border border-gray-300 rounded  outline-none sm:text-[16px] text-[14px] bg-white font-normal"
              size="medium"
            />
            <div className="grid sm:grid-cols-2 gap-4 py-4 mt-1">
              <div className="flex">
                <div className="relative w-full">
                  <ATMTextField
                    name="domain"
                    value={values.domain}
                    onChange={(e) => {
                      setFieldValue("domain", e.target.value);
                    }}
                    disabled
                    label="Domain "
                    placeholder="bit/ly"
                    className="w-full p-2 border border-gray-300 rounded cursor-not-allowed  outline-none text-gray-600 text-[16px] bg-gray-200"
                    size="medium"
                  />
                  <div className="absolute right-2 top-9">
                    <AiFillLock size={24} color="black" />
                  </div>
                </div>
              </div>
              <div>
                <ATMTextField
                  name="backhalf"
                  value={values.backhalf}
                  onChange={(e) => {
                    setFieldValue("backhalf", e.target.value);
                  }}
                  className="w-full p-2 border border-gray-300 rounded  outline-none sm:text-[16px] text-[14px] bg-white font-normal"
                  label="Custom Name (optional)"
                  size="medium"
                  placeholder="exmple:favorite-link"
                />
              </div>
            </div>
          </div>
          <div className=" w-full pt-3">
            <a
              href="/"
              className="bg-[#C1F4F4] p-3 sm:text-[14px]  text-[12px] text-[#188CFF] flex items-center gap-2"
            >
              <BsStars /> End your link with words that will make it unique
            </a>
          </div>
          <div>
            <h2 className="text-[16px] font-medium pt-2 pb-1"> QR code</h2>
            <div className="flex p-3 items-center ">
              <ATMSwitchButton />{" "}
              <div className="text-[10px] font-medium sm:text-[14px]">
                Generate a OR code share anywhere people can scane it{" "}
              </div>
            </div>
          </div>
          <div>
            <button
              onClick={() => {
                showToast();
                homeNavigation();
              }}
              className="bg-[#2B5BD7] text-[14px] sm:text-[16px] text-white py-2 px-4 rounded-md flex items-center"
            >
              Sign up and get your Link
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default YouTuberScreen;