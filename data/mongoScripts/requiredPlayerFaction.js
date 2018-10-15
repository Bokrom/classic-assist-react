// Have to draw from allowableRace, many of which are incorrect
// Unset allowableRace field, then add values later
// Get correct values by starting with PvP items

db.items_copy.updateMany({},
  { $unset: { allowableRace: "" } }
)