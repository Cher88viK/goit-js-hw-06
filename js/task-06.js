const textInput = document.querySelector('#validation-input');
const dLenght = Number(textInput.getAttribute('data-length'));
//console.log(dLenght)
console.log(textInput.value)

textInput.addEventListener("blur", () => {
 //   console.log("Input length: ",textInput.value.length)
 //   console.log("Expected length: ", dLenght)
    if (textInput.value.length === dLenght) {
     //   console.log("valid")
        textInput.setAttribute("class", "valid");    
    } else {
     //   console.log("invalid")
        textInput.setAttribute("class", "invalid");
    }

});