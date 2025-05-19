// Função para mascara de idade
function mascaraIdade(input) {
    input.value = input.value.replace(/\D/g, ''); // Remove qualquer coisa que não seja número
}

// Função para mascara de telefone
function mascaraTelefone(input) {
    input.value = input.value.replace(/\D/g, ''); // Remove qualquer coisa que não seja número
    input.value = input.value.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3'); // Formato (xx) xxxx-xxxx
}

// Função para mascara de CNPJ
function mascaraCNPJ(input) {
    input.value = input.value.replace(/\D/g, ''); // Remove qualquer coisa que não seja número
    input.value = input.value.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5'); // Formato xx.xxx.xxx/xxxx-xx
}