import React, { useState, useEffect } from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons/lib/icons";
import icon from "../images/btc7.png";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);

  const minimizedMenu = () => {
    if (screenSize <= 800) {
      setActiveMenu(!activeMenu);
    }
  };

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/" className="logo-text">
            Cryptoformer
          </Link>
        </Typography.Title>
      </div>
      <Button className="menu-control-container" onClick={minimizedMenu}>
        <MenuOutlined style={{ color: "#ffb319" }}></MenuOutlined>
      </Button>
      {activeMenu && (
        <Menu className="menu">
          <Menu.Item
            icon={<HomeOutlined style={{ color: "#fff" }} />}
            onClick={minimizedMenu}
          >
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item
            icon={<FundOutlined style={{ color: "#fff" }} />}
            onClick={minimizedMenu}
          >
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
          </Menu.Item>

          <Menu.Item
            icon={<BulbOutlined style={{ color: "#fff" }} />}
            onClick={minimizedMenu}
          >
            <Link to="/news">News</Link>
          </Menu.Item>
        </Menu>
      )}
    </div>
  );
};

export default Navbar;
