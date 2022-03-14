<template>
  <article class="custom-card flex flex-col gap-1 items-center">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot name="default"></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </article>
</template>

<style scoped>
.custom-card {
  justify-content: space-between;
  background:var(--gray-100);
  padding: 2em;
  border: none;
  border-radius: 5px;
  box-shadow: var(--border-shadow-light);
}

.custom-card header {
  font-size: 2rem;
}

.custom-card main {
  text-align: center;
}

.custom-card footer {
  font-size: 1rem;
  color: gray;
}
</style>
