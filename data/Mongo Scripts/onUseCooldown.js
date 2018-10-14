db.items_copy.updateMany({ onUseCooldown: 0 },
  { $unset: { onUseCooldown: "" } }
)  