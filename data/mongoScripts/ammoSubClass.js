db.items_copy.updateMany({ itemSubClass: 2, class: "Ammo" },
  { $set: { ammoSubClass: "Arrow" } }
)
db.items_copy.updateMany({ itemSubClass: 3, class: "Ammo" },
  { $set: { ammoSubClass: "Bullet" } }
)