<template>
<div id="app">
	<v-app>
		<v-content>
			<router-view />
		</v-content>
	</v-app>
</div>
</template>

<script>
import store from './store'

export default {

	name: 'App',
	store

}
</script>
