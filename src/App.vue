<template>
    <header class="bg-primary text-white py-2">
    <div class="container d-flex justify-content-between">
      <a href="#" class="navbar-brand text-white">Статейка</a>

      <nav class="nav">
        <router-link to="/"><a class="nav-link text-white">Главная</a></router-link>
        <router-link to="/all"><a class="nav-link text-white">Все статьи</a></router-link>
        <router-link to="/manage"><a class="nav-link text-white">Управление статьями</a></router-link>
      </nav>
    </div>
  </header>
  <router-view/>
</template>

<style src="@/assets/css/bootstrap.min.css"></style>