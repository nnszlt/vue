<template>

  <div>
    <button @click="dj">点击拦截器</button>
    <button @click="get">点击get</button>
    <hr />

    <button :disabled="dis" @click="jq">jq ajax 拦截</button>{{dis}}
    <br />
    <button :disabled="dis" @click="axios">axios before 拦截</button>{{dis}}
  </div>
</template>
<script>
export default {
  data() {
    return {
      dis: false
    };
  },
  created: function() {},
  methods: {
    dj() {
      var _this = this;
      this.$http
        .get("http://www.api.com/api/data/index")
        .then(function(response) {
          // console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    all() {
      let ajax = {
        get: this.$http.get("http://www.api.com/api/data/val", {
          params: { ID: 12345 }
        }),
        post: this.$http.post("http://www.api.com/api/data/val", { ID: 12345 })
      };

      var _this = this;
      _this.$http.all([ajax.get, ajax.post]).then(
        _this.$http.spread(function(get, post) {
          console.log(get);
          console.log(post);
        })
      );
    },
    get() {
      return this.$http
        .get("http://www.api.com/api/data/val", {
          params: {
            ID: 12345
          }
        })
        .then(function(response) {
          // console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    post() {
      return this.$http
        .post("http://www.api.com/api/data/val", {
          ID: 12345
        })
        .then(function(response) {
          // console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    jq() {
      var _this = this;
      $.ajax({
        url: "http://www.api.com/api/data/val",
        data: {
          ID: 12345
        },
        beforeSend: function() {
          _this.dis = true;
        },
        success: function() {
          setTimeout(function() {
            _this.dis = false;
          }, 10000);
        }
      });
    },
    axios() {
      this.$http
        .get("http://www.api.com/api/data/val", {
          params: {
            ID: 12345
          }
        })
        .before(function(){
          console.log(888)
        })
        .then(function(response) {
          // console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  watch: {}
};
</script>
<style lang="less" scoped>
</style>
