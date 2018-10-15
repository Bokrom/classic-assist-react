db.items_copy.updateMany({ requiredReputationRank: 7 },
  { $set: { requiredReputationRank: "Exalted" } }
)
db.items_copy.updateMany({ requiredReputationRank: 6 },
  { $set: { requiredReputationRank: "Revered" } }
)
db.items_copy.updateMany({ requiredReputationRank: 5 },
  { $set: { requiredReputationRank: "Honored" } }
)
db.items_copy.updateMany({ requiredReputationRank: 4 },
  { $set: { requiredReputationRank: "Friendly" } }
)
db.items_copy.updateMany({ requiredReputationRank: 3 },
  { $set: { requiredReputationRank: "Neutral" } }
)
db.items_copy.updateMany({ requiredReputationRank: 0 },
  { $unset: { requiredReputationRank: "" } }
)