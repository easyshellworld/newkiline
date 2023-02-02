/* eslint-disable vue/require-v-for-key */
/* eslint-disable vue/require-v-for-key */
<template>
  <div class="TestTable">
     <table border="1">
    <tr>
        <th>time</th>
        <th>open</th>
        <th>high</th>
        <th>low</th>
        <th>close</th>
        <th>volume</th>
    </tr>
        <!--  <tr v-for='i in 5'>
           -->
           <tr v-for='item in items' :key='item'>
           <td>{{item.time}}</td>
           <td>{{item.open}}</td>
           <td>{{item.high}}</td>
           <td>{{item.low}}</td>
           <td>{{item['close']}}</td>
           <td>{{item['volumefrom']}}</td>
           
          </tr>
   
</table>

  </div>
</template>

<script>

/* eslint-disable */
export default {
  data(){
  return{
  items:[
   {
    time: '2023-01-31 ',
    open: 22827.4,      
    high: 23079.2,      
    low: 22714.8,       
    close: 23073.4,     
    volumefrom: 125598  
  },
  {
    time: '2023-01-30 ',
    open: 23743.4,
    high: 23800.5,
    low: 22500,
    close: 22826.2,
    volumefrom: 302406
  },
  {
    time: '2023-01-30 ',
    open: 23743.4,
    high: 23800.5,
    low: 22500,
    close: 22826.2,
    volumefrom: 302406
  }]
      }
  },
    name: 'TestTable',
  props: {
    msg: String
  },  
  
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
table{ 
 
margin-right: auto;
margin-left: auto;
 
}
</style>
