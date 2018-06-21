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
    url: `http://dl.stream.qqmusic.qq.com/C400${musicData.strMediaMid}.m4a?vkey=26BE668E8A2821058E771C42D01FC34013EC9A45565893F81F5C8F4F9DD5A427C5A9C436B4AE353A13E90B078FC7102C7A1C9091443EB8B9&guid=2968077744&uin=70345389&fromtag=66`
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
