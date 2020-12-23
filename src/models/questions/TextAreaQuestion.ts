import Question, { QuestionType } from './Question';

export default class TextAreaQuestion extends Question {
	constructor(number: number, questionText: string) {
		super(number, questionText, QuestionType.TEXT_AREA);
	}
}
