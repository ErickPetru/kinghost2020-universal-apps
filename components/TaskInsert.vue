<template>
  <form class="task-insert" @submit.prevent="insert">
    <input placeholder="O que precisa ser feito?"
      v-model="title" maxlength="50" autofocus>
  </form>
</template>

<script>
export default {
  data () {
    return { title: '' }
  },
  methods: {
    async insert () {
      if (this.title) {
        let task = await this.$axios.$post('tasks', { title: this.title })
        this.$emit('inserted', task)
        this.title = ''
      }
    }
  }
}
</script>

<style>
.task-insert {
  padding: 4rem 0 3rem;
  display: flex;
  justify-content: center;
}

.task-insert input {
  min-width: 300px;
  max-width: 600px;
  width: 80%;
  text-align: center;
}
</style>
