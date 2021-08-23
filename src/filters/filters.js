import Vue from "vue";
import moment from "moment-jalaali";

Vue.filter("capitalize", function (value) {
	if (!value) return "";
	value = value.toString();
	const arr = value.split(" ");
	const capitalized_array = [];
	arr.forEach(word => {
		const capitalized = word.charAt(0).toUpperCase() + word.slice(1);
		capitalized_array.push(capitalized);
	});
	return capitalized_array.join(" ");
});

Vue.filter("title", function (value, replacer = "_") {
	if (!value) return "";
	value = value.toString();

	const arr = value.split(replacer);
	const capitalized_array = [];
	arr.forEach(word => {
		const capitalized = word.charAt(0).toUpperCase() + word.slice(1);
		capitalized_array.push(capitalized);
	});
	return capitalized_array.join(" ");
});

Vue.filter("truncate", function (value, limit) {
	return value.substring(0, limit);
});

Vue.filter("tailing", function (value, tail) {
	return value + tail;
});

Vue.filter("time", function (value, is24HrFormat = false) {
	if (value) {
		const date = new Date(Date.parse(value));
		let hours = date.getHours();
		const min = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();
		if (!is24HrFormat) {
			const time = hours > 12 ? "بعد از ظهر" : "قبل از ظهر";
			hours = hours % 12 || 12;
			return `${hours}:${min} ${time}`;
		}
		return `${hours}:${min}`;
	}
});

Vue.filter("date", function (value, fullDate = false) {
	value = String(value);
	const date = value.slice(8, 10).trim();
	const month = value.slice(4, 7).trim();
	const year = value.slice(11, 15);

	if (!fullDate) return `${date} ${month}`;
	else return `${date} ${month} ${year}`;
});

Vue.filter("month", function (val, showYear = true) {
	val = String(val);

	const regx = /\w+\s(\w+)\s\d+\s(\d+)./;
	if (!showYear) {
		return regx.exec(val)[1];
	} else {
		return `${regx.exec(val)[1]} ${regx.exec(val)[2]}`;
	}
});

Vue.filter("csv", function (value) {
	return value.join(", ");
});

Vue.filter("filter_tags", function (value) {
	return value.replace(/<\/?[^>]+(>|$)/g, "");
});

Vue.filter("k_formatter", function (num) {
	return num > 999 ? `${(num / 1000).toFixed(1)}هزار` : num;
});

Vue.filter("price", val => {
	if (val) {
		return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "/") + " تومان ";
	}
	return val;
});

Vue.filter("priceUnit", val => {
	if (val) {
		return val.toString() + " تومان ";
	}
	return val;
});
Vue.filter("dPriceUnit", val => {
	if (val) {
		return val.toString() + " دلار ";
	}
	return val;
});
Vue.filter("tUnit", val => {
	if (val) {
		return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " تومان ";
	}
	return val;
});
Vue.filter("jhour", val => {
	if (val) {
		return moment(val).format("HH:mm");
	}
	return val;
});
Vue.filter("jSecound", val => {
	if (val) {
		return moment(val).format("ss");
	}
	return val;
});
Vue.filter("jdate", val => {
	if (val) {
		return moment(val).format("jYY/jMM/jDD");
	}
	return val;
});
Vue.filter("jdateMD", val => {
	if (val) {
		return moment(val).format("jMM/jDD");
	}
	return val;
});
Vue.filter("jdateY", val => {
	if (val) {
		return moment(val).format("jYY");
	}
	return val;
});
