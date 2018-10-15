db.items_copy.updateMany({ requiredSpell: 20222 },
  { $set: { requiredSkillSpec: "Goblin Engineer" } }
)
db.items_copy.updateMany({ requiredSpell: 20219 },
  { $set: { requiredSkillSpec: "Gnomish Engineer" } }
)
db.items_copy.updateMany({},
  { $unset: { requiredSpell: "" } }
)