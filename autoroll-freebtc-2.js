// ==UserScript==
// @name         Auto Roll Freebtco.in
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Esse script uma alteração para pobretões como eu!
// @author       Josafá Dieb
// @match        https://freebitco.in/?op=home
// @grant        none
// ==/UserScript==
function autoRoll(){
           if($('.close-reveal-modal').is(':visible')){$('.close-reveal-modal').trigger('click')}
           if($('#play_without_captchas_button').is(":visible")) {$('#play_without_captchas_button').trigger('click')}
           if ($('#free_play_form_button').is(':visible') && !$('#play_without_captchas_button').is(":visible")) {
               $('#free_play_form_button').trigger('click');
           }
}
$(document).ready(function(){
    var x = setInterval(autoRoll, 10000)
});