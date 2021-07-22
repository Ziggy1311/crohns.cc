if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function() {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function() {
        loaded();
    });
}

function loaded() {

    setInterval(loop, 300);

}

var x = 0;

var titleText = ["C", "Cr", "Cro","Croh","Crohn","Crohns","Crohns.","Crohns.c","Crohns.cc","Crohns.cc","Crohns.cc","Crohns.c","Crohns.","Crohns","Crohn","Croh","Cro","Cr","C"];

function loop() {

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}
