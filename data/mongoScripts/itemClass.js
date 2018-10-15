db.items_copy.updateMany({ class: 2 },
  { $set: { class: "Weapon" } }
)
db.items_copy.updateMany({ class: 4 },
  { $set: { class: "Armor" } }
)
db.items_copy.updateMany({ class: 6 },
  { $set: { class: "Ammo" } }
)
db.items_copy.updateMany({ class: 11 },
  { $set: { class: "Ammo Container" } }
)