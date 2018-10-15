db.items_copy.updateMany({ itemSubClass: 9, class: "Armor" },
  { $set: { armorSubClass: "Totem" } }
)
db.items_copy.updateMany({ itemSubClass: 8, class: "Armor" },
  { $set: { armorSubClass: "Idol" } }
)
db.items_copy.updateMany({ itemSubClass: 7, class: "Armor" },
  { $set: { armorSubClass: "Libram" } }
)
db.items_copy.updateMany({ itemSubClass: 6, class: "Armor" },
  { $set: { armorSubClass: "Shield" } }
)
db.items_copy.updateMany({ itemSubClass: 4, class: "Armor" },
  { $set: { armorSubClass: "Plate" } }
)
db.items_copy.updateMany({ itemSubClass: 3, class: "Armor" },
  { $set: { armorSubClass: "Mail" } }
)
db.items_copy.updateMany({ itemSubClass: 2, class: "Armor" },
  { $set: { armorSubClass: "Leather" } }
)
db.items_copy.updateMany({ itemSubClass: 1, class: "Armor" },
  { $set: { armorSubClass: "Cloth" } }
)
db.items_copy.updateMany({ itemSubClass: 0, class: "Armor" },
  { $set: { armorSubClass: "Miscellaneous" } }
)   