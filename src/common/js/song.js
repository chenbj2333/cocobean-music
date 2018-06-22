import { Base64 } from "js-base64";
import { getLyric } from "../../api/singer";
import { ERR_OK } from "../../api/config.js";

export default class Song {
  constructor({ id, mid, singer, name, album, duration, image, url }) {
    this.id = id;
    this.mid = mid;
    this.singer = singer;
    this.name = name;
    this.album = album;
    this.duration = duration;
    this.image = image;
    this.url = url;
  }

  getLyric() {
    if (this.lyric) {
      return Promise.resolve(this.lyric);
    }

    return new Promise((resolve, reject) => {
      getLyric(this.mid).then(res => {
        if (res.retcode === ERR_OK) {
          this.lyric = Base64.decode(res.lyric);
          resolve(this.lyric);
        } else {
          reject("no lyric");
        }
      });
    });
  }
}

export function createSong(musicData) {
  return new Song({
    id: musicData.songid,
    mid: musicData.songmid,
    singer: filterSinger(musicData.singer),
    name: musicData.songname,
    album: musicData.albumname,
    duration: musicData.interval,
    image: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${musicData.albummid}.jpg?max_age=2592000`,
    url: `http://dl.stream.qqmusic.qq.com/C400${musicData.strMediaMid}.m4a?vkey=39F01A06A86D68E524E50B0D66711F4ABBACC6BB4B1A9FC9370F5904C59A89FB9CE29C1E65B4E8BDD0C2BE425AFB08AF33A84BC7708E5E38&guid=2968077744&uin=70345389&fromtag=66`
  });
}

function filterSinger(singer) {
  let ret = [];
  if (!singer) {
    return "";
  }
  singer.forEach(item => {
    ret.push(item.name);
  });
  return ret.join("/");
}
