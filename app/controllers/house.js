import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    showSubcommittee: function(committee) {
      this.set('currentComm', committee)
      console.log(committee.subcommittees)
      $("#myModal").modal('show');
    }
  }
});
