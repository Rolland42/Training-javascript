const coucou = 55;
console.log(coucou);

function test(){
    let hello = 24;
    console.log(coucou);
}

document.getElementById('button').addEventListener('click',test);
let hello = 'salut nico';
console.log(hello);

function truc(){
   console.log(hello);
}
document.getElementById('click').addEventListener('click',truc);