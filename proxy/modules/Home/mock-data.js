var axios = require("axios");

module.exports = {
  "GET:/getDiscList": getDiscList,
  "GET:/getLyric": getLyric
};

function getDiscList(req, res) {
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

function getLyric(req, res) {
  var url = "https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg";
  axios
    .get(url, {
      headers: {
        referer: "https://c.y.qq.com/",
        host: "c.y.qq.com"
      },
      params: req.query
    })
    .then(response => {
      let ret = response.data;
      if (typeof ret === "string") {
        let reg = /^\w+\(({[^()]+})\)$/;
        let mathes = ret.match(reg);
        if (mathes) {
          ret = JSON.parse(mathes[1]);
        }
      }
      res.json(ret);
    })
    .catch(e => {
      console.log(e);
    });
}
