import Question, { QuestionType } from './Question';

export default class MultipleQuestion extends Question {
	options: Array<string>;

	constructor(number: number, questionText: string, options = new Array<string>()) {
		super(number, questionText, QuestionType.MULTIPLE);
		this.options = options;
	}
}
