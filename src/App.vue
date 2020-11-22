<template>
  <div id="app">
    <BaseLayout/>
  </div>
</template>

<script>

import BaseLayout from './view/BaseLayout'

export default {
  components: {
    BaseLayout
  },
  data() {
    return {
      version: "0.0.1",
    }
  },
  name: 'App',

}
</script>

<style lang="scss">
  body {
    margin: 0;
    padding: 0;
  }
  #app {
    font-family: 'Arial';
    font-weight: 400;
  }
</style>
