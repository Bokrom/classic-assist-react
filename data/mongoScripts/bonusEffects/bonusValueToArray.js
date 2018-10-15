db.items_copy.find().forEach(
  function (elem) {
    db.items_copy.update(
      { _id: elem._id },
      { $push: { bonusValue: { $each: [elem.bonusValue_1, elem.bonusValue_2, elem.bonusValue_3, elem.bonusValue_4, elem.bonusValue_5] } } }
    )
  }
) 