<template>
  <main class="viewer" :class="task.color">
    <div class="container">
      <nav class="buttons">
        <button v-if="editing" @click="editing = false">
          <i class="material-icons">arrow_back</i>
          <span>Voltar</span>
        </button>
        <nuxt-link v-else to="/">
          <i class="material-icons">arrow_back</i>
          <span>Voltar</span>
        </nuxt-link>

        <button v-if="!editing" @click="editing = true">
          <i class="material-icons">edit</i>
          <span>Editar</span>
        </button>

        <button @click.prevent="remove">
          <i class="material-icons">delete</i>
          <span>Excluir</span>
        </button>
      </nav>

      <time v-if="task.updatedAt"
        :datetime="$options.filters.dateFormat(task.updatedAt)">
        Atualizado em {{ task.updatedAt | dateFormat('DD/MM/YY') }}
        às {{ task.updatedAt | dateFormat('HH:mm') }}
      </time>
      <time v-else
        :datetime="$options.filters.dateFormat(task.createdAt)">
        Criado em {{ task.createdAt | dateFormat('DD/MM/YY') }}
        às {{ task.createdAt | dateFormat('HH:mm') }}
      </time>

      <form>
        <input v-if="editing"
          v-model.lazy="task.title" maxlength="50"
          placeholder="Título da tarefa">
        <h2 v-else>{{ task.title }}</h2>

        <textarea v-if="editing"
          v-model.lazy="task.description"
          cols="30" rows="10" maxlength="2000"
          placeholder="Descrição da tarefa"></textarea>
        <p v-else-if="task.description">{{ task.description }}</p>

        <color-palette v-if="editing" v-model="task.color"/>
      </form>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Viewer',
  components: {
    ColorPalette: () => import('../components/ColorPalette')
  },
  data () {
    return { editing: false }
  },
  async asyncData ({ params, $axios }) {
    const id = params.id
    const data = await $axios.$get(`tasks/${id}`)
    return { task: data }
  },
  methods: {
    async remove () {
      const id = this.task.id
      await this.$axios.$delete(`tasks/${id}`)
      this.$router.push('/')
    },

    async update (task) {
      const id = this.task.id
      const data = await this.$axios.$put(`tasks/${id}`, this.task)
      this.task = data
    }
  },
  watch: {
    'task.title': function () { this.update() },
    'task.description': function () { this.update() },
    'task.color': function () { this.update() }
  }
}
</script>

<style>
.viewer {
  padding: 4rem 0 3rem;
}

.viewer .container {
  display: flex;
  flex-flow: column;
}

.viewer .buttons {
  align-self: center;
  display: flex;
  padding-bottom: 1rem;
}

.viewer .buttons a, .viewer .buttons button {
  display: flex;
  align-items: center;
  text-decoration: none;
  border: none;
  background: transparent;
  border-radius: 6px;
  cursor: pointer;
  font-size: .75rem;
  padding: .5rem 1rem;
  margin-right: .5rem;
}

.viewer .buttons a:hover, .viewer .buttons button:hover {
  background: #e0e0e0;
}

.viewer .buttons a:active, .viewer .buttons button:active {
  background: #d0d0d0;
}

.viewer .buttons span {
  margin-left: 4px;
}

.viewer h2 {
  margin: .5rem 0 .25rem;
}

.viewer form {
  display: flex;
  flex-flow: column;
  text-align: center;
}

.viewer form input, .viewer form textarea {
  margin-bottom: 1rem;
  text-align: center;
}

.viewer time {
  display: block;
  text-align: center;
  font-size: .75em;
  padding-bottom: 1em;
  color: rgba(0, 0, 0, .57);
}
</style>
