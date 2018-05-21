
var url = "https://theunderminejournal.com/#eu/tarren-mill/search/";
var searchText = "Tarren-Mill";
var DOMinput = document.getElementById('input');
var DOMlink = document.getElementById('link');


function newSearch() {
	search = url+DOMinput.value;
	item = DOMinput.value;
	DOMlink.innerHTML = "<a href="+search+" id=link target=\"_blank\">Search on "+searchText+" for \""+item+"\"</a>";
};

//For pressing enter and the search button
function searchOpen() {
	newSearch();
	window.open(search);
}


document.getElementById('action').addEventListener('click', searchOpen);

document.getElementById('tarren-mill').addEventListener('click', function() {
	url = "https://theunderminejournal.com/#eu/tarren-mill/search/";
	searchText = "Tarren-Mill";
	newSearch()
});

document.getElementById('silvermoon').addEventListener('click', function() {
	url = "https://theunderminejournal.com/#eu/silvermoon/search/";
	searchText = "Silvermoon";
	newSearch()
});

document.getElementById('wowhead').addEventListener('click', function() {
	url = "http://www.wowhead.com/search?q=";
	searchText = "Wowhead";
	newSearch()
});


//Click enter to add player
window.addEventListener('keydown', function(e) {
	if (e.keyCode === 13) {
		searchOpen();
	}
})

function validate(e) {
	var text = e.value;
}

