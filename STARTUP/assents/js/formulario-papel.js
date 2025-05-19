// JavaScript para controlar a exibição das opções e a rotação da seta
const roleLabel = document.getElementById('role');
const options = document.querySelector('.options');
const arrow = document.querySelector('.arrow');

roleLabel.addEventListener('click', function() {
    // Alterna a visibilidade das opções
    options.classList.toggle('show');

    // Alterna a rotação da seta
    arrow.classList.toggle('rotate');
});


// Função para redirecionar baseado na opção selecionada
document.getElementById('submitButton').addEventListener('click', function() {
    const selectedRole = document.querySelector('input[name="role"]:checked');
    
    // Verifica se uma opção foi selecionada
    if (!selectedRole) {
        alert("Por favor, selecione um papel.");
        return;
    }

    // Redireciona de acordo com a seleção
    switch (selectedRole.value) {
        case 'medico':
            window.location.href = 'cadastrar-medico.html';
            break;
        case 'paciente':
            window.location.href = 'cadastrar-paciente.html';
            break;
        case 'instituicao':
            window.location.href = 'cadastrar-instituicao.html';
            break;
        default:
            alert('Seleção inválida!');
    }
});