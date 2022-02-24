const validar = document.getElementById('validar');
const parrafos = Array.from(document.querySelectorAll('p'));
const button = document.getElementById('submit');

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
const profesionales = document.getElementById('profesionales');
const parrafosP = parrafos.filter(p => p.parentElement.classList.contains('profesionales'));
let datosProfesion = [];
const errorProfesionales = document.getElementById('errorProfesionales');

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
const referencias = document.getElementById('referencias');
const parrafosR = parrafos.filter(p => p.parentElement.classList.contains('referencias'));
let datosRefe = [];
const errorReferencias = document.getElementById('errorReferencias');

//* constantes adicionales
const valoresNumericos = /^[0-9 ]+$/;
const valoresAlfabeticos = /^[A-Za-z ]+$/;
const allowedExtensions = /(.jpg|.jpeg|.png)$/i;
const pdfExtension = /(.pdf)$/i;

//* funciones
const funcionNombre = (nombre, error) => {
    if(nombre.value.length < 5 || nombre.value.length > 30 || !nombre.value.match(valoresAlfabeticos)) error.classList.remove('hidden');
    else error.classList.add('hidden');
}

const funcionTelefono = (telefono, error) => {
    if(telefono.value.length > 20 || telefono.value.length < 7 || !telefono.value.match(valoresNumericos)) error.classList.remove('hidden');
    else error.classList.add('hidden');
}

const funcionCorreo = (correo, error) => {
    if(correo.value.length == 0 || !correo.value.includes('@') || !correo.value.includes('mail') || !correo.value.includes('.co')) error.classList.remove('hidden');
    else error.classList.add('hidden');
}

const datosProfesionales = () => {
    //* Empresa anterior
    if(empresa.value.length < 3 || empresa.value.length > 30) errorEmpresa.classList.remove('hidden');
    else errorEmpresa.classList.add('hidden');

    //* jefe anterior
    if(jefe.value.length < 5 || jefe.value.length > 30 || !jefe.value.match(valoresAlfabeticos)) errorJefe.classList.remove('hidden');
    else errorJefe.classList.add('hidden');

    //* teléfono jefe
    if(telefonoJefe.value.length > 20 || telefonoJefe.value.length < 7 || !telefonoJefe.value.match(valoresNumericos)) errorTelefonoJefe.classList.remove('hidden');
    else errorTelefonoJefe.classList.add('hidden');

    //* fechaInicio & fechaSalida
    if(fechaInicio.value == '' || fechaSalida.value == ''){
        errorFechas.classList.remove('hidden');
        errorFechas.innerHTML = "Alguna o ambas fechas están vacias";
    } else if(fechaInicio.value > fechaSalida.value){
        errorFechas.classList.remove('hidden');
        errorFechas.innerHTML = "La fecha de ingreso debe ser anterior a la fecha de salida";
    } else errorFechas.classList.add('hidden');

    if(parrafosP.every(p => p.classList.contains('hidden'))){
        let datosEmpresa = {
            empresa: empresa.value,
            jefe: jefe.value,
            telefonoJefe: telefonoJefe.value,
            fechaInicio: fechaInicio.value,
            fechaSalida: fechaSalida.value
        }
        datosProfesion.push(datosEmpresa);
        console.log(datosProfesion);
        profesionales.insertAdjacentHTML('afterend',`<p class="item">${datosEmpresa.empresa}</p>`);
        errorProfesionales.classList.add('hidden');
        empresa.value = '';
        jefe.value = '';
        telefonoJefe.value = '';
        fechaInicio.value = '';
        fechaSalida.value = '';
    }
}

const datosReferencias = () => {
    //* referencia 
    funcionNombre(nombre1, errorNombre1);

    //* teléfono referencia 
    funcionTelefono(telefono1, errorTelefono1);

    //* correo referencia 
    funcionCorreo(correo1, errorCorreo1);

    if(parrafosR.every(p => p.classList.contains('hidden'))){
        let datosRefencia = {
            nombre: nombre1.value,
            telefono: telefono1.value,
            correo: correo1.value
        }
        datosRefe.push(datosRefencia);
        console.log(datosRefe)
        referencias.insertAdjacentHTML('afterend',`<p class="item">${datosRefencia.nombre}</p>`);
        errorReferencias.classList.add('hidden');
        nombre1.value = '';
        telefono1.value = '';
        correo1.value = '';
    }
}

//* evento
validar.addEventListener('click', () => {
    //* nombre
    funcionNombre(nombre, errorNombre);

    //* apellido
    if(apellido.value.length < 5 || apellido.value.length > 30 || !apellido.value.match(valoresAlfabeticos)) errorApellido.classList.remove('hidden');
    else errorApellido.classList.add('hidden');

    //* nacimiento
    let hoy = new Date();
    let cumpleaños = `${nacimiento.value}`;
    cumpleaños = new Date(cumpleaños);
    let edad = hoy.getFullYear() - cumpleaños.getFullYear();
    let mes = hoy.getMonth() - cumpleaños.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < cumpleaños.getDate())) edad--;

    if (nacimiento.value == ''){
        errorNacimiento.classList.remove('hidden');
        errorNacimiento.innerHTML = "Digita tu fecha de nacimiento";
    } else if(edad >= 18) errorNacimiento.classList.add('hidden');
    else {
        errorNacimiento.classList.remove('hidden');
        errorNacimiento.innerHTML = "Eres menor de edad";
    }

    //* pais
    if(pais.value.length < 3 || !pais.value.match(valoresAlfabeticos)) errorPais.classList.remove('hidden');
    else errorPais.classList.add('hidden');

    //* teléfono
    funcionTelefono(telefono, errorTelefono);

    //* correo
    funcionCorreo(correo, errorCorreo);

    //*foto
    let filePath = foto.value;
    if(!allowedExtensions.exec(filePath)){
        errorFoto.classList.remove('hidden');
        foto.value = '';
    } else errorFoto.classList.add('hidden');

    //* profesionales
    if(datosProfesion.length === 0) errorProfesionales.classList.remove('hidden');

    //* Certificado
    let filePath2 = certificado.value;
    if(!pdfExtension.exec(filePath2)){
        errorCertificado.classList.remove('hidden');
        certificado.value = '';
    } else errorCertificado.classList.add('hidden');

    //* referencias
    if(datosRefe.length === 0) errorReferencias.classList.remove('hidden');
    
    //* fin
    if(parrafos.every(p => p.classList.contains('hidden'))){
        button.classList.remove('hidden');
        validar.classList.add('hidden');
    }
})