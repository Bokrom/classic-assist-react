db.items_copy.updateMany({ randomProperty: 0 },
  { $unset: { randomProperty: "" } }
)