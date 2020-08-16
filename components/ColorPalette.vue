<template>
  <ul class="color-palette">
    <li :key="index"
      v-for="(color, index) of colors">
      <input
        name="color"
        type="radio"
        :id="`color-${index}`"
        :checked="selected === color"
        @change="change(color)">
      <label tabindex="0"
        :for="`color-${index}`"
        :class="color"
        @keypress.enter.space="change(color)">{{ color }}</label>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ColorPalette',
  model: {
    prop: 'selected',
    event: 'change'
  },
  props: {
    selected: {
      type: String,
      default: 'white'
    }
  },
  computed: {
    colors () {
      return [
        'white', 'red', 'orange', 'yellow',
        'green', 'teal', 'blue', 'indigo',
        'purple', 'pink', 'brown', 'grey'
      ]
    }
  },
  methods: {
    change (color) {
      this.$emit('change', color)
    }
  }
}
</script>

<style>
.color-palette {
  list-style: none;
  margin: 0 -.5rem;
  padding: 0;
  display: inline-flex;
  justify-content: center;
}

.color-palette li {
  position: relative;
  width: 1.75rem;
  height: 1.75rem;
  margin: 0 .5rem;
}

.color-palette input {
  visibility: hidden;
  opacity: 0;
  width: 0;
  height: 0;
}

.color-palette label {
  display: block;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  color: transparent;
  text-indent: -100vw;
  overflow: hidden;
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 50%;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, .2);
  box-shadow: 0 2px 4px rgba(0, 0, 0, .02);
}

.color-palette label:hover {
  box-shadow: 0 3px 5px rgba(0, 0, 0, .25);
}

.color-palette input:checked + label {
  background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjE4cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbD0iIzAwMDAwMCIgb3BhY2l0eT0iMC41NCIgdmlld0JveD0iMCAwIDE4IDE4IiBoZWlnaHQ9IjE4cHgiPgogIDxwYXRoIGQ9Im0wIDBoMTh2MThoLTE4eiIgZmlsbD0ibm9uZSIvPgogIDxwYXRoIGQ9Im02LjYxIDExLjg5bC0zLjExLTMuMTEtMS4wNiAxLjA2IDQuMTcgNC4xNiA4Ljk1LTguOTUtMS4wNi0xLjA1eiIvPgo8L3N2Zz4K');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 16px 16px;
  border: 1px solid rgba(0, 0, 0, .25);
}
</style>
