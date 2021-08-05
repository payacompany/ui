export default {
	userInformations({ commit }, payload) {
		try {
			const { data } = axios.get(`/barong/resource/users/me`, payload);
			console.log(data);
			commit("SET_MY_PROFILE", data);
		} catch {}
	},
};
