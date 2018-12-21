<template>
  <div class="parent">
    <h1>Parent</h1>
    <h2>从子组件传过来的数据：{{dataFromSon}}</h2>
    <h3>全局状态：{{getNum}}</h3>
    <button @click="parentAdd">父组件通过mutations改变状态</button>
    <button @click="parentAddByActions">父组件通过actions改变状态</button>
    <hr>
    <Son :msg="toSonMsg" @handle="getMsgFromSon"></Son>
    <hr>
    <Outter></Outter>
  </div>
</template>

<script>
import Son from "./Son";
import Outter from "./Outter";
export default {
  name: "Parent",
  components: {
    Son,
    Outter
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
      //   return this.$store.state.num;
      return this.$store.getters.getNum;
    }
  },
  methods: {
    getMsgFromSon(value) {
      this.dataFromSon = value;
    },
    parentAdd() {
      this.$store.commit("increase");
    },
    parentAddByActions() {
      this.$store.dispatch("reduceAction");
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
