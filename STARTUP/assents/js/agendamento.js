document.addEventListener('DOMContentLoaded', function() {
    // Variáveis de elementos
    const addScheduleBtn = document.getElementById('add-schedule');
    const listPatientsBtn = document.getElementById('list-patients');
    const scheduleListContainer = document.getElementById('schedule-list-container');
    const scheduleForm = document.getElementById('scheduleForm');
    const closeBtn = document.getElementById('closeBtn');
    const saveBtn = document.getElementById('saveBtn');
    const scheduleList = document.getElementById('schedule-list');
    const emptyRow = scheduleList.querySelector('tr');
    const listPatientsContainer = document.getElementById('list-patients-container');
    const backBtn = document.getElementById('backBtn');
    const searchInput = document.getElementById('searchInput');
    const patientsList = document.getElementById('patients-list');

    let patients = []; // Array para armazenar os pacientes agendados

    // Função para verificar se a tabela está vazia
    function checkEmptyTable() {
        const rows = scheduleList.querySelectorAll('tr');
        if (rows.length <= 1) {
            emptyRow.style.display = 'table-row';
        } else {
            emptyRow.style.display = 'none';
        }
    }

    // Abrir o formulário de agendamento
    addScheduleBtn.addEventListener('click', function() {
        scheduleListContainer.style.display = 'none';
        listPatientsBtn.classList.add('hidden'); // Esconde o botão de listar pacientes
        addScheduleBtn.classList.add('hidden'); // Esconde o botão de adicionar agendamento
        scheduleForm.style.display = 'block';
    });

    // Fechar o formulário e voltar para a lista de agendamentos
    closeBtn.addEventListener('click', function() {
        scheduleForm.style.display = 'none';
        scheduleListContainer.style.display = 'block';
        listPatientsBtn.classList.remove('hidden'); // Reexibe o botão de listar pacientes
        addScheduleBtn.classList.remove('hidden'); // Reexibe o botão de adicionar agendamento
    });

    // Salvar o agendamento
    saveBtn.addEventListener('click', function() {
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const time = document.getElementById('time').value;
        const date = document.getElementById('date').value;
        const procedure = document.getElementById('procedure').value;

        if (name && phone && time && date && procedure) {
            const newRow = document.createElement('tr');
            newRow.innerHTML = `  
                <td>${name}</td>
                <td>${phone}</td>
                <td>${time}</td>
                <td>${date}</td>
                <td>${procedure}</td>
                <td><span class="delete-icon" onclick="deleteSchedule(this)"><i class="fas fa-trash-alt"></i></span></td>
            `;
            scheduleList.appendChild(newRow);
            patients.push({ name, phone, time, date, procedure });
            checkEmptyTable();
            closeBtn.click(); // Fecha o formulário
        } else {
            alert('Todos os campos devem ser preenchidos!');
        }
    });

    // Deletar um agendamento
    window.deleteSchedule = function(button) {
        const row = button.closest('tr');
        row.remove();
        const index = Array.from(scheduleList.rows).indexOf(row);
        patients.splice(index - 1, 1); // Remove o agendamento do array
        checkEmptyTable();
    };

    // Abrir a tela de listar pacientes
    listPatientsBtn.addEventListener('click', function() {
        scheduleListContainer.style.display = 'none';
        listPatientsBtn.classList.add('hidden'); // Esconde o botão de listar pacientes
        addScheduleBtn.classList.add('hidden'); // Esconde o botão de adicionar agendamento
        listPatientsContainer.style.display = 'block';
        displayPatients(patients); // Exibe os pacientes na tela de listagem
    });

    // Voltar para a tela de agendamentos
    backBtn.addEventListener('click', function() {
        listPatientsContainer.style.display = 'none';
        scheduleListContainer.style.display = 'block';
        listPatientsBtn.classList.remove('hidden'); // Reexibe o botão de listar pacientes
        addScheduleBtn.classList.remove('hidden'); // Reexibe o botão de adicionar agendamento
    });

    // Filtrar pacientes pela pesquisa
    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredPatients = patients.filter(patient =>
            patient.name.toLowerCase().includes(searchTerm)
        );
        displayPatients(filteredPatients);
    });

    // Exibir pacientes filtrados
    function displayPatients(patientsToDisplay) {
        patientsList.innerHTML = ''; // Limpa a lista antes de exibir novamente
        patientsToDisplay.forEach((patient, index) => {
            const row = document.createElement('tr');
            row.innerHTML = ` 
                <td>${patient.name}</td>
                <td>${patient.phone}</td>
                <td>${patient.time}</td>
                <td>${patient.date}</td>
                <td>${patient.procedure}</td>
                <td><span class="delete-icon" onclick="deletePatient(this, ${index})"><i class="fas fa-trash-alt"></i></span></td>
            `;
            patientsList.appendChild(row);
        });
    }

    // Deletar um paciente da listagem
    window.deletePatient = function(button, patientIndex) {
        const row = button.closest('tr');
        row.remove();
        patients.splice(patientIndex, 1); // Remove o paciente do array
        displayPatients(patients); // Atualiza a lista de pacientes
    };

    // Inicializar a lista de pacientes
    displayPatients(patients);
});
