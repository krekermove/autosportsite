let togglebtn = document.querySelector(".toggle_btn")
let dropdownmenu = document.querySelector(".dropdown_menu")
var link = document.querySelector(".menu .links")
var links = document.querySelectorAll(".menu .links")
var flag = true
var tmp = window.document.URL
var current_page = ''


var i = tmp.length

while(tmp[i]!='/'){
	i--
}

current_page = tmp.substring(++i, tmp.length)
console.log(link)
console.log(links)
console.log(current_page)

for(var j = 0; j < links.length; j++){
		links[j].className = links[j].className.replace("active","")
}

if(current_page == "adults.html"){
	links[0].className += " active"
}
else if(current_page == "childs.html"){
	links[1].className += " active"
}
else if(current_page == "tour.html"){
	links[2].className += " active"
}
else if(current_page == "garage.html"){
	links[3].className += " active"
}
else if(current_page == "try.html"){
	links[4].className += " active"
}
else if(current_page == "contacts.html"){
	links[5].className += " active"
}


togglebtn.onclick = function() {
	if(dropdownmenu.style.display == "none"){
		togglebtn.className += " open"
		dropdownmenu.style.display = "block"
		// dropdownmenu.style.width = 100%
	}
	else {
		dropdownmenu.style.display = "none"
		// dropdownmenu.style.width = 0
		togglebtn.className = togglebtn.className.replace("open", "")
	}
}
