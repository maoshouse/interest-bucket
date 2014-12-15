import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.store.findAll('book');
	},
	actions: {
		delete: function(book) {
			book.destroyRecord();
			this.transitionTo('books.index');
		}
	}
});
