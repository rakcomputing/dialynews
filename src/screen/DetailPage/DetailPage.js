import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { request } from "../share/request"; // Ensure this import path is correct
import "./PageDetail.css"; // Assuming you have some styles for this component
import { useTranslation } from "react-i18next";
import AdPopup from "../components/ads/AdPopup";
const PageDetail = () => {
  const { t } = useTranslation();
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigator = useNavigate();
  useEffect(() => {
    const fetchPost = async () => {
      console.log("post id : ", postId);
      setLoading(true);
      const res = await request(`posts/${postId}`, "get", {});

      if (res) {
        setPost(res.data_api[0]);
      }
      setLoading(false);
    };

    fetchPost();
  }, [postId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>Post not found.</div>;
  }
  const onClickBackHome = () => {
    navigator("/share");
  };
  return (
    <div className="page-detail">
      <AdPopup />
      <div>
        <button className="page-detaitl-back" onClick={onClickBackHome}>
          {t("back")}
        </button>
      </div>
      <div className="post-header">
        <div className="post-meta">
          <p>Post By: {post.post_by || "Unknown Author"}</p>
          <p>Date:{new Date(post.post_date).toLocaleString()}</p>
        </div>
      </div>
      <div>
        <h1 style={{ lineHeight: 1.2 }}>{post.post_title}</h1>
      </div>
      <div className="post-cover">
        <img
          src={post.post_cover || "https://via.placeholder.com/800x400"}
          alt="Post Cover"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className="post-content">
        <div dangerouslySetInnerHTML={{ __html: post.post_content }}></div>
      </div>
    </div>
  );
};

export default PageDetail;
