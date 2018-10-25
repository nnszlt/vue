
import Vuex from 'vuex'


export default ()=>{
	return new Vuex.Store({
		state: {
			num: 1,
			name: '赵理通',
			age: 55,
			state_name: "state",
			s_getters: 88,
			a_action: 654
		},
		mutations: {
			change: function(s, c) {
				s.age = c
			},
			yibu: function(s, c) {
				s.age = c
			},
			s_jia: function(s, c) {
				console.log(s.num += c.a)
				s.s_getters++
			},
			s_jian: function(s, c) {
				console.log(s.num--)
			},
			m_actions: function(s, c) {
				s.a_action += c.a
			},
			m_actions_j: function(s, c) {
				s.a_action -= c.a
			},
			
		},
		getters: {
			getAge: function(state) {
				return state.age;
			},
			s_getters_f: function(state) {
				return state.s_getters + 88
			}
		},
		actions: {
			action(context, value) {
				setTimeout(function() {　　
					context.commit("m_actions", {
						a: 10
					})
				}, 1000)
	
			},
			action_j(context, value) {
				setTimeout(function() {　　
					context.commit("m_actions_j", {
						a: 10
					})
				}, 1000)
	
			},
			jian: function(context, value) {
	
				setTimeout(function() {　　　　　　　　　　
					context.commit('yibu', value);
				}, 1000)
	
			}
	
		}
	})
}