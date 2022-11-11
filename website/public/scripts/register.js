const formulario = document.getElementById("formulario")
const inputs = document.querySelectorAll("#formulario input")

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{2,40}$/, // Letras y espacios, pueden llevar acentos.
    apellido: /^[a-zA-ZÀ-ÿ\s]{2,40}$/,
	password: /^.{4,12}$/, // 4 a 12 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

const validarForm = (e)=>{
    switch (e.target.name){
        case "nombre":
            if(expresiones.nombre.test(e.target.value)){
                document.getElementById("registro-id").classList.remove("barra-register-incorrecto")
                document.getElementById("registro-id").classList.add("barra-register-correcto")
                document.querySelector("#formulario1 .barra-register-error").classList.remove("barra-register-error-activo")
            }else{
                document.getElementById("registro-id").classList.remove("barra-register-correcto")
                document.getElementById("registro-id").classList.add("barra-register-incorrecto")
                document.querySelector("#formulario1 .barra-register-error").classList.add("barra-register-error-activo")
        }
        break;
        case "apellido":
            if(expresiones.apellido.test(e.target.value)){
                document.getElementById("registro-id2").classList.remove("barra-register-incorrecto")
                document.getElementById("registro-id2").classList.add("barra-register-correcto")
                document.querySelector("#formulario2 .barra-register-error").classList.remove("barra-register-error-activo")
            }else{
                document.getElementById("registro-id2").classList.remove("barra-register-correcto")
                document.getElementById("registro-id2").classList.add("barra-register-incorrecto")
                document.querySelector("#formulario2 .barra-register-error").classList.add("barra-register-error-activo")
            }
        break;
        case "email":
            if(expresiones.email.test(e.target.value)){
                document.getElementById("registro-id3").classList.remove("barra-register-incorrecto")
                document.getElementById("registro-id3").classList.add("barra-register-correcto")
                document.querySelector("#formulario3 .barra-register-error").classList.remove("barra-register-error-activo")
            }else{
                document.getElementById("registro-id3").classList.remove("barra-register-correcto")
                document.getElementById("registro-id3").classList.add("barra-register-incorrecto")
                document.querySelector("#formulario3 .barra-register-error").classList.add("barra-register-error-activo")
            }
        case "password":
            if(expresiones.password.test(e.target.value)){
                document.getElementById("registro-id4").classList.remove("barra-register-incorrecto")
                document.getElementById("registro-id4").classList.add("barra-register-correcto")
                document.querySelector("#formulario4 .barra-register-error").classList.remove("barra-register-error-activo")
            }else{
                document.getElementById("registro-id4").classList.remove("barra-register-correcto")
                document.getElementById("registro-id4").classList.add("barra-register-incorrecto")
                document.querySelector("#formulario4 .barra-register-error").classList.add("barra-register-error-activo")
            }
        }
    }

inputs.forEach((input)=>{
    input.addEventListener("keydown",validarForm);
    input.addEventListener("click",validarForm);
})
