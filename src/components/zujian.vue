<template>

  <div>
    <zlt name="props的使用"> </zlt>
    <br> <br>
    <hr>
    <zcc>
      <p slot="top">我是 slot--top</p>
      <p slot="bottom">我是 slot--bottom</p>
    </zcc>
    <br> <br>
    <hr>

    <sp vn="v_name">

    </sp>
    <br> <br>
    <hr>
  </div>
</template>

<script type="text/babel">
var v_props = {
  template: `<div :style='style' :names='name'>
  <span>{{name}}</span>
  </div>`,
  props: ["name"],
  data() {
    return {
      style: {
        border: "1px soild #333",
        width: "200px",
        height: "200px",
        background: "red"
      }
    };
  }
};

var v_solt = {
  template: `<div :style='style'>
 <slot name="top"></slot>
 <slot name="bottom"></slot>
  </div>`,
  data() {
    return {
      style: {
        border: "1px soild #333",
        width: "100px",
        height: "100px",
        background: "green"
      }
    };
  }
};
var v_sp = {
  template: `<div :style='style'>
 
<p>{{v_name}}</p>
<br/>
<p>{{this.$parent.v_name}}</p>
  </div>`,
  data() {
    return {
      style: {
        border: "1px soild #333",
        width: "100px",
        height: "100px",
        background: "yellow"
      },
      v_name: "我是里边的v-name"
    };
  }
};
export default {
  data() {
    return {
      v_name: "我是外边的v_name",
      co:"45",
      coo:"0"
    };
  },
  mounted: function() {
    console.log(this.$route.params);
  },
  methods: {
    cz(e){
      this.co=e;
    },
     czz(e){
      this.coo=e;
    }
  },
  components: { zlt: v_props, zcc: v_solt, sp: v_sp}
};
</script>
<style scoped="scoped">
</style>