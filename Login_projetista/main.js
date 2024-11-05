const passwordAccess = (loginPass, loginEye) => {
    const input = document.getElementById(loginPass),
          iconEye = document.getElementById(loginEye);

    if (input && iconEye) {
        iconEye.addEventListener('click', () => {
            input.type = input.type === 'password' ? 'text' : 'password';
            iconEye.classList.toggle('ri-eye-line');
            iconEye.classList.toggle('ri-eye-close-line');
        });
    } else {
        console.error('Elementos não encontrados: verifique os IDs fornecidos.');
    }
};

document.addEventListener("DOMContentLoaded", () => {
    // Configurar a visibilidade da senha para login
    passwordAccess('password', 'loginPassword');
    // Configurar a visibilidade da senha para registro
    passwordAccess('passwordCreate', 'loginPasswordCreate');

    // Selecionar os elementos necessários
    const loginAccessRegister = document.getElementById('loginAccessRegister'),
          buttonRegister = document.getElementById('loginButtonRegister'),
          buttonAccess = document.getElementById('loginButtonAccess');

    // Ação para abrir o registro
    buttonRegister.addEventListener('click', () => {
        loginAccessRegister.classList.add('active'); // Adiciona a classe 'active' para mostrar a tela de registro
    });

    // Ação para voltar ao login
    buttonAccess.addEventListener('click', () => {
        loginAccessRegister.classList.remove('active'); // Remove a classe 'active' para mostrar a tela de login
    });
});
