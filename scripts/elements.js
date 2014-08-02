function setStyle(id) {
    if ((id == "") || (id == null)) {
        document.getElementById("style").setAttribute("href", "styles/coloring_DARK.css");
    }
    else {
        document.getElementById("style").setAttribute("href", "styles/" + id);
    }
}


function registerPage() {
    window.open("register.cshtml", "_self");
}

function FillUser(element, value) {
    document.getElementById(element).value = value;
}
function style(value) {
    var dark = document.getElementById("dark");
    var light = document.getElementById("light");

    if (value == dark.value) {
        dark.checked = true;
        light.checked = false;
    }
    else if (value == light.value) {
    dark.checked = false;
        light.checked = true;
    }
}

function loggedUser(user) {
    var u = getCookie("username");
    if (u != "")
        if (u == user) {
            var p = getCookie("password");
            editlogin(u, p);         
        }
}

function editlogin(u, p) {
    document.getElementById('uname').value = u;
    document.getElementById('pass').value = p;
    document.getElementById("submit").click();    
}

function userloggedIn(user, pass, style) {
    setCookie("username", user, 1);
    setCookie("password", pass, 1);
    setStyle(style);
}

function setCookie(cname, cvalue, exhrs) { //from w3schools.com
    var d = new Date();
    d.setTime(d.getTime() + (exhrs*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) { //from w3schools.com
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

function logout() {
    window.open("home.cshtml", "_self");
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    document.cookie = "password=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    
}

function doAll() {
    document.getElementById("userstuff").style.visibility = 'visible';
}

