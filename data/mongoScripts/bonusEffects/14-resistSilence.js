db.items_copy.find({}).forEach(
  function (elem) {
    for (i = 0; i <= 4; i++) {
      if (elem.bonusID[i] == 14) {
        db.items_copy.update(
          {
            _id: elem._id
          },
          {
            $set: {
              resistSilence: elem.bonusValue[i]
            }
          }
        );
      }
    }
  }
);