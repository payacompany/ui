export default {
	userInformations({ commit }, payload) {
		try {
			const { data } = axios.get(`/barong/resource/users/me`, payload);
		} catch {}
	},
};
