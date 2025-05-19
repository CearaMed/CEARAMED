function mascaraCPF(campo) {
    var cpf = campo.value.replace(/\D/g, '');
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2'); 
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    campo.value = cpf;
}

function mascaraTelefone(input) {
    input.value = input.value.replace(/\D/g, '');
    input.value = input.value.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
}