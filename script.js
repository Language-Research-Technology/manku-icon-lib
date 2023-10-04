const ldaca_icons = require('ldaca_icons/index.js')
//import('ldaca_icons');
//console.log(count(ldaca_icons));
import { WrittenLanguage } from 'ldaca_icons';
import * as icons from 'ldaca_icons/index.js';


function load_icons() {
    console.log(icons);
    //var recordTemplate = $(".icon-template");
    document.getElementById('icon-img').src = {WrittenLanguage};

    
}

$(document).ready(function() {
	load_icons();

});