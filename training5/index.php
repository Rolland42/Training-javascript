<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

 <script>
 let utilisateur ={
     nom:['sonie', 'lover'],
     age:25,
     bonjour: function(){
         alert('bonjour, je suis '+ this.nom[0]+ 'j\'ai' + this.age + 'ans');
     }
 } consol.log(typeof utilisateur);
 </script>
</body>
</html>