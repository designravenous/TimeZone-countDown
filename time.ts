let div = document.createElement("div");

     
function mymethod() {
    document.body.appendChild(div);
    (div as HTMLElement).style.textAlign = "center";
(div as HTMLElement).style.fontSize = "72px";
(div as HTMLElement).style.fontFamily = "Courier New";
(div as HTMLElement).style.marginTop = "2%";
    let time = new Date();
    let h = time.getHours();
    let hgmt= time.getHours()-1;
    let hest = time.getHours()-6;
    let hpst= time.getHours()-9;
     let m = time.getMinutes();
let s = time.getSeconds();
let hour: any;
let min: any;
let second: any;
let gmthour:any;
let esthour:any;
let psthour:any;

if (h < 10) {
    hour = "0" + h;
} else {
    hour = h;
}
if (m < 10) {
    min = "0" + m;
} else {
    min = m;
}
if (s < 10) {
    second = "0" + s;
} else {
    second = s;
}
if (hgmt < 10){
    gmthour = "0" + hgmt;
}else{
    gmthour = hgmt;
}
if (hest < 10){
    esthour = "0" + hest;
}else{
    esthour = hest;
}
if (hpst <10){
    psthour = "0" + hpst;
} else{
    psthour = hpst;
}
       
       (div as HTMLElement).innerHTML = "CET " + hour + ":" + min + ":" + second + "(+0)"+"<br/>"+"GMT " + gmthour +":" + min + ":" + second + "(-1)"+"<br/>" + "EST " + esthour + ":" + min + ":" + second+"(-6)"+ "<br/>" + "PST " + psthour + ":" + min + ":" + second + "(-9)";
    
}
setInterval(mymethod, 500);



    

    
   



