import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    save: function() {
      var _this = this;
      this.get('model').save().then(function(book) {
        _this.transitionToRoute('books.show', book);
      });
      }
    },
    cancel: function() {
      return true;
    }
  }
});
