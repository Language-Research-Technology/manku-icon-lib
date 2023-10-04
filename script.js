const ldaca_icons = require('ldaca_icons')
//import('ldaca_icons');
//console.log(count(ldaca_icons));
import * as icons from 'ldaca_icons';


function load_icons() {
    console.log(icons);
    //var recordTemplate = $(".icon-template");
    document.getElementById('icon-template').style.color = "red";

    for (icon in icons) {
        console.log(icon);
    }
}

$(document).ready(function() {
	load_icons();

});