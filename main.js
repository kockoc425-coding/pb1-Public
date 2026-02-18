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
