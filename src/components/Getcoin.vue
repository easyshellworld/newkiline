<template>
  <div class="GetCoin">
     <!--   {{ info }} -->
       <TestTable  v-bind:kline="info"/>
  </div>

</template>

<script>
import axios from 'axios'
import TestTable from './TestTable.vue'
export default {
  name: 'GetCoin',
  components: {
    TestTable:TestTable
  },
  data() {
    return {
      info: 'Ajax 测试!!',
     // kline:['你好']
    }
  },
  mounted () {
    axios
      .get('/currency/kline?com_id=btc_usdt&symbol=btc&anchor=USDT&time=1675630081&market_id=338&period=1d&timestamp=1674739035146&code=ebc161c4c01e448626c3cc30518009d6&platform=web_pc&v=1.0.0&language=en_US&legal_currency=USD')
      /* .BASE_URL: '/api'
      .headers: {
        'Content-Type': 'application/json; charset=utf-8'
        } */
      .then(response => (this.info = response.data.data.kline))
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
