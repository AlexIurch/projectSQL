<template>
  <div id="app">
    <AppNavbar /> 
    <div class="content">
      <router-view></router-view> <!-- Основний вміст застосунку -->
    </div>
    <AppFooter /> 
  </div>
</template>

<script>
import AppNavbar from './AppNavbar.vue';
import AppFooter from './AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppNavbar,
    AppFooter
  }
}
</script>

<style>
#app {
  font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ;
  display: flex;
  flex-direction: column;
  height: 100vh; /* Висота всього застосунку дорівнює висоті вікна перегляду */
}

.content {
 
  flex: 1; /* Основний вміст займає всю доступну область */
  overflow: auto; /* Додає прокрутку, якщо контент перевищує висоту */
}
</style>
