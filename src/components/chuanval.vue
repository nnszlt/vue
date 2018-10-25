<template>

  <div>

    <div>
      <hr />
      <br />
      子组件=>父组件
      <v-button @suncount=cz></v-button>
      父组件的值： {{co}}
      <hr />
    </div>

    <div>

      <hr />
      <br />
      <button @click="gbfval">改变父组件穿的值{{fcz}}</button>
      父组件=>子组件=>父组件
      <f-button :fval="fcz" @fcount=fz></f-button>
      父组件的值：{{coo}}
      <hr />
    </div>

  </div>
</template>

<script type="text/babel">
//2018-10-11组件 子传父
var button = {
  data: function() {
    return {
      count: 0
    };
  },
  template:
    '<button v-on:click="zjfun">You clicked me {{ count }} times.</button>',
  methods: {
    zjfun() {
      this.count++;
      this.$emit("suncount", this.count);
      console.log(this.count);
    }
  }
};

var fbutton = {
  props: ["fval"],
  data: function() {
    return {
      count: 0
    };
  },
  template:
    '<button v-on:click="zjfun">You clicked me {{ count }} times.</button>',
  methods: {
    zjfun() {
      this.count++;
      this.$emit("fcount", this.count);
    }
  },
  created() {
    this.count = this.fval;
  },
  watch: {
    fval: function(n, o) {
      this.count = n;
      this.$emit("fcount", this.count);
    }
  }
};

export default {
  data() {
    return {
      co: "0",
      coo: "1",
      fcz: 1
    };
  },
  mounted: function() {
    console.log(this.$route.params);
  },
  methods: {
    cz(e) {
      this.co = e;
    },
    fz(e) {
      this.coo = e;
      console.log(e);
    },
    gbfval() {
      this.fcz++;
    }
  },
  components: { "v-button": button, "f-button": fbutton }
};
</script>
<style scoped="scoped">
</style>