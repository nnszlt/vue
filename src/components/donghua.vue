<template>
	<div>
		<ul>
			<li>
				<button @click="am">A—BTN</button>
				<transition name="a" :duration="{ enter: 4500, leave: 4500 }">
					<h1 class="clas" v-show="ais">AAAAAA</h1>
				</transition>

			</li>
		</ul>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				ais: true
			}
		},
		methods: {
			am: function() {
				this.ais = !this.ais
				console.log(this.ais)
			}
		}

	}
</script>

<style scoped="scoped">
	.clas {
		transition: all .3s ease;
	}
	
	.a-enter{
		transition: all 1.5s ease;
		color: green;          /* 刚进去显示的颜色 enter-active就不管用了*/
	}
	.a-enter-active{
		transition: all 1.5s ease; 
		color: yellow;                      /*-enter 刚进去显示的颜色*/
	}
	.a-enter-to{
		transition: all 1.5s ease;     /*过渡完成的颜色  */
		color: red;
	}
	
	.a-leave{
		transition: all 1.5s ease;
		color: green;          /* 刚进去显示的颜色 enter-active就不管用了*/
	}
	.a-leave-active{
		transition: all 1.5s ease; 
		color: yellow;                      /*-enter 刚进去显示的颜色*/
	}
	.a-leave-to{
		transition: all 1.5s ease;     /*过渡完成的颜色  */
		color: red;
	}

</style>