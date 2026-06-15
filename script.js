// Scroll fade-in animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// Login simulation
function doLogin() {
  const user = document.getElementById('loginUser').value.trim().toLowerCase();
  const pass = document.getElementById('loginPass').value;
  const status = document.getElementById('loginStatus');

  status.className = 'login-status';
  status.style.display = 'block';

  if (user === 'admin' && pass === 'admin123') {
    status.classList.add('status-success');
    status.textContent = '✓ Bem-vindo, Administrador! Acesso total liberado.';
  } else if (user === 'visitante') {
    status.classList.add('status-success');
    status.textContent = '✓ Conectado como visitante. Projetos públicos disponíveis.';
  } else {
    status.classList.add('status-error');
    status.textContent = '✗ Credenciais inválidas. Tente: visitante / admin (senha: admin123).';
  }
}

// Share button
function share(name) {
  if (navigator.share) {
    navigator.share({ title: name, url: window.location.href });
  } else {
    navigator.clipboard.writeText(window.location.href).then(() => {
      alert('Link copiado: ' + name);
    });
  }
}
