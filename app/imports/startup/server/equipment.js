import { Meteor } from 'meteor/meteor';
import { Equipments } from '../../api/equipment/equipment.js';

Meteor.publish('Equipment', function publish() {
  return Equipments.find();
});
