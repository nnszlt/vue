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
  },
  regular(val, type) {
    //正则验证
    var rule = {
      qq: /^1[3|5|8][0-9]\d{4,8}$/, //是否为 QQ
      email: /^([a-z0-9]+[_\-\.]?)*[a-z0-9]+@([a-z0-9]+[_\-\.]?)*[a-z0-9]+\.[a-z]{2,5}$/, //是否邮箱
      parseInt: /^[1-9]\d*$/, //是否正整数
      chinese: /^([\u4E00-\u9FA5]|[\uFE30-\uFFA0])+$/gi, //是否中文

    }
    if (rule[type].test(val)) {
      return true;
    } else {
      return false;
    }

  },
  trimAll(str) {
    //去除所有空格
    return str.replace(/\s+/g, "");
  },
  lTrim(str) {
    //去除左边空格
    return str.replace(/(^\s*)/g, "");
  },
  rTrim(str) {
    //去除右边空格
    return str.replace(/(\s*$)/g, "")
  },
  getUnique(someArray) {
    //删除数组中存在重复的元素
    var tempArray = someArray.slice(0);
    for (var i = 0; i < tempArray.length; i++) {
      for (var j = i + 1; j < tempArray.length;) {
        if (tempArray[j] == tempArray[i]) {
          tempArray.splice(j, 1);
        } else {
          j++;
        }
      }
    }
    return tempArray;
  },
  confirmRepeat(someArray) {
    //判断数组中是否存在重复的元素
    var tempArray = someArray.slice(0);
    for (var i = 0; i < tempArray.length; i++) {
      for (var j = i + 1; j < tempArray.length;) {
        if (tempArray[j] == tempArray[i]) {
          return true;
        } else {
          j++;
        }
      }
    }
    return false;
  },

  isMobileUserAgent() {
    //判断是否移动设备访问
    return (/iphone|ipod|android.*mobile|windows.*phone|blackberry.*mobile/i.test(window.navigator.userAgent.toLowerCase()));
  },
  uniqueId() {
    //随机时间戳
    var a = Math.random,
      b = parseInt;
    return Number(new Date()).toString() + b(10 * a()) + b(10 * a()) + b(10 * a());
  },

  number_format(number, decimals, dec_point, thousands_sep) {
    /* 格式化数字
     * 参数说明：
     * number：要格式化的数字
     * decimals：保留几位小数
     * dec_point：小数点符号
     * thousands_sep：千分位符号
     * */
    number = (number + '').replace(/[^0-9+-Ee.]/g, '');
    var n = !isFinite(+number) ? 0 : +number,
      prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
      sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
      dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
      s = '',
      toFixedFix = function (n, prec) {
        var k = Math.pow(10, prec);
        return '' + Math.ceil(n * k) / k;
      };
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    var re = /(-?\d+)(\d{3})/;
    while (re.test(s[0])) {
      s[0] = s[0].replace(re, "$1" + sep + "$2");
    }
    if ((s[1] || '').length < prec) {
      s[1] = s[1] || '';
      s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
  }

}
export default aboutUrl;
