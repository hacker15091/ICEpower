function test() {
    var a = document.getElementById("pass1").value;
    var b = document.getElementById("pass2").value;
    var z = document.getElementById("validPass");
    var btn = document.getElementById("register");

    if (a == b) {
        z.src = "http://i806.photobucket.com/albums/yy341/hacker15091/greendot.png";
        btn.disabled = false;
    }
    else {
        z.src = "http://i806.photobucket.com/albums/yy341/hacker15091/reddot.png";
        btn.disabled = true;
    }

}