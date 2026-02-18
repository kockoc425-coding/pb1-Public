function toggleTheme() {
  const body = document.body;
  const btn = document.getElementById('theme-toggle');
  body.classList.toggle('dark');

  if (body.classList.contains('dark')) {
    btn.textContent = '☀️ 라이트모드';
    localStorage.setItem('theme', 'dark');
  } else {
    btn.textContent = '🌙 다크모드';
    localStorage.setItem('theme', 'light');
  }
}

// Formspree 폼 비동기 제출
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const res = await fetch(form.action, {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' }
    });
    if (res.ok) {
      form.style.display = 'none';
      document.getElementById('form-success').style.display = 'block';
    }
  });
});

// 저장된 테마 적용
(function () {
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') {
    document.body.classList.add('dark');
    document.addEventListener('DOMContentLoaded', () => {
      document.getElementById('theme-toggle').textContent = '☀️ 라이트모드';
    });
  }
})();
