<template>
  <main class="container about">
    <h2>Conexão KingHost 2020</h2>
    <h3>Vue e Nuxt para construir Universal Apps mesclando os conceitos de SPA e SSR</h3>

    <blockquote>
      <p>
        Demonstração de Universal App (SPA + SSR) com Vue.js e Nuxt.js, criada como material de apoio para <i>talk</i> na trilha <a href="https://www.conexaokinghost.com.br/category/desenvolvimento/" target="_blank">Desenvolvimento Web</a> da <a href="https://www.conexaokinghost.com.br/" target="_blank">10ª Edição do Conexão KingHost</a>.
      </p>
    </blockquote>

    <p>
      Para explicações detalhadas sobre como as coisas funcionam,
      dê uma olhada na <a href="https://nuxtjs.org" target="_blank">documentação do Nuxt.js</a>.
    </p>

    <p>
      <b>Ainda está com alguma dúvida?</b> Participe das
      <a href="https://github.com/vuejs-br/comunidades" target="_blank">comunidades Vue.js Brasil</a>
      e procupre pelo autor desta <i>talk</i> ou outros experientes apoiadores do
      <a href="https://br.vuejs.org/" target="_blank">Vue.js</a> em nosso país.</p>
  </main>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style>
.about {
  text-align: center;
}

.about h2 {
  margin: 3rem 0 1rem;
}

.about h3 {
  margin: 0;
}

.about blockquote, .about > p {
  margin: 2rem 0;
  padding: 0 10%;
}

.about blockquote {
  padding: 1rem 10%;
  background: #efefef;
}

.about a:hover {
  color: #ffb300;
}
</style>
