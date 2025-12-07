let i = 0;
const adjectives = ['structurée', 'stylée', 'dynamique'];
const el = document.getElementById('adjective');
setInterval(() => el.innerText = adjectives[i++ % 3], 1000);
