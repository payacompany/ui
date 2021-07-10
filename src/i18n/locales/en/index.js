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
			title: "profile",
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
	},
};
