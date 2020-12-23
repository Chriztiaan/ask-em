import Question, { QuestionType } from './Question';

export default class RangeQuestion extends Question {
	range: number;
	rangeStartText: string;
	rangeEndText: string;

	constructor(number: number, questionText: string, range = 10, rangeStartText = 'Not likely', rangeEndText = 'Very likely') {
		super(number, questionText, QuestionType.RANGE);
		this.range = range;
		this.rangeStartText = rangeStartText;
		this.rangeEndText = rangeEndText;
	}
}
