/**
 * java script
 */
var fruits;
fruits = [ "Banana", "Orange", "Apple", "Mango" ];

function dateTime() {
	var d = new Date();
	var text = "Show system date and time : " + "<br>";
	text += "<ul>";
	text += "<li>" + "Year: " + d.getFullYear() + "</li>";
	text += "<li>" + "Month: " + d.getMonth() + "</li>";
	text += "<li>" + "Date: " + d.getDate() + "</li>";
	text += "<li>" + "Day: " + getDay(d.getDay()) + "</li>";
	text += "<li>" + "Hour: " + d.getHours() + "</li>";
	text += "<li>" + "Minutes: " + d.getMinutes() + "</li>";
	text += "<li>" + "Seconds: " + d.getSeconds() + "</li>";
	text += "<li>" + "FullTime: " + d + "</li>";

	text += "</ul>";
	document.getElementById("demo").innerHTML = text;
}

function loop() {
	var text, fLen, i;

	fLen = fruits.length;
	text = "<ul>";
	for (i = 0; i < fLen; i++) {
		text += "<li>" + fruits[i] + "</li>";
	}
	text += "</ul>";

	document.getElementById("demo").innerHTML = text;
}

function pushValue() {
	var text = "fruit" + (fruits.length + 1);
	fruits.push(text);
	document.getElementById("demo").innerHTML = text + " is pushed to Array."
			+ "<hr>" + fruits.join(" * ");
}
function search() {
	document.getElementById("demo").innerHTML = "serach keyword: "
			+ document.getElementById("search-text").value;
}

function getDay(x) {
	switch (x) {
	case 0:
		day = "Sunday";
		break;
	case 1:
		day = "Monday";
		break;
	case 2:
		day = "Tuesday";
		break;
	case 3:
		day = "Wednesday";
		break;
	case 4:
		day = "Thursday";
		break;
	case 5:
		day = "Friday";
		break;
	case 6:
		day = "Saturday";
	}
	return day;
}