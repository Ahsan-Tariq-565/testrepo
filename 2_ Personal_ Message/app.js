"use strict";
let PersonName = '';
PersonName = prompt('What is your name?') || '';
if (PersonName !== null && PersonName !== '') {
    alert(`Hello ${PersonName}, would you like to learn some Python today?`);
}
else {
    alert('you have to fill your name !');
}
