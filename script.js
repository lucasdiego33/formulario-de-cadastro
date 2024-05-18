const form = document.getElementById("form")
const name = document.getElementById("nome")
const email = document.getElementById("email")
const senha = document.getElementById("senha")
const confirmation = document.getElementById("senhas")


form.addEventListener("submit", (event) => {
    event.preventDefault();

    pegarNome();
    inputEmail();
    inputSenha();
   confirmacao()
   
})



function pegarNome(){
  const  myName = nome.value;
 
    if(myName === ""){
        errorInput(nome, "Preencha o Nome")

    }else {
      const  form = nome.parentElement;
      form.classList = "form-content"
    }
        
}



function inputEmail(){

    const  emails = email.value;

    if(emails === ""){
        errorInput(email,"E-mail  Obrigatorio")

    }else {
        const  form = email.parentElement;
        form.className = "form-content"

    }
}


function inputSenha(){
    const valueSenha = senha.value;

    if(valueSenha === ""){
        errorInput(senha, "Digite Sua Senha")

    }else if(valueSenha.length < 8) {
        errorInput(senha, "Sua Senha Deve Conter  no Minimo 8 Caracteres")

    }else {
        const form = senha.parentElement;
        form.className = "form-content"
    }

    
}



function confirmacao(){
    const valueSenha = senha.value;
     const confirmacaoValue = confirmation.value;
       

     if(confirmacaoValue === ""){
        errorInput(confirmation, "A Confirmação de Senha é Obrigatoria")
       
        
     }else if(confirmacaoValue !== valueSenha){
        errorInput(confirmation, "As Senhas Não São Iguais")

     }else {
        const form = confirmation.parentElement;
        form.className = "form-content";
     }
    
    
}

function errorInput(input, menssagem) {
    const form = input.parentElement;
    const menssag = form.querySelector("a")
    menssag.innerText = menssagem
    form.className = "form-content error"
}

