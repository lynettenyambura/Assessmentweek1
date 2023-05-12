function time_convert(number)
{

// let number =3630;
let hours=Math.floor(number/60);
let minutes=Math.floor(number%60);
return hours + ":" + minutes;
}

console.log(time_convert(3630));