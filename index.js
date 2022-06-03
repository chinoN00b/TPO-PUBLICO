function validateForm() {
    const mensaje = document.getElementById("p01");
        mensaje.innerHTML = "";
        let v_nombre = document.forms["form"]["nombre"].value;
        let v_edad = document.forms["form"]["edad"].value;
        let v_email = document.forms["form"]["email"].value;
        let v_tel = document.forms["form"]["tel"].value;
        if (v_nombre == "") {
        mensaje.innerHTML = "Complete con su nombre";
        return false;
        } else{ mensaje.innerHTML ="Gracias por su mensaje!"}
        if (v_edad == "") {
        mensaje.innerHTML = "Complete con la edad del paciente";
        return false;
        } else{ mensaje.innerHTML ="Gracias por su mensaje!"}
        if (v_email == "" && v_tel == "") {
        mensaje.innerHTML = "Ingrese alguna forma de contacto";
        return false;
        } else{ mensaje.innerHTML ="Gracias por su mensaje!"}
}
