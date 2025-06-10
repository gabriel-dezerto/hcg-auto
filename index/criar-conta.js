function formatarCPF(cpf) {
  return cpf
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
}

function verificaSenha(senha) {
  if (senha.length < 8) {
    alert('[ERRO] Siga atentamente as regras para criar uma Senha');
    return false;
  } else{
    return true;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Máscara de CPF
  const cpfInput = document.getElementById('cpf');
  cpfInput.addEventListener('input', e => {
    e.target.value = formatarCPF(e.target.value);
  });

  // Dicas de senha (focus/blur)
  const senhaInput = document.getElementById('senha');
  senhaInput.addEventListener('focus', () =>
    document.getElementById('mensagemSenha').style.display = 'block'
  );
  senhaInput.addEventListener('blur', () =>
    document.getElementById('mensagemSenha').style.display = 'none'
  );

  // Envio do formulário
  document.getElementById('formCadastro').addEventListener('submit', event => {
    event.preventDefault();

    const nome  = document.getElementById('nome').value.trim();
    const cpf   = cpfInput.value.trim();
    const email = document.getElementById('email').value.trim();
    const senha = senhaInput.value;

    // Validações básicas
    if (!nome) {
      alert('[ERRO] O campo Nome é obrigatório.');
      return;
    }
    if (!cpf || cpf.length < 14) {
      alert('[ERRO] CPF inválido.');
      return;
    }
    if (!email || !/.+@.+\..+/.test(email)) {
      alert('[ERRO] E‑mail inválido.');
      return;
    }
    if (!verificaSenha(senha)) {
      return;
    }

    // 1) Pega a lista atual (pode vir do DEFAULT_USERS ou do localStorage)
    const usuarios = getUsuarios();
    // 2) Adiciona o novo usuário
    usuarios.push({ login: nome, passw: senha });
    // 3) Grava de volta no localStorage
    saveUsuarios(usuarios);

    // Mostra mensagem de sucesso e redireciona
    document.getElementById('mensagemCadastro').style.display = 'block';
    setTimeout(() => {
      window.location.href = 'login.html';
    }, 2000);
  });
});
