export default {
	nav: {
		profile: "profile",
		wallet: "wallet",
		trade: "trade",
		history: "history",
		logout: "logout",
		orders: "orders",
	},
	pages: {
		profile: {
			verifiyStep: {
				emailVerification: {},
				phoneVerification: {
					title: "Phone verification",
					exampleText: "example : 09120002548",
					placeHolder: "phone number",
					acceptCode: "accept code",
					sendCode: "Send code",
					submit: "Submit",
				},
				userIdentifyVerification: {
					title: "User identify verification",
					fname: "First Name",
					lname: "Last Name",
					nationalCode: "National Code",
					selfie: "Selfie with idCard",
					idCardImage: "Id card picture",
					uploadImage: "Upload image",
					submit: "Submit",
				},
			},
			xs: [
				{
					title: "Profile Verification",
					level: "Level",
				},
				{
					title: "Two-factor authentication",
				},
				{
					title: "Change password",
				},
				{
					title: "Account activity",
				},
				{
					title: "My API key",
				},
				{
					title: "Language",
				},
				// {
				// 	title: "Theme",
				// },
			],
			title: "profile",
			disable: "Disable",
			enable: "Enable",
			changePassword: {
				title: "Change password",
				currentPassword: "Current Password",
				newPassword: "New Password",
				repeatNewPassword: "Repeat New Password",
			},
			twoAuth: {
				title: "two factor authentication",
				active: "active",
				deactive: "deactive",
			},
			copyText: {
				title: "copy!",
				placeHolder: "referral code",
			},
			userVerification: {
				title: "User Verification",
				verify: "verify",
				confirmed: "confirmed",
				kycSteps: [
					{
						title: "Step 1",
						name: "Email Verification",
						isCompleted: true,
						accessTo: "withdraw Access",
						isAllow: false,
					},
					{
						title: "Step 2",
						name: "Phone Verification",
						isCompleted: true,
						accessTo: "Access to trading room",
						isAllow: false,
					},
					{
						title: "Step 3",
						name: "user identify",
						isCompleted: true,
						accessTo: "maximum withdraw 1 BTC",
						isAllow: false,
					},
					{
						title: "Step 4",
						name: "Bank Verification",
						isCompleted: true,
						accessTo: "maximum withdraw 10 BTC",
						isAllow: false,
					},
					{
						title: "Step 5",
						name: "Residence Verification",
						isCompleted: false,
						accessTo: "maximum withdraw 100 BTC",
						isAllow: false,
					},
				],
			},
			ApiManagement: {
				title: "API Management",
				description: "Enable 2fa for activation",
			},
			AccountActivity: {
				title: "Account activity",
				successful: "successful",
				unsuccessful: "unsuccessful",
				table: {
					fields: [
						{
							title: "Date",
						},
						{
							title: "operation",
						},
						{
							title: "status",
						},
						{
							title: "IP Address",
						},
						{
							title: "OS",
						},
					],
				},
			},
		},
		wallet: {
			IRTestimate: "Estimate your assets to IRT",
			USDestimate: "Estimate your assets to USD",
			balance: "Balance",
			lockedBalance: "Locked Balance",
			deposit: {
				title: "deposit",
				rules: [
					{
						title: "Max",
					},
					{
						title: "Min",
					},
					{
						title: "Deposit Time",
					},
					{
						title: "Fee",
					},
					{
						title: "Fixed fee",
					},
					{
						title: "Maximum fee",
					},
					{
						title: "Limitaion",
					},
				],
			},
			withdraw: {
				title: "withdraw",
				destinationAddressWallet: "Enter destination wallet address",
				descriptionText: "Please enter the information carefully",
				amount: "Amount",
				balance: "Balance",
				inventory: "Total inventory withdrawals",
			},
			history: {
				title: "history",
				table: {
					fields: [
						{
							title: "Date",
						},
						{
							title: "Name",
						},
						{
							title: "Type",
						},
						{
							title: "Changes",
						},
						{
							title: "Balance",
						},
					],
				},
			},
		},
		orders: {
			allOrders: {
				title: "All orders",
				close: "Close",
				open: "Open",
				sell: "Sell",
				buy: "Buy",
				modal: {
					title: "more info",
					orderDetails: "Order details",
					orderId: "ID",
					orderCreatedAt: "Created at",
					unitPerPrice: "Unit per price",
					volume: "Volume",
					feeOrder: "Fee order",
					totalPrice: "Total price",
				},
				table: {
					xs: {
						fields: [
							{
								title: "Date",
							},
							{
								title: "Name",
							},
							{
								title: "Info",
							},
						],
					},
					fields: [
						{
							title: "Date",
						},
						{
							title: "Name",
						},
						{
							title: "Amount",
						},
						{
							title: "Type",
						},
						{
							title: "Status",
						},
						{
							title: "Info",
						},
					],
				},
			},
			openOrders: {
				title: "Open orders",
				open: "Open",
				sell: "Sell",
				modal: {
					title: "more info",
					orderDetails: "Order details",
					orderId: "ID",
					orderCreatedAt: "Created at",
					unitPerPrice: "Unit per price",
					volume: "Volume",
					feeOrder: "Fee order",
					totalPrice: "Total price",
					filledVolume: "Filled Volume",
				},
				table: {
					xs: {
						fields: [
							{
								title: "Date",
							},
							{
								title: "Name",
							},
							{
								title: "Info",
							},
						],
					},
					fields: [
						{
							title: "Date",
						},
						{
							title: "Name",
						},
						{
							title: "Amount",
						},
						{
							title: "Type",
						},
						{
							title: "Info",
						},
					],
				},
			},
			closeOrders: {
				title: "Close orders",
				table: {
					fields: [
						{
							title: "Date",
						},
						{
							title: "Name",
						},
						{
							title: "Amount",
						},
						{
							title: "Type",
						},
						{
							title: "Status",
						},
						{
							title: "Info",
						},
					],
				},
			},
		},
		history: {
			filterTitle: "type",
			filters: [
				{
					text: "All",
					value: 0,
				},
				{
					text: "Deposit",
					value: 1,
				},
				{
					text: "Withdraw",
					value: 2,
				},
			],
			bankTransactions: {
				title: "Bank transactions",
				table: {
					xs: {
						fields: [
							{
								title: "ID",
							},
							{
								title: "type",
							},
							{
								title: "more info",
							},
						],
					},
					fields: [
						{
							title: "ID",
						},
						{
							title: "type",
						},
						{
							title: "Amount",
						},
						{
							title: "Fee",
						},
						{
							title: "Status",
						},
						{
							title: "IBan",
						},
						{
							title: "Created at",
						},
						{
							title: "Updated at",
						},
					],
				},
			},
			cryptoTransations: {
				title: "Crypto transactions",
				table: {
					xs: {
						fields: [
							{
								title: "ID",
							},
							{
								title: "Unit",
							},
							{
								title: "more info",
							},
						],
					},
					fields: [
						{
							title: "ID",
						},
						{
							title: "Unit",
						},
						{
							title: "Amount",
						},
						{
							title: "Fee",
						},
						{
							title: "Status",
						},
						{
							title: "Address",
						},
						{
							title: "Created at",
						},
						{
							title: "Updated at",
						},
					],
				},
			},
		},
		trade: {
			xs: {
				markets: {
					volume: "Vol",
					high: "High",
					low: "Low",
				},
				tabs: {
					placeOrder: "Place order",
					charts: "Charts",
					orders: "Orders",
				},
			},
			placeOrder: {
				filterTitle: "order type",
				filters: [
					{ text: "Limit", value: 0 },
					{ text: "Market", value: 1 },
				],
				price: "Price",
				pricePlaceHolder: "Enter price here",
				volume: "Volume",
				volumePlaceHolder: "Enter volume here",
				totalBalance: "Total Balance",
				buy: {
					title: "Buy",
				},
				sell: {
					title: "Sell",
				},
			},
			markets: {
				title: "Markets",
				searchText: "Search market...",
				table: {
					fields: [
						{
							title: "market",
						},
						{
							title: "price",
						},
						{
							title: "changes",
						},
					],
				},
			},
			orderBook: {
				title: "Order book",
				table: {
					fields: [
						{
							title: "price(unit)",
						},
						{
							title: "volume",
						},
						{
							title: "changes(%)",
						},
					],
				},
				all: {
					title: "All",
				},
				buy: {
					title: "Buy",
				},
				sell: {
					title: "Sell",
				},
			},
			openOrders: {
				title: "Your open oreders",
				closeAll: "Close All",
				cancel: "cancel",
				table: {
					fields: [
						{
							title: "Date",
						},
						{
							title: "Price(unit)",
						},
						{
							title: "Volume",
						},
						{
							title: "Amount",
						},
						{
							title: "Filled",
						},
						{
							title: "Operation",
						},
					],
				},
			},
			trades: {
				title: "Recent Transactions",
				myTransactions: {
					title: "Yours",
				},
				marketTransactions: {
					title: "Market",
				},
				table: {
					fields: [
						{
							title: "price(unit)",
						},
						{
							title: "volume",
						},
						{
							title: "tprice(unit)",
						},
					],
				},
			},
		},
	},
};
