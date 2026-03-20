document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');
    const cpfInput = document.getElementById('cpf');
    const cepInput = document.getElementById('cep');

    // Máscara para CPF
    cpfInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 11) value = value.slice(0, 11);
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
        e.target.value = value;
    });

    // Máscara para CEP
    cepInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 8) value = value.slice(0, 8);
        value = value.replace(/(\d{5})(\d)/, '$1-$2');
        e.target.value = value;
    });

    // Busca de CEP via API ViaCEP
    cepInput.addEventListener('blur', async (e) => {
        const cep = e.target.value.replace(/\D/g, '');
        if (cep.length !== 8) return;

        try {
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const data = await response.json();

            if (data.erro) {
                alert('CEP não encontrado!');
                return;
            }

            document.getElementById('logradouro').value = data.logradouro;
            document.getElementById('bairro').value = data.bairro;
            document.getElementById('cidade').value = data.localidade;
            document.getElementById('uf').value = data.uf;
            document.getElementById('numero').focus();

        } catch (error) {
            console.error('Erro ao buscar CEP:', error);
        }
    });

    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const cpf = document.getElementById('cpf').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;

            // Address fields
            const cep = document.getElementById('cep').value;
            const logradouro = document.getElementById('logradouro').value;
            const numero = document.getElementById('numero').value;
            const bairro = document.getElementById('bairro').value;
            const cidade = document.getElementById('cidade').value;
            const uf = document.getElementById('uf').value;

            // Validação simples de senha
            if (password !== confirmPassword) {
                alert('As senhas não coincidem!');
                return;
            }

            // Simulação de cadastro
            console.log('Dados do cadastro:', { 
                name, cpf, email, password,
                address: { cep, logradouro, numero, bairro, cidade, uf }
            });
            
            // Feedback visual de sucesso
            const btn = signupForm.querySelector('.auth-button');
            const originalText = btn.innerText;
            
            btn.innerText = 'Processando...';
            btn.disabled = true;
            btn.style.opacity = '0.7';

            setTimeout(() => {
                alert(`Parabéns ${name}! Sua conta na LuxeStore foi criada com sucesso com o endereço em ${cidade}-${uf}.`);
                window.location.href = 'index.html';
            }, 1500);
        });
    }
});
