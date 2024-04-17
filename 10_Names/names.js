"use strict";
// is excersise say humany (array) banaege..isay faida ye hy k hum 1 varible may bht saray names rakhsakhty hy.javascript may 
//array banay k liye hum [] ye walay brackets use karty hy.
// positive index         0        1        2        3        4        5        6
let names = ['Ahsan', 'Adeel', 'faraz', 'Aamir', 'ubaid', 'Ansar', 'Hamza'];
// (i) index no hy....or (lenght) index numbers ki length hy jo 6 taq ja rahe hy ..or (names) varible hy
//...tou hum (i<names.length) may ye keh rahe hy k jab taq(i less then lenght jo k 6 hy) say chota hy..
// tab taq nichy walay {} curly barkets may hum jo b codes likhyge osko run karwadiya jae.. (i++) ka meaning ye hy
// console.log may hum jo varaible (names) rakhyge osko wo 1 + karta jaega or condition "true" hoti jaege..or 6 taq loop
//chalnay k bad jesay he 7 pay jaega tou condition "false" hojaege or code agay nhi chalayga 6 name pay rukjaega..
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
