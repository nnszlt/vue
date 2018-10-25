<template>
	<div>
		<button @click="dj">点击动画</button>
		<transition name="aa">
			<p v-show="show">show</p>

		</transition>
		<br />
		<hr /><br />
		<br />
		<p>
			<router-link to="/tranistion/in">in</router-link>
		</p><br />

		<br />
		<p>
			<router-link to="/tranistion/out">out</router-link>
		</p><br />
		<transition name="aa" mode="out-in">
			<router-view>

			</router-view>
		</transition>
		<br /><br />
		<hr />
		<br /><br />
		
		<transition name="aa" mode="in-out">
			<router-view>

			</router-view>
		</transition>

	</div>
</template>

<script type="text/babel">
	export default { data(){ return{ show:true } }, methods:{ dj:function(){ this.show=!this.show; } } }
</script>
<style scoped="scoped">
	.aa-enter-active,
	.aa-leave-active {
		transition: opacity .5s;
	}
	
	.aa-enter,
	.aa-leave-to
	/* .fade-leave-active below version 2.1.8 */
	
	{
		opacity: 0;
	}
</style>