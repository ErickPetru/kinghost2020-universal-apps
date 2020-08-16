<template>
  <main class="container index">
    <task-insert @inserted="inserted"/>
    <task-list :tasks="orderedTasks"/>
  </main>
</template>

<script>
export default {
  name: 'Index',
  components: {
    TaskInsert: () => import('../components/TaskInsert'),
    TaskList: () => import('../components/TaskList')
  },
  async asyncData ({ $axios }) {
    const data = await $axios.$get('tasks')
    return { tasks: data }
  },
  methods: {
    inserted (task) {
      this.tasks.push(task)
    }
  },
  computed: {
    orderedTasks () {
      return this.tasks.sort((a, b) => a.createdAt > b.createdAt ? 1 : -1)
    }
  }
}
</script>
