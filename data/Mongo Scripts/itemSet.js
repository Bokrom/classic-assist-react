db.items_copy.updateMany({ itemSet: 0 },
  { $unset: { itemSet: "" } }
)