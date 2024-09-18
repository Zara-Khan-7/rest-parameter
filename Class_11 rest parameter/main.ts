// DIFFERENCE BETWEEN ANY AND UNKNOWN
let num1:any = "18";
let result:number=num1
console.log(result);


let num2:unknown=18;
let result2:number=num2 as number;
console.log(result2);


let num3:unknown="18";
let result3:string=num3 as string;
console.log(result3);

let num4:any=18;
let result4:number=num4;
console.log(result4);

// REST PARAMETERS

function invite(guest:string){
    console.log(guest)
};
invite("Bilal,would you like to come for a get together?");


function invite1(host:string, ...guest:string[]){
    console.log(guest)
    console.log(`${host}`)
};
invite1('Zara Khan','Rabz,Are you up for the party?','Aaira,Are you up for the party?','Rayyan,Are you up for the party?');


// PRINT WITH SPACES
function invite2(...guest:string[]){
    console.log(guest.join(" "));
};
invite2("Aira","Rayyan","Rabz");

// PRINT WITHOUT SPACES
function invite3(...guest:string[]){
    console.log(guest);
};
invite3("Aira","Rayyan","Rabz");

// PRINT WITH PIPE SIGN
function invite4(...guest:string[]){
    console.log(guest.join("|"));
};
invite4("Aira","Rayyan","Rabz");


function studentsPassed(nameOfStudentNotPassed:string,...nameOfStudentsPassed:string[]){
    console.log(nameOfStudentsPassed);
    console.log(nameOfStudentNotPassed);
};
studentsPassed("Albert","Bravo","Charles","David");


// FUNCTION OVERLOADING

function add(arg1:string, arg2:string):string;
function add(arg1:number, arg2:number):number;
function add(arg1:boolean, arg2:boolean):boolean;
function add(arg1:number, arg2:string):string;

function add(arg1:any, arg2:any){
    return arg1 + arg2
};
console.log(add("12","12"));
console.log(add (12 , 12));
console.log(add (true , false));
console.log(add (12 , "2300"));

// UPPERCASE
let firstName= "zara";
console.log(firstName.toUpperCase());

// LOWERCASE
let yourName= "DAVID";
console.log(yourName.toLowerCase());

// LENGTH
let friendName= "elsa";
console.log(firstName.length);

// DECIMAL
let myAge= 19;
console.log(myAge.toFixed(3));





