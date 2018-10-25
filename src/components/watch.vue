<template>
    <div>
{{name.zlts.app.cc}}
<br/>
<button @click="c">dianji</button>
    </div>
</template>
<script>
export default {
  data() {
    return {
      name: {
        zlts: {
          app: {
            cc: "zcc"
          }
        }
      }
    };
  },
  methods: {
    c: function() {
      this.name.zlts.app.cc = "站干脆ui";
    }
  },
  watch: {
    name: {
      handler(curVal, oldVal) {
       console.log(curVal)
        console.log(oldVal)
      },
      deep: true,
      immediate:true
    }
  }
};
</script>