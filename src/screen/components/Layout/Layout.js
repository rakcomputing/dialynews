import React, { useState, useEffect, useRef } from "react";
import "./Layout.css";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import {
  Breadcrumb,
  Input,
  Layout,
  Menu,
  theme,
  Carousel,
  Dropdown,
  Divider,
  Select,
} from "antd";
import { IoHomeOutline, IoMenuOutline } from "react-icons/io5";
import { FaSquareShareNodes } from "react-icons/fa6";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import FacebookPage from "../facebook/FacebookPage";
import { useTranslation } from "react-i18next";
import PostCard from "../../post/PostCard";
import PostList from "../../post/PostList";
import Announcements from "../../../Announcements/Announcements";
import { FcPrevious } from "react-icons/fc";
import { FcNext } from "react-icons/fc";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { SiLogitechg } from "react-icons/si";
import { GiTechnoHeart } from "react-icons/gi";
import { MdOutlineModeOfTravel } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const { Header, Content, Footer } = Layout;
const { Option } = Select;

const LayoutPage = () => {
  const { i18n, t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [isMenuVisible, setIsMenuVisible] = useState(true);
  const [isIconVisable, setIsIconVisable] = useState(false);
  const sliderRef = useRef(null); // Reference to the slider
  const items = [
    {
      key: "1",
      label: t("home"),
      icon: <IoHomeOutline />,
    },
    {
      key: "2",
      label: t("share"),
      icon: <FaSquareShareNodes />,
    },
    {
      key: "3",
      label: t("technology"),
      icon: <SiLogitechg />,
    },
    {
      key: "4",
      label: t("health"),
      icon: <GiTechnoHeart />,
    },
    {
      key: "5",
      label: t("travel"),
      icon: <MdOutlineModeOfTravel />,
    },
  ];

  const onLinkPage = (route) => {
    navigate(route);
  };

  const onClickMenu = (e) => {
    if (e.key === "1") {
      onLinkPage("/home");
    } else if (e.key === "2") {
      onLinkPage("/share");
    } else if (e.key === "3") {
      onLinkPage("/technology");
    } else if (e.key === "4") {
      onLinkPage("/health");
    } else if (e.key === "5") {
      onLinkPage("/travel");
    }
  };

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleResize = () => {
    if (window.innerWidth <= 560) {
      setIsMenuVisible(false);
      setIsIconVisable(true);
    } else {
      setIsMenuVisible(true);
      setIsIconVisable(false);
    }
  };

  useEffect(() => {
    handleResize(); // Initialize the state based on the initial window size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {}, [isMenuVisible, isIconVisable]);
  const menu = (
    <Menu onClick={onClickMenu} items={items} className="custom-menu" />
  );
  const toggleMenu = () => {};
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Hide the default arrows
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const onCLickTechnology = () => {
    onLinkPage("/technology");
  };
  const onClickHome = () => {
    onLinkPage("/home");
  };
  const onClickHealth = () => {
    onLinkPage("/health");
  };
  const onCLickTravel = () => {
    onLinkPage("/travel");
  };
  const onClickAbout = () => {
    onLinkPage("/about");
  };

  return (
    <Layout style={{ backgroundColor: "#fff" }}>
      <Header className="sticky top-0 z-50 w-full px-4 py-2 flex items-center justify-between  bg-gradient-to-br from-black via-gray-900 to-gray-800 backdrop-blur-xl shadow-md text-white">
        {/* Logo & Title */}
        <div className="flex items-center gap-2">
          <img
            src="https://www.freepnglogos.com/uploads/logo-website-png/logo-website-website-icon-with-png-and-vector-format-for-unlimited-22.png"
            alt="logo"
            className="w-8 h-8"
          />
          <span className="text-amber-500 text-2xl font-extrabold">iNews</span>
        </div>

        {/* Menu */}
        {isMenuVisible && (
          <Menu
            onClick={onClickMenu}
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            items={items}
            theme="dark" // Ant Design theme makes the menu text white
            className="flex-1 justify-center font-semibold bg-transparent"
            style={{
              backgroundColor: "transparent",
              borderBottom: "none",
            }}
          />
        )}

        {/* Search */}
        <Input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="ml-4 placeholder-white text-white"
          style={{
            padding: "8px 16px",
            width: 200,
            borderRadius: 25,
            border: "1px solid #888",
            backgroundColor: "rgba(255,255,255,0.1)",
          }}
        />

        {/* Language Switch */}
        <div className="flex items-center gap-2 ml-4">
          <img
            onClick={() => changeLanguage("kh")}
            src="https://vectorflags.s3.amazonaws.com/flags/kh-circle-01.png"
            alt="kh"
            className="w-6 h-6 cursor-pointer rounded-full hover:scale-105 transition"
          />
          <img
            onClick={() => changeLanguage("en")}
            src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/800px-Flag_of_the_United_Kingdom.svg.png"
            alt="en"
            className="w-6 h-6 cursor-pointer rounded-full hover:scale-105 transition"
          />
        </div>

        {/* Mobile Menu Icon */}
        {isIconVisable && (
          <div className="ml-4 cursor-pointer text-white text-2xl">
            <Dropdown overlay={menu} trigger={["click"]}>
              <IoMenuOutline />
            </Dropdown>
          </div>
        )}
      </Header>

      <div style={{ height: "0.1vh", backgroundColor: "gray" }}></div>

      <div className="layout-center">
        <div className="layout-left">
          <Content style={{ padding: "0 20px 10px" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div
                style={{
                  height: "auto",
                  width: "100%",

                  background: colorBgContainer,
                  borderRadius: borderRadiusLG,
                }}
              >
                <Outlet context={{ searchTerm }} />
              </div>
            </div>
          </Content>
        </div>
      </div>

      <Footer className="bg-gray-100 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div
            style={{
              marginLeft: 20,
              display: "flex",
            }}
          >
            <button
              onClick={() => {
                window.open(
                  "https://web.facebook.com/profile.php?id=61556821611898"
                );
              }}
              style={{
                height: 40,
                paddingLeft: 10,
                paddingRight: 10,
                background: "#1E8449",
                border: "none",
                color: "white",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              <FaFacebookF style={{ marginRight: 5 }} />
              Facebook
            </button>
            <button
              onClick={() => {
                window.open(
                  "https://web.facebook.com/profile.php?id=61556821611898"
                );
              }}
              style={{
                paddingLeft: 10,
                paddingRight: 10,
                marginLeft: 10,
                background: "#2E4053",
                border: "none",
                color: "white",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              {" "}
              <FaInstagram style={{ marginRight: 5 }} />
              Instagram
            </button>
            <button
              onClick={() => {
                window.open("https://www.youtube.com/@raksmeyincomputing");
              }}
              style={{
                paddingLeft: 10,
                paddingRight: 10,
                marginLeft: 10,
                background: "#7B241C",
                border: "none",
                color: "white",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              {" "}
              <FaYoutube style={{ marginRight: 5 }} />
              YouTube
            </button>
          </div>
        </div>
      </Footer>
    </Layout>
  );
};

export default LayoutPage;
