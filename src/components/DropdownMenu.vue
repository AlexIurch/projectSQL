<template>
    <div class="dropdown">
      <button @click="toggleDropdown" class="dropdown-button">Меню</button>
      <div v-if="isOpen" class="dropdown-content">
        <router-link to="/path1" class="dropdown-item">Пункт 1</router-link>
        <router-link to="/path2" class="dropdown-item">Пункт 2</router-link>
        <router-link to="/path3" class="dropdown-item">Пункт 3</router-link>
        <!-- Додайте більше посилань за потреби -->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isOpen: false, // Стан для відстеження відкриття/закриття випадаючого меню
      };
    },
    methods: {
      toggleDropdown() {
        this.isOpen = !this.isOpen; // Переключення стану відкриття/закриття
      }
    }
  }
  </script>
  
  <style scoped>
  .dropdown {
    position: relative; /* Важливо для позиціонування випадаючого контенту */
  }
  
  .dropdown-button {
    padding: 10px;
    background-color: #4CAF50; /* Зелений колір кнопки */
    color: white;
    border: none;
    cursor: pointer; /* Зміна курсора на покажчик */
    border-radius: 5px; /* Заокруглені краї кнопки */
  }
  
  .dropdown-content {
    display: none; /* Початково випадаючий контент прихований */
    position: absolute;
    background-color: #f9f9f9; /* Світлий фон для контенту */
    min-width: 160px; /* Мінімальна ширина контенту */
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2); /* Тінь для контенту */
    z-index: 1; /* Забезпечує відображення контенту над іншими елементами */
  }
  
  .dropdown-content .dropdown-item {
    color: black;
    padding: 12px 16px;
    text-decoration: none; /* Видалення підкреслення з посилань */
    display: block; /* Посилання займають всю доступну ширину */
  }
  
  .dropdown-content .dropdown-item:hover {
    background-color: #f1f1f1; /* Зміна фону посилань при наведенні */
  }
  
  .dropdown-content {
    display: block; /* Показуємо контент, коли меню відкрите */
  }
  </style>
  