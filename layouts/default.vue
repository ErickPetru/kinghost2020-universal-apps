<template>
  <div id="app">
    <app-menu/>
    <nuxt/>
    <footer class="app-footer">
      <nuxt-link to="/sobre">
        Copyleft <span class="copy-left">©</span> 2020 Erick Eduardo Petrucelli
      </nuxt-link>
    </footer>
  </div>
</template>

<script>
export default {
  components: {
    AppMenu: () => import('../components/AppMenu')
  }
}
</script>

<style>
html, body {
  margin: 0;
  height: 100%;
}

body {
  font: 1em/1.35 'Nunito', Helvetica, Arial, Sans-serif;
  color: rgba(0, 0, 0, .87);
  background: #fafafa;
}

body, #__nuxt, #__layout, #app {
  flex: 1;
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: stretch;
}

main {
  flex: 1;
}

a, button, input, [tabindex] {
  color: rgba(0, 0, 0, .87);
  outline: 1px solid transparent;
  transition:
    color .25s ease,
    border-color .25s ease,
    background-color .25s ease,
    box-shadow .25s ease,
    outline-color .25s ease;
}

a:focus, button:focus, [tabindex]:focus {
  outline-color: #ffb300;
}

input, textarea {
  box-sizing: border-box;
  padding: .75rem 1rem;
  font: inherit;
  font-size: 1rem;
  background: rgba(255, 255, 255, .75);
  border: 1px solid rgba(139, 139, 139, .4);
  border-radius: 6px;
  outline: none;
}

input:focus, textarea:focus {
  box-shadow: 0 2px 8px rgba(0, 0, 0, .15)
}

textarea {
  min-width: 100%;
  min-height: 3.5em;
}

input::placeholder, textarea::placeholder {
  color: rgba(0, 0, 0, .57);
}

input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
  color: rgba(0, 0, 0, .57);
}

.container {
  position: relative;
  width: 100vw;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 1rem 4rem;
  box-sizing: border-box;
}

@media (min-width: 400px) {
  .container {
    width: 85vw;
    padding: 0 0 4rem;
  }
}

@media (min-width: 550px) {
  .container {
    width: 80vw;
  }
}

.app-footer {
  padding: 1.25rem 0 1.5rem;
  font-size: .75rem;
  text-align: center;
  position: relative;
  background: #fff;
  border-top: 1px solid #e0e0e0;
  box-shadow: 0 -1px 3px rgba(0, 0, 0, .03);
}

.app-footer a {
  color: rgba(0, 0, 0, .47);
  text-decoration: none;
}

.app-footer a:hover {
  color: #ffb300;
}

.app-footer .copy-left {
  display: inline-block;
  text-align: right;
  margin: 0;
  transform: scaleX(-1);
}

.white { background-color: #fff; }
.red { background-color: #f28b82; }
.orange { background-color: #fbbc04; }
.yellow { background-color: #fff475; }
.green { background-color: #ccff90; }
.teal { background-color: #a7ffeb; }
.blue { background-color: #cbf0f8; }
.indigo { background-color: #aecbfa; }
.purple { background-color: #d7aefb; }
.pink { background-color: #fdcfe8; }
.brown { background-color: #e6c9a8; }
.grey { background-color: #e8eaed; }

.jump-active-enter-active,
.jump-active-leave-active {
  transition: opacity 0.25s ease-in-out;
}

.jump-enter-active {
  animation: jump 0.25s;
}

.jump-enter,
.jump-leave-to {
  opacity: 0;
}

.jump-leave-active {
  animation: jump 0.25s reverse;
}

@keyframes jump {
  0% {
    transform: translateY(10px);
  }

  50% {
    transform: translateY(-10px);
  }

  100% {
    transform: translateY(0);
  }
}
</style>
