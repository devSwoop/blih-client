<template>
	<v-container>
		<p>Logged as {{ getEmail }}</p>
		<p>{{ getRepositories }}</p>
	</v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	name: 'home',

	computed: {
		...mapGetters([
			'getRepositories',
			'getEmail'
		])
	},

	created () {
		this.$store.dispatch('loadData')
	}
}
</script>

<style lang="css" scoped>
</style>
