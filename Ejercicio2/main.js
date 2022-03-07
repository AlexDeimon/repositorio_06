const config = {
    apiKey: "AIzaSyCC4Iz4c3rLNuv35x9TVJbnBZa5SUytiqY",
    authDomain: "proyecto-ing-web-f20d3.firebaseapp.com",
    databaseURL: "https://proyecto-ing-web-f20d3-default-rtdb.firebaseio.com",
    projectId: "proyecto-ing-web-f20d3",
    storageBucket: "proyecto-ing-web-f20d3.appspot.com",
    messagingSenderId: "89679068108",
    appId: "1:89679068108:web:f9263a29f897ddda02fb69",
    measurementId: "G-LTK890G826"
  };
  
  //* Initialize Firebase
  firebase.initializeApp(config);

//* Reference messages collection
let messagesRef = firebase.database().ref('hojasDeVida');

$('#form').submit(function(e) {
    e.preventDefault();
 
    let newMessageRef = messagesRef.push();
    newMessageRef.set({
        nombre: $('#nombre').val(),
        apellidos: $('#apellidos').val(),
        nacimiento: $('#nacimiento').val(),
        pais: $('#pais').val(),
        telefono: $('#telefono').val(),
        correo: $('#correo').val(),
        datosProfesionales: datosProfesion,
        formacionAcademica: $('#formacionAcademica').val(),
        idioma: $('#idiomas').val(),
        referencias: datosRefe
    });
 
    document.location.reload();
});

const getCV = document.getElementById('getCV');
const listCV = document.getElementById('listCV');
const logout = document.getElementById('logout');
const auth = firebase.auth();

logout.addEventListener("click", () => {
    auth.signOut().then(() => {
        location.href = "inicio.html";
    });
  });

getCV.addEventListener('click', () => {
    messagesRef.once('value').then((snapshot) => {
        Object.keys(snapshot.val()).forEach((key) => {
            listCV.insertAdjacentHTML('beforeend',
            `<article class="article">
                <h2>Hoja de vida de ${snapshot.val()[key].nombre} ${snapshot.val()[key].apellidos}</h2>
                <div>
                    <div class="divForm">
                        <fieldset>
                            <legend>Datos personales</legend>
                            <div>
                                <label for="nombre">Nombres: ${snapshot.val()[key].nombre}</label><br>
                                <label for="apellidos">Apellidos: ${snapshot.val()[key].apellidos}</label><br>
                                <label for="nacimiento">Fecha Nacimiento: ${snapshot.val()[key].nacimiento}</label><br>
                                <label for="pais">Pais de recidencia: ${snapshot.val()[key].pais}</label><br>
                                <label for="telefono">Teléfono: ${snapshot.val()[key].telefono}</label><br>
                                <label for="correo">Correo electrónico: ${snapshot.val()[key].correo}</label>
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend>Educación</legend>
                            <div>
                                <label for="formacionAcademica">Formación académica: ${snapshot.val()[key].formacionAcademica}</label><br>
                                <label for="idiomas">Idiomas: ${snapshot.val()[key].idioma}</label><br>   
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend>Datos empresa ${snapshot.val()[key].datosProfesionales[0].empresa}</legend>
                            <div>
                                <label for="jefe">Nombre Jefe anterior: ${snapshot.val()[key].datosProfesionales[0].jefe}</label><br>
                                <label for="telefonoJefe">Teléfono Jefe anterior: ${snapshot.val()[key].datosProfesionales[0].telefonoJefe}</label><br>
                                <label for="fechaInicio">Fecha Ingreso: ${snapshot.val()[key].datosProfesionales[0].fechaInicio}</label><br>
                                <label for="fechaSalida">Fecha Salida: ${snapshot.val()[key].datosProfesionales[0].fechaSalida}</label> 
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend>Referencia Personal</legend>
                            <div>
                                <label for="nombre1">Nombre: ${snapshot.val()[key].referencias[0].nombre}</label><br>
                                <label for="telefono1">Teléfono: ${snapshot.val()[key].referencias[0].telefono}</label><br>
                                <label for="correo1">Correo electrónico: ${snapshot.val()[key].referencias[0].correo}</label>
                            </div>
                        </fieldset>  
                    </div>
                </div>
            </article>`
            )
        });
    });
})
