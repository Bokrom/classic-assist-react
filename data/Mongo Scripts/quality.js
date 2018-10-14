db.items_copy.updateMany({ quality: 0 },
  { $set: { quality: "Poor" } }
)
db.items_copy.updateMany({ quality: 1 },
  { $set: { quality: "Common" } }
)
db.items_copy.updateMany({ quality: 2 },
  { $set: { quality: "Uncommon" } }
)
db.items_copy.updateMany({ quality: 3 },
  { $set: { quality: "Rare" } }
)
db.items_copy.updateMany({ quality: 4 },
  { $set: { quality: "Epic" } }
)
db.items_copy.updateMany({ quality: 5 },
  { $set: { quality: "Legendary" } }
)