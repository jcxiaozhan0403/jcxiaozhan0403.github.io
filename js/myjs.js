// 网站页脚计时
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
    currentTimeHtml = "小站艰难维持了：" + currentTime[0] + '年' + currentTime[1] + '天' + currentTime[2] + '时' + currentTime[3] + '分' + currentTime[4] + '秒';
    document.getElementById("htmer_time").innerHTML = currentTimeHtml;
}    setInterval(setTime, 1000);

//动态网站名
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

//解决跨站访问的问题
var head = document.getElementsByTagName("head");
var meta = document.createElement('meta');
meta.name = "referrer";
meta.content = "no-referrer";
head[0].appendChild(meta);

// //评论激活

// //第一步：建立所需的对象
// var httpRequest = new XMLHttpRequest();
// //第二步：打开连接  将请求参数写在url中
// httpRequest.open('GET', 'https://jcxiaozhan.avosapps.us/', true);
// //第三步：发送请求  将请求参数写在URL中
// httpRequest.send();

//评论推送
var title1="text=JC小站又有新评论啦~~"
var SCKEY_Server="SCT117418T3tBUg8lYT3Vn4mXP1mzmGOJ5"
var ValineButton=document.getElementsByClassName("vsubmit vbtn")[0];
function send_valine_Server(){
    var text="desp=";
    var pagename=document.title;
    var wz=pagename.indexOf('|');
    var res=pagename.substring(0,wz);
    var pageurl=document.URL;
    var ptime=new Date();
    var vnick=document.getElementsByClassName("vnick vinput")[0].value;
    var vmail=document.getElementsByClassName("vmail vinput")[0].value;
    var vlink=document.getElementsByClassName("vlink vinput")[0].value;
    var veditor=document.getElementsByClassName("veditor vinput")[0].value;
    var data=text+"|昵称："+"|邮箱："+"|网站地址："+"|当前页面："+"|评论内容："+"|跳转链接："+"|评论时间"+"\n"+"|----|----|----|----|"+"\n"+"|   "+vnick+"   |   "+vmail+"  |  "+vlink+"|   "+res+"| "+veditor+"| "+pageurl+"|" +ptime.toLocaleString()+"|";
    var httpRequest = new XMLHttpRequest();//第一步：创建需要的对象
    httpRequest.open('POST', 'https://sc.ftqq.com/'+SCKEY_Server+'.send', true); //第二步：打开连接
    httpRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded");//设置请求头 注：post方式必须设置请求头（在建立连接后设置请求头）
    httpRequest.send(title1+"&"+data);//发送请求 将情头体写在send中
};
ValineButton.onclick=send_valine_Server;