<template>
	<div>
		<vs-table :max-items="8" pagination :data="users">
			<template slot="thead">
				<vs-th>تاریخ</vs-th>
				<vs-th>عملیات</vs-th>
				<vs-th>وضعیت</vs-th>
				<vs-th>آدرس آی پی</vs-th>
				<vs-th>دستگاه مربوط</vs-th>
			</template>

			<template slot-scope="{ data }">
				<vs-tr v-for="(tr, indextr) in data" :key="indextr">
					<vs-td :data="data[indextr].date">
						{{ data[indextr].date }}
					</vs-td>

					<vs-td :data="data[indextr].activity">
						{{ data[indextr].activity }}
					</vs-td>

					<vs-td :data="data[indextr].status">
						{{ data[indextr].status ? "موفق" : "ناموقق" }}
					</vs-td>

					<vs-td :data="data[indextr].ip">
						{{ data[indextr].ip }}
					</vs-td>

					<vs-td :data="data[indextr].userAgent">
						{{ data[indextr].userAgent }}
					</vs-td>
				</vs-tr>
			</template>
		</vs-table>
	</div>
</template>

<script>
export default {
	data: () => ({
		users: [
			{
				date: "1399/12/5",
				activity: "ورود به حساب کاربری",
				status: true,
				ip: "192.168.10.1",
				userAgent: "Chrome 91 Windows 10"
			}
		]
	})
};
</script>
