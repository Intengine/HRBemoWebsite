function myFunction() {
    var nav = document.getElementById("myTopnav");
    if (nav.className === "navigation") {
        nav.className += " responsive";
    } else {
        nav.className = "navigation";
    }
}