db.items_copy.updateMany({ inventoryType: 28 },
  { $set: { inventoryType: "Relic" } }
)
db.items_copy.updateMany({ inventoryType: 24 },
  { $set: { inventoryType: "Ammo" } }
)
db.items_copy.updateMany({ inventoryType: 18 },
  { $set: { inventoryType: "Ammo Container" } }
)
db.items_copy.updateMany({ $or: [{ inventoryType: 26 }, { inventoryType: 25 }, { inventoryType: 15 }] },
  { $set: { inventoryType: "Ranged" } }
)
db.items_copy.updateMany({ inventoryType: 23 },
  { $set: { inventoryType: "Held in Off-hand" } }
)
db.items_copy.updateMany({ inventoryType: 21 },
  { $set: { inventoryType: "Main-hand" } }
)
db.items_copy.updateMany({ inventoryType: 13 },
  { $set: { inventoryType: "One-hand" } }
)
db.items_copy.updateMany({ inventoryType: 22 },
  { $set: { inventoryType: "Off-hand" } }
)
db.items_copy.updateMany({ inventoryType: 14 },
  { $set: { inventoryType: "Shield" } }
)
db.items_copy.updateMany({ inventoryType: 19 },
  { $set: { inventoryType: "Tabard" } }
)
db.items_copy.updateMany({ inventoryType: 4 },
  { $set: { inventoryType: "Shirt" } }
)
db.items_copy.updateMany({ inventoryType: 1 },
  { $set: { inventoryType: "Head" } }
)
db.items_copy.updateMany({ inventoryType: 2 },
  { $set: { inventoryType: "Neck" } }
)
db.items_copy.updateMany({ inventoryType: 3 },
  { $set: { inventoryType: "Shoulder" } }
)
db.items_copy.updateMany({ inventoryType: 16 },
  { $set: { inventoryType: "Back" } }
)
db.items_copy.updateMany({ $or: [{ inventoryType: 5 }, { inventoryType: 20 }] },
  { $set: { inventoryType: "Chest" } }
)
db.items_copy.updateMany({ inventoryType: 9 },
  { $set: { inventoryType: "Wrist" } }
)
db.items_copy.updateMany({ inventoryType: 10 },
  { $set: { inventoryType: "Hands" } }
)
db.items_copy.updateMany({ inventoryType: 6 },
  { $set: { inventoryType: "Waist" } }
)
db.items_copy.updateMany({ inventoryType: 7 },
  { $set: { inventoryType: "Legs" } }
)
db.items_copy.updateMany({ inventoryType: 8 },
  { $set: { inventoryType: "Feet" } }
)
db.items_copy.updateMany({ inventoryType: 11 },
  { $set: { inventoryType: "Finger" } }
)
db.items_copy.updateMany({ inventoryType: 12 },
  { $set: { inventoryType: "Trinket" } }
)























