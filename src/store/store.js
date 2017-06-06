import Vue from "vue"
import vuex from 'vuex'

Vue.use(vuex);

const state = {
	count: 0
}

const getters = {
	evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
}

const mutations = {
	increment(state) {
		state.count++;
	},
	decrement(state) {
		state.count--;
	}
}

const actions = {
	increment2: ({commit}) => commit("increment"),
	decrement2: ({commit}) => commit("decrement"),
	incrementIfOdd: ({commit, state}) => {
		if((state.count + 1) % 2 === 0) {
			commit('increment');
		}
	},
	incrementAsync: ({commit}) => {
		return new Promise((res, err) => {
			setTimeout(() => {
				commit('increment')
				resolve()
			}, 3000)
		})
	}
}

export default new vuex.Store({
	state,
	getters,
	mutations,
	actions
})