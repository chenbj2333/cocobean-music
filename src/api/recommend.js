import jsonp from "../common/js/jsonp";
import { commonParams, options } from "./config";

export function getRecommend() {
  const url = `https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg`;
  const data = {
    uin: 0,
    platform: "h5",
    needNewCode: 1,
    _: 1528167175247
  };
  const params = Object.assign(data, commonParams);

  return jsonp(url, params, options);
}
