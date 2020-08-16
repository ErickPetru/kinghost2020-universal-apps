<template>
  <nav class="app-menu">
    <nuxt-link to="/">
      <i class="material-icons">assignment</i>
      <h1>Tarefas</h1>
    </nuxt-link>
  </nav>
</template>

<style>
.app-menu {
  display: flex;
  justify-content: center;
  padding: .5rem 0 .25rem;
  background: #fff;
  border-bottom: 1px solid #bdbdbd;
  box-shadow: 0 1px 3px rgba(0, 0, 0, .03);
}

.app-menu a {
  display: inline-flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  padding: .5rem 1rem;
}

.app-menu a:focus {
  outline-color: #ffb300;
}

.app-menu i {
  font-size: 2.5rem;
  color: #ffb300;
}

.app-menu h1 {
  margin: 0 0 0 .5rem;
}
</style>

