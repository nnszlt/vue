<template>

  <div>
    <button @click="dj">promise</button>

  </div>
</template>
<script>
export default {
  data() {
    return {
      dis: true
    };
  },
  created: function() {},
  methods: {
    dj() {
      var _this=this;
      const promise = new Promise(function(resolve, reject) {
        if (_this.dis) {
          resolve(value);
        } else {
          reject(error);
        }
      });
    }
  },
  watch: {}
};
</script>
<style lang="less" scoped>
</style>
