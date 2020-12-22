<template>
	<div class="hello">
		<div id="app">
			<v-app id="inspire">
				<v-stepper v-model="e6" vertical non-linear>
					<question-section step="1">
						<template v-slot:title>Supervisor Evalution</template>
						<template v-slot:description>
							Please answer a few questions regarding your supervisor.
						</template>
					</question-section>

					<question-section step="2">
						<template v-slot:title>Team Evaluation</template>
						<template v-slot:description>
							Please answer a few questions regarding your supervisor.
						</template>

						<v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
					</question-section>

					<question-section step="3">
						<template v-slot:title>Development Environment</template>
						<template v-slot:description>
							Please answer a few questions regarding your development environment.
						</template>

						<v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
					</question-section>

					<question-section step="4">
						<template v-slot:title>Company Culture</template>
						<template v-slot:description>
							Please answer a few questions on how you have experienced company culture this year.
						</template>

						<v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
					</question-section>
				</v-stepper>
			</v-app>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import QuestionSection from './QuestionSection.vue';

export default Vue.extend({
	components: {
		QuestionSection
	},
	props: {
		msg: {
			type: String,
			default: 'Testing'
		}
	},
	data() {
		return {
			e6: 1
		};
	},
	methods: {}
});
</script>
