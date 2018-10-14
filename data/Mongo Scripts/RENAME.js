db.items_copy.updateMany({},
  { $rename: { "name": "itemName" } }
)
db.items_copy.updateMany({},
  { $rename: { "ID": "itemID" } }
)
db.items_copy.updateMany({},
  { $rename: { "itemSubclass": "itemSubClass" } }
)
db.items_copy.updateMany({},
  { $rename: { "dmgMin_1": "dmgMin1" } }
)
db.items_copy.updateMany({},
  { $rename: { "dmgMax_1": "dmgMax1" } }
)
db.items_copy.updateMany({},
  { $rename: { "dmgType_1": "dmgType1" } }
)
db.items_copy.updateMany({},
  { $rename: { "dmgMin_2": "dmgMin2" } }
)
db.items_copy.updateMany({},
  { $rename: { "dmgMax_2": "dmgMax2" } }
)
db.items_copy.updateMany({},
  { $rename: { "dmgType_2": "dmgType2" } }
)