db.items_copy.updateMany({ requiredReputationFaction: 910 },
  { $set: { requiredReputationFaction: "Brood of Nozdormu" } }
)
db.items_copy.updateMany({ requiredReputationFaction: 890 },
  { $set: { requiredReputationFaction: "Silverwing Sentinels" } }
)
db.items_copy.updateMany({ requiredReputationFaction: 889 },
  { $set: { requiredReputationFaction: "Warsong Outriders" } }
)
db.items_copy.updateMany({ requiredReputationFaction: 730 },
  { $set: { requiredReputationFaction: "Silverwing Sentinels" } }
)
db.items_copy.updateMany({ requiredReputationFaction: 729 },
  { $set: { requiredReputationFaction: "Warsong Outriders" } }
)
db.items_copy.updateMany({ requiredReputationFaction: 576 },
  { $set: { requiredReputationFaction: "Timbermaw Hold" } }
)
db.items_copy.updateMany({ requiredReputationFaction: 510 },
  { $set: { requiredReputationFaction: "The Defilers" } }
)
db.items_copy.updateMany({ requiredReputationFaction: 509 },
  { $set: { requiredReputationFaction: "The League of Arathor" } }
)
db.items_copy.updateMany({ requiredReputationFaction: 0 },
  { $unset: { requiredReputationFaction: "" } }
)