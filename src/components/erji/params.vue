<template>
	<div>
		{{$route.params}}
	</div>
</template>

<script>
	export default {
		created: function() {

		
				console.log(this.$route.params)

		},
		computed: {

		}

	}
</script>

<style>

</style>