import {
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    IconButton,
} from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import { MdContentCopy } from "react-icons/md";
import { BiLinkAlt } from "react-icons/bi";
import { IoQrCode } from "react-icons/io5";
import { BiSpreadsheet } from "react-icons/bi";

const BitlyLinkDialog = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <button
                onClick={handleOpen}
                className="bg-[#2B5BD7] text-[12px] text-white py-2 px-4 rounded-md flex items-center"
            >
                Sign up and get your Link
            </button>
            <Dialog open={open} onClose={handleClose} className="">
                <div className="border-l-2 border-[#2E5DD7]">
                    <DialogTitle className="flex justify-between">
                        <h1 className="font-bold sm:text-[16px] text-[14px]">
                            congrats! Here's your first Bitly link!
                        </h1>
                        <IconButton onClick={handleClose} size="small">
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </DialogTitle>
                    <DialogContent>
                        {/* link =============================================================>> */}
                        <div className="bg-[#EDF2FF] p-4 flex gap-4 items-center justify-center text-[14px] text-[#2E5DD7]">
                            <a href="/bit.ly/HariGovinda" className="font-bold ">
                                bit.ly/HariGovinda
                            </a>
                            <Button
                                variant="outlined"
                                size="small"
                                className="text-[14px] flex gap-2 "
                            >
                                <MdContentCopy className="text-[#2E5DD7] " />
                                <span className="text-[10px] text-[#2E5DD7]">Copy link</span>
                            </Button>
                        </div>
                        {/* link =============================================================>> */}
                        <div className="text-[14px] font-bold text-center py-2">
                            Bitly is the best plateform for connecting with everyone around
                            you
                        </div>
                        {/* Link icon=================================================================================>>> */}
                        <div className="grid sm:grid-cols-3 gap-4">
                            <div className="flex flex-col items-center justify-center shadow-md p-4">
                                <a
                                    href="link"
                                    className="bg-[#0DAEB8] text-white w-fit rounded-full p-2"
                                >
                                    {" "}
                                    <BiLinkAlt />
                                </a>
                                <p className="font-normal text-[12px] text-center">
                                    Be short and sweet with short links
                                </p>
                            </div>
                            <div className="flex flex-col items-center justify-center shadow-md p-4">
                                <a
                                    href="link"
                                    className="bg-[#6B52D1] text-white w-fit rounded-full p-2"
                                >
                                    <IoQrCode />
                                </a>
                                <p className="font-normal text-[12px] text-center">
                                    Connect in the real world with QR codes
                                </p>
                            </div>
                            <div className="flex flex-col items-center justify-center shadow-md p-4">
                                <a
                                    href="link"
                                    className="bg-[#E8AE0A] text-white w-fit rounded-full p-2"
                                >
                                    <BiSpreadsheet />
                                </a>
                                <p className="font-normal text-[12px] text-center">
                                    show case your link with link in bio page
                                </p>
                            </div>
                        </div>

                        {/*  Link icon end=================================================================================>>> */}
                        <div className="text-[14px] font-bold text-center py-4">
                            Get more powerfull link when you upgrade
                        </div>

                        {/* card ui=================================================================================>>> */}
                        <div className="grid sm:grid-cols-2 gap-4 ">
                            <div className="shadow-lg p-2">
                                <div className="flex justify-between ">
                                    <div className="font-bold text-[12px] uppercase">
                                        Core Annual
                                    </div>
                                    <button className="flex items-center justify-center rounded text-[#0DAEB8] bg-[#EDF2FF] text-[12px] gap-1 px-2 text-[9px] ">
                                        <BiLinkAlt className="" />
                                        More Monthly Links
                                    </button>
                                </div>

                                <p className="text-[12px] text-left text-gray-600 leading-2 py-2  text-left">
                                    Upgrade to 100 short link per month and the powerfull ability
                                    to redirect your link to new destinations
                                </p>
                                <div className="text-[14px] font-bold ">
                                    $8/month{" "}
                                    <span className="text-[10px] font-normal">
                                        (one-time charge of $ 96 year)
                                    </span>
                                </div>
                                <div className="flex items-center justify-center py-2">
                                    <button className="text-[12px] text-[#2E5DD7] ">
                                        Veiw plans
                                    </button>
                                </div>
                            </div>
                            <div className="shadow-lg p-2">
                                <div className="flex justify-between">
                                    <div className="font-bold text-[12px] uppercase">
                                        Growth annual
                                    </div>
                                    <button className="flex items-center rounded justify-center text-[#0DAEB8] bg-[#EDF2FF] text-[12px] gap-1 px-2 text-[9px]">
                                        <BiLinkAlt className="" />
                                        More Monthly Links
                                    </button>
                                </div>

                                <p className="text-[12px] text-left text-gray-600 leading-2 py-2">
                                    Upgrade to 100 short link per month and the powerfull ability
                                    to redirect your link to new destinations
                                </p>
                                <div className="text-[14px] font-bold ">
                                    $8/month{" "}
                                    <span className="text-[10px] font-normal">
                                        (one-time charge of $ 96 year)
                                    </span>
                                </div>
                                <div className="flex items-center justify-center py-2">
                                    <button className="text-[12px] text-[#2E5DD7] ">
                                        Veiw plans
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* card ui and=================================================================================>>> */}
                        <div className="text-[12px] text-center pt-4">
                            Explore more option on our{" "}
                            <span className="text-[#2E5DD7]">pricing page</span>
                        </div>
                    </DialogContent>
                </div>
            </Dialog>
        </div>
    );
};
export default BitlyLinkDialog;
