<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="/">SQL MasterQuest</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link" @click="closeNavbar">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/module" class="nav-link" @click="closeNavbar">Practice Module</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact" class="nav-link" @click="closeNavbar">Contact</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { Collapse } from 'bootstrap';

export default {
  name: 'AppNavbar',
  methods: {
    closeNavbar() {
      let navbarCollapseElement = document.getElementById('navbarNav');
      if (navbarCollapseElement.classList.contains('show')) {
        let navbarCollapseInstance = new Collapse(navbarCollapseElement, {
          toggle: false
        });
        navbarCollapseInstance.hide();
      }
    }
  }
}
</script>




<style scoped>

.navbar-brand {
  color: white;
  padding-left: 1rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}

.navbar-brand:hover, .navbar-brand:focus {
  transform: scale(1.05);
  text-decoration: none;
}

.navbar {
  background-color: #0c75cf !important; /* Забезпечує, що весь навбар має колір #4682b4 */
}

.nav-link {
  margin-right: 15px;
  color: white !important; /* Встановлює колір тексту посилань на білий */
}

.nav-link:hover, .nav-link:focus {
  border-radius: 5px; 
  background-color: #1580f1; /* Темніший відтінок для ефекту при наведенні */
  transform: scale(1.05);
  color: white !important; /* Зберігає колір тексту білим при наведенні */
}

/* Додаткові стилі для адаптації мобільного меню */
.navbar-toggler {
  border-color: white !important; /* Змінює колір границі кнопки-перемикача */
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'><path stroke='rgba(255, 255, 255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/></svg>"); /* Встановлює іконку-перемикач білого кольору */
}
</style>






<!-- <style scoped>
  .navbar-brand {
  padding: 2px; /* Додайте трохи падінгу, щоб границя не була занадто близько до тексту */
  margin: 0 10px; /* Додайте трохи маржину між словами */
  border: 1px solid; /* Границя товщиною 1 піксель */
  border-color: #031f3d; /* Синя границя */
  font-family: 'Arial', sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  background: -webkit-linear-gradient(left, #0a2081,#0a2081, #e9fc1c, #28a745);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: transform 0.3s ease;
}
  @keyframes rainbowAnimation {
  0% { box-shadow: 0 0 0 4px #FF0000; }
  14% { box-shadow: 0 0 0 4px #FF7F00; }
  28% { box-shadow: 0 0 0 4px #FFFF00; }
  42% { box-shadow: 0 0 0 4px #00FF00; }
  57% { box-shadow: 0 0 0 4px #0000FF; }
  71% { box-shadow: 0 0 0 4px #4B0082; }
  85% { box-shadow: 0 0 0 4px #9400D3; }
  100% { box-shadow: 0 0 0 4px #FF0000; }
}

.navbar-brand {
  font-family: 'Arial', sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  animation: rainbowAnimation 3s infinite linear;
  color: white; /* Ви можете змінити колір тексту за потребою */
  padding: 5px; /* Забезпечує відступ для "рамки" */
}
.nav-link {
  color: #4682b4; /* Встановлення кольору посилань */
  margin-left: 1rem; /* Відступи між посиланнями */
  padding: 0.5rem 1rem; /* Падінг для посилань */
  border-radius: 5px; /* Заокруглені краї для посилань */
  transition: background-color 0.3s ease, color 0.3s ease; /* Плавна анімація для фону та кольору тексту */
}

.nav-link:hover, .nav-link:focus {
  background-color: #36648b; /* Темніший відтінок #4682b4 для фону при наведенні */
  color: #fff; /* Зміна кольору тексту на білий для кращої видимості */
}
</style> -->
