db.items_copy.updateMany({ delay: 0 },
  { $unset: { delay: "" } },
  { $unset: { dmgType1: "" } },
  { $unset: { dmgType2: "" } },
  { $unset: { dmgMin1: "" } },
  { $unset: { dmgMin2: "" } },
  { $unset: { dmgMax1: "" } },
  { $unset: { dmgMax2: "" } }
)

db.items_copy.updateMany({ dmgType1: 0 },
  { $set: { dmgType1: "Physical" } }
)
db.items_copy.updateMany({ dmgType1: 1 },
  { $set: { dmgType1: "Holy" } }
)
db.items_copy.updateMany({ dmgType1: 2 },
  { $set: { dmgType1: "Fire" } }
)
db.items_copy.updateMany({ dmgType1: 3 },
  { $set: { dmgType1: "Nature" } }
)
db.items_copy.updateMany({ dmgType1: 4 },
  { $set: { dmgType1: "Frost" } }
)
db.items_copy.updateMany({ dmgType1: 5 },
  { $set: { dmgType1: "Shadow" } }
)
db.items_copy.updateMany({ dmgType1: 6 },
  { $set: { dmgType1: "Arcane" } }
)

db.items_copy.updateMany({ dmgType2: 0 },
  { $set: { dmgType2: "Physical" } }
)
db.items_copy.updateMany({ dmgType2: 1 },
  { $set: { dmgType2: "Holy" } }
)
db.items_copy.updateMany({ dmgType2: 2 },
  { $set: { dmgType2: "Fire" } }
)
db.items_copy.updateMany({ dmgType2: 3 },
  { $set: { dmgType2: "Nature" } }
)
db.items_copy.updateMany({ dmgType2: 4 },
  { $set: { dmgType2: "Frost" } }
)
db.items_copy.updateMany({ dmgType2: 5 },
  { $set: { dmgType2: "Shadow" } }
)
db.items_copy.updateMany({ dmgType2: 6 },
  { $set: { dmgType2: "Arcane" } }
)





















