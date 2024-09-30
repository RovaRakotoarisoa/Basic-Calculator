const buttonElement = document.querySelectorAll("button")
// console.log(buttonElement);

const inputFieldEl = document.getElementById("result") 

for (let i = 0; i < buttonElement.length;i++){
	buttonElement[i].addEventListener("click", ()=>{
		// console.log(buttonElement[i].textContent);
		const buttonValue = buttonElement[i].textContent;
		if(buttonValue === "C"){
			clearResult()
		} else if(buttonValue === "="){
			calculateResult()
		} else{
			appendValue(buttonValue);
		}
		console.log(buttonElement[i]);
	})
}

function clearResult(){
	inputFieldEl.value = ""
}
function calculateResult(){
	inputFieldEl.value = eval(inputFieldEl.value)
}
function appendValue(buttonValue){
	inputFieldEl.value += buttonValue
}