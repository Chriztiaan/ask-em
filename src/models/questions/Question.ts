export enum QuestionType {
	RANGE = 'range',
	MULTIPLE = 'multiple',
	TEXT = 'text',
	TEXT_AREA = 'textArea'
}

export default class Question {
	number: number;
	question: string;
	formattedQuestion: string;
	type: QuestionType;
	answered: boolean;

	constructor(number: number, question: string, type: QuestionType) {
		this.number = number;
		this.question = question;
		this.type = type;
		this.answered = false;
		this.formattedQuestion = number + '. ' + question;
	}
}
