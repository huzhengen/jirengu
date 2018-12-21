<template>
  <div class="list">
    <ul>
      <li>
        <router-link to="/">Index</router-link>
      </li>
      <li>
        <router-link :to="{name:'hello',params:{hellomsg:'hellomsg'}}">HelloWorld</router-link>
      </li>
      <li>
        <router-link :to="{name:'hello1',params:{hello1msg:'hello1msg'}}">Hello1</router-link>
      </li>
      <li>
        <router-link :to="{name:'parent'}">Parent</router-link>
      </li>
      <li>
        <router-link :to="{name:'son'}">Son</router-link>
      </li>
      <li>
        <router-link :to="{name:'outter'}">Outter</router-link>
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
