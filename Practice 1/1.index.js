//Arithematic Operators

/*
var num1, num2, result;
num1 =2;
num2 =31;

result =num1+num2;
console.log(result);

result =num1-num2;
console.log(result);

result =num2*num1;
console.log(result);


result =num2%num1;
console.log(result);


result =Math.floor(num2/num1);
console.log(result);



result =num2**num1;
console.log(result);*/

//Comparison Operators

/*var num1,num2;
num1='35';
num2=35;
console.log(num1==num2);
console.log(num1===num2);

console.log(num1==num2);
console.log(num1===num2);


if(num1>num2)
console.log(num1 +" is greater than"+num2);
else
console.log(num2 +" is greater than"+num1);

if(num1 <= 1995)
console.log("Valid");

if(num1 !=num2)
console.log("Not Equal");

if(num1 !==num2)
console.log("Not Strict Equal");



//Logical Operators

var maths, science, hindi, english, cutoff;
var result =false;
cutoff =80;

var newResult = !result;
console.log(newResult);
console.log(result);

if(!result)
console.log("Drop Email");

maths=45;
science=75;
hindi=76;
english=89;

if((maths >=cutoff) &&(science >=cutoff) &&(hindi>=cutoff))
result=true

console.log(result);

if((maths >=cutoff) || (science >=cutoff) ||(hindi>=cutoff))
result=true
console.log(result);*/


//Condition Operators or Ternary Operator

/*var marks=40,grade,cutoff=60;

if(marks >=cutoff)
console.log("Great Job");
else
console.log("Good Job");


marks >= cutoff?console.log("Great Job"):console.log("Good Job");

grade=marks>=cutoff?'A':'B';
console.log(grade);

//String Operator

var myString ="Prep";
myString +="Bytes";
console.log(myString);

var myString="Prep"+"Byte"+"s"+".";
console.log(myString);


//INcreament and Decrement Operators

/*let a=6;
let x=a++;

console.log(x+""+a);

x=++a;
console.log(x+""+a);*/


/*
let a=6;
let x=a--;

console.log(x+""+a);

x=--a;
console.log(x+""+a);*/
/*
const a=8;
const b=9;

console.log(a&b);
console.log(a|b);
console.log(a^b);
console.log(~b);*/

/*const a=5;
const b=2;
const c=-5;s

console.log(a<<b);
console.log(c<<b);
console.log(a>>b);
console.log(c>>b);
console.log(a>>>b);
console.log(c>>>b);*/
/*
let weather="raining";
if(weather==="raining")
{
console.log("No Party");
console.log("Have fun");}

else{
console.log("Lets Party");
console.log("Lets Dance");}*/


/* If Block*/
/*var salary,emplyee;
salary=9000;
emplyee="nice";

if(emplyee==="star")
salary +=3000;
console.log(salary);*/
/* If Else If Block*/
/* >=80=Distinction
     60-79=Grade A
     40-59=Grade B
     <40=Fail
     */


/*var marks=99,grade;

if(marks>=80)
console.log("Disitinction");
else if(marks>=60&& marks<80)
console.log("Grade A");
else if(marks>=40&& marks<60)
console.log("Grade B");
else
console.log("Fail");*/



/*Switch Statements*/

/*let num,dayOfWeek;
num=2;

switch(num){
       case 1:
        dayOfWeek="Monday";
        break;
        case 2:
        dayOfWeek="Tuesday";

        case 3:
        dayOfWeek="Wednesday";
        
        case 4:
        dayOfWeek="Thursday";
    
        case 5:
        dayOfWeek="Friday";
         break;
        case 6:
        dayOfWeek="Saturday";
        
        case 7:
        dayOfWeek="Sunday";
         break;
        default:
        dayOfWeek="Invalid";
}
console.log(dayOfWeek);
            

marks=90;
var bool=true;
switch(bool){
    case marks>80:
        console.log("Distinction")
        break;
        console.log("Invalid Marks");
}
*/
//loops

/*
for(var i=10; i<=60; i++){
    
    if(i==50)
break;
console.log(i);
}*/


outlable:for(var i=1;i<=5;i++){
    for(j=i;j<=5;j++){
        if(j==3)
        break outlable;
        console.log(j);
    }
}


/*var i=1;

while(i <=100){
console.log(i);
i++;
}*/

/*var i=1;
do{
   console.log(i);
   i++;

}while(i<=10);
*/






