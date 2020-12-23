<template>
	<v-row class="d-flex justify-center">
		<v-col cols="12" sm="8" md="6">
			<div class="mx-md-12 px-md-8">
				<div class="question-text">
					{{ question.formattedQuestion }}
				</div>
			</div>
			<div class="mt-8">
				<v-btn-toggle color="primary">
					<v-btn v-for="i in question.range" :key="i" width="20" :min-width="buttonWidth" :class="{ 'last-btn': i == question.range }">
						{{ i }}
					</v-btn>
					<div class="value-text text-colour">
						<div class="d-flex justify-space-between">
							<small>{{ question.rangeStartText }}</small>
							<small>{{ question.rangeEndText }}</small>
						</div>
					</div>
				</v-btn-toggle>
			</div>
		</v-col>
	</v-row>
</template>

<script lang="ts">
import RangeQuestion from '@/models/questions/RangeQuestion';
import Vue from 'vue';
export default Vue.extend({
	props: {
		question: {
			type: RangeQuestion,
			default: (): RangeQuestion => new RangeQuestion(-1, 'Range Question')
		}
	},
	computed: {
		buttonWidth(): number {
			if (this.$vuetify.breakpoint.name == 'xs') {
				return 36;
			}

			return 48;
		}
	}
});
</script>

<style scoped>
.value-text {
	position: absolute;
	width: 100%;
	margin-top: -24px;
}
.last-btn {
	border-top-right-radius: inherit !important;
	border-bottom-right-radius: inherit !important;
}
</style>
