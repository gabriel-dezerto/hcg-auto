
const DEFAULT_USERS = [
    { login: "Henrique", passw: "Henrique" },
    { login: "Caua",    passw: "Caua"    },
    { login: "Gabriel", passw: "Gabriel" },
    { login: "admin",   passw: "admin"   }
  ];
  
  function getUsuarios() {
    // Se não existir nada em localStorage, retorna o DEFAULT_USERS
    const dados = localStorage.getItem('usuarios');
    return dados ? JSON.parse(dados) : DEFAULT_USERS.slice();
  }
  
  function saveUsuarios(usuarios) {
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
  }
  