"use strict";
let PersonName = '';
PersonName = prompt('What is your name?') || '';
let lowercase = PersonName.toLowerCase();
let uppercase = PersonName.toUpperCase();
let titlecase = PersonName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).
    toLowerCase()).join(' ');
if (PersonName !== null && PersonName !== '') {
    alert(`Hello ${PersonName}, Here are your name in:
    LowerCase: ${lowercase}
    UpperCase: ${uppercase}
    TitleCase: ${titlecase}`);
}
else {
    alert('Please fill your name !');
}
