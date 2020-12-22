<template>
	<!-- <v-app class="red">
		<v-icon>mdi-home</v-icon>
		{{ test }}
	</v-app> -->
	<question-container />
</template>

<script lang="ts">
import Vue from 'vue';
import QuestionContainer from './components/QuestionContainer.vue';

import axios from 'axios';

export default Vue.extend({
	components: {
		QuestionContainer
	},
	data() {
		return {
			test: 'AWe'
		};
	},
	mounted() {
		axios
			.get('http://127.0.0.1:5000/questionnaire/question1')
			.then(response => {
				// handle success
				this.test = response.data;
			})
			.catch(function(error) {
				// handle error
				console.log(error);
			})
			.then(function() {
				// always executed
			});
	}
});
</script>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
