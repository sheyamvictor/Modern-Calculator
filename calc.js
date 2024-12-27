const display = document.getElementById("display")

function appendToDisplay(input){
display.value += input;

}

function allClear(){
display.value=""
}

function clearDisplay(){
    display.value = eval(display.value).toString().slice(0,-1)

}

function calculate(){

try{

if(display.value){
    display.value = eval(display.value)
}else{

    display.value = "CALCULATOR 😄"
    
}
   

}catch(error){

    display.value = "error 🥱"

}
}