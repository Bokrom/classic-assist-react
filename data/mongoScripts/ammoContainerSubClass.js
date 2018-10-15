db.items_copy.updateMany({ itemSubClass: 2, class: "Ammo Container" },
  { $set: { ammoContainerSubClass: "Quiver" } }
)
db.items_copy.updateMany({ itemSubClass: 3, class: "Ammo Container" },
  { $set: { ammoContainerSubClass: "Ammo Pouch" } }
)