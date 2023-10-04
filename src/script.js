const ldaca_icons = require('ldaca_icons')
console.log(count(ldaca_icons.icons));
import {WrittenLanguage} from 'ldaca_icons';


function load_icons() {
    var recordTemplate = $(".icon-template");
    document.getElementById('icon-template').style.color = "red";

    console.log("Loading script");

    for (icon in icons) {
        console.log(icon);
    }
}


$(document).ready(function() {
	load_icons();

});