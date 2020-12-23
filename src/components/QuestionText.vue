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
						<v-text-field placeholder="Short text answer"></v-text-field>
					</v-col>
				</v-row>
			</div>
		</v-col>
	</v-row>
</template>

<script lang="ts">
import TextQuestion from '@/models/questions/TextQuestion';
import Vue from 'vue';
export default Vue.extend({
	props: {
		question: {
			type: TextQuestion,
			default: (): TextQuestion => new TextQuestion(-1, 'Text Question')
		}
	}
});
</script>
