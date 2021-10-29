$(document).ready(show_cupcakes);

var cup_cakes=[
    {"name":"Chocolate","calories":"high","weight":"200gm"},
    {"name":"Carrot","calories":"medium","weight":"150gm"},
    {"name":"Banana","calories":"high","weight":"200gm"},
    {"name":"Strawberry","calories":"low","weight":"160gm"},
    {"name":"Peanut","calories":"medium","weight":"200gm"}
];

function show_cupcakes(){
for(let i=0;i<cup_cakes.length;i++){
let table=document.querySelector('.table');
let tr=document.createElement('tr');
let td1=document.createElement('td');
let td2=document.createElement('td');
let td3=document.createElement('td');
    //write code that shows the cupcakes in the table as per the instructions
let arr= cup_cakes[i];
table.appendChild(tr);
tr.appendChild(td1);
tr.appendChild(td2);
tr.appendChild(td3);
td1.innerText=arr.name;
td2.innerHTML=arr.calories;
td3.innerHTML=arr.weight;
switch( true ){
    case(arr.calories=="high"):
    td2.style.background='red';
    break;
    case(arr.calories=="medium"):
    td2.style.background='orange';
    break;
    case(arr.calories=="low"):
    td2.style.background='lightgreen';
    break;
}
}}
function show_storage(){
    document.getElementById('welcome').innerHTML='welcome '+localStorage.getItem('name');
    //write code that shows the name from local storage
}

let err1=document.querySelector('.errmsg1');
let err2=document.querySelector('.errmsg2');
let err3=document.querySelector('.errmsg3');
let err4=document.querySelector('.errmsg4');
let err5=document.querySelector('.errmsg5');
let input1=document.querySelector('#in1');
let form=document.getElementById("form");
form.addEventListener('submit',validate)
function validate(e){
    if(in1.value.length<5 || in1.value.length>16){
        e.preventDefault();
        console.log("error msg")
        err1.innerText='Name must be between 5 and 16 characters long';
        err1.style.color='red';
        in1.style.borderColor='red';

    }
    else{
        userName=document.getElementById('in1').value;
        err1.innerText='Correct';
        err1.style.color='green';
        in1.style.borderColor='lightgreen'; 
        localStorage.setItem('name',userName);

    }
    if(in2.value<1 || in2.value>15)
    {
        err2.innerText='count must be between 1 and 15';
        err2.style.color='red';
        in2.style.borderColor='red';
        e.preventDefault();
    }
    else{
        err2.innerText='Correct';
        err2.style.color='green';
        in2.style.borderColor='lightgreen';
    }
    if(in3.value=='Chocolate' && in5.value=='Dairy Free'){
    e.preventDefault();
    err3.innerText='this type of cake is not dairy free'
    err3.style.color='red';
        in3.style.borderColor='red';
    }
    
    else{
        err3.innerText='Correct';
        err3.style.color='green';
        in3.style.borderColor='lightgreen';  
    }
    if(in3.value=='Chocolate' && in4.value=='4:00 PM'){
        e.preventDefault();
        err4.innerText='this type of cake cannot deliver at 4:00 PM';
        err4.style.color='red';
        in4.style.borderColor='red';
    }
    else{
        err4.innerText='Correct';
        err4.style.color='green';
        in4.style.borderColor='lightgreen';  
    }
    
    if(in3.value=='Pecan' && in5.value=='Nut Free'){
        e.preventDefault();
        err3.innerText='this type of cake is not nut free'
        err3.style.color='red';
        in3.style.borderColor='red';
    }
    
 if(in3.value=='None'){
     e.preventDefault();
     err3.innerHTML="you should choose";
    err3.style.color='red';
    in3.style.borderColor='red';
}

if(in4.value=='None'){
    e.preventDefault();
    err4.innerHTML="you should choose";
    err4.style.color='red';
    in4.style.borderColor='red';
}
if(in5.value=='None'){
    err5.innerText='Correct';
            err5.style.color='green';
            in5.style.borderColor='lightgreen'; 
        }
        else{
            err5.innerText='Correct';
            err5.style.color='green';
            in5.style.borderColor='lightgreen';  
        }
    }