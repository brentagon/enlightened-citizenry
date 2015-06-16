import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    check: function() {
    var model = (this.get('model'));
    console.log(model)
    debugger;
  }
  }
});
