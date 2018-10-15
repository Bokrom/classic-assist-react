db.items_copy.updateMany({ unique: 0 },
  { $unset: { unique: "" } }
)
db.items_copy.updateMany({ unique: 1 },
  { $set: { unique: "true" } }
)