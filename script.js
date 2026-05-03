const display = document.getElementById("display");
const historyList = document.getElementById("history");

function append(value){
display.value += value;
}

function clearDisplay(){
display.value="";
}

async function calculate(){

const expression = display.value;

const response = await fetch("http://localhost:5000/calculate",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({expression})
});

const data = await response.json();

display.value = data.result;

loadHistory();
}

async function loadHistory(){

const response = await fetch("http://localhost:5000/history");
const data = await response.json();

historyList.innerHTML="";

data.reverse().forEach(item=>{

const li=document.createElement("li");
li.textContent = `${item.expression} = ${item.result}`;

historyList.appendChild(li);

});

}

// Load history when page starts
loadHistory();