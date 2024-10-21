document.getElementById("demo").innerHTML=5 + 6;
document.write("Hello!!..");
// window.alert(5+5);
var x=5;
var y=7;
let z=x+y;
let v=x*y;
document.write("<br>");
document.write(z);
document.write("<br>");
document.write(v);

let result=func(3,5);
document.getElementById("addfunc").innerHTML=result;
function func(a,b){
    return a+b;
}
const car= {
    type:"fiat",
    model:"420",
    color:"white"
}
const person={};
person.name="Shine";
person.age="21";
person.place="Hyderabad";
const person1=new Object();
const person2={
    alias: "Raj",
    age: 30,
    properties:{
        car:"BMW",
        car1:"Audi",
        car2:"Mercedes"
    }
};
delete person2.age;