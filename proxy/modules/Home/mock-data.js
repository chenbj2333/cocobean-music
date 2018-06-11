// module.exports = {
//   "GET:/home/getDiscList": [
//     {
//       id: "01",
//       imgurl: "https://p.qpic.cn/music_cover/ibSiagqKjw1zfTgxY7F8CfE5uSRoSJYw7AUWjQsOAEykVNqSiarO0FstA/300?n=1",
//       name: "每日新歌：魔力红甜蜜改编新单出炉",
//       dissname: "播放量：4.6万"
//     },
//     {
//       id: "02",
//       imgurl: "https://p.qpic.cn/music_cover/1ZdGl7wveVA1a9fU8FWwvKQNUsGyJuxiaMVVfZlNousqY6ffGoTPpdg/300?n=1",
//       name: "繁花似锦|老骨头都出来活动筋骨，那你呢？",
//       dissname: "播放量：5954"
//     },
//     {
//       id: "03",
//       imgurl: "https://p.qpic.cn/music_cover/7XEVurTOuWkv53uNkwvuoiau2cerZEvvw4QAeobntmntpw0bAR3z5wA/300?n=1",
//       name: "相交辉映 | 摇滚乐队双主唱",
//       dissname: "播放量：6.3万"
//     },
//     {
//       id: "04",
//       imgurl: "https://p.qpic.cn/music_cover/PTq9Z793Ipkz20NmN0Yky3qsmQkiaF3OiaiadY0kJLjDFcYx5F7dE9bwg/300?n=1",
//       name: "雷鬼电子：星空渲染的迷幻人声",
//       dissname: "播放量：13.9万"
//     },
//     {
//       id: "05",
//       imgurl: "https://p.qpic.cn/music_cover/A68o1S3cCg2seVsQVvbZBkmTW6xrVyFufJIOzGpHvKEicIqg0XvqPNA/300?n=1",
//       name: "25位爱尔兰民谣歌手作品收录",
//       dissname: "播放量：20.2万"
//     }
//   ]
// };
var axios = require("axios");

module.exports = {
  "GET:/getDiscList": getList
};

function getList(req, res) {
  var url = "https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg";
  axios
    .get(url, {
      headers: {
        referer: "https://c.y.qq.com/",
        host: "c.y.qq.com"
      },
      params: req.query
    })
    .then(response => {
      res.json(response.data);
    })
    .catch(e => {
      console.log(e);
    });
}
