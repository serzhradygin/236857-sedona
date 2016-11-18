
var html=document.documentElement,link=document.querySelector(".search_push"),popup=document.querySelector(".search_form");html.className=html.className.replace("no_js","js"),link.addEventListener("click",function(e){e.preventDefault(),popup.classList.toggle("search_form_show")});
