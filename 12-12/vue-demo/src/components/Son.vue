<template>
  <div class="son">
    <h1>Son</h1>
    <h2>{{fromParentMsg}}</h2>
    <button @click="dataToParent">向父组件传递数据</button>
    <h3>全局状态：{{getNum}}</h3>
    <button @click="sonAdd">子组件改变状态</button>
    <button @click="sonAddByActions">子组件通过actions改变状态</button>
  </div>
</template>

<script>
import Parent from "./Parent";
export default {
  name: "Son",
  props: {
    msg: {
      type: String,
      default: ""
    }
  },
  components: {
    Parent
  },
  data() {
    return {
      fromParentMsg: this.msg,
      toParentMsg: "我是从子组件传过来的msg"
    };
  },
  computed: {
    getNum() {
      return this.$store.state.num;
    }
  },
  methods: {
    dataToParent() {
      this.$emit("handle", this.toParentMsg);
    },
    sonAdd() {
      this.$store.commit("increase");
    },
    sonAddByActions() {
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
