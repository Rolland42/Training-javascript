/* function coucou(){
     console.log("coucou");
 } */
/* let coucou = () => "coucou";
console.log(coucou()); */

/* function calcul(x,y){
   return x*y;
}
 console.log(calcul(5*8)); */


/* let calcul = (x,y,z) => {
   let i = x*y;
  return i-z;
}
(calcul(5,8,2)); */

/* let calcul = (x,y) => x*y;
console.log(calcul(3,5)); */

let pileOuface = () => {
    let random = Math.random();
    if(random < 0.5){
        return "face";
    }else{
        return "pile";
    }}
    console.log(pileOuface());
    