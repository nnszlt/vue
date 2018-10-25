<template>
	<div>
		solt
<goods v-for="p in ps":key="p.name">
	<span slot="name">{{p.name}}</span>
	<span slot="num">{{p.num}}</span>
	
</goods>
	</div>
	
</template>

<script>
	var goods = {
		template: "<p>名称<slot name='name'></slot> -- 数量<slot name='num'></slot></p>"
	}

	export default {
		data() {
			return {
				ps: [
				{name:'apple',num:'4'},
				{name:'orgone',num:'2'},
				]
			}
		},
		components: {"goods":goods}
	}
</script>

<style>

</style>