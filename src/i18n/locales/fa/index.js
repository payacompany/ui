export default {
	nav: {
		profile: "پرفایل کاربری",
		wallet: "کیف پول",
		trade: "بازار",
		history: "تاریخچه",
		logout: "خروج",
		orders: "سفارشات",
	},
	attribute: {
		yourId: "آی دی شما",
	},
	pages: {
		auth: {
			signUp: {
				title: "ثبت نام در سایت",
				userName: "نام کاربری",
				userNamePlaceHolder: "نام کاربری خود را اینجا وارد نمایید",
				password: "رمز عبور",
				passwordPlaceHodler: "رمز عبور خود را اینجا وارد نمایید",
				repeatPassword: "تکرار رمز عبور",
				repeatPasswordPlaceHodler: "تکرار رمز عبور خود را اینجا وارد نمایید",
				faq: {
					start: "تمامی",
					middle: "قوانین و مقررات",
					end: "را مطالعه و قبول دارم.",
				},
				submit: "ثبت نام",
			},
			login: {
				title: "ورود به حساب کاربری",
				userName: "نام کاربری",
				userNamePlaceHolder: "نام کاربری خود را اینجا وارد نمایید",
				password: "رمز عبور",
				passwordPlaceHodler: "رمز عبور خود را اینجا وارد نمایید",
				submit: "ورود به حساب کاربری",
			},
		},
		profile: {
			verifiyStep: {
				emailVerification: {},
				emailVerification: {
					title: "اعتبارسنجی ایمیل",
					exampleText: "مثال : example@gmail.com",
					placeHolder: "ایمیل شما",
					acceptCode: "کد تایید",
					sendCode: "ارسال کد",
					submit: "ثبت اطلاعات",
				},
				phoneVerification: {
					title: "اعتبارسنجی شماره موبایل",
					exampleText: "مثال : 09120002548",
					placeHolder: "شماره موبایل",
					acceptCode: "کد تایید",
					sendCode: "ارسال کد",
					submit: "ثبت اطلاعات",
				},
				userIdentifyVerification: {
					title: "تکمیل اطلاعات هویتی",
					fname: "نام",
					lname: "نام خانوادگی",
					nationalCode: "کد ملی",
					selfie: "عکس سلفی با کارت ملی",
					idCardImage: "عکس کارت ملی",
					uploadImage: "آپلود تصویر",
					submit: "ارسال مدارک",
				},
				bankAccountVarification: {
					title: "اطلاعات حساب بانکی",
					iban: "شمار شبا",
					cardNumber: "شماره کارت",
					submit: "ثبت کارت بانکی",
				},
				residenceInfoVerification: {
					title: "اطلاعات محل سکونت",
					state: "استان",
					city: "شهر",
					address: "آدرس",
					postalCode: "کد پستی",
					phone: "تلفن",
					submit: "ثبت اطلاعات",
				},
			},
			xs: [
				{
					title: "احراز هویت حساب کاربری",
					level: "سطح",
				},
				{
					title: "شناسایی دوعاملی",
				},
				{
					title: "تغییر رمز عبور",
				},
				{
					title: "فعالیت های اخیر اکانت شما",
				},
				{
					title: "مدیریت API ها",
				},
				// {
				// 	title: "زبان",
				// },
				// {
				// 	title: "تم",
				// },
			],
			title: "حساب کاربری شما",
			language: "زبان",
			disable: "فعال",
			enable: "غیرفعال",
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
						isCompleted: false,
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
			IRTestimate: "دارایی (ریال)",
			USDestimate: "دارایی (دلار)",
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
					title: "بیشتر",
					orderDetails: "جزئیات سفارش",
					orderId: "شناسه سفارش",
					orderCreatedAt: "تاریخ سفارش",
					unitPerPrice: "قیمت واحد سفارش",
					volume: "حجم سفارش",
					feeOrder: "کارمزد سفارش",
					totalPrice: "قیمت کل سفارش",
				},
				table: {
					xs: {
						fields: [
							{
								title: "تاریخ",
							},
							{
								title: "نام",
							},
							{
								title: "بیشتر",
							},
						],
					},
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
							title: "بیشتر",
						},
					],
				},
			},
			openOrders: {
				title: "سفارشات باز",
				sell: "فروش",
				buy: "خرید",
				modal: {
					title: "بیشتر",
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
					xs: {
						fields: [
							{
								title: "تاریخ",
							},
							{
								title: "نام",
							},
							{
								title: "بیشتر",
							},
						],
					},
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
							title: "بیشتر",
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
							title: "بیشتر",
						},
					],
				},
			},
		},
		history: {
			filterTitle: "نوع",
			filters: [
				{
					text: "همه",
					value: 0,
				},
				{
					text: "واریز",
					value: 1,
				},
				{
					text: "برداشت",
					value: 2,
				},
			],
			bankTransactions: {
				title: "تاریخچه تراکنش های بانکی",
				table: {
					xs: {
						fields: [
							{
								title: "شناسه",
							},
							{
								title: "نوع",
							},
							{
								title: "بیشتر",
							},
						],
					},
					fields: [
						{
							title: "شناسه",
						},
						{
							title: "نوع",
						},
						{
							title: "مقدار",
						},
						{
							title: "کارمزد",
						},
						{
							title: "وضعیت",
						},
						{
							title: "شماره کارت / شبا",
						},
						{
							title: "زمان ایجاد",
						},
						{
							title: "زمان تغییر",
						},
					],
				},
			},
			cryptoTransations: {
				title: "تاریخچه تراکنش ها رمزارز",
				table: {
					xs: {
						fields: [
							{
								title: "شناسه",
							},
							{
								title: "واحد پول",
							},
							{
								title: "بیشتر",
							},
						],
					},
					fields: [
						{
							title: "شناسه",
						},
						{
							title: "واحد پول",
						},
						{
							title: "مقدار",
						},
						{
							title: "کارمزد",
						},
						{
							title: "وضعیت",
						},
						{
							title: "آدرس",
						},
						{
							title: "زمان ایجاد",
						},
						{
							title: "زمان تغییر",
						},
					],
				},
			},
		},
		trade: {
			xs: {
				markets: {
					volume: "حجم",
					high: "بالاترین",
					low: "کمترین",
				},
				tabs: {
					placeOrder: "ایجاد سفارش",
					charts: "نمودار",
					orders: "سفارشات",
				},
			},
			placeOrder: {
				filterTitle: "نوع سفارش",
				filters: [
					{ text: "محدود", value: 0 },
					{ text: "بازار", value: 1 },
				],
				price: "قیمت",
				pricePlaceHolder: "قیمت مورد نظر را وارد نمایید",
				volume: "حجم",
				volumePlaceHolder: "حجم مورد نظر را وارد نمایید",
				totalBalance: "کل موجودی در دسترس",
				buy: {
					title: "خرید",
				},
				sell: {
					title: "فروش",
				},
			},
			markets: {
				title: "بازار ها",
				searchText: "جستجو بازار مورد نظر",
				table: {
					fields: [
						{
							title: "بازار",
						},
						{
							title: "قیمت",
						},
						{
							title: "درصد تغییرات",
						},
					],
				},
			},
			orderBook: {
				title: "پیشنهادات بازار",
				table: {
					fields: [
						{
							title: "قیمت",
						},
						{
							title: "حجم",
						},
						{
							title: "تغییرات",
						},
					],
				},
				all: {
					title: "کل",
				},
				buy: {
					title: "خرید",
				},
				sell: {
					title: "فروش",
				},
			},
			openOrders: {
				title: "سفارشات باز شما",
				closeAll: "بسته همه",
				cancel: "لغو",
				table: {
					fields: [
						{
							title: "تاریخ",
						},
						{
							title: "قیمت(واحد)",
						},
						{
							title: "حجم",
						},
						{
							title: "مقدار",
						},
						{
							title: "پرشده",
						},
						{
							title: "عملیات",
						},
					],
				},
			},
			trades: {
				title: "معاملات اخیر",
				myTransactions: {
					title: "معاملات اخیر شما",
				},
				marketTransactions: {
					title: "معاملات بازار",
				},
				table: {
					fields: [
						{
							title: "قیمت(واحد)",
						},
						{
							title: "حجم",
						},
						{
							title: "مبلغ کل(واحد)",
						},
					],
				},
			},
		},
	},
};
