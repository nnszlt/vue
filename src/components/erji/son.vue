<template>
	
<div>
	<div class="left"></div>
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
	.left{
		width: 50%;
		background: red;
	}
</style>