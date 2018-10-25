<template>
	<div>

		<br />
		<hr />
		<br /> {{$store.state.num}}--{{num}}--{{nums}}
		<br /> Getters：{{Getters}}
		<br />
		<hr /> s_getters_f:{{s_getters_f}}
		<br />
		<br />
		<hr /> a_action--{{a_action}}
		<br />
		<p><button @click="action">a_action+</button> &nbsp;&nbsp;&nbsp;&nbsp;<button @click="action_j">a_action-</button></p>
		<br />
		<hr />

		<button @click="$store.commit('s_jia',{a:10})">s_jia++</button>
		<button @click="s_jian">s_jian--</button>
		<br />

	</div>
</template>

<script>
	import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
	export default {
		computed: {
			...mapState(['num', 'a_action']),
			...mapState({
				nums: function(state) {
					return state.num + 1
				}
			}),
			...mapGetters([
				's_getters_f'
			]),
			Getters() {
				return this.$store.getters.s_getters_f
			}

		},
		methods: {
			...mapMutations([
				's_jian'
			]),
			...mapActions(['action']),
			...mapActions({action_j:'action_j'}),
		}

	}
</script>