<template>
  <div class="list">
    <ul>
      <li>
        <router-link to="/">Index</router-link>
      </li>
      <li>
        <router-link to="/hello">HelloWorld</router-link>
      </li>
      <li>
        <router-link to="/hello1">Hello1</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "List",
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul,
li,
ol {
  padding: 0;
  margin: 0;
  list-style: none;
}
</style>
