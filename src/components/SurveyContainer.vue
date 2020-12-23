<template>
	<div v-if="survey">
		{{ survey.title }}
		<v-stepper v-model="openSection" vertical non-linear>
			<survey-section
				v-for="(section, index) in survey.sections"
				:key="index + 1"
				:step="index + 1"
				:questions="section.questions"
				@continue="openSection++"
				@back="openSection--"
			>
				<template v-slot:title>{{ section.title }}</template>
				<template v-slot:description>
					{{ section.description }}
				</template>
			</survey-section>
		</v-stepper>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import SurveySection from './SurveySection.vue';
import QuestionRange from './QuestionRange.vue';
import QuestionMultiple from './QuestionMultiple.vue';
import QuestionText from './QuestionText.vue';
import QuestionTextArea from './QuestionTextArea.vue';
import { Survey } from '@/models/Survey';
import Axios from 'axios';

export default Vue.extend({
	components: {
		SurveySection,
		QuestionRange,
		QuestionMultiple,
		QuestionText,
		QuestionTextArea
	},
	data() {
		return {
			openSection: 1,
			survey: undefined as undefined | Survey
		};
	},
	mounted() {
		Axios.get('https://open-gram.herokuapp.com/questionnaire/question1')
			.then(response => {
				// handle success
				// this.survey = JSON.parse(response.data);
				this.survey = JSON.parse(JSON.stringify(response.data));
				// this.survey = createSurvey();
			})
			.catch(function(error) {
				// handle error
				console.log(error);
			})
			.then(function() {
				// always executed
			});
	},
	methods: {}
});
</script>
