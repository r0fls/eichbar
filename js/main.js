function getUrl(theUrl) {
	$.get(theUrl, function(data) {
		alert(data);
	});
}
var fs = require('fs');

function next(page) {
	//successful login
	fs.readFile("./files/"+page, function (err, data) {
		  if (err) {
			      throw err; 
			        }
		    document.body.innerHTML = data;
	});
}
