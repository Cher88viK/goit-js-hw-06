const submitButton = document.querySelector('[type="submit"]')
const form = document.querySelector("form");
const fieldEmail = document.getElementsByName("email")
const fieldPass = document.getElementsByName("password")
console.log(form)
form.addEventListener("submit", handleSubmit);


function handleSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password, button }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("Please fill in all the fields!");
    } else {
    console.log(`E-mail: ${email.value}, Password: ${password.value}`);
    event.currentTarget.reset();
    }
}