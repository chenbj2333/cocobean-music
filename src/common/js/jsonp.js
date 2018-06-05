import originJSONP from "jsonp";

export default function jsonp(url, params, option) {
  url += (url.indexOf("?") < 0 ? "?" : "&") + param(params);
  return new Promise((resolve, reject) => {
    originJSONP(url, option, (err, data) => {
      if (!err) {
        resolve(data);
      } else {
        reject(err);
      }
    });
  });
}

function param(params) {
  let url = "";
  for (const k of Object.keys(params)) {
    let value = params[k] != null ? params[k] : "";
    url += `&${k}=${encodeURIComponent(value)}`;
  }
  return url ? url.substring(1) : "";
}
