const formulario = document.getElementById("formulario")
const inputs = document.querySelectorAll("#formulario input")
const inputImg = document.querySelector("#formulario3 input")

const expresiones = {
	name: /^[a-zA-ZÀ-ÿ\s]{2,40}$/, // Letras y espacios, pueden llevar acentos.
    descripcion: /^[a-zA-ZÀ-ÿ\s]{2,40}$/, // Letras y espacios, pueden llevar acentos.
}

const validarForm = (e)=>{
    switch (e.target.name){
        case "name": 
        if(expresiones.name.test(e.target.value)){
            document.querySelector("#formulario1 .barra-register-error").classList.remove("barra-register-error-activo")
        }else{
            document.querySelector("#formulario1 .barra-register-error").classList.add("barra-register-error-activo")
        }
        break;
        case "descripcion":
        if(expresiones.descripcion.test(e.target.value)){
            document.querySelector("#formulario2 .barra-register-error").classList.remove("barra-register-error-activo")
        }else{
            document.querySelector("#formulario2 .barra-register-error").classList.add("barra-register-error-activo")
        }
        break;
    }
}

const validarImg = ()=>{
    let a = inputImg.files[0].type
    if(!a.includes("image")){
        document.querySelector("#formulario3 .barra-register-error").classList.add("barra-register-error-activo")
    }else{
        document.querySelector("#formulario3 .barra-register-error").classList.remove("barra-register-error-activo")
    }
}

inputs.forEach((input)=>{
input.addEventListener("keydown",validarForm);
input.addEventListener("blur",validarForm);
input.addEventListener("change",validarImg)
})