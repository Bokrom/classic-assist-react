db.items_copy.find({}).forEach(
  function (elem) {
    for (i = 0; i <= 4; i++) {
      if (elem.bonusID[i] == 19) {
        db.items_copy.update(
          {
            _id: elem._id
          },
          {
            $set: {
              attackPowerBeast: elem.bonusValue[i]
            }
          }
        );
      }
    }
  }
);