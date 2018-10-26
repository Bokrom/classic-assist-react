import { Meteor } from 'meteor/meteor';
import { EquipmentLocal } from '../../api/equipment/client/equipment.js';

Meteor.call('copyDb', (err, result) => {
  if (!err) result.forEach(r => EquipmentLocal.insert(r));
});