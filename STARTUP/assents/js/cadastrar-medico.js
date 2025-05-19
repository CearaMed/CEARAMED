function mascaraCRM(input) {
    let value = input.value.replace(/\D/g, '');
    value = value.replace(/^(\d{2})(\d{4})(\d{4})$/, '$1.$2.$3');
    input.value = value;
}

function mascaraTelefone(input) {
    input.value = input.value.replace(/\D/g, '');
    input.value = input.value.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
}