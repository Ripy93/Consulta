let cpf = document.getElementById('cpf');
let telefone = document.getElementById('telefone');

cpf.addEventListener('keypress',()=>{
    let cpfLength = cpf.value.length;
    if(cpfLength === 3 || cpfLength === 7){
        cpf.value += ".";
    }else if(cpfLength === 11){
        cpf.value += "-";
    }
});

telefone.addEventListener('keypress', ()=>{
    let telLength = telefone.value.length;
    if(telLength === 0){
        telefone.value += '(';
    }else if(telLength === 3){
        telefone.value += ') ';
    }else if(telLength === 6){
        telefone.value += ' ';
    }else if(telLength === 11){
        telefone.value += '-';
    }
});

function salvarNome() {
    let nome = document.getElementById('nome').value;
    let cpf = document.getElementById('cpf').value;
    let telefone = document.getElementById('telefone').value;
    localStorage.setItem('nomeUsuario', nome);
    localStorage.setItem('cpfUsuario', cpf);
    localStorage.setItem('telUsuario', telefone);
}

let button = document.getElementById('openModal');
let buttonC = document.getElementById('closeModal');
let modal = document.querySelector('dialog');

button.onclick = ()=>{
    modal.showModal();
}
buttonC.onclick = ()=>{
    modal.close();
}

let claroMode = document.getElementById('modoClaro');

claroMode.onclick = ()=>{
    document.body.classList.toggle('claro');
}