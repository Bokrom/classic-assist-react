db.items_copy.updateMany({ itemSubClass: 2, itemClass: "Ammo" },
  { $set: { ammoSubClass: "Arrow" } }
)
db.items_copy.updateMany({ itemSubClass: 3, itemClass: "Ammo" },
  { $set: { ammoSubClass: "Bullet" } }
)