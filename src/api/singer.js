import jsonp from "../common/js/jsonp";
import { commonParams, options } from "./config";

export function getSingerList() {
  const url = "https://u.y.qq.com/cgi-bin/musicu.fcg";
  const data = Object.assign({}, commonParams, {
    callback: "getUCGI5891784380147806",
    g_tk: "5381",
    jsonpCallback: "getUCGI5891784380147806",
    loginUin: 0,
    hostUin: 0,
    platform: "yqq",
    needNewCode: 0,
    data: `{"comm":{"ct":24,"cv":10000},"singerList":{"module":"Music.SingerListServer","method":"get_singer_list","param":{"area":-100,"sex":-100,"genre":-100,"index":-100,"sin":0,"cur_page":1}}}`,
    format: "jsonp"
  });
  return jsonp(url, data);
}

export function getSingerDetail(singerId) {
  const url = "https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg";

  const data = Object.assign({}, commonParams, {
    g_tk: 5381,
    hostUin: 0,
    needNewCode: 0,
    platform: "yqq",
    order: "listen",
    begin: 0,
    num: 30,
    songstatus: 1,
    singermid: singerId
  });

  return jsonp(url, data, options);
}
