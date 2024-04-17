let PersonName :string = '';

PersonName = prompt('What is your name?') || '';

let lowercase :string = PersonName.toLowerCase();
let uppercase :string = PersonName.toUpperCase();

let titlecase :string = PersonName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).
toLowerCase()).join(' ')

if(PersonName !== null && PersonName !== ''){
    alert(`Hello ${PersonName}, Here are your name in:
    LowerCase: ${lowercase}
    UpperCase: ${uppercase}
    TitleCase: ${titlecase}`)
}
else{
    alert('Please fill your name !')
}