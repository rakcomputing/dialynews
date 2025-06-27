import axios from "axios";
import { message } from "antd";

export const request = (url = "", method = "get", data = {}) => {
  // create function success

  //   បើសិន គេ បោះជា from data រឺ ជា Jons
  // const base_url = "http://localhost:8084/api/";
  const base_url = "https://inews.votmean.app/api/";
  const headers =
    data instanceof FormData
      ? { "Content-Type": "multipart/form-data" }
      : { "Content-Type": "application/json" };
  // alert(localStorage.getItem("token"));
  const access_token = localStorage.getItem("token");

  return axios({
    url: base_url + url,
    method: method,
    data: data,
    headers: {
      ...headers,
      Authorization: `Bearer ${access_token}`,
    },
  })
    .then((res) => {
      console.log("Response:", res.data); // Log response data for debugging
      return res.data;
    })
    .catch((error) => {
      var status = error.response?.status;
      if (status == 401) {
        message.error(
          "Your session has been expired, please login again",
          () => {}
        );
      } else if (status == 403) {
        message.error("You don't have permission to access this page");
      } else if (status == 404) {
        message.error("Page not found");
      } else if (status == 500) {
        message.error("Server error");
      } else {
        message.error("Error");
      }
    })
    .finally(() => {});
};
