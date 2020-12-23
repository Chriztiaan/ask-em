import Question, { QuestionType } from './Question';

export default class TextQuestion extends Question {
	constructor(number: number, questionText: string) {
		super(number, questionText, QuestionType.TEXT);
	}
}
