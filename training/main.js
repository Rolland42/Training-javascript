let myName = prompt('écris ton nom : ');
let currenDate = new Date();
let thisMonth = currenDate.getMonth()+1;
let thisYear = currenDate.getFullYear();
console.log(currenDate);
console.log(thisMonth);
console.log(thisYear);

let myBirthDate = prompt('écris ton annee de naissance : ');
let myBirthMonth = prompt('écris ton mois de naissance : ');
let myAge = thisYear - myBirthDate;



document.getElementById('container').innerHTML = '<p>bonjour '+ myName + '! </p>'+ '<p> tu as '+myAge+' ans. </p>' ;
