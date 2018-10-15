db.items_copy.updateMany({ set: 0 },
  { $unset: { set: "" } }
)