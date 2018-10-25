<template>
	<div>
		{{$store.state.state_name}}
		<br />
		<br />
		<span>{{name}}</span> &nbsp;&nbsp;&nbsp;<span>{{age}}</span>
		<br /> <br /> <br />
		<p>store</p>
		<hr />
		<span>本场比赛得分</span> <br /> <br /> <br />
		<yd-button type="primary" @click.native="jia()">加</yd-button>

		<yd-button type="danger" @click.native="jian()">减</yd-button>
		<br />
		<br /> <br />
		<br />
		<hr />

		<button @click="$store.commit('s_jia')">s_jia</button>
		<br />
		<br /> <br />
		<br />
		<hr />

		</div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    name: function() {
      var hh = this.$store.state.name + 456;

      return hh;
    },
    age: function() {
      return this.$store.getters.getAge;
    }
  },
  methods: {
    jia: function() {
      var data = this.$store.state.age + 1;
      this.$store.commit("change", data);
      console.log(this.$store.state.age);
    },
    jian: function() {
      var data = this.$store.state.age - 1;
      this.$store.dispatch("jian", 5);
      console.log(this.$store.state.age);
    }
  },
  beforeCreate: function() {}
};
</script>