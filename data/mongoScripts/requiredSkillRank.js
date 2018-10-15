db.items_copy.updateMany({ requiredSkillRank: 0 },
  { $unset: { requiredSkillRank: "" } }
)