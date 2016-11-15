
var html = document.documentElement;
var link = document.querySelector(".search_push");
var popup = document.querySelector(".search_form");



html.className = html.className.replace("no_js","js");	

link.addEventListener("click", function(event) {
event.preventDefault();
popup.classList.toggle("search_form_show");
});