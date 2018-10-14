db.items_copy.updateMany({ requiredLevel: 0 },
  { $unset: { obtainableLevel: "" } },
  { $unset: { requiredLevel: "" } }
)  