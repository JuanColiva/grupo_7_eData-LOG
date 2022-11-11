const formulario = document.getElementById("formulario")
const inputs = document.querySelectorAll("#formulario input")

const expresiones = {
	password: /^.{6,12}$/, // 6 a 12 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}
const validarForm = (e)=>{
    switch (e.target.name){
        case "email":
            if(expresiones.email.test(e.target.value)){
                document.getElementById("email-id").classList.remove("class-barra-incorrecto")
                document.getElementById("email-id").classList.add("class-barra-correcto")
                document.querySelector("#formulario1 .class-barra-error").classList.remove("class-barra-error-activo")
            }else{
                document.getElementById("email-id").classList.remove("class-barra-correcto")
                document.getElementById("email-id").classList.add("class-barra-incorrecto")
                document.querySelector("#formulario1 .class-barra-error").classList.add("class-barra-error-activo")
            }
        break;
        case "password":
            if(expresiones.password.test(e.target.value)){
                document.getElementById("password-id").classList.remove("class-barra-incorrecto")
                document.getElementById("password-id").classList.add("class-barra-correcto")
                document.querySelector("#formulario2 .class-barra-error").classList.remove("class-barra-error-activo")
            }else{
                document.getElementById("password-id").classList.remove("class-barra-correcto")
                document.getElementById("password-id").classList.add("class-barra-incorrecto")
                document.querySelector("#formulario2 .class-barra-error").classList.add("class-barra-error-activo")
            }
        break;
    }
}
inputs.forEach((input)=>{
    input.addEventListener("keydown",validarForm);
    input.addEventListener("change",validarForm);
})