let name = prompt("name") 
let roll = prompt("roll") 
let className = prompt("class") 
let ban = prompt("bangla")
let eng= prompt("english")
let math = prompt("math")
let physics= prompt("physics")
let che = prompt("chemistry")
let farmer = prompt("farmer")

function stResult(marks){

let gpa = ""

if(marks>=0 && marks<33){
    gpa = 2
}else if(marks>=33 && marks<40){
    gpa = 2.5
}else if(marks>=40 && marks<50){
    gpa = 3
}else if(marks>=50 && marks<60){
    gpa =3.5
}else if(marks>=60 && marks<70){
    gpa = 4
}else if(marks>=70 && marks<80){
    gpa = 5
}else if(marks>=80 && marks<90){
    gpa = 5
}else if(marks>=90 && marks<100){
    gpa = "Golder+"
}

return gpa
}