import axios from "axios";
import { commonParams } from "./config";

export function getSongList(disstid) {
  const url = "/api/getSongList";
  const data = Object.assign({}, commonParams, {
    disstid,
    type: 1,
    json: 1,
    utf8: 1,
    onlysong: 0,
    g_tk: 735539475,
    jsonpCallback: "playlistinfoCallback",
    loginUin: 70345389,
    hostUin: 0,
    inCharset: "utf8",
    outCharset: "utf-8",
    notice: 0,
    platform: "yqq",
    needNewCode: 0,
    format: "jsonp"
  });
  return axios
    .get(url, {
      params: data
    })
    .then(res => {
      return Promise.resolve(res.data);
    });
}
