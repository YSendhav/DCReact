import React, { useState } from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
// import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MuiDrawer from "@mui/material/Drawer";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Checkbox } from "@mui/material";
import { PiFolderStarFill, PiLinkSimpleBold } from "react-icons/pi";
import { BiLeftArrowCircle, BiSolidLock } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { HiClipboardDocumentList, HiMiniQrCode } from "react-icons/hi2";
import Switch from "@mui/material/Switch";
import { FiSettings } from "react-icons/fi";
import { TbArrowsUpDown } from "react-icons/tb";
import { GoDotFill } from "react-icons/go";
import { SiAudiomack } from "react-icons/si";
import { MdDateRange, MdModeEdit } from "react-icons/md";
import { MdContentCopy } from "react-icons/md";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { BsArrowReturnRight, BsThreeDots } from "react-icons/bs";

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
const drawerWidth = 200;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

// interface AppBarProps extends MuiAppBarProps {
//   open?: boolean;
// }

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== "open",
// })<AppBarProps>(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(["width", "margin"], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(["width", "margin"], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));
const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const LiveSongLinks
 = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const classes = customStyles();
  const [selectedValue, setSelectedValue] = useState("option1");

  const handleRadioChange = (event: any) => {
    setSelectedValue(event.target.value);
  };


  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className="h-full w-full  flex  ">
      {/* <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <AiOutlineMenu />
          </IconButton>
        </Toolbar>
      </AppBar>  */}
      <div>
        <Drawer variant="permanent" open={open} sx={{ backgroundColor: "red" }}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <BiLeftArrowCircle />
              ) : (
                <BiLeftArrowCircle />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List style={{ border: 2, borderColor: "red" }}>
            {[
              AiFillHome,
              PiLinkSimpleBold,
              HiMiniQrCode,
              HiClipboardDocumentList,
              PiFolderStarFill,
              PiLinkSimpleBold,
              FiSettings,
            ].map((IconComponent, index, text) => (
              <ListItem disablePadding sx={{ display: "block" }} key={index}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    style={{
                      color: "#5271FF",
                      fontSize: "30px",
                      paddingTop: "30px",
                      display: "block",
                      minWidth: 0,

                      flexDirection: "column",
                      gap: "20px",
                      justifyContent: "center",
                    }}
                  >
                    <IconComponent />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </div>
      <div className="w-full h-full">
        <DrawerHeader/>
        <div className="flex flex-col gap-3 border-gray-300 border p-5 w-full">
          <div className="flex sm:flex-row gap-5 flex-col flex justify-between  sm:items-center">
            <div className=" flex gap-3 items-center">
              <h1 className="text-[30px] font-bold text-black">Links</h1>
              <div>
                {" "}
                <FormControlLabel
                  control={<Switch />}
                  label="Preview New Links Page"
                />
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
          <div className="w-full sm:[250px] md:w-[300px] border-r border-divider border-gray-300 h-full flex flex-col overflow-auto">
            <div className="text-[#273144] text-[12px] p-3 border-b flex justify-end border-gray-300 w-full">
              Engagments
            </div>
         <div className="flex flex-col">
         <div className="flex gap-1 items-center border-b border-gray-300 hover:bg-white p-1 w-full ">
              <div>
                <Checkbox />
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex flex-col">
                  <span className="text-gray-400 text-[10px]">SEP 30 </span>
                  <div className="flex items-center  text-[13px] font-medium">
                    <span className="text-red-500 text-[20px] ">
                      <GoDotFill />
                    </span>{" "}
                    LIVE SONGS ANALYSIS{" "}
                  </div>
                </div>
                <div className="flex items-center justify-between text-[12px] ">
                  <div className="text-red-400">bitHariGovind</div>
                  <div className="flex items-center ">
                    0{" "}
                    <span>
                      <SiAudiomack />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-1 items-center border-b border-gray-300 hover:bg-white p-1">
              <div>
                <Checkbox />
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex flex-col">
                  <span className="text-gray-400 text-[10px]">SEP 30 </span>
                  <div className="flex items-center  text-[13px] font-medium">
                    <span className="text-red-500 text-[20px] ">
                      <GoDotFill />
                    </span>{" "}
                    LIVE SONGS ANALYSIS{" "}
                  </div>
                </div>
                <div className="flex items-center justify-between text-[12px] w-full">
                  <div className="text-red-400">bitHariGovind</div>
                  <div className="flex items-center ">
                    0{" "}
                    <span>
                      <SiAudiomack />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-1 items-center border-b border-gray-300 hover:bg-white p-1">
              <div>
                <Checkbox />
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex flex-col">
                  <span className="text-gray-400 text-[10px]">SEP 30 </span>
                  <div className="flex items-center  text-[13px] font-medium">
                    <span className="text-red-500 text-[20px] ">
                      <GoDotFill />
                    </span>{" "}
                    LIVE SONGS ANALYSIS{" "}
                  </div>
                </div>
                <div className="flex items-center justify-between text-[12px] w-full">
                  <div className="text-red-400">bitHariGovind</div>
                  <div className="flex items-center ">
                    0{" "}
                    <span>
                      <SiAudiomack />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-1 items-center border-b border-gray-300 hover:bg-white p-1">
              <div>
                <Checkbox />
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex flex-col">
                  <span className="text-gray-400 text-[10px]">SEP 30 </span>
                  <div className="flex items-center  text-[13px] font-medium">
                    <span className="text-red-500 text-[20px] ">
                      <GoDotFill />
                    </span>{" "}
                    LIVE SONGS ANALYSIS{" "}
                  </div>
                </div>
                <div className="flex items-center justify-between text-[12px] w-full">
                  <div className="text-red-400">bitHariGovind</div>
                  <div className="flex items-center ">
                    0{" "}
                    <span>
                      <SiAudiomack />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-1 items-center border-b border-gray-300 hover:bg-white p-1">
              <div>
                <Checkbox />
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex flex-col">
                  <span className="text-gray-400 text-[10px]">SEP 30 </span>
                  <div className="flex items-center  text-[13px] font-medium">
                    <span className="text-red-500 text-[20px] ">
                      <GoDotFill />
                    </span>{" "}
                    LIVE SONGS ANALYSIS{" "}
                  </div>
                </div>
                <div className="flex items-center justify-between text-[12px] w-full">
                  <div className="text-red-400">bitHariGovind</div>
                  <div className="flex items-center ">
                    0{" "}
                    <span>
                      <SiAudiomack />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-1 items-center border-b border-gray-300 hover:bg-white p-1">
              <div>
                <Checkbox />
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex flex-col">
                  <span className="text-gray-400 text-[10px]">SEP 30 </span>
                  <div className="flex items-center  text-[13px] font-medium">
                    <span className="text-red-500 text-[20px] ">
                      <GoDotFill />
                    </span>{" "}
                    LIVE SONGS ANALYSIS{" "}
                  </div>
                </div>
                <div className="flex items-center justify-between text-[12px] w-full">
                  <div className="text-red-400">bitHariGovind</div>
                  <div className="flex items-center ">
                    0{" "}
                    <span>
                      <SiAudiomack />
                    </span>
                  </div>
                </div>
              </div>
            </div>
         </div>
          
          </div>
          <div className="flex-1  p-8">
            <div className="flex flex-col gap-8">
              <div className="bg-white p-5">
                <div className="flex flex-col gap-3 rounded-md">
                  <div className="flex justify-between ">
                    <div className="flex items-center  text-[13px] font-medium">
                      <span className="text-red-500 text-[20px] sm:[23px] md:[27px]">
                        <GoDotFill />
                      </span>{" "}
                      LIVE SONGS ANALYSIS{" "}
                    </div>
                    <div className="flex gap-2">
                      <button className="flex text-[12px] gap-1 font-medium bg-[#EDF2FF] border items-center p-2 pb-1 rounded-md">
                        <MdModeEdit className="" />
                        <span>Edit</span>
                      </button>
                      <button className="p-2 border rounded-md">
                        <BsThreeDots />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-[12px]">
                    <span className="text-black text-[14px]">
                      <MdDateRange />{" "}
                    </span>
                    September 30 2023 8:01 Am GMT+5:30 by Murgadoss S.P.{" "}
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-[12px]">
                    <span className="text-black text-[14px]">
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
                      className="font-bold text-[#2E5DD7] text-[14px] "
                    >
                      bit.ly/HariGovinda
                    </a>
                    <div className="flex gap-2">
                      <button className="flex text-[12px] gap-1 font-medium bg-[#EDF2FF] border items-center p-2 pb-1 rounded-md">
                        <MdContentCopy className="" />
                        <span>Copy</span>
                      </button>
                      <button className="p-2 border rounded-md">
                        <BsThreeDots />
                      </button>
                    </div>
                  </div>
                  <div className="text-[12px] text-gray-600">0 clicks</div>
                  <div className="flex text-[12px] text-gray-700 items-center gap-2 font-medium p">
                    <BsArrowReturnRight />
                    <a href="https://www.youTube.coms py-2">
                      https://www.youTube.com/watch?v=tZ-EHDhzgL8
                    </a>
                    <BiSolidLock />
                    <span className="text-gray-300">Redirect</span>
                  </div>
                  <div className="text-[14px] font-bold flex justify-between py-2">
                    <div>QR Code</div>
                    <div>Link-in-bio</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveSongLinks
;