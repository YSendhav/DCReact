import {
  Button,
} from "@mui/material";
import React from "react";
import { MdContentCopy } from "react-icons/md";
import { BiLinkAlt } from "react-icons/bi";
import { IoQrCode } from "react-icons/io5";
import { BiSpreadsheet } from "react-icons/bi";
import SideNavigationLayout from "../../component/ui/SideNavigationLayout";
const BitlyLinkDialog = () => {
  return (
    <div>
      <SideNavigationLayout>
        {/* link =============================================================>> */}
      
        <div className=" p-4 flex flex-col gap-5  sm:px-[100px] sm:py-10">
        <div className="text-[25px] sm:text-[30px] font-bold flex justify-center">Congrats Here's Your First Bitly Link!</div>
          <div className="flex flex-col p-4  sm:flex-row items-center justify-center bg-[#EDF2FF]  gap-3 ">
            <a href="/bit.ly/HariGovinda" className="font-bold text-[#2E5DD7] text-[20px]">
              bit.ly/HariGovinda
            </a>
            <Button
              variant="outlined"
              size="small"
              className="text-[14px] flex gap-2 bg-white"
            >
              <MdContentCopy className="text-[#2E5DD7] " />
              <span className="text-[10px] sm:text-[14px] text-[#2E5DD7]">Copy link</span>
            </Button>
          </div>
          {/* link =============================================================>> */}
          <div className="sm:text-[18px] text-[16px] font-bold text-center py-2">
            Bitly is the best plateform for connecting with everyone around you
          </div>
          {/* Link icon=================================================================================>>> */}
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="flex sm:flex-col items-center justify-center shadow-md p-2 gap-2 sm:p-4">
              <a
                href="link"
                className="bg-[#0DAEB8] text-white w-fit rounded-full p-2"
              >
                {" "}
                <BiLinkAlt />
              </a>
              <p className="font-normal text-[15px] text-center flex-1">
                Be short and sweet with short links
              </p>
            </div>
            <div className="flex sm:flex-col items-center justify-center shadow-md p-2 gap-2 sm:p-4">
              <a
                href="link"
                className="bg-[#6B52D1] text-white w-fit rounded-full p-2 "
              >
                <IoQrCode />
              </a>
              <p className="font-normal text-[15px] text-center flex-1">
                Connect in the real world with QR codes
              </p>
            </div>
            <div className="flex sm:flex-col items-center justify-center shadow-md p-2 gap-2 sm:p-4">
              <a
                href="link"
                className="bg-[#E8AE0A] text-white w-fit rounded-full p-2 "
              >
                <BiSpreadsheet />
              </a>
              <p className="font-normal text-[15px] text-center flex-1">
                show case your link with link in bio page
              </p>
            </div>
          </div>

          {/*  Link icon end=================================================================================>>> */}
          <div className="sm:text-[18px] text-[16px] font-bold text-center py-4">
            Get more powerfull link when you upgrade
          </div>

          {/* card ui=================================================================================>>> */}
          <div className="grid sm:grid-cols-2 gap-4 ">
            <div className="shadow-lg p-2">
              <div className="flex justify-between ">
                <div className="font-bold text-[14px] uppercase">
                  Core Annual
                </div>
                <button className="flex items-center justify-center rounded text-[#0DAEB8] bg-[#EDF2FF] text-[12px] gap-1 px-2 ">
                  <BiLinkAlt className="" />
                  More Monthly Links
                </button>
              </div>

              <p className="text-[14 px] text-left text-gray-600 leading-2 py-2  text-left">
                Upgrade to 100 short link per month and the powerfull ability to
                redirect your link to new destinations
              </p>
              <div className="text-[16px] font-bold ">
                $8/month{" "}
                <span className="text-[14px] font-normal">
                  (one-time charge of $ 96 year)
                </span>
              </div>
              <div className="flex items-center justify-center py-2">
                <button className="text-[16px] text-[#2E5DD7] ">
                  Veiw plans
                </button>
              </div>
            </div>
            <div className="shadow-lg p-2">
              <div className="flex justify-between">
                <div className="font-bold text-[14px] uppercase">
                  Growth annual
                </div>
                <button className="flex items-center rounded justify-center text-[#0DAEB8] bg-[#EDF2FF] text-[12px] gap-1 px-2 ">
                  <BiLinkAlt className="" />
                  More Monthly Links
                </button>
              </div>

              <p className="text-[14px] text-left text-gray-600 leading-2 py-2">
                Upgrade to 100 short link per month and the powerfull ability to
                redirect your link to new destinations
              </p>
              <div className="text-[16px] font-bold ">
                $8/month{" "}
                <span className="text-[14px] font-normal">
                  (one-time charge of $ 96 year)
                </span>
              </div>
              <div className="flex items-center justify-center py-2">
                <button className="text-[16px] text-[#2E5DD7] ">
                  Veiw plans
                </button>
              </div>
            </div>
          </div>
          {/* card ui and=================================================================================>>> */}
          <div className="text-[16px] text-center pt-4">
            Explore more option on our{" "}
            <span className="text-[#2E5DD7]">pricing page</span>
          </div>
        </div>
      </SideNavigationLayout>
    </div>
  );
};
export default BitlyLinkDialog;
