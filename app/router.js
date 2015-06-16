import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('legislators', { path: '/'}, function() {
    this.resource('contact', { path: 'contact/:zip'});
  });
  this.resource('congress-bills');
  this.resource('committees', function() {
    this.resource('house', { path: 'house'}, function() {
      this.resource('subcommittee-house');
    });
  });
});

export default Router;
