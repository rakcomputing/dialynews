import React, { useEffect, useState } from "react";
import { request } from "../screen/share/request";
import "./Announcements.css";
import { useNavigate } from "react-router-dom";
export default function Announcements() {
  const navigate = useNavigate();
  useEffect(() => {
    GetList();
  }, []);
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };
  const [List, setList] = useState([]);
  const GetList = async () => {
    const res = await request("postsann", "get", {});
    if (res) {
      console.log("response", res);
      setList(res.posts_API_ann);
      console.log("response", res.posts_API_ann);
    } else {
      console.log("response", res);
    }
  };
  const onCLickDetail = (value) => {
    navigate(`/post/${value}`);
    if (window.innerWidth < 800) {
      window.scrollTo(600, 1200);
    } else {
      window.scrollTo(600, 600);
    } // Scroll to top of the page
  };
  return (
    <div style={{ paddingBottom: "10px" }}>
      {List.map((item) => (
        <div className="ann-card" style={{ marginBottom: "10px" }}>
          <div style={{ borderRadius: "5px" }}>
            <img
              style={{ borderRadius: "5px" }}
              src={item.post_cover}
              alt="Post"
              className="ann-image"
            />
          </div>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => onCLickDetail(item.id)}
          >
            {" "}
            <p style={{}}>{truncate(item.post_title, 100)}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
