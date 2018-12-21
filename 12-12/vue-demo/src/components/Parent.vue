<template>
  <div class="parent">
    <h1>Parent</h1>
    <h2>从子组件传过来的数据：{{dataFromSon}}</h2>
    <h3>全局状态：{{getNum}}</h3>
    <hr>
    <Son :msg="toSonMsg" @handle="getMsgFromSon"></Son>
  </div>
</template>

<script>
import Son from "./Son";
export default {
  name: "Parent",
  components: {
    Son
  },
  props: {},
  data() {
    return {
      toSonMsg: "从父组件传过来的msg",
      dataFromSon: ""
    };
  },
  computed: {
    getNum() {
      return this.$store.state.num;
    }
  },
  methods: {
    getMsgFromSon(value) {
      this.dataFromSon = value;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 10px 0;
}
a {
  color: #42b983;
}
</style>
