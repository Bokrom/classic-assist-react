db.items_copy.updateMany({ itemClass: 2 },
  { $set: { itemClass: "Weapon" } }
)
db.items_copy.updateMany({ itemClass: 4 },
  { $set: { itemClass: "Armor" } }
)
db.items_copy.updateMany({ itemClass: 6 },
  { $set: { itemClass: "Ammo" } }
)
db.items_copy.updateMany({ itemClass: 11 },
  { $set: { itemClass: "Ammo Container" } }
)