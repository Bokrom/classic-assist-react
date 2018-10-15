db.items_copy.updateMany({ sheath: 0 },
  { $unset: { sheath: "" } }
)