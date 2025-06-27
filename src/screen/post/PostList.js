import React, { useState, useEffect } from "react";
import PostCard from "./PostCard";
import { useOutletContext, useNavigate } from "react-router-dom";
import "./PostList.css";
import { request } from "../share/request";
import { Circles } from "react-loader-spinner";
import { Button, Divider, Input, Pagination } from "antd";
import { useTranslation } from "react-i18next";
import { SiReadme } from "react-icons/si";
import CardUI from "./CardUI";
const PostList = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { searchTerm } = useOutletContext();
  const [posts, setPosts] = useState([]);

  const [filteredNews, setFilteredNews] = useState([]);
  const [list_health, setList_health] = useState([]);
  const [list_travel, setList_travel] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPage, setTotalPage] = useState(0);
  const [txtSearchTerm, setSearchTerm] = useState("");
  const [objFilter, setObjFilter] = useState({
    page: 1,
    txtsearch: " ",
  });
  useEffect(() => {
    getListNews(objFilter);
  }, []);

  const getListNews = async (objFilter) => {
    const params = new URLSearchParams({
      page: objFilter.page,
      txtsearch: objFilter.txtsearch,
    });

    console.log("params", params);
    setLoading(true); // Set loading state before the request
    const res = await request("posts?" + params.toString(), "get", {});
    await new Promise((resolve) => setTimeout(resolve, 500));
    if (res) {
      console.log("response", res.posts_API);

      setFilteredNews(res.posts_API || []);
      setList_health(res.posts_API_health || []);
      setList_travel(res.posts_API_travel || []);

      // Fix the totalPage logic
      if (
        res.pagecount &&
        Array.isArray(res.pagecount) &&
        res.pagecount.length > 0
      ) {
        setTotalPage(res.pagecount[0].total || 0);
      } else if (res.pagecount && typeof res.pagecount === "number") {
        setTotalPage(res.pagecount);
      } else {
        setTotalPage(0);
      }

      setLoading(false); // Set loading state after the request
    } else {
      setLoading(false); // Handle the case when response is null
      // Set default values when response is null
      setFilteredNews([]);
      setList_health([]);
      setList_travel([]);
      setTotalPage(0);
    }
  };
  useEffect(() => {
    if (searchTerm.length > 0) {
      var objTmp = {
        ...objFilter,
        txtsearch: searchTerm,
        page: searchTerm === "" ? 1 : objFilter.page,
      };
      setObjFilter(objTmp);
      getListNews(objTmp);
    } else {
      var objTmp = {
        ...objFilter,
        txtsearch: " ",
        page: 1,
      };

      setObjFilter(objTmp);
      getListNews(objTmp);
    }
  }, [searchTerm]);

  // const totalRecords = totalPage;
  // const pageSize = 10;
  // const pageCount = Math.ceil(totalRecords / pageSize);
  const onChangePageNumber = (page) => {
    var objTmp = {
      ...objFilter,
      page: page,
    };
    setObjFilter(objTmp);
    getListNews(objTmp);
  };
  const onMoreTech = () => {
    navigate("/technology");
  };
  const onMoreHealth = () => {
    navigate("/health");
  };
  const onMoreTravel = () => {
    navigate("/travel");
  };
  return (
    <div>
      <section className="bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white py-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          {/* Left: Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Stay Informed <br />
              <span className="text-amber-500">With The Latest News</span>
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              Get real-time breaking headlines, politics, tech, and local
              stories from trusted sources — all in one place.
            </p>
            <button className="mt-8 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-black font-bold rounded-full transition">
              Explore Top Stories
            </button>
          </div>

          {/* Right: Hero Image */}
          <div className="flex-1">
            <img
              src="https://newshour-classroom-tc.digi-producers.pbs.org/static/images/pbs-classroom-illustration.763593a27604.png"
              alt="News illustration"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <div className="sprinSave-container">
        {loading && (
          <div className="sprinSave">
            <Circles
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="circles-loading"
              visible={true}
            />
          </div>
        )}
      </div>
      {/* <Input type="text" onChange={(e) => onSearch(e.target.value)} /> */}
      <Divider orientation="left" plain>
        <div
          style={{
            borderRadius: "30px",
            paddingTop: "1px",
            paddingBottom: "1px",
            paddingLeft: "20px",
            paddingRight: "20px",
          }}
        >
          <p style={{ fontSize: "16px", fontWeight: "bold" }}>{t("events")}</p>
        </div>
      </Divider>
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      ></div>
      <div className="post-list">
        {filteredNews && filteredNews.length > 0 ? (
          filteredNews.map((post, index) => (
            <div key={index}>
              {/* <PostCard key={index} post={post} /> */}
              <CardUI key={index} post={post} />
            </div>
          ))
        ) : (
          <div style={{ textAlign: "center", padding: "20px" }}>
            <p>{t("no_posts_found") || "No posts found"}</p>
          </div>
        )}
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        <div style={{ width: "70%" }}>
          <p> {""}</p>
        </div>
        <div
          onClick={onMoreTech}
          style={{
            alignItems: "center",
            paddingLeft: "10px",
            paddingRight: "10px",
            fontWeight: "bold",
            borderRadius: 50,

            display: "flex",
            justifyContent: "center",

            marginRight: 20,
            cursor: "pointer",
          }}
        >
          <SiReadme style={{ width: 25, height: 25 }} />{" "}
          <p style={{ paddingLeft: 10 }}> {t("readmore")}</p>
        </div>
      </div>

      <Divider orientation="left" plain>
        <div
          style={{
            borderRadius: "30px",
            paddingTop: "1px",
            paddingBottom: "1px",
            paddingLeft: "20px",
            paddingRight: "20px",
          }}
        >
          <p style={{ fontSize: "16px", fontWeight: "bold" }}>{t("health")}</p>
        </div>
      </Divider>
      <div className="post-list">
        {list_health && list_health.length > 0 ? (
          list_health.map((post, index) => (
            <div key={index}>
              {/* <PostCard key={index} post={post} /> */}
              <CardUI key={index} post={post} />
            </div>
          ))
        ) : (
          <div style={{ textAlign: "center", padding: "20px" }}>
            <p>{t("no_health_posts_found") || "No health posts found"}</p>
          </div>
        )}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        <div style={{ width: "70%" }}>
          <p> {""}</p>
        </div>
        <div
          onClick={onMoreHealth}
          style={{
            alignItems: "center",
            paddingLeft: "10px",
            paddingRight: "10px",
            fontWeight: "bold",
            borderRadius: 50,

            display: "flex",
            justifyContent: "center",

            marginRight: 20,
            cursor: "pointer",
          }}
        >
          <SiReadme style={{ width: 25, height: 25 }} />{" "}
          <p style={{ paddingLeft: 10 }}> {t("readmore")}</p>
        </div>
      </div>

      <Divider orientation="left" plain>
        <div
          style={{
            borderRadius: "30px",
            paddingTop: "1px",
            paddingBottom: "1px",
            paddingLeft: "20px",
            paddingRight: "20px",
          }}
        >
          <p style={{ fontSize: "16px", fontWeight: "bold" }}>{t("travel")}</p>
        </div>
      </Divider>
      <div className="post-list">
        {list_travel && list_travel.length > 0 ? (
          list_travel.map((post, index) => (
            <div key={index}>
              {/* <PostCard key={index} post={post} /> */}
              <CardUI key={index} post={post} />
            </div>
          ))
        ) : (
          <div style={{ textAlign: "center", padding: "20px" }}>
            <p>{t("no_travel_posts_found") || "No travel posts found"}</p>
          </div>
        )}
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        <div style={{ width: "70%" }}>
          <p> {""}</p>
        </div>
        <div
          onClick={onMoreTravel}
          style={{
            alignItems: "center",
            paddingLeft: "10px",
            paddingRight: "10px",
            fontWeight: "bold",
            borderRadius: 50,

            display: "flex",
            justifyContent: "center",

            marginRight: 20,
            cursor: "pointer",
          }}
        >
          <SiReadme style={{ width: 25, height: 25 }} />{" "}
          <p style={{ paddingLeft: 10 }}> {t("readmore")}</p>
        </div>
      </div>
      <Pagination
        onChange={onChangePageNumber}
        className="custom-pagination"
        size="large"
        defaultCurrent={1}
        pageSize={5}
        total={totalPage}
      />
    </div>
  );
};

export default PostList;
