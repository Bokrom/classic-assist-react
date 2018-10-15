db.items_copy.updateMany({ requiredLevel: 0 },
  { $unset: { requiredLevel: "" } }
)  

db.items_copy.updateMany({ obtainableLevel: 0 },
  { $unset: { obtainableLevel: "" } }
) 