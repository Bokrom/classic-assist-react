// Many of these values are incorrect in the database

db.items_copy.updateMany({ allowableClass: 1488 },
  { $push: { requiredPlayerClass: { $each: ["Priest", "Shaman", "Mage", "Warlock", "Druid"] } } }
)

db.items_copy.updateMany({ allowableClass: 1032 },
  { $push: { requiredPlayerClass: { $each: ["Druid", "Rogue"] } } }
)

db.items_copy.updateMany({ allowableClass: 1024 },
  { $push: { requiredPlayerClass: "Druid" } }
)

db.items_copy.updateMany({ allowableClass: 400 },
  { $push: { requiredPlayerClass: { $each: ["Priest", "Mage", "Warlock"] } } }
)

db.items_copy.updateMany({ allowableClass: 256 },
  { $push: { requiredPlayerClass: "Warlock" } }
)

db.items_copy.updateMany({ allowableClass: 128 },
  { $push: { requiredPlayerClass: "Mage" } }
)

db.items_copy.updateMany({ allowableClass: 68 },
  { $push: { requiredPlayerClass: { $each: ["Hunter", "Shaman"] } } }
)

db.items_copy.updateMany({ allowableClass: 64 },
  { $push: { requiredPlayerClass: "Shaman" } }
)

db.items_copy.updateMany({ allowableClass: 16 },
  { $push: { requiredPlayerClass: "Priest" } }
)

db.items_copy.updateMany({ allowableClass: 8 },
  { $push: { requiredPlayerClass: "Rogue" } }
)

db.items_copy.updateMany({ allowableClass: 4 },
  { $push: { requiredPlayerClass: "Hunter" } }
)

db.items_copy.updateMany({ allowableClass: 3 },
  { $push: { requiredPlayerClass: { $each: ["Paladin", "Warrior"] } } }
)

db.items_copy.updateMany({ allowableClass: 2 },
  { $push: { requiredPlayerClass: "Paladin" } }
)

db.items_copy.updateMany({ allowableClass: 1 },
  { $push: { requiredPlayerClass: "Warrior" } }
)

db.items_copy.updateMany({},
  { $unset: { allowableClass: "" } }
)