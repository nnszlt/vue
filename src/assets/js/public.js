//判断为空
function isNull(val){
    if(!val){
        return true;
    }
    if(val == null || val == "" || val == "undefined" || val == "null" || val == "NULL"){
        return true;
    }
    return false;
}

// 判断当前是否存在同域Cookie
function istrsidssdssotoken(){
    var trsidssdssotoken = "ssotoken";//同域Cookie
    var sdssotoken = $.cookie(trsidssdssotoken);
    if(sdssotoken!=null){
        return true;
    }else{
        return false;
    }
}


//真实姓名验证
var name_regexp = /^(?!\s+$)[\u4E00-\u9FA0]+$|^[a-z\s·]+$/i;
function isTrueName(name){
    if($.trim(name) == ""){
        return false;
    }
    return name_regexp.test(name);
}
//邮箱验证
var email_regexp = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
function isTrueEmail(){

}
//校验手机号码
var mobile_regexp =  /^[1][3-9][0-9]{9}$/;
function isTrueMobile(phone){
    if($.trim(phone) == ""){
        return false;
    }
    return mobile_regexp.test(phone);
}
//纯数字验证
var num_regexp =/^(-?\d+)$/;
function is_int(num){
    if($.trim(num) == ""){
        return false;
    }
    return num_regexp.test(num);
}
//判断是否包含html标签
function checkHtml(htmlStr) {
    var  reg = /^\<\S*\>$/;
    return reg.test(htmlStr);
}

//身份证验证
var aCity = {
    11: "北京",
    12: "天津",
    13: "河北",
    14: "山西",
    15: "内蒙古",
    21: "辽宁",
    22: "吉林",
    23: "黑龙江",
    31: "上海",
    32: "江苏",
    33: "浙江",
    34: "安徽",
    35: "福建",
    36: "江西",
    37: "山东",
    41: "河南",
    42: "湖北",
    43: "湖南",
    44: "广东",
    45: "广西",
    46: "海南",
    50: "重庆",
    51: "四川",
    52: "贵州",
    53: "云南",
    54: "西藏",
    61: "陕西",
    62: "甘肃",
    63: "青海",
    64: "宁夏",
    65: "新疆",
    71: "台湾",
    81: "香港",
    82: "澳门",
    91: "国外"
};

/**
 * 检查身份证:15位或18位
 * @param sId
 * @returns {boolean}
 */
function checkIDcard(sId) {
    var iSum = 0;
    var info = "";
    var idCardLength = sId.length;
    if (idCardLength == 0) {
        return true;
    }

    if (!/^\d{17}(\d|x)$/i.test(sId) && !/^\d{15}$/i.test(sId)) {
        //alerterr("身份证号输入错误!");
        return false;
    }
    sId = sId.replace(/x$/i, "a");//在后面的运算中x相当于数字10,所以转换成a
    if (aCity[parseInt(sId.substr(0, 2))] == null) {
        //alerterr("身份证号输入为非法地区!");
        return false;
    }
    if (!(idCardLength == 15 || idCardLength == 18)) {
        //alerterr("身份证号输入应该为15或18位!");
        return false;
    }
    if (idCardLength == 18) {
        sBirthday = sId.substr(6, 4) + "-" + Number(sId.substr(10, 2)) + "-" + Number(sId.substr(12, 2));
        var d = new Date(sBirthday.replace(/-/g, "/"));
        if (sBirthday != (d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate())) {
            //alerterr("身份证号码与生日不对应!");
            return false;
        }
        for (var i = 17; i >= 0; i--)
            iSum += (Math.pow(2, i) % 11) * parseInt(sId.charAt(17 - i), 11);
        if ((iSum % 11) != 1) {
            //alerterr("身份证号输入错误!");
            return false;
        }
    } else if (idCardLength == 15) {
        sBirthday = sId.substr(6, 2) + "-" + Number(sId.substring(8, 2)) + "-" + Number(sId.substr(10, 2));
        var d = new Date(sBirthday.replace(/-/g, "/"));
        if (sBirthday != (d.getFullYear().toString().substring(2, 2) + "-" + (d.getMonth() + 1) + "-" + d.getDate())) {
            //alerterr("身份证号码与生日不对应!");
            return false;
        }
    }
    return true;
}



/**
 * 判断图片大小
 * @returns {boolean}
 */
function checkfile(num) {
    var result = true;
    var browserCfg = {};
    var ua = window.navigator.userAgent;
    if (ua.indexOf("MSIE") >= 1) {
        browserCfg.ie = true;
    } else if (ua.indexOf("Firefox") >= 1) {
        browserCfg.firefox = true;
    } else if (ua.indexOf("Chrome") >= 1) {
        browserCfg.chrome = true;
    }
    try {
        var obj_file = document.getElementById("jUploader-file1");
        if (obj_file.value == "") {
            // alert("请先选择上传文件");
            result = false;
        }
        var filesize = 0;
        if (browserCfg.firefox || browserCfg.chrome) {
            filesize = obj_file.files[0].size;
        } else if (browserCfg.ie) {
            var obj_img = document.getElementById('jUploader-file1');
            obj_img.dynsrc = obj_file.value;
            filesize = obj_img.fileSize;
            if ("" == filesize || null == filesize || typeof(filesize) == 'undefined') {
                filesize = 1;
            }
        } else {
            // alert(tipMsg);
            result = false;
        }
        if (filesize == -1) {
            // alert(tipMsg);
            result = false;
        } else if (filesize >= 1024 * 1000 * num) {
            // alert(errMsg);
            result = false;
        } else {
            // alert("文件大小符合要求");
            result = true;
        }
    } catch (e) {
        alert(e);
        result = false;
    }
    return result;
}





//获取url地址参数====start=====
function getParam(paramName){
    paramValue = "";
    isFound = false;
    if (this.location.search.indexOf("?") == 0 && this.location.search.indexOf("=")>1){
        arrSource = unescape(this.location.search).substring(1,this.location.search.length).split("&");
        i = 0;
        while (i < arrSource.length && !isFound){
            if (arrSource[i].indexOf("=") > 0){
                if (arrSource[i].split("=")[0].toLowerCase()==paramName.toLowerCase()){
                    paramValue = arrSource[i].split("=")[1];
                    isFound = true;
                }
            }
            i++;
        }
    }
    return paramValue;
}




function toTXT(str) {
    var RexStr = /\<|\>|\"|\'|\&|　| /g
    str = str.replace(RexStr,
        function (MatchStr) {
            switch (MatchStr) {
                case "<":
                    return "&lt;";
                    break;
                case ">":
                    return "&gt;";
                    break;
                case "\"":
                    return "&quot;";
                    break;
                case "'":
                    return "&#39;";
                    break;
                case "&":
                    return "&amp;";
                    break;
                case " ":
                    return "&nbsp;";
                    break;
                case "　":
                    return "&emsp;";
                    break;
                case "(":
                    return "&#40;";
                    break;
                case ")":
                    return "&#41;";
                    break;
                default:
                    break;
            }
        }
    )
    return str;
}



//时间戳转换日期
function getLocalTime(nS,val) {
    var timestamp4 =new Date(parseInt(nS) * 1000);
    var y = timestamp4.getFullYear();
    var m = timestamp4.getMonth() + 1;
    var d = timestamp4.getDate();
    if(val == 2){
        return y + "." + (m < 10 ? "0" + m : m) + "." + (d < 10 ? "0" + d : d) ;
    }else if(val == 3){
        return y + "/" + (m < 10 ? "0" + m : m) + "/" + (d < 10 ? "0" + d : d) ;
    }else if(val == 4){
        return y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d) ;
    }
    return y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d) + " " + timestamp4.toTimeString().substr(0, 8);

}

//对比时间大小
function dateCompare(startdate,enddate) {
    var arr=startdate.split("-");
    var starttime=new Date(arr[0],arr[1],arr[2]);
    var starttimes=starttime.getTime();

    var arrs=enddate.split("-");
    var lktime=new Date(arrs[0],arrs[1],arrs[2]);
    var lktimes=lktime.getTime();

    if(starttimes>lktimes)
    {
        return false;
    }
    else
        return true;

}

