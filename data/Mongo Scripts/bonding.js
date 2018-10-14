db.items_copy.updateMany({ bonding: 0 },
  { $unset: { bonding: "" } }
)
db.items_copy.updateMany({ bonding: 1 },
  { $set: { bonding: "Bind on pickup" } }
)
db.items_copy.updateMany({ bonding: 2 },
  { $set: { bonding: "Bind on equip" } }
)
db.items_copy.updateMany({ bonding: 3 },
  { $set: { bonding: "Bind on use" } }
)
db.items_copy.updateMany({ bonding: 4 },
  { $set: { bonding: "Quest item" } }
)