document.addEventListener('DOMContentLoaded', () => {
    // Capturamos Dom 
    let btnBack = document.getElementById('Reverse');
    const Ir_Registro = document.getElementById('eXtra');
    const Registro = document.getElementById('registro-container')
    const Login = document.getElementById('login-container')
    // button back 
    
    Registro.style.display = 'none'

    btnBack.addEventListener('click', () => {
        window.history.go(-1);
    });

    Ir_Registro.addEventListener('click', () => {
        Registro.style.display = 'block';
        Login.style.display = 'none';
    });
});
