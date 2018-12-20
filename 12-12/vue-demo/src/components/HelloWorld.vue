<template>
  <div class="hello">
    <h1>HelloWorld</h1>
    <h2>{{$route.params.hellomsg}}</h2>
    <h3>111</h3>
    <button @click="getData">click to GET</button>
    <button @click="postData">click to POST</button>
    <ul>
      <li v-for="value in topics">{{value.title}}</li>
    </ul>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import qs from "qs";
Vue.prototype.$http = axios;
export default {
  name: "HelloWorld",
  props: {},
  data() {
    return {
      topics: []
    };
  },
  methods: {
    getData() {
      this.$http
        .get("https://cnodejs.org/api/v1/topics", {
          params: {
            page: 1,
            limit: 5
          }
        })
        .then(res => {
          console.log(res.data.data);
          this.topics = res.data.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
    postData() {
      this.$http
        .post(
          "https://cnodejs.org/api/v1/topics",
          qs.stringify({
            params: {
              page: 1,
              limit: 5
            }
          })
        )
        .then(res => {
          console.log(res.data.data);
          this.topics = res.data.data;
        })
        .catch(e => {
          console.log(e);
        });
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
