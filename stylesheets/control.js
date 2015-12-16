// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// dice/control.js
//
// copyright (c) 2009-2010 drow <drow@bin.sh>
// all rights reserved.

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// configuration

var form_id = 'dice';
var x = /^(\d+) x (.+)/;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// initialize form

function init_form () {
  Event.observe(form_id,'submit',dice_reaction);
  new_dice();
}
function dice_reaction (event) {
  event.stop(); new_dice();
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// roll dice

var dice_out = [];

function new_dice () {
  var string = $(form_id).elements.dice.value;
  var result;

  var match; if (match = x.exec(string)) {
    result = multi_dice(match[1],match[2]);
  } else {
    result = roll_dice(string);
  }
  dice_out = [ '.', '..', '...', result ];
  setTimeout('dice_result()',100);
}
function dice_result () {
  if (dice_out.length) {
    $(form_id).elements.result.value = dice_out.shift();
    if (dice_out.length) setTimeout('dice_result()',100);
  }
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// showtime

document.observe('dom:loaded',init_form);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
