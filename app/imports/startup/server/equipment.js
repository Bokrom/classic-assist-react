import { Meteor } from 'meteor/meteor';
import { Equipments } from '../../api/equipment/equipment.js';

/** Initialize the database with a default data document. */
function addData(data) {
  console.log(`  Adding: ${data.name}`);
  Equipments.insert(data);
}

/** Initialize the collection if empty. */
if (Equipments.find().count() === 0) {
  if (Meteor.settings.defaultEquipmentData) {
    console.log('Creating default data.');
    Meteor.settings.defaultEquipmentData.map(data => addData(data));
  }
}

/** This subscription publishes only the documents associated with the logged in user */
Meteor.publish('Equipment', function publish() {
    return Equipments.find();
});
