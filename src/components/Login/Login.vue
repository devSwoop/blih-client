<template>
	<v-container>
		<v-form v-model="valid" ref="formLogin" @submit.prevent="submit">
			<v-text-field
			label="Email"
			v-model="email"
			type="email"
			required
			></v-text-field>

			<v-text-field
			label="Password"
			v-model="password"
			type="password"
			required
			></v-text-field>

			<v-btn type="submit">Login</v-btn>
		</v-form>
	</v-container>
</template>

<script>
export default {
	name: 'login',

	data () {
		return {
			valid: true,
			email: null,
			password: null
		}
	},

	methods: {
		submit () {
			this.$store.dispatch('login', { email: this.email, password: this.password })
		}
	},

	created () {
	}
}
</script>

<style lang="css" scoped>
</style>
