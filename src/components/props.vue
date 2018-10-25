<template>
	<div>
		<my :v="456"></my>

	</div>
</template>

<script>
import js from "../zj/js";
var isn=null;
export default {
  beforeCreate: function() {
	  isn=require("../zj/a.js")
  },
  components: {
    my: js.my
  },
  mounted: function() {
    console.log(js);
  }
};
</script>

<style>
</style>