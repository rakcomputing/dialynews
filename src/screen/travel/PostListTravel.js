import React, { useState, useEffect } from "react";

import { useOutletContext } from "react-router-dom";
import "./PostListTravel.css";
import { request } from "../share/request";
import { Circles } from "react-loader-spinner";
import { Button, Divider, Input, Pagination } from "antd";
import { useTranslation } from "react-i18next";
import PostCardTravel from "./PostCardTravel";
import CardTraUI from "./CardTraUI";

const PostListTravel = () => {
  const { t } = useTranslation();
  const { searchTerm } = useOutletContext();
  const [posts, setPosts] = useState([]);

  const [filteredNews, setFilteredNews] = useState([]);

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
    const res = await request("poststravel?" + params.toString(), "get", {});
    await new Promise((resolve) => setTimeout(resolve, 500));
    if (res) {
      console.log("response", res.posts_API);

      setFilteredNews(res.posts_API || []);

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

  const onChangePageNumber = (page) => {
    var objTmp = {
      ...objFilter,
      page: page,
    };
    setObjFilter(objTmp);
    getListNews(objTmp);
  };

  return (
    <div>
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
            backgroundColor: "#27AE60",
            borderRadius: "30px",
            paddingTop: "1px",
            paddingBottom: "1px",
            paddingLeft: "20px",
            paddingRight: "20px",
          }}
        >
          <p style={{ color: "white", fontSize: "16px", fontWeight: "bold" }}>
            {t("travel")}
          </p>
        </div>
      </Divider>
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Pagination
          onChange={onChangePageNumber}
          className="custom-pagination"
          size="large"
          defaultCurrent={1}
          pageSize={20}
          total={totalPage}
        />
      </div>
      <div className="post-list">
        {filteredNews && filteredNews.length > 0 ? (
          filteredNews.map((post, index) => (
            <div key={index}>
              {/* <PostCardTravel key={index} post={post} /> */}
              <CardTraUI key={index} post={post} />
            </div>
          ))
        ) : (
          <div style={{ textAlign: "center", padding: "20px" }}>
            <p>{t("no_travel_posts_found") || "No travel posts found"}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostListTravel;
