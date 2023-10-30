<script setup>
import Icons from './components/Icons.vue';
</script>

<template>
  <h1>Language Data Icons</h1>
  <div style="display: flex; gap: 5px;">
    <div class="icon">
      <!-- name,size and fill are props that are handled by Icons.vue -->
      <Icons name="Login" size="200" fill="blue"/>
      <h2>Login</h2>
    </div>
    <div class="icon">
      <Icons name="Login+" size="200" color="red"/>
      <h2>Login+</h2>
    </div>
    <div class="icon">
      <Icons name="Public" size="200" color="orange"/>
      <h2>Public</h2>
    </div>
    <div class="icon">
      <Icons name="SpokenLanguage" size="200" color="purple"/>
      <h2>SpokenLanguage</h2>
    </div>
    <div class="icon">
      <Icons name="WrittenLanguage" size="200" color="green"/>
      <h2>WrittenLanguage</h2>
    </div>
    
  </div>
</template>

<style scoped>
.icon {
  border: 2px solid black;
  border-radius: 8px;
}
</style>
