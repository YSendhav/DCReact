import React, { useState, useEffect } from "react";
import { Checkbox } from "@mui/material";
import { BiSolidLock } from "react-icons/bi";
import { IoCloseOutline } from 'react-icons/io5';
import { GoDotFill } from "react-icons/go";
import { TbArrowsUpDown } from "react-icons/tb";
import { SiAudiomack } from "react-icons/si";
import { MdDateRange, MdModeEdit } from "react-icons/md";
import { MdContentCopy } from "react-icons/md";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import moment from "moment"
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { BsArrowReturnRight, BsThreeDots } from "react-icons/bs";
import ATMSwitchButton from "../../component/atom/ATMTextField/ATMSwitchButton/ATMSwitchButton";
import { PiArrowElbowDownRightBold } from "react-icons/pi";
import { ImQrcode } from "react-icons/im";
const customStyles = makeStyles({
  radio: {
    "& .MuiSvgIcon-root": {
      fontSize: "16px", // Adjust the radio button size
    },
  },
  label: {
    fontSize: "12px",
    fontWeight: "bold", // Adjust the label size
    color: "#494A56",
  },
});

type LinkProps = {
  id: string;
  customerName: string;
  longUrl: string;
  createdAt: string;
  expireAt: string;
  customer: {
    email: string;
    phone: number;
    name: string;
    clickCount: number;
  };
  planDetails: {
    type: string;
    rateLimit: number;
    expiresAt: string;
  };
};
type Props = {
  linksData: LinkProps[];
  linkDetail: LinkProps;
};
const LiveSongLinks = ({ linksData, linkDetail }: Props) => {
  const classes = customStyles();
  const [selectedValue, setSelectedValue] = useState("option1");
  const [isSideCardOpen, setIsSideCardOpen] = useState([]); // State for controlling side card visibility
  const [selectedLinkId, setSelectedLinkId] = useState<string | null>(null);
  const [checkedLinks, setCheckedLinks] = useState(
    linksData.map((_, index) => (index === 0 ? true : false))
  );
  const [isDrawerOpen, setIsDrawerOpen] = useState(true); // State for controlling drawer visibility
  const handleRadioChange = (event: any) => {
    setSelectedValue(event.target.value);
  };
  useEffect(() => {
    // Reset checkbox state when the drawer is closed
    if (!isDrawerOpen) {
      const newCheckedLinks = checkedLinks.map((checked, i) =>
        i === 0 ? false : false
      );
      setCheckedLinks(newCheckedLinks);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDrawerOpen]);

  const handleCheckboxChange = (index: number, link: any) => {
    // Clone the current checkedLinks array
    const newCheckedLinks = checkedLinks.map((checked, i) => {
      if (i === index) {
        // Toggle the clicked checkbox
        return !checked;
      } else if (i === 0) {
        // Ensure the first checkbox is always checked
        return false;
      } else {
        // Uncheck other checkboxes
        return false;
      }
    });

    setCheckedLinks(newCheckedLinks);
    console.log("selectedID",)
    if (window.innerWidth < 640) {
      setIsDrawerOpen(true);
      setSelectedLinkId(link?.id);

    } else {
      setIsSideCardOpen(link?.id);
    }
  };
  const handleClose = () => {
    setIsDrawerOpen(false);
  }
  return (
    <div className="h-full w-full ">
      <div className="w-full h-full">
        <div className="flex flex-col gap-3 border-gray-300 border p-5 w-full">
          <div className="flex sm:flex-row gap-5 flex-col flex justify-between  sm:items-center">
            <div className=" flex gap-3 items-center">
              <h1 className="text-[30px] font-bold text-black">Links</h1>
              <div className="flex items-center pl-2">
                <ATMSwitchButton />
                <label
                  htmlFor=""
                  className="sm:text-[16px] text-[12px] font-medium"
                >
                  Preview New Links Page
                </label>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <button className="text-white text-[14px] py-1 font-medium rounded-sm px-[6px] bg-[#2B5BD7] ">
                Upgrade for custom links
              </button>
              <div className="bg-[#E8EAF1] text-[#273144] text-[11px]  rounded-sm w-fit px-3 py-1">
                Select Date
              </div>
            </div>
          </div>
          <div>
            <FormControl component="fieldset">
              <RadioGroup
                aria-label="options"
                name="options"
                value={selectedValue}
                onChange={handleRadioChange}
                row
              >
                <FormControlLabel
                  value="option1"
                  control={<Radio classes={{ root: classes.radio }} />}
                  label={<span className={classes.label}>Date Created</span>}
                />
                <FormControlLabel
                  value="option2"
                  control={<Radio classes={{ root: classes.radio }} />}
                  label={<span className={classes.label}>Top Performing</span>}
                />
              </RadioGroup>
            </FormControl>
          </div>
          <div>
            <button className="text-white text-[14px] py-1 rounded-md px-[6px] bg-[#2B5BD7] flex gap-3 items-center">
              <span>
                <TbArrowsUpDown />
              </span>
              <span> Filters</span>
            </button>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col  bg-slate-100 w-full h-full">
          <div
            className={`border-r border-divider border-gray-300 sm:w-[250px] md:w-[300px] w-full h-full flex flex-col overflow-auto`}
          >
            <div className="text-[#273144] text-[12px] p-3 border-b flex justify-end border-gray-300 w-full">
              Engagments
            </div>
            <div className="flex flex-col px-3">
              {linksData?.map((link, index) => {
                return (
                  <div
                    key={link?.id}
                    className="flex gap-1 items-center border-b border-gray-300 hover:bg-white p-1"
                  >
                    <div>
                      <Checkbox
                        checked={checkedLinks[index]}
                        onChange={() => handleCheckboxChange(index, link?.id)}
                      />
                    </div>
                    <div className="flex flex-col gap-1  w-full">
                      <div className="flex flex-col">
                        <span className="text-gray-400 text-[12px]">
                          {moment(link?.createdAt).format('MMM D').toLowerCase()}
                        </span>
                        <div className="flex items-center  ">
                          <span className="text-red-500 text-[22px] ">
                            <GoDotFill />
                          </span>
                          <span className="text-[15px] font-medium">{link?.planDetails?.type}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-[14px] w-full">
                        <div className="text-red-400">
                          bit{link?.customerName}
                        </div>
                        <div className="flex items-center ">
                          {link?.createdAt}
                          <span>
                            <SiAudiomack />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex-1 p-8 hidden md:inline">
            <div className="">
              <div className="flex flex-col gap-8 w-full h-full">
                <div className="bg-white p-5">
                  <div className="flex flex-col gap-3 rounded-md">
                    <div className="flex justify-between ">
                      <div className="flex items-center  text-[15px] font-medium">
                        <span className="text-red-500 text-[22px] sm:[25px] md:[29px]">
                          <GoDotFill />
                        </span>{" "}
                        {linkDetail?.planDetails?.type}
                      </div>
                      <div className="flex gap-2">
                        <button className="flex text-[14px] gap-1 font-medium bg-[#EDF2FF] border items-center p-2 pb-1 rounded-md">
                          <MdModeEdit className="" />
                          <span>Edit</span>
                        </button>
                        <button className="p-2 border rounded-md">
                          <BsThreeDots />
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-[14px]">
                      <span className="text-black text-[16px]">
                        <MdDateRange />{" "}
                      </span>
                      {linkDetail?.createdAt} by {linkDetail?.customerName}
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-[12px]">
                      <span className="text-black text-[16px]">
                        <SiAudiomack />
                      </span>
                      0 total engagments
                    </div>
                  </div>
                </div>
                <div className="bg-[#F3F6F9]">
                  <div className="bg-white  p-4">
                    <div className="flex justify-between ">
                      <a
                        href="/bit.ly/HariGovinda"
                        className="font-bold text-[#2E5DD7] text-[16px] "
                      >
                        bit.ly/{linkDetail?.customer?.name}
                      </a>
                      <div className="flex gap-2">
                        <button className="flex text-[14px] gap-1 font-medium bg-[#EDF2FF] border items-center p-2 pb-1 rounded-md">
                          <MdContentCopy className="" />
                          <span>Copy</span>
                        </button>
                        <button className="p-2 border rounded-md">
                          <BsThreeDots />
                        </button>
                      </div>
                    </div>
                    <div className="text-[14px] text-gray-600">
                      {linkDetail?.customer?.clickCount} clicks
                    </div>
                    <div className="flex text-[14px] text-gray-700 items-center gap-2 font-medium p">
                      <BsArrowReturnRight />
                      <a href="https://www.youTube.coms py-2">
                        {linkDetail?.longUrl}
                      </a>
                      <BiSolidLock />
                      <span className="text-gray-300">Redirect</span>
                    </div>
                    <div className="text-[16px] font-bold flex justify-between py-2">
                      <div>QR Code</div>
                      <div>Link-in-bio</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {isDrawerOpen && (
            <div>
              <Dialog
                className="md:hidden"
                open={isDrawerOpen}
                onClose={() => {
                  setIsDrawerOpen(!isDrawerOpen);
                  setSelectedLinkId(null);
                }}
                fullWidth
                maxWidth="md"
              >
                <div className="flex justify-between items-center bg-[#60606C] p-4">
                  <h1 className="font-medium text-[18px] sm:text-[24px] text-blue-900 text-white">
                    Link Details
                  </h1>
                  <div onClick={handleClose} className="text-white text-[18px] sm:text-[24px]">  <IoCloseOutline /></div>

                </div>
                <div className="bg-[#F3F6F9] p-3">
                  <DialogContent className="">
                    <>
                      <div className="flex flex-col gap-4">
                        <div className="bg-white p-4 ">
                          <div className="sm:flex sm:justify-between ">
                            <div className="flex items-center gap-1">
                              <div className="text-red-500 text-[22px] sm:[25px] md:[29px]">
                                <GoDotFill />
                              </div>
                              <div className="font-medium text-[16px]">
                                {linkDetail?.planDetails?.type}
                              </div>
                            </div>
                            <div className="flex gap-2 py-4 sm:py-0">
                              <button className="flex gap-1 font-medium text-[16px] px-2 bg-[#EDF2FF] border items-center  rounded-md">
                                <MdModeEdit />
                                <div className="">Edit</div>
                              </button>
                              <button className="p-2 border rounded-md">
                                <BsThreeDots />
                              </button>
                            </div>
                          </div>
                          <div className="flex sm:items-center gap-2  text-gray-500 sm:text-[16px] text-[14px] py-2 sm:py-0">
                            <div className="text-black mt-[4px] sm:mt-0 text-[20px] ">
                              <MdDateRange />{" "}
                            </div>
                            <div>
                              {moment(linkDetail?.createdAt).utcOffset('+05:30').format('MMMM D YYYY h:mm A [GMT+5:30]')} by {linkDetail?.customerName}
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-gray-500 text-[14px] sm:text-[16px]">
                            <div className="text-black text-[14px]">
                              <SiAudiomack />
                            </div>
                            0 total engagments
                          </div>
                        </div>

                        <div className="bg-white p-4">
                          <div className="sm:flex sm:justify-between ">
                            <a
                              href="/bit.ly/HariGovinda"
                              className="font-bold text-[#2E5DD7] text-[16px] "
                            >
                              bit.ly/HariGovinda
                            </a>
                            <div className="flex gap-2 py-3 sm:py-0">
                              <button className="flex gap-1 font-medium text-[16px] px-2 bg-[#EDF2FF] border items-center  rounded-md">
                                <MdContentCopy className="" />
                                <div className="">Copy</div>
                              </button>
                              <button className="p-2 border rounded-md">
                                <BsThreeDots />
                              </button>
                            </div>
                          </div>
                          <div>
                            <div className="text-[16px] text-gray-600 font-medium">
                              0 clicks
                            </div>
                            <div className="flex text-[16px]  items-center gap-2 py-2">
                              <PiArrowElbowDownRightBold className="text-[28px] sm:text-[16px] font-bold" />
                              <div className="truncate">
                                <a href="https://www.youTube.coms py-2">
                                  https://www.youTube.com/watch?v=tZ-EHDhzgL8
                                </a>
                              </div>
                              <BiSolidLock className="text-[28px] sm:text-[16px] font-bold" />
                              <span className="text-gray-500 text-[14px]">
                                Redirect
                              </span>
                            </div>
                            <div className="text-[16px] sm:flex items-center gap-2 font-medium pb-2">
                              <div>QR Code</div>
                              <div>
                                <ImQrcode />
                              </div>
                            </div>
                            <div className="text-[16px] font-bold hidden sm:inline">
                              Link-in-bio
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  </DialogContent>
                </div>
              </Dialog>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LiveSongLinks;
