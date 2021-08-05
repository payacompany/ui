export default {
	userInformations({ commit }, payload) {
		try {
			axios.get(`/barong/resource/users/me`, payload).then(res => {
				console.log(res, "me");
			});
			commit("SET_MY_PROFILE", res.data);
		} catch {}
	},
	userActivities({ commit }, payload) {
		console.log("here");
		try {
			const { data } = axios.get(
				`/barong/resource/users/activity/all?limit=${payload.limit}&page=${payload.page}`
			);
			commit("SET_ACTIVITY", data);
		} catch {}
	},
};
