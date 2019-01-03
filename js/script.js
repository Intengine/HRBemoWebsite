function myFunction() {
    let nav = document.getElementById("myTopnav");
    if (nav.className === "navigation") {
        nav.className += " responsive";
    } else {
        nav.className = "navigation";
    }
}