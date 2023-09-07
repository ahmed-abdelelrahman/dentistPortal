"use client";

import * as React from "react";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import Collapse from "@mui/material/Collapse";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

// icons

import {
  AiOutlineHome,
  AiFillCaretDown,
  AiOutlineUserAdd,
  AiOutlineUser,
  AiOutlineUnorderedList,
  AiOutlineFileDone,
  AiOutlineMobile,
  AiOutlineMessage,
  AiOutlineRight,
  AiOutlineLeft,
} from "react-icons/ai";
import { BiBed, BiSolidShare } from "react-icons/bi";
import {
  BsHospital,
  BsPrescription2,
  BsDatabase,
  BsUpload,
  BsClock,
  BsKey,
  BsShare,
  BsPencil,
} from "react-icons/bs";
import { CiMoneyBill } from "react-icons/ci";
import {
  PiCaretDownBold,
  PiCaretUpBold,
  PiUsersFourDuotone,
  PiGearSixBold,
} from "react-icons/pi";
import { FaRegAddressCard } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
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

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

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

export default function Sidebar({ children }) {
  const segment = useSelectedLayoutSegment();

  const menuItems = [
    {
      name: "dashboard",
      href: "/",
      icon: <AiOutlineHome />,
      current: !segment ? true : false,
    },
    {
      name: "MyClinic",
      href: "/",
      options: [
        {
          name: "Profile",
          href: "/profile/drug-generic",
          icon: <AiOutlineUser />,
          current: `/${segment}` === "/profile" ? true : false,
        },
        {
          name: "Drug Lists",
          href: "/settings/drug-generic",
          icon: <BsPrescription2 />,
          current: `/${segment}` === "/settings/drug-generic" ? true : false,
        },
        {
          name: "Procdures",
          href: "/procdures",
          icon: <AiOutlineUnorderedList />,
          current: `/${segment}` === "/procdures" ? true : false,
        },
        {
          name: "Insurance",
          href: "/insurance",
          icon: <AiOutlineFileDone />,
          current: `/${segment}` === "/insurance" ? true : false,
        },
        {
          name: "Payment Method",
          href: "/payment-method",
          icon: <CiMoneyBill />,
          current: `/${segment}` === "/payment-method" ? true : false,
        },
        {
          name: "Patient Source",
          href: "/settings/hows",
          icon: <PiUsersFourDuotone />,
          current: `/${segment}` === "/settings/hows" ? true : false,
        },
      ],
      icon: <BsHospital />,
      current: !segment ? true : false,
    },
    {
      name: "My Appointments",
      href: "/appointment",
      icon: <FaRegAddressCard />,
      current: `/${segment}` === "/appointment" ? true : false,
    },
    {
      name: "My Patients",
      href: "/patient",
      icon: <BiBed />,
      current: `/${segment}` === "/patient" ? true : false,
    },
    {
      name: "Finance",
      href: "/finance",
      icon: <GiReceiveMoney />,
      current: `/${segment}` === "/finance" ? true : false,
    },
    {
      name: "ManageUsers",
      href: "/build",
      options: [
        {
          name: "User's List",
          href: "/user",
          icon: <PiUsersFourDuotone />,
          current: `/${segment}` === "/user" ? true : false,
        },
        {
          name: "Role Manager",
          href: "/role",
          icon: <AiOutlineUserAdd />,
          current: `/${segment}` === "/role" ? true : false,
        },
      ],
      icon: <PiUsersFourDuotone />,
      current:
        `/${segment}` === "/user"
          ? true
          : false || `/${segment}` === "/role"
          ? true
          : false,
    },
    {
      name: "Download Data",
      href: "/backup",
      icon: <BsDatabase />,
      current: `/${segment}` === "/backup" ? true : false,
    },
    {
      name: "Settings",
      href: "/build",
      options: [
        {
          name: "Import patient",
          href: "/settings/import-patient",
          icon: <BsUpload />,
          current: `/${segment}` === "/settings/import-patient" ? true : false,
        },
        {
          name: "Change Password",
          href: "/settings/change-password",
          icon: <BsKey />,
          current: `/${segment}` === "/settings/change-password" ? true : false,
        },
        {
          name: "Account Subscription",
          href: "/settings/account-subscription",
          icon: <BsClock />,
          current:
            `/${segment}` === "/settings/account-subscription" ? true : false,
        },
        {
          name: "Application Settings",
          href: "/settings/app-settings",
          icon: <PiGearSixBold />,
          current: `/${segment}` === "/settings/app-settings" ? true : false,
        },
      ],
      icon: <AiOutlineUser />,
      current:
        `/${segment}` === "/settings/import-patient"
          ? true
          : false || `/${segment}` === "/settings/change-password"
          ? true
          : false || `/${segment}` === "/settings/account-subscription"
          ? true
          : false || `/${segment}` === "/settings/app-settings"
          ? true
          : false,
    },
    {
      name: "Send Feedback",
      href: "/feedback",
      icon: <AiOutlineMessage />,
      current: `/${segment}` === "/feedback" ? true : false,
    },

    {
      name: "Share to Friends",
      href: "/share",
      icon: <BsShare />,
      current: `/${segment}` === "/share" ? true : false,
    },
  ];
  const initialSubmenuStates = menuItems.map(() => false);
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [submenuStates, setSubmenuStates] =
    React.useState(initialSubmenuStates);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick = (index) => {
    // Create a copy of the submenuStates array to modify it
    const newSubmenuStates = [...submenuStates];
    newSubmenuStates[index] = !newSubmenuStates[index]; // Toggle the state
    setSubmenuStates(newSubmenuStates);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar className='' position='fixed' open={open}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer variant='permanent' open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? <AiOutlineRight /> : <AiOutlineLeft />}
          </IconButton>
        </DrawerHeader>
        <Divider />

        <List>
          {menuItems.map((item, index) =>
            item.options ? (
              <List
                key={`submenu-${index}`}
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
                component='nav'
                aria-labelledby='nested-list-subheader'
              >
                <ListItemButton onClick={() => handleClick(index)}>
                  <ListItemIcon>
                    <ListItemIcon>{item.options[0].icon}</ListItemIcon>
                  </ListItemIcon>
                  <ListItemText primary={item.options[0].name} />
                  {submenuStates[index] ? (
                    <PiCaretDownBold />
                  ) : (
                    <PiCaretUpBold />
                  )}
                </ListItemButton>
                <Collapse
                  in={submenuStates[index]}
                  timeout='auto'
                  unmountOnExit
                >
                  {item.options.map((option, optionIndex) => (
                    <Link key={option.name} href={option.href}>
                      <ListItemButton
                        className={`pl-7 ${open ? "" : "hidden"} `}
                        key={`subitem-${optionIndex}`}
                      >
                        <ListItemIcon>{option.icon}</ListItemIcon>
                        <ListItemText primary={option.name} />
                      </ListItemButton>
                    </Link>
                  ))}
                </Collapse>
              </List>
            ) : (
              <ListItem
                key={item.name}
                disablePadding
                sx={{ display: "block" }}
              >
                <Link key={item.name} href={item.href}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.name}
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </Link>
              </ListItem>
            )
          )}
        </List>
      </Drawer>

      <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}
