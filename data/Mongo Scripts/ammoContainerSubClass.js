db.items_copy.updateMany({ itemSubClass: 2, itemClass: "Ammo Container" },
  { $set: { ammoContainerSubClass: "Quiver" } }
)
db.items_copy.updateMany({ itemSubClass: 3, itemClass: "Ammo Container" },
  { $set: { ammoContainerSubClass: "Ammo Pouch" } }
)