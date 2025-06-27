import React from "react";
import "./Card.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { FaHandPointRight } from "react-icons/fa6";
const CardUI = ({ post }) => {
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };
  const onClickDetail = () => {
    navigate(`/post/${post.id}`);
    if (window.innerWidth < 600) {
      window.scrollTo(600, 1200);
    } else {
      window.scrollTo(600, 1000);
    } // Scroll to top of the page
  };

  return (
    <div className="" onClick={onClickDetail}>
      <div className="card-header">
        <img src={post.post_cover} alt="SAP Logo" className="sap-logo" />
        <div className="mentor-info">
          <h5>{post.post_category || "Unknown User"}</h5>
        </div>
      </div>
      <div className="card-body">
        <p className="  text-blue-400">
          <FaHandPointRight /> {truncate(post.post_title, 80)}
        </p>
      </div>
      <div className="card-footer">
        <span className="date">
          {" "}
          {new Date(post.post_date).toLocaleString() || "Just Now"}
        </span>
        <span className="comments text-blue-500"> {t("detail")}</span>
      </div>
    </div>
  );
};

export default CardUI;
