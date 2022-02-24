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