<template>
  <header class="main-header flex items-center justify-between">
    <div class="logo uppercase">
      <h1>Mister Toy</h1>
    </div>
    <nav class="flex gap-1">
      <router-link class="link" to="/">Home</router-link>
      <router-link class="link" to="/toy">Toy</router-link>
      <router-link class="link" to="/dashboard">Dashboard</router-link>
      <router-link class="link" to="/about">About</router-link>
    </nav>
  </header>
</template>