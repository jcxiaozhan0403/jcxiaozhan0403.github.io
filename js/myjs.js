// 网址计时
function secondToDate(second) {
    if (!second) {
        return 0;
    }
    var time = new Array(0, 0, 0, 0, 0);
    if (second >= 365 * 24 * 3600) {
        time[0] = parseInt(second / (365 * 24 * 3600));
        second %= 365 * 24 * 3600;
    }
    if (second >= 24 * 3600) {
        time[1] = parseInt(second / (24 * 3600));
        second %= 24 * 3600;
    }
    if (second >= 3600) {
        time[2] = parseInt(second / 3600);
        second %= 3600;
    }
    if (second >= 60) {
        time[3] = parseInt(second / 60);
        second %= 60;
    }
    if (second > 0) {
        time[4] = second;
    }
    return time;
}

function setTime() {
    var create_time = Math.round(new Date(Date.UTC(2020, 0, 09, 0, 0, 0)).getTime() / 1000);
    var timestamp = Math.round((new Date().getTime() + 8 * 60 * 60 * 1000) / 1000);
    currentTime = secondToDate((timestamp - create_time));
    currentTimeHtml = currentTime[1] + '天'
            + currentTime[2] + '时' + currentTime[3] + '分' + currentTime[4]
            + '秒';
    document.getElementById("htmer_time").innerHTML = currentTimeHtml;
}    setInterval(setTime, 1000);


// 动态网站名
var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
                    document.title = '小站没了！！！Σ(っ °Д °;)っ';
        clearTimeout(titleTime);
                }
    else {
                    document.title = '逗你玩呢~~(๑乛◡乛๑ )';
        titleTime = setTimeout(function() {
            document.title = OriginTitile;
        }, 3000);
                }
});
