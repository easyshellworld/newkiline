<template>
  <div class="GetCoin">
       {{ info }}
       <TestTable />
  </div>

</template>

<script>
import axios from 'axios'
import TestTable from './TestTable.vue'
export default {
  name: 'GetCoin',
  components: {
    TestTable
  },
  data() {
    return {
      info: 'Ajax 测试!!'
    }
  },
  mounted () {
    axios
      .get('/api/try/ajax/json_demo.json')
      /* .BASE_URL: '/api'
      .headers: {
        'Content-Type': 'application/json; charset=utf-8'
        } */
      .then(response => (this.info = response))
      .catch(function (error) { // 请求失败处理
        console.log(error);
    });
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
