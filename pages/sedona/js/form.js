var btn = document.querySelector(".search");
var form = document.querySelector(".search-form");

btn.addEventListener("click", function (event) {
    event.preventDefault();
    form.classList.toggle("show-form");
});

window.addEventListener("keydown", function (event) {
    if (event.keyCode == 27) {
        if (form.classList.contains("show-form")) {
            form.classList.remove("show-form");
        }
    }
});