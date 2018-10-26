import { Meteor } from 'meteor/meteor';
import { Equipment } from './equipment/equipment.js';

Meteor.methods ({
  copyDb() {
      return Equipment.find().fetch();
  }
})
