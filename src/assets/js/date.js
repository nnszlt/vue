export function formatDate(date, fmt) {
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    };
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + '';
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
        }
    }
    return fmt;
};

function padLeftZero(str) {
    return ('00' + str).substr(str.length);
};




// dateFormat: function(date, format) {
//     if (typeof date === 'string' && date.indexOf('-') > 0) {
//         date = date.replace(/-/g, '/')
//     }
//     date = new Date(date)
//     var o = {
//         'M+': date.getMonth() + 1, // month
//         'd+': date.getDate(), // day
//         'H+': date.getHours(), // hour
//         'm+': date.getMinutes(), // minute
//         's+': date.getSeconds(), // second
//         'q+': Math.floor((date.getMonth() + 3) / 3), // quarter
//         'S': date.getMilliseconds() // millisecond
//     }

//     if (/(y+)/.test(format))
//         format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))

//     for (var k in o)
//         if (new RegExp('(' + k + ')').test(format))
//             format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length))

//     return format
// }