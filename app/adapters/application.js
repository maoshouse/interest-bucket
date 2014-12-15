import DS from 'ember-data';

export default DS.FirebaseAdapter.extend({
  firebase: new window.Firebase('https://interest-bucket.firebaseio.com')
});

// export default DS.RESTAdapter.extend({
// });
