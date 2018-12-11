// import Vue from 'vue'

let aboutUrl = {
  // 非空校验
  isNull(value) {
    if ("" != value && 'null' != value && null != value && typeof (value) != "undefined") {
      return false;
    } else {
      return true;
    }

  },
  GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
  },
  Browser() {
      //判断浏览器类型
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isOpera = userAgent.indexOf("Opera") > -1;
    if (isOpera) {
      return "Opera"
    }; //判断是否Opera浏览器
    if (userAgent.indexOf("Firefox") > -1) {
      return "FF";
    } //判断是否Firefox浏览器
    if (userAgent.indexOf("Chrome") > -1) {
      return "Chrome";
    }
    if (userAgent.indexOf("Safari") > -1) {
      return "Safari";
    } //判断是否Safari浏览器
    if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
      return "IE";
    }; //判断是否IE浏览器
  },
  isWechat() {
      //判断是不是微信浏览器
    var ua = navigator.userAgent.toLowerCase(),
      flag = false;
    if (ua.indexOf("micromessenger") > -1) {
      flag = true;
    } else {
      flag = false;
    }
    return flag;
  }
}
export default aboutUrl;
