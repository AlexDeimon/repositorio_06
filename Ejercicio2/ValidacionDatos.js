const validar = document.getElementById('validar');

//* personales
const nombre = document.getElementById('nombre');
const errorNombre =  document.getElementById('errorNombre');
const apellido = document.getElementById('apellidos');
const errorApellido =  document.getElementById('errorApellido');
const nacimiento = document.getElementById('nacimiento');
const errorNacimiento = document.getElementById('errorNacimiento');
const pais = document.getElementById('pais');
const errorPais = document.getElementById('errorPais');
const telefono = document.getElementById('telefono');
const errorTelefono = document.getElementById('errorTelefono');
const correo = document.getElementById('correo');
const errorCorreo = document.getElementById('errorCorreo');
const foto = document.getElementById('foto');
const errorFoto = document.getElementById('errorFoto');

//* profesionales
const empresa = document.getElementById('empresa');
const errorEmpresa = document.getElementById('errorEmpresa');
const jefe = document.getElementById('jefe');
const errorJefe = document.getElementById('errorJefe');
const telefonoJefe = document.getElementById('telefonoJefe');
const errorTelefonoJefe = document.getElementById('errorTelefonoJefe');
const fechaInicio = document.getElementById('fechaInicio');
const fechaSalida = document.getElementById('fechaSalida');
const errorFechas = document.getElementById('errorFechas');

//* educacion
const certificado = document.getElementById('certificado');
const errorCertificado = document.getElementById('errorCertificado');

//* referencias
const nombre1 = document.getElementById('nombre1');
const errorNombre1 =  document.getElementById('errorNombre1');
const telefono1 = document.getElementById('telefono1');
const errorTelefono1 = document.getElementById('errorTelefono1');
const correo1 = document.getElementById('correo1');
const errorCorreo1 = document.getElementById('errorCorreo1');

const nombre2 = document.getElementById('nombre2');
const errorNombre2 =  document.getElementById('errorNombre2');
const telefono2 = document.getElementById('telefono2');
const errorTelefono2 = document.getElementById('errorTelefono2');
const correo2 = document.getElementById('correo2');
const errorCorreo2 = document.getElementById('errorCorreo2');

const nombre3 = document.getElementById('nombre3');
const errorNombre3 =  document.getElementById('errorNombre3');
const telefono3 = document.getElementById('telefono3');
const errorTelefono3 = document.getElementById('errorTelefono3');
const correo3 = document.getElementById('correo3');
const errorCorreo3 = document.getElementById('errorCorreo3');

//* constantes adicionales
const valoresNumericos = /^[0-9 ]+$/;
const valoresAlfabeticos = /^[A-Za-z ]+$/;
const allowedExtensions = /(.jpg|.jpeg|.png)$/i;
const pdfExtension = /(.pdf)$/i;

//* funciones
const funcionNombre = (nombre, error) => {
    if(nombre.value.length < 5 || nombre.value.length > 30 || !nombre.value.match(valoresAlfabeticos)){
        error.classList.remove('error');
        error.innerHTML = "El nombre deber tener entre 5 y 30 caracteres Alfabéticos";
        nombre.classList.add('inputMal');
    } else error.classList.add('error');
}

const funcionTelefono = (telefono, error) => {
    if(telefono.value.length > 20 || telefono.value.length < 7 || !telefono.value.match(valoresNumericos)){
        error.classList.remove('error');
        error.innerHTML = "El télefono debe tener entre 7 y 20 caracteres numérícos";
        telefono.classList.add('inputMal');
    } else error.classList.add('error');
}

const funcionCorreo = (correo, error) => {
    if(correo.value.length == 0 || !correo.value.includes('@') || !correo.value.includes('mail') || !correo.value.includes('.co')){
        error.classList.remove('error');
        error.innerHTML = "El Correo es invalido";
        correo.classList.add('inputMal');
    } else error.classList.add('error');
}

//* evento
validar.addEventListener('click', () => {
    //* nombre
    funcionNombre(nombre, errorNombre);

    //* apellido
    if(apellido.value.length < 5 || apellido.value.length > 30 || !apellido.value.match(valoresAlfabeticos)){
        errorApellido.classList.remove('error');
        errorApellido.innerHTML = "Los apellidos deber tener entre 5 y 30 caracteres Alfabéticos";
        apellido.classList.add('inputMal');
    } else errorApellido.classList.add('error');

    //* nacimiento
    let hoy = new Date();
    let cumpleaños = `${nacimiento.value}`;
    cumpleaños = new Date(cumpleaños);
    let edad = hoy.getFullYear() - cumpleaños.getFullYear();
    let mes = hoy.getMonth() - cumpleaños.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < cumpleaños.getDate())) edad--;

    if (nacimiento.value == ''){
        errorNacimiento.classList.remove('error');
        errorNacimiento.innerHTML = "Digita tu fecha de nacimiento";
        nacimiento.classList.add('inputMal');
    } else if(edad >= 18) errorNacimiento.classList.add('error');
    else {
        errorNacimiento.classList.remove('error');
        errorNacimiento.innerHTML = "Eres menor de edad";
        nacimiento.classList.add('inputMal');
    }

    //* pais
    if(pais.value.length < 3 || !pais.value.match(valoresAlfabeticos)){
        errorPais.classList.remove('error');
        errorPais.innerHTML = "El pais debe tener al menos 3 caracteres Alfabéticos";
        pais.classList.add('inputMal');
    } else errorPais.classList.add('error');

    //* teléfono
    funcionTelefono(telefono, errorTelefono);

    //* correo
    funcionCorreo(correo, errorCorreo);

    //*foto
    let filePath = foto.value;
    if(!allowedExtensions.exec(filePath)){
        errorFoto.classList.remove('error');
        errorFoto.innerHTML = "Debes subir un archivo de tipo imagen";
        foto.value = '';
    } else errorFoto.classList.add('error');

    //* Empresa anterior
    if(empresa.value.length < 3 || empresa.value.length > 30){
        errorEmpresa.classList.remove('error');
        errorEmpresa.innerHTML = "La empresa deber tener entre 3 y 30 caracteres";
        empresa.classList.add('inputMal');
    } else errorEmpresa.classList.add('error');

    //* jefe anterior
    if(jefe.value.length < 5 || jefe.value.length > 30 || !jefe.value.match(valoresAlfabeticos)){
        errorJefe.classList.remove('error');
        errorJefe.innerHTML = "El nombre de tu jefe anterior deber tener entre 5 y 30 caracteres Alfabéticos";
        jefe.classList.add('inputMal');
    } else errorJefe.classList.add('error');

    //* teléfono jefe
    if(telefonoJefe.value.length > 20 || telefonoJefe.value.length < 7 || !telefonoJefe.value.match(valoresNumericos)){
        errorTelefonoJefe.classList.remove('error');
        errorTelefonoJefe.innerHTML = "El télefono de tu jefe debe tener entre 7 y 20 caracteres numéricos";
        telefonoJefe.classList.add('inputMal');
    } else errorTelefonoJefe.classList.add('error');

    //* fechaInicio & fechaSalida
    if(fechaInicio.value == '' || fechaSalida.value == ''){
        errorFechas.classList.remove('error');
        errorFechas.innerHTML = "Alguna o ambas fechas están vacias";
        fechaInicio.classList.add('inputMal');
        fechaSalida.classList.add('inputMal');
    } else if(fechaInicio.value > fechaSalida.value){
        errorFechas.classList.remove('error');
        errorFechas.innerHTML = "La fecha de ingreso debe ser anterior a la fecha de salida";
        fechaInicio.classList.add('inputMal');
        fechaSalida.classList.add('inputMal');
    } else errorFechas.classList.add('error');

    //* Certificado
    let filePath2 = certificado.value;
    if(!pdfExtension.exec(filePath2)){
        errorCertificado.classList.remove('error');
        errorCertificado.innerHTML = "Debes subir un archivo de tipo pdf";
        certificado.value = '';
    } else errorCertificado.classList.add('error');

    //* referencia 1
    funcionNombre(nombre1, errorNombre1);

    //* teléfono referencia 1
    funcionTelefono(telefono1, errorTelefono1);

    //* correo referencia 1
    funcionCorreo(correo1, errorCorreo1);

    //* referencia 2
    funcionNombre(nombre2, errorNombre2);

    //* teléfono referencia 2
    funcionTelefono(telefono2, errorTelefono2);

    //* correo referencia 2
    funcionCorreo(correo2, errorCorreo2);

    //* referencia 3
    funcionNombre(nombre3, errorNombre3);

    //* teléfono referencia 3
    funcionTelefono(telefono3, errorTelefono3);

    //* correo referencia 3
    funcionCorreo(correo3, errorCorreo3);
})