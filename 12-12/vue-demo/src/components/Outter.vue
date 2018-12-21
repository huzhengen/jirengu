<template>
  <div class="outter">
    <h1>Outter</h1>
    <h2>全局状态：{{getNum}}</h2>
    <button @click="outterAdd">Outter组件改变状态</button>
    <button @click="outterAddByActions">Outter组件通过actions改变状态</button>
  </div>
</template>

<script>
export default {
  name: "Outter",
  computed: {
    getNum() {
      return this.$store.state.num;
    }
  },
  methods: {
    outterAdd() {
      this.$store.commit("increase");
    },
    outterAddByActions() {
      this.$store.dispatch("reduceAction");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>