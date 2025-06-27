import React from "react";
import "./PostCardTravel.css";

import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
const PostCardTravel = ({ post }) => {
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();
  console.log("this is post property: ", post);
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };
  const onClickDetail = () => {
    navigate(`/post/${post.id}`);
    if (window.innerWidth < 800) {
      window.scrollTo(600, 1200);
    } else {
      window.scrollTo(600, 600);
    } // Scroll to top of the page
  };

  return (
    <div>
      <div className="post-card" onClick={onClickDetail}>
        <p>{truncate(post.post_title, 100) || "No content available"}</p>
        {/* <p>{post.post_title || "No content available"}</p> */}
        <div style={{ paddingBottom: 2 }}>
          <a style={{ fontSize: 16, fontWeight: "bold" }}>{t("detail")} </a>
        </div>
        {post.post_cover ? (
          <img src={post.post_cover} alt="Post" className="post-image" />
        ) : (
          <img
            src="https://static.vecteezy.com/system/resources/previews/010/869/739/non_2x/file-management-concept-illustration-modern-concept-of-file-management-system-online-document-storage-service-free-png.png"
            alt="Default"
            className="post-image"
          />
        )}
        <div className="post-header">
          <div className="post-avatar">
            <img
              //src="https://avatars.design/wp-content/uploads/2022/09/3business-team-employee-personal-avatar.png"
              src={post.post_cover}
              alt="User Avatar"
              style={{ height: "30px", width: "30px", borderRadius: "50%" }}
            />
          </div>
          <div>
            <div className="post-user">
              <p>{post.post_by || "Unknown User"}</p>
            </div>
            <p style={{ fontSize: 10 }}>
              {new Date(post.post_date).toLocaleString() || "Just Now"}
            </p>
          </div>
        </div>
        {/* <div
        style={{
          paddingTop: "10px",
          display: "flex",
          alignItems: "center", // Center items vertically
          justifyContent: "center", // Center items horizontally
        }}
      >
        <div className="card-likecommat">
          <a style={{ color: "gray", fontSize: "14px" }}>
            <SlLike /> Like
          </a>
        </div>
        <div className="card-likecommat">
          <a style={{ color: "gray", fontSize: "14px" }}>
            <FaRegCommentDots /> Comment
          </a>
        </div>
        <div className="card-likecommat">
          <a style={{ color: "gray", fontSize: "14px" }}>
            <CiShare2 /> Share
          </a>
        </div>
      </div> */}
      </div>
    </div>
  );
};

export default PostCardTravel;
