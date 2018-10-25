<template>
  <div>
    <button @click="del">删除</button>
    <ol>
      <li v-for="(i,n) in list" :key="n">
        <router-link to="/shop"> {{i.good_name}}-------{{i.good_price}}--------{{i.good_gg}}</router-link>
      </li>
    </ol>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: []
    };
  },
   activated(){
       console.log("jinlaile ")
    var _this = this;
    this.$http
      .get("http://www.api.com/api/data/index")
      .then(function(response) {
        _this.list = response.data.data;
      })
      .catch(function(error) {
        console.log(error);
      });
 },
  methods: {
    del: function() {
      this.list.splice(0, 1);
    }
  },
  beforeCreate: function() {
    
    console.group("beforeCreate 创建前状态===============》");

  },
  created: function() {
    console.group("created 创建完毕状态===============》");
  },
  beforeMount: function() {
    console.group("beforeMount 挂载前状态===============》");
  },
  mounted: function() {
    console.group("mounted 挂载结束状态===============》");
  },
  beforeUpdate: function() {
    console.group("beforeUpdate 更新前状态===============》");
  },
  updated: function() {
    console.group("updated 更新完成状态===============》");
  },
  beforeDestroy: function() {
    console.group("beforeDestroy 销毁前状态===============》");
  },
  destroyed: function() {
    console.group("destroyed 销毁完成状态===============》");
  }
};
</script>
<style scoped>
li {
  line-height: 50px;
  margin: 0 1rem;
  list-style: decimal-leading-zero;
}
</style>
