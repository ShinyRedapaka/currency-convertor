const num=[15,6,17,8,6];
let max=num[0];
for(let i=1;i<num.length;i++)
{
  if(num[i]>max){
    max=num[i];
  }
}
document.getElementById("demo").innerHTML="Largest element is:"+max;

const nums=[45,100,78,99,21];
let maxi=nums[0];
nums.forEach(myfun);
function myfun(value){
  if(value>maxi)
  {
    maxi=value;
  }
}
document.getElementById("demo1").innerHTML="Largest element using for each loop() is: "+maxi;
