function validar(){
    var nome =formPrincipal.nome.value;
    var email =formPrincipal.email.value;
   var telefone =formPrincipal.telefone.value;
   var mensagem =formPrincipal.mensagem.value;
if (nome == "") {
    alert('Preencha o campo nome');
formPrincipal.nome.focus();
return false;
}


if (email == "" || email.indexOf('@') == -1) {
    alert('Digite um email válido.');
formPrincipal.email.focus();
return false;
}

if (telefone == "" || telefone.length <9 ) {
    alert('Telefone precisa ter ao menos 9 dígitos');
formPrincipal.telefone.focus();
return false;
}
if (mensagem == "") {
    alert('Escreva sua mensagem');
formPrincipal.mensagem.focus();
return false;
}

}



















