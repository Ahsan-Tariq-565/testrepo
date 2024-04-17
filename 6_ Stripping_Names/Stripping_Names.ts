//(\n) is used to represnt a newline in string literal.(text)
//(\t) is used to represnt a tab character in string literal.(text)

const personName :string = '   \n\tShahid Afridi\t\n   ';

console.log(personName);

//.trim()...is a function used to remove whitespace from both ends of a string...it retruns a new string without whitespace

const without_whitespace :string = personName.trim();

console.log(without_whitespace);