<template>
  <div id="app">
<!--   桌腿数量用type= range 选择器，绑定变量legsCount-->
    <label>
      桌腿数量: <input type="range" v-model="legsCount">
    </label>
<!--    桌子数量 绑定变量tableCount，并且输入数量时触发update -->
    <label>
      桌子数量： <input type="text" @input = "update" :value="tableCount">
    </label>
<!--   统计结果 -->
    <output>
      我们将要做 {{legsCount}}桌腿，组成 {{tableCount}} 桌子
    </output>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
     legsCount: 0
    }
  },
  computed: {
      tableCount: {
          get () {
            console.log(4)
              return this.legsCount / 4;
          },
          set (newValue) {
               console.log(8)
              this.legsCount = newValue * 4; 
          }
       }
  },
  methods: {
      update (e) {
          this.tableCount = e.target.value
      }
  }
}
</script>

<style>
 label, output {
     display: block;
     margin: 20px;
     text-align: center;
 }
 input {
     vertical-align: middle;
     margin-left: 10px;
 }
</style>