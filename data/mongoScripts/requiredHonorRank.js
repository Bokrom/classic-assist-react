db.items_copy.updateMany({ requiredHonorRank: 0 },
  { $unset: { requiredHonorRank: "" } }
)
db.items_copy.updateMany({ requiredHonorRank: 5 },
  { $set: { requiredHonorRank: 1 } }
)
db.items_copy.updateMany({ requiredHonorRank: 6 },
  { $set: { requiredHonorRank: 2 } }
)
db.items_copy.updateMany({ requiredHonorRank: 7 },
  { $set: { requiredHonorRank: 3 } }
)
db.items_copy.updateMany({ requiredHonorRank: 8 },
  { $set: { requiredHonorRank: 4 } }
)
db.items_copy.updateMany({ requiredHonorRank: 9 },
  { $set: { requiredHonorRank: 5 } }
)
db.items_copy.updateMany({ requiredHonorRank: 10 },
  { $set: { requiredHonorRank: 6 } }
)
db.items_copy.updateMany({ requiredHonorRank: 11 },
  { $set: { requiredHonorRank: 7 } }
)
db.items_copy.updateMany({ requiredHonorRank: 12 },
  { $set: { requiredHonorRank: 8 } }
)
db.items_copy.updateMany({ requiredHonorRank: 13 },
  { $set: { requiredHonorRank: 9 } }
)
db.items_copy.updateMany({ requiredHonorRank: 14 },
  { $set: { requiredHonorRank: 10 } }
)
db.items_copy.updateMany({ requiredHonorRank: 15 },
  { $set: { requiredHonorRank: 11 } }
)
db.items_copy.updateMany({ requiredHonorRank: 16 },
  { $set: { requiredHonorRank: 12 } }
)
db.items_copy.updateMany({ requiredHonorRank: 17 },
  { $set: { requiredHonorRank: 13 } }
)
db.items_copy.updateMany({ requiredHonorRank: 18 },
  { $set: { requiredHonorRank: 14 } }
)