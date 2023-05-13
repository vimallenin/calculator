let input1 = document.getElementById("input1")
let input2 = document.getElementById("input2")
let output = document.getElementById("output")
let message1 = document.getElementById("message1")
let message2= document.getElementById("message2")
let message3= document.getElementById("message3")

function add(){
     output.value = parseInt(input1.value) + parseInt(input2.value)
     warning1()
     warning2()
    
}     
function sub(){
    if(parseInt(input1.value) > parseInt(input2.value)){
        output.value = parseInt(input1.value) - parseInt(input2.value)
    }else{
        output.value = parseInt(input2.value) - parseInt(input1.value)
    }   
    warning1()
    warning2()
}     
function mul(){
    output.value = parseInt(input1.value) * parseInt(input2.value)
    warning1()
    warning2()
}     
function div(){
     output.value = parseInt(input1.value) / parseInt(input2.value)
    warning1()
    warning2()
}
function warning1(){
    if(input1.value == "" && input2.value == ""){
           message3.textContent="please enter both input1 and input2"
           output.value = "" 
           message1.textContent = ""
           message2.textContent = ""
    }else if(input1.value == ""){
           message1.textContent="please enter input1"
           output.value = ""
           message3.textContent = ""
           message2.textContent = ""
    }else if(input2.value == ""){
           message2.textContent="please enter input2"
           output.value = ""
           message1.textContent = ""
           message3.textContent = ""
    }
}   
function warning2(){
    if(input1.value !== "" && input2.value !== ""){
           message3.textContent = ""
           message1.textContent = ""
           message2.textContent = ""
        
     }else if(input1.value !== "" || input2.value !== ""){
            message3.textContent = ""                
    }
}   
     
     
