import Section from './Section';

export class Survey {
	title: string;
	sections: Array<Section>;

	constructor(title: string, sections = new Array<Section>()) {
		this.title = title;
		this.sections = sections;
	}
}
