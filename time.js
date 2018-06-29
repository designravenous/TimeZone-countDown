var div = document.createElement("div");
function mymethod() {
    document.body.appendChild(div);
    div.style.textAlign = "center";
    div.style.fontSize = "72px";
    div.style.fontFamily = "Courier New";
    div.style.marginTop = "2%";
    var time = new Date();
    var h = time.getHours();
    var hgmt = time.getHours() - 1;
    var hest = time.getHours() - 6;
    var hpst = time.getHours() - 9;
    var m = time.getMinutes();
    var s = time.getSeconds();
    var hour;
    var min;
    var second;
    var gmthour;
    var esthour;
    var psthour;
    if (h < 10) {
        hour = "0" + h;
    }
    else {
        hour = h;
    }
    if (m < 10) {
        min = "0" + m;
    }
    else {
        min = m;
    }
    if (s < 10) {
        second = "0" + s;
    }
    else {
        second = s;
    }
    if (hgmt < 10) {
        gmthour = "0" + hgmt;
    }
    else {
        gmthour = hgmt;
    }
    if (hest < 10) {
        esthour = "0" + hest;
    }
    else {
        esthour = hest;
    }
    if (hpst < 10) {
        psthour = "0" + hpst;
    }
    else {
        psthour = hpst;
    }
    div.innerHTML = "CET " + hour + ":" + min + ":" + second + "(+0)" + "<br/>" + "GMT " + gmthour + ":" + min + ":" + second + "(-1)" + "<br/>" + "EST " + esthour + ":" + min + ":" + second + "(-6)" + "<br/>" + "PST " + psthour + ":" + min + ":" + second + "(-9)";
}
setInterval(mymethod, 500);
