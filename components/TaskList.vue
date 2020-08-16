<template>
  <ul class="task-list">
    <li v-for="task of tasks" :key="task.id">
      <nuxt-link :to="task.id" :class="task.color">
        <b>{{ task.title | truncate(40) }}</b>
        <p v-if="task.description">{{ task.description | truncate(60) }}</p>
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
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'TaskList',
  props: {
    tasks: Array
  },
  computed: {
    updatedAtLongDate () {
      return
    }
  }
}
</script>

<style>
.task-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
}

.task-list a {
  display: block;
  text-decoration: none;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, .15);
  box-shadow: 0 2px 4px rgba(0, 0, 0, .02);
  padding: 1.5rem;
  outline: none;
}

.task-list a:hover, .task-list a:focus {
  border-color: rgba(0, 0, 0, .25);
  box-shadow: 0 3px 5px rgba(0, 0, 0, .07);
}

.task-list b, .task-list p {
  word-wrap: break-word;
}

.task-list time {
  display: block;
  text-align: right;
  font-size: .75em;
  padding-top: 1em;
  color: rgba(0, 0, 0, .57);
}
</style>
