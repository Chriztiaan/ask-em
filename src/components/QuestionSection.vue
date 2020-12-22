<template>
	<!-- Do buttons, back and forth. Consider existing forms. Get all types for fields. Load via rest. -->
	<div>
		<v-stepper-step non-linear editable :step="step">
			<slot name="title"> </slot>
			<slot v-if="!hideSubtitle" name="subtitle">
				<!-- Only show this if section has been touched? -->
				<small>0 out of 5 questions answered</small>
			</slot>
		</v-stepper-step>

		<v-stepper-content :step="step">
			<slot name="description"></slot>

			<slot>
				<div class="ma-8">No questions</div>
			</slot>
			<div class="pa-4 float-right">
				<v-btn text class="ma-2">
					Back
				</v-btn>
				<v-btn class="ma-2" color="primary" @click="e6 = 2">
					Continue
				</v-btn>
			</div>
		</v-stepper-content>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	props: {
		step: {
			type: String,
			default: '-1'
		},
		hideSubtitle: {
			type: Boolean,
			default: false
		}
	}
});
</script>

<style scoped></style>
