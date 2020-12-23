<template>
	<!-- Do buttons, back and forth. Consider existing forms. Get all types for fields. Load via rest. -->
	<div>
		<v-stepper-step non-linear editable :step="step">
			<slot name="title"> </slot>
			<slot v-if="!hideSubtitle" name="subtitle">
				<small>0 out of 5 questions answered</small>
			</slot>
		</v-stepper-step>

		<v-stepper-content :step="step">
			<strong><slot name="description"></slot></strong>
			<div class="mb-5"></div>
			<div v-if="questions">
				<template v-for="(question, index) in questions">
					<question-range v-if="question.type == 'range'" :key="index" :question="question" />
					<question-multiple v-else-if="question.type == 'multiple'" :key="index" :question="question" />
					<question-text v-else-if="question.type == 'text'" :key="index" :question="question" />
					<question-text-area v-else-if="question.type == 'textArea'" :key="index" />
				</template>
			</div>
			<div v-else class="my-8">No questions</div>

			<div class="pa-4">
				<v-btn v-if="step != 1" text class="ma-2" @click="$emit('back')">
					Back
				</v-btn>
				<v-btn class="ma-2" color="primary" @click="$emit('continue')">
					Continue
				</v-btn>
			</div>
		</v-stepper-content>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import QuestionRange from './QuestionRange.vue';
import QuestionMultiple from './QuestionMultiple.vue';
import QuestionText from './QuestionText.vue';
import QuestionTextArea from './QuestionTextArea.vue';

export default Vue.extend({
	components: {
		QuestionRange,
		QuestionMultiple,
		QuestionText,
		QuestionTextArea
	},
	props: {
		step: {
			type: Number,
			default: -1
		},
		hideSubtitle: {
			type: Boolean,
			default: false
		},
		questions: {
			type: Array,
			default: undefined
		}
	}
});
</script>

<style>
.v-stepper__content {
	margin-left: 0px !important;
}
</style>
