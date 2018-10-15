db.items_copy.find().forEach(
  function (elem) {
    db.items_copy.update(
      { _id: elem._id },
      { $push: { bonusID: { $each: [elem.bonusID_1, elem.bonusID_2, elem.bonusID_3, elem.bonusID_4, elem.bonusID_5] } } }
    )
  }
)   