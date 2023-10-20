let eye = document.querySelector("#eye")
let submit = document.querySelector("#submit")
let password = document.querySelector("#password")
let passwordB = document.querySelector("#passwordB")
let first = document.getElementsByName('.first')
let second = document.getElementsByName('.second')
let conifuresss = document.querySelector('.conifuresss')
let hint = document.querySelector('#hint')
let showme = document.querySelector('#showme')
let h2 = document.querySelector('h2')
if (password.length >= 1) {
    eye.classList.add("d-block")
    eye.classList.remove("d-none")
}
else {
    eye.classList.add("d-none")
    eye.classList.remove("d-block")

}

eye.addEventListener("click", function () {

    if (password.value.length < 1) {
        eye.classList.replace("bi-eye-slash-fill", "bi-eye-fill");
    }


    else if (password.value.length > 1, password.type == "password") {
        password.setAttribute("type", "text")
        passwordB.setAttribute("type", "text")
        eye.classList.replace("bi-eye-fill", "bi-eye-slash-fill");
    }

    else if (password.value.length > 1, password.type == "text") {
        password.setAttribute("type", "password")
        passwordB.setAttribute("type", "password")
        eye.classList.replace("bi-eye-slash-fill", "bi-eye-fill");
    }


})
function myFunction_2() {
    if (passwordB.value.length < 1) {
        conifuresss.innerHTML = "please confirm password"
        conifuresss.classList.remove("text-success")
        conifuresss.classList.add("text-danger")
    }
    else if (passwordB.value.length >= 1, password.value != passwordB.value) {
        conifuresss.innerHTML = "password is not same"
        conifuresss.classList.remove("text-success")
        conifuresss.classList.add("text-danger")
    }
    else if (passwordB.value.length >= 1, password.value = passwordB.value) {
        // alert("jgjhgj")
        conifuresss.innerHTML = "password is same"
        conifuresss.classList.add("text-success")
        conifuresss.classList.remove("text-danger")
    }
}
function myFunction() {
    if (password.value.length >= 1) {
        eye.classList.add("d-block")
        eye.classList.remove("d-none")
    }
    else {
        eye.classList.add("d-none")
        eye.classList.remove("d-block")

    }

}
submit.addEventListener("click", function () {
    if (password.value == "123456" && password.value == passwordB.value) {
        document.body.style.background = "green"
        h2.innerHTML = "welcome to hellow world"
    }
    else {
        document.body.style.background = "unset"
        h2.innerHTML = "password is incorrect"

    }
})
hint.addEventListener("click", function () {
    showme.classList.toggle("opacity-1")
})


