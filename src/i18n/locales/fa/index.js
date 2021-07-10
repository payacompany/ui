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
			AccountActivity: {
				title: "فعالیت های اخیر اکانت شما",
				successful: "موفق",
				unsuccessful: "ناموفق",
				table: {
					fields: [
						{
							title: "تاریخ",
						},
						{
							title: "عملیات",
						},
						{
							title: "وضعیت",
						},
						{
							title: "آدرس آی پی",
						},
						{
							title: "سیستم عامل",
						},
					],
				},
			},
		},
		wallet: {
			IRTestimate: "تخمین دارایی شما به ریال",
			USDestimate: "تخمین دارایی شما به دلار",
			balance: "موجودی",
			lockedBalance: "موجودی قفل شده",
			deposit: {
				title: "واریز",
				rules: [
					{
						title: "بیشترین",
					},
					{
						title: "کمترین",
					},
					{
						title: "زمان واریز",
					},
					{
						title: "کارمزد",
					},
					{
						title: "کارمزد ثابت",
					},
					{
						title: "حداکثر کارمزد",
					},
					{
						title: "محدودیت",
					},
				],
			},
			withdraw: {
				title: "برداشت",
				destinationAddressWallet: "آدرس والت مقصد را وارد کنید.",
				descriptionText: "لطفا اطلاعات را بادقت تمام وارد نمایید",
				amount: "مقدار",
				balance: "موجودی",
				inventory: "برداشت کل موجودی",
			},
			history: {
				title: "تاریخچه",
				table: {
					fields: [
						{
							title: "تاریخ",
						},
						{
							title: "نام",
						},
						{
							title: "نوع",
						},
						{
							title: "تغییر",
						},
						{
							title: "موجودی",
						},
					],
				},
			},
		},
		orders: {
			allOrders: {
				title: "سفارشات کل",
				close: "بسته",
				open: "باز",
				sell: "فروش",
				buy: "خرید",
				modal: {
					title: "اطلاعات بیشتر",
					orderDetails: "جزئیات سفارش",
					orderId: "شناسه سفارش",
					orderCreatedAt: "تاریخ سفارش",
					unitPerPrice: "قیمت واحد سفارش",
					volume: "حجم سفارش",
					feeOrder: "کارمزد سفارش",
					totalPrice: "قیمت کل سفارش",
				},
				table: {
					fields: [
						{
							title: "تاریخ",
						},
						{
							title: "نام",
						},
						{
							title: "مقدار",
						},
						{
							title: "نوع",
						},
						{
							title: "وضعیت",
						},
						{
							title: "اطلاعات بیشتر",
						},
					],
				},
			},
			openOrders: {
				title: "سفارشات باز",
				sell: "فروش",
				buy: "خرید",
				modal: {
					title: "اطلاعات بیشتر",
					orderDetails: "جزئیات سفارش",
					orderId: "شناسه سفارش",
					orderCreatedAt: "تاریخ سفارش",
					unitPerPrice: "قیمت واحد سفارش",
					volume: "حجم سفارش",
					feeOrder: "کارمزد سفارش",
					totalPrice: "قیمت کل سفارش",
					filledVolume: "حجم پر شده",
				},
				table: {
					fields: [
						{
							title: "تاریخ",
						},
						{
							title: "نام",
						},
						{
							title: "مقدار",
						},
						{
							title: "نوع",
						},

						{
							title: "اطلاعات بیشتر",
						},
					],
				},
			},
			closeOrders: {
				title: "سفارشات تکمیل شده",
				table: {
					fields: [
						{
							title: "تاریخ",
						},
						{
							title: "نام",
						},
						{
							title: "مقدار",
						},
						{
							title: "نوع",
						},
						{
							title: "وضعیت",
						},
						{
							title: "اطلاعات بیشتر",
						},
					],
				},
			},
		},
		history: {
			bankTransactions: {},
			cryptoTransations: {},
		},
	},
};
