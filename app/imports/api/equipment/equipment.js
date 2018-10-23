import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

const Equipments = new Mongo.Collection('Equipments');

const EquipmentSchema = new SimpleSchema({

  // Basic item classification
  id: Number,
  name: String,
  class: {
    type: String,
    allowedValues: ['Ammo', 'Ammo Container', 'Armor', 'Weapon']
  },
  ammoSubClass: {
    type: String,
    allowedValues: ['Arrow', 'Bullet']
  },
  ammoContainerSubClass: {
    type: String,
    allowedValues: ['Quiver', 'Ammo Pouch']
  },
  armorSubClass: {
    type: String,
    allowedValues: ['Miscellaneous', 'Cloth', 'Leather', 'Mail', 'Plate', 'Shield', 'Libram', 'Idol', 'Totem']
  },
  weaponSubClass: {
    type: String,
    allowedValues: ['Axe 1H', 'Axe 2H', 'Bow', 'Gun', 'Mace 1H', 'Mace 2H', 'Polearm', 'Sword 1H', 'Sword 2H', 'Staff', 'Fist', 'Miscellaneous', 'Dagger', 'Thrown', 'Crossbow', 'Wand', 'Fishing Pole']
  },
  bonding: {
    type: String,
    allowedValues: ['Bind on pickup', 'Bind on equip', 'Bind on use', 'Quest item']
  },
  quality: {
    type: String,
    allowedValues: ['Poor', 'Common', 'Uncommon', 'Rare', 'Epic', 'Legendary']
  },
  level: Number,
  set: Number,
  randomProperty: Number,
  unique: Boolean,
  sheath: Number,

  // For quest rewards with no required level
  obtainableLevel: Number,

  // (seconds)
  onUseCooldown: Number,

  // Flavor text
  description: String,

  // Info for icons, models, and textures
  displayId: Number,

  // Equip slot
  inventoryType: {
    type: String,
    allowedValues: ['Relic', 'Ammo', 'Ammo Container', 'Ranged', 'Held in Off-Hand', 'Main-hand', 'One-hand', 'Off-hand', 'Two-hand', 'Shield', 'Tabard', 'Shirt', 'Head', 'Neck', 'Shoulder', 'Back', 'Chest', 'Wrist', 'Hands', 'Waist', 'Legs', 'Feet', 'Finger', 'Trinket']
  },

  // Base stats
  agility: Number,
  intellect: Number,
  spirit: Number,
  stamina: Number,
  strength: Number,
  armor: Number,
  block: Number,

  // Base weapon stats  
  delay: Number,  //(milliseconds)

  dmgMin1: Number,
  dmgMax1: Number,
  dmgType1: {
    type: Number,
    allowedValues: ['Physical', 'Holy', 'Fire', 'Nature', 'Frost', 'Shadow', 'Arcane']
  },
  dmgMin2: Number,
  dmgMax2: Number,
  dmgType2: {
    type: Number,
    allowedValues: ['Physical', 'Holy', 'Fire', 'Nature', 'Frost', 'Shadow', 'Arcane']
  },

  // Bonus effects
  critical: Number,
  criticalRanged: Number,
  criticalSpell: Number,
  criticalSpellHoly: Number,
  hit: Number,
  hitRanged: Number,
  hitSpell: Number,
  haste: Number,
  hasteRanged: Number,
  blockChance: Number,
  dodge: Number,
  parry: Number,
  resistFear: Number,
  resistSilence: Number,
  resistStun: Number,
  spellPenetration: Number,
  attackPower: Number,
  attackPowerRanged: Number,
  attackPowerBeast: Number,
  attackPowerDemon: Number,
  attackPowerDragonkin: Number,
  attackPowerElemental: Number,
  attackPowerUndead: Number,
  attackPowerFeral: Number,
  healing: Number,
  spellDamage: Number,
  spellDamageUndead: Number,
  spellDamageDemon: Number,
  spellDamageArcane: Number,
  spellDamageFire: Number,
  spellDamageFrost: Number,
  spellDamageHoly: Number,
  spellDamageNature: Number,
  spellDamageShadow: Number,
  spellPower: Number,
  bonusWeaponDamage: Number,
  skillAxe1H: Number,
  skillAxe2H: Number,
  skillBow: Number,
  skillCrossbow: Number,
  skillDagger: Number,
  skillGun: Number,
  skillMace1H: Number,
  skillMace2H: Number,
  skillSword1H: Number,
  skillSword2H: Number,
  armorBonus: Number,
  blockValue: Number,
  defense: Number,
  spellDamageReduction: Number,
  healthPer5: Number,
  manaPer5: Number,
  stealthDetection: Number,
  stealthBonus: Number,
  runSpeed: Number,
  swimSpeed: Number,
  mountBonus: Number,
  fallDamage: Number,
  fishingBonus: Number,
  herbBonus: Number,
  lockpickingBonus: Number,
  miningBonus: Number,
  skinningBonus: Number,
  disarmImmune: Boolean,
  underwaterBreathing: Boolean,
  equipPaladin: String,
  equipWarrior: String,
  equipHunter: String,
  equipShaman: String,
  equipDruid: String,
  equipRogue: String,
  equipMage: String,
  equipPriest: String,
  equipWarlock: String,
  petBonus: String,
  enchantWeapon: String,
  chanceOnBlock: String,
  chanceOnCast: String,
  chanceOnHit: String,
  chanceOnHitRanged: String,
  chanceOnHitSpell: String,
  chanceWhenStruck: String,
  chanceWhenStruckSpell: String,
  onDeath: String,
  equipGroupBonus: String,
  equipMisc: String,
  onUse: String,

  // Resistances
  arcaneResist: Number,
  fireResist: Number,
  frostResist: Number,
  natureResist: Number,
  shadowResist: Number,

  // Requirements
  requiredSkillRank: Number,
  requiredLevel: Number,
  requiredHonorRank: Number,
  requiredPlayerClass: Array,
  'requiredPlayerClass.$': {
    type: String,
    allowedValues: ['Warrior', 'Paladin', 'Shaman', 'Hunter', 'Druid', 'Rogue', 'Warlock', 'Priest', 'Mage']
  },
  requiredPlayerFaction: {
    type: String,
    allowedValues: ['Horde', 'Alliance']
  },
  requiredSkill: {
    type: String,
    allowedValues: ['Fishing', 'Engineering', 'Mining', 'Herbalism']
  },
  requiredSkillSpec: {
    type: String,
    allowedValues: ['Goblin Engineer', 'Gnomish Engineer']
  },
  requiredReputationFaction: {
    type: String,
    allowedValues: ['Brood of Nozdormu', 'Silverwing Sentinels', 'Warsong Outriders', 'Stormpike Guard', 'Frostwolf Clan', 'Timbermaw Hold', 'The Defilers', 'The League of Arathor']
  },
  requiredReputationRank: {
    type: String,
    allowedValues: ['Neutral', 'Friendly', 'Honored', 'Revered', 'Exalted']
  }

}, { requiredByDefault: false }, { tracker: Tracker });

Equipments.attachSchema(EquipmentSchema);

export { Equipments, EquipmentSchema };