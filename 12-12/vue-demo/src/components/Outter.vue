<template>
  <div class="outter">
    <h1>Outter</h1>
    <h2>全局状态：{{getNum}}</h2>
  </div>
</template>

<script>
export default {
  name: "Outter",
  computed: {
    getNum() {
      return this.$store.state.num;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>