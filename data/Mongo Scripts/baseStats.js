db.items_copy.updateMany({ agility: 0 },
  { $unset: { agility: "" } }
)
db.items_copy.updateMany({ intellect: 0 },
  { $unset: { intellect: "" } }
)
db.items_copy.updateMany({ spirit: 0 },
  { $unset: { spirit: "" } }
)
db.items_copy.updateMany({ stamina: 0 },
  { $unset: { stamina: "" } }
)
db.items_copy.updateMany({ strength: 0 },
  { $unset: { strength: "" } }
)
db.items_copy.updateMany({ armor: 0 },
  { $unset: { armor: "" } }
)
db.items_copy.updateMany({ block: 0 },
  { $unset: { block: "" } }
)























