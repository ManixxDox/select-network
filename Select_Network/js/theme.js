// theme.js
const themeToggle = document.getElementById('theme-toggle');
const mobileThemeToggle = document.getElementById('mobile-theme-toggle');

// Check for saved user preference or system preference
const currentTheme = localStorage.getItem('theme') || 
                     (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

// Apply the current theme
document.documentElement.classList.toggle('dark', currentTheme === 'dark');

// Update toggle button state
const updateToggleButton = () => {
  const isDark = document.documentElement.classList.contains('dark');
  themeToggle.innerHTML = isDark ? '☀️' : '🌙';
  if (mobileThemeToggle) {
    mobileThemeToggle.innerHTML = `<span class="mr-2">${isDark ? '☀️' : '🌙'}</span> ${isDark ? 'Light' : 'Dark'} Mode`;
  }
};

// Toggle theme function
const toggleTheme = () => {
  document.documentElement.classList.toggle('dark');
  const theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
  updateToggleButton();
};

// Event listeners
themeToggle.addEventListener('click', toggleTheme);
if (mobileThemeToggle) {
  mobileThemeToggle.addEventListener('click', toggleTheme);
}

// Watch for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
  if (!localStorage.getItem('theme')) {
    document.documentElement.classList.toggle('dark', e.matches);
    updateToggleButton();
  }
});

// Initialize button state
updateToggleButton();