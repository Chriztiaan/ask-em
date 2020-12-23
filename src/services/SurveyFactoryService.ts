import MultipleQuestion from '@/models/questions/MultipleQuestion';
import Question from '@/models/questions/Question';
import RangeQuestion from '@/models/questions/RangeQuestion';
import TextAreaQuestion from '@/models/questions/TextAreaQuestion';
import TextQuestion from '@/models/questions/TextQuestion';
import Section from '@/models/Section';
import { Survey } from '@/models/Survey';

export function createSurvey(): Survey {
	let counter = 1;

	const questions = new Array<Question>();
	questions.push(new RangeQuestion(counter++, 'How likely would you recommend your supervisor to a colleague?', 10, 'Not at all likely', 'Extremely likely'));

	const options = ['Always', 'Most of the time', 'About half the time', 'Once in a while', 'Never'];
	questions.push(new MultipleQuestion(counter++, 'How often is your supervisor late to work?', options));

	questions.push(new TextQuestion(counter++, 'Summarise your supervisor briefly.'));

	questions.push(new TextAreaQuestion(counter++, 'Please elaborate on how your supervisor can improve.'));

	const section = new Section('Supervisor evaluation', 'Please answer a few questions regarding your supervisor.', questions);

	return new Survey('Employee Survey', [section]);
}
