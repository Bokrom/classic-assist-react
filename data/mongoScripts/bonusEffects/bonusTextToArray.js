db.items_copy.find().forEach(
  function (elem) {
    db.items_copy.update(
      { _id: elem._id },
      { $push: { bonusText: { $each: [elem.bonusText_1, elem.bonusText_2, elem.bonusText_3, elem.bonusText_4, elem.bonusText_5] } } }
    )
  }
) 