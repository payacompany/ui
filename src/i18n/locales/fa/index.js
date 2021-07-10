export default {
	nav: {
		profile: "پرفایل کاربری",
		wallet: "کیف پول",
		trade: "بازار",
		history: "تاریخچه",
		logout: "خروج از حساب کاربری",
		orders: "سفارشات",
	},
	pages: {
		profile: {
			title: "حساب کاربری شما",
			changePassword: {
				title: "تغییر گذرواژه",
				currentPassword: "رمز عبور فعلی شما",
				newPassword: "رمز عبور جدید شما",
				repeatNewPassword: "تکرار رمز عبور جدید شما",
			},
			twoAuth: {
				title: "شناسایی دوعاملی",
				active: "فعال",
				deactive: "غیرفعال",
			},
			copyText: {
				title: "کپی کردن!",
				placeHolder: "کد معرف شما",
			},
			userVerification: {
				title: "احراز هویت",
				verify: "اعتبارسنجی",
				confirmed: "اطلاعات تایید شده",
				kycSteps: [
					{
						title: "مرحله اول",
						name: "احراز ایمیل",
						isCompleted: true,
						accessTo: "اجازه برداشت",
						isAllow: false,
					},
					{
						title: "مرحله دوم",
						name: "اعتبارسنجی شماره موبایل",
						isCompleted: true,
						accessTo: "دسترسی به اتاق معاملات و واریز",
						isAllow: false,
					},
					{
						title: "مرحله سوم",
						name: "تکمیل اطلاعات کاربری",
						isCompleted: true,
						accessTo: "اجازه برداشت روزانه تا حد مجاز 1 BTC",
						isAllow: false,
					},
					{
						title: "مرحله چهارم",
						name: "اطلاعات بانکی",
						isCompleted: true,
						accessTo: "اجازه برداشت روزانه تا حد مجاز 10 BTC",
						isAllow: false,
					},
					{
						title: "مرحله پنجم",
						name: "اطلاعات محل سکونت",
						isCompleted: false,
						accessTo: "اجازه برداشت روزانه تا حد مجاز 100 BTC",
						isAllow: false,
					},
				],
			},
			ApiManagement: {
				title: "مدیریت API ها",
				description:
					"برای مدیریت Api ابتدا باید شناسایی دوعاملی خود را فعال کنید.",
			},
		},
	},
};
