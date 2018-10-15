db.items_copy.updateMany({ requiredSkill: 356 },
  { $set: { requiredSkill: "Fishing" } }
)
db.items_copy.updateMany({ requiredSkill: 202 },
  { $set: { requiredSkill: "Engineering" } }
)
db.items_copy.updateMany({ requiredSkill: 186 },
  { $set: { requiredSkill: "Mining" } }
)
db.items_copy.updateMany({ requiredSkill: 182 },
  { $set: { requiredSkill: "Herbalism" } }
)
db.items_copy.updateMany({ requiredSkill: 0 },
  { $unset: { requiredSkill: "" } }
)