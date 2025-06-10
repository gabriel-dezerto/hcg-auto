document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btn');
  const userInput = document.getElementById('user');
  const passInput = document.getElementById('pass');

  console.log('Usuários disponíveis para login:', getUsuarios());

  btn.addEventListener('click', () => {
    const user = userInput.value.trim();
    const pass = passInput.value;
    const usuarios = getUsuarios();

    const validaLogin = usuarios.some(u => u.login === user && u.passw === pass);

    if (validaLogin) {
      // Salva o estado de login e o nome do usuário
      localStorage.setItem('usuarioLogado', 'true');
      localStorage.setItem('usuario', user);

      window.location.href = 'index.html';
    } else {
      alert('[ERRO] Insira os dados corretamente');
    }
  });
});
