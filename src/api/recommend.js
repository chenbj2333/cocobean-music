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

export function getDiscList() {
  const url = `https://u.y.qq.com/cgi-bin/musicu.fcg`;

  const data = {
    callback: "recom5526239537270998",
    jsonpCallback: "recom5526239537270998",
    loginUin: 0,
    hostUin: 0,
    platform: "yqq",
    needNewCode: 0,
    data: `{
      comm: { ct: 24 },
      category: {
        method: "get_hot_category",
        param: { qq: "" },
        module: "music.web_category_svr"
      },
      recomPlaylist: {
        method: "get_hot_recommend",
        param: { async: 1, cmd: 2 },
        module: "playlist.HotRecommendServer"
      },
      playlist: {
        method: "get_playlist_by_category",
        param: { id: 8, curPage: 1, size: 40, order: 5, titleid: 8 },
        module: "playlist.PlayListPlazaServer"
      },
      new_song: {
        module: "QQMusic.MusichallServer",
        method: "GetNewSong",
        param: { type: 0 }
      },
      new_album: {
        module: "music.web_album_library",
        method: "get_album_by_tags",
        param: {
          area: 1,
          company: -1,
          genre: -1,
          type: -1,
          year: -1,
          sort: 2,
          get_tags: 1,
          sin: 0,
          num: 40,
          click_albumid: 0
        }
      },
      toplist: {
        module: "music.web_toplist_svr",
        method: "get_toplist_index",
        param: {}
      },
      focus: {
        module: "QQMusic.MusichallServer",
        method: "GetFocus",
        param: {}
      }
    }`
  };

  const params = Object.assign(data, commonParams);

  return jsonp(url, params, {
    param: "jsonpCallback",
    prefix: "recom5526239537270998"
  });
}
