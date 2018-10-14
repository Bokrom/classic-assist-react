db.items_copy.updateMany({ itemSubClass: 9, itemClass: "Armor" },
  { $set: { armorSubClass: "Totem" } }
)

db.items_copy.updateMany({ itemSubClass: 8, itemClass: "Armor" },
  { $set: { armorSubClass: "Idol" } }
)

db.items_copy.updateMany({ itemSubClass: 7, itemClass: "Armor" },
  { $set: { armorSubClass: "Libram" } }
)
db.items_copy.updateMany({ itemSubClass: 6, itemClass: "Armor" },
  { $set: { armorSubClass: "Shield" } }
)
db.items_copy.updateMany({ itemSubClass: 4, itemClass: "Armor" },
  { $set: { armorSubClass: "Plate" } }
)
db.items_copy.updateMany({ itemSubClass: 3, itemClass: "Armor" },
  { $set: { armorSubClass: "Mail" } }
)
db.items_copy.updateMany({ itemSubClass: 2, itemClass: "Armor" },
  { $set: { armorSubClass: "Leather" } }
)
db.items_copy.updateMany({ itemSubClass: 1, itemClass: "Armor" },
  { $set: { armorSubClass: "Cloth" } }
)
db.items_copy.updateMany({ itemSubClass: 0, itemClass: "Armor" },
  { $set: { armorSubClass: "Miscellaneous" } }
)   