import DS from 'ember-data';

export default DS.Model.extend({
	question : DS.attr('string'),
	question_date : DS.attr('date')
});
