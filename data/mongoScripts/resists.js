db.items_copy.updateMany({ arcaneResist: 0 },
  { $unset: { arcaneResist: "" } }
)
db.items_copy.updateMany({ fireResist: 0 },
  { $unset: { fireResist: "" } }
)
db.items_copy.updateMany({ frostResist: 0 },
  { $unset: { frostResist: "" } }
)
db.items_copy.updateMany({ natureResist: 0 },
  { $unset: { natureResist: "" } }
)
db.items_copy.updateMany({ shadowResist: 0 },
  { $unset: { shadowResist: "" } }
)