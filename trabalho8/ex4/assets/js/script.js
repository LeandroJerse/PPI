    


    document.querySelector('input[name="email"]').addEventListener('keyup', (event) => {
    if(document.querySelector('input[name="email"] + span') !== null) {
        document.querySelector('input[name="email"] + span').remove();
    }
});


document.querySelector('input[name="senha"]').addEventListener('keyup', (event) => {
    if(document.querySelector('input[name="senha"] + span') !== null) {
        document.querySelector('input[name="senha"] + span').remove();
    }
});

document.querySelector('input[name="usuario"]').addEventListener('keyup', (event) => {
    if(document.querySelector('input[name="usuario"] + span') !== null) {
        document.querySelector('input[name="usuario"] + span').remove();
    }
});
    
    document.formulario_login.addEventListener('submit', (event) => { 
    let usuario = event.target.usuario.value;
    let email = event.target.email.value;
    let senha = event.target.senha.value;
    let submit = true;

    if (email === "") {
        submit=false;
        let tpm =document.querySelector('input[name="email"]');
        tpm.insertAdjacentHTML('afterend', '<span class="form-error"> O email deve ser preenchido.</span>');
        
    }
    if (senha === "") {
        submit=false;
        let tpm =document.querySelector('input[name="senha"]');
        tpm.insertAdjacentHTML('afterend', '<span class="form-error">A senha deve ser preenchida.</span>');

    }
    if (usuario === "") {
        submit = false;
        let tpm =document.querySelector('input[name="usuario"]');
        tpm.insertAdjacentHTML('afterend', '<span class="form-error">O usuário deve ser preenchido.</span>');

    }
    if (!submit) {
        event.preventDefault();
    }

});


''