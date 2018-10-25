<template>
	
<div>
	<div class="right">right</div>
</div>
</template>


<script type="text/babel">
    export default {
       data(){
       	
       	return{
       		
       	}
       	
       },created:function(){
       	console.log(this.$store.state)
       }
    }
</script>
<style scoped="scoped">
	.right{
		width: 50%;
		background: yellow;
		float: left;
	}
</style>