<template>
	<v-row class="d-flex justify-center">
		<v-col cols="12" sm="8" md="6">
			<div class="mx-md-12 px-md-8">
				<div class="question-text">
					{{ question.formattedQuestion }}
				</div>
			</div>
			<div>
				<v-row class="d-flex justify-center" no-gutters>
					<v-col cols="12" sm="10" md="8">
						<v-textarea rows="3" outlined placeholder="Long text answer"></v-textarea>
					</v-col>
				</v-row>
			</div>
		</v-col>
	</v-row>
</template>

<script lang="ts">
import TextAreaQuestion from '@/models/questions/TextAreaQuestion';
import Vue from 'vue';
export default Vue.extend({
	props: {
		question: {
			type: TextAreaQuestion,
			default: (): TextAreaQuestion => new TextAreaQuestion(-1, 'Text Area Question')
		}
	}
});
</script>
