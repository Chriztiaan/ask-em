<template>
	<v-row class="d-flex justify-center">
		<v-col cols="12" sm="8" md="6">
			<div class="mx-md-12 px-md-8">
				<div class="question-text">
					{{ question.formattedQuestion }}
				</div>
			</div>
			<v-row class="d-flex justify-center" no-gutters>
				<v-col cols="12" sm="10" md="8">
					<v-radio-group v-model="radio" row class="mt-2">
						<v-row no-gutters>
							<v-col v-for="(option, index) in question.options" :key="index" class="mt-2" cols="8" sm="6" offset="2" offset-sm="0">
								<v-radio :label="option" :value="index"></v-radio>
							</v-col>
						</v-row>
					</v-radio-group>
				</v-col>
			</v-row>
		</v-col>
	</v-row>
</template>

<script lang="ts">
import MultipleQuestion from '@/models/questions/MultipleQuestion';
import Vue from 'vue';

export default Vue.extend({
	props: {
		question: {
			type: MultipleQuestion,
			default: (): MultipleQuestion => new MultipleQuestion(-1, 'Multiple Question')
		}
	},
	data() {
		return {
			radio: '1'
		};
	}
});
</script>

<style scoped></style>
