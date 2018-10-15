db.items_copy.updateMany({ description: "none" },
  { $unset: { description: "" } }
)