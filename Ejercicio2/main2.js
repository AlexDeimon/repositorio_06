const errorEmail = document.getElementById('errorEmail');
const errorContraseña = document.getElementById('errorContraseña');
const valoresAlfanumericos = /^[A-Za-z0-9]+$/;

//* SignUp
const signUpForm = document.querySelector("#signup-form");
signUpForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = signUpForm["signup-email"].value;
    const password = signUpForm["signup-password"].value;
    
    if(email.length == 0 || !email.includes('@') || !email.includes('mail') || !email.includes('.co')) errorEmail.textContent = "Correo invalido";
    else errorEmail.textContent = "";
    
    if(password.length < 8 || !password.match(valoresAlfanumericos)) errorContraseña.textContent = "Tu contraseña debe tener mínimo 8 caracteres alfanuméricos";
    else errorContraseña.textContent ="";
    
    if(errorContraseña.textContent == "" && errorEmail.textContent == ""){
        //* Authenticate the User
        auth.createUserWithEmailAndPassword(email, password).then((userCredential) => {
            //* clear the form
            signUpForm.reset();
            Swal.fire({
                icon: 'success',
                title: 'Registro exitoso!'
            })
        }).catch((error) => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'El correo que intentas registrar ya existe!'
            })
            signUpForm.reset();
        });
    }
});

//* SingIn
const signInForm = document.querySelector("#login-form");
signInForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = signInForm["login-email"].value;
    const password = signInForm["login-password"].value;

    //* Authenticate the User
    auth.signInWithEmailAndPassword(email, password).then((userCredential) => {
        location.href = "ValidacionDatos.html";
    }).catch((error) => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Parece que tu correo no está registrado o te has equivocado en tu contraseña!'
        })
        signInForm.reset();
    });
});

