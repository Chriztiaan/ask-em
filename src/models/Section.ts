import Question from './questions/Question';

export default class Section {
	title: string;
	description: string;
	questions: Array<Question>;

	constructor(title: string, description: string, questions: Array<Question>) {
		this.title = title;
		this.description = description;
		this.questions = questions;
	}
}
