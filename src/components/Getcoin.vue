<template>
  <div class="GetCoin" v-for="coin in coindata" :key="coin">

           <h1> {{ coin.name }}</h1>
       <TestTable  v-bind:kline="coin.kdata"/>
      
  </div>

</template>

<script>
import axios from 'axios'
import TestTable from './TestTable.vue'
import {gettoday,getlittledata} from './Getdata.js'
export default {
  name: 'GetCoin',
  components: {
    TestTable:TestTable
  },
  data() {
    return {
      //info: 'Ajax 测试!!',
    coindata: [
        {
        name:'btc',
        kdata:[]
      },
      {
        name:'eth',
        kdata:[]
      },
      {
        name:'apt530',
        kdata:[]
      },
      {
        name:'ape613',
        kdata:[]
      }
    ]

    }
  },
  mounted () {
    for( let item of this.coindata){
    axios
      .get(gettoday(item.name))
      /* .BASE_URL: '/api'
      .headers: {()
        'Content-Type': 'application/json; charset=utf-8'
        } */
      .then(response => (item.kdata = getlittledata(response.data.data.kline)))
      .catch(function (error) { // 请求失败处理
        console.log(error);
    });
    }
   
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
