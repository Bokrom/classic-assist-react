db.items_copy.updateMany({},
  { $rename: { "itemID": "id" } }
)
db.items_copy.updateMany({},
  { $rename: { "displayID": "displayId" } }
)
db.items_copy.updateMany({},
  { $rename: { "itemClass": "class" } }
)
db.items_copy.updateMany({},
  { $rename: { "itemLevel": "level" } }
)
db.items_copy.updateMany({},
  { $rename: { "itemSet": "set" } }
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
db.items_copy.updateMany({},
  { $rename: { "arcaneRes": "arcaneResist" } }
)
db.items_copy.updateMany({},
  { $rename: { "fireRes": "fireResist" } }
)
db.items_copy.updateMany({},
  { $rename: { "frostRes": "frostResist" } }
)
db.items_copy.updateMany({},
  { $rename: { "natureRes": "natureResist" } }
)
db.items_copy.updateMany({},
  { $rename: { "shadowRes": "shadowResist" } }
)