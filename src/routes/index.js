const express = require('express');
const fs = require('fs');

let counter = 0
try {
  fs.readFile('./counter.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });
} catch (error) {
  console.error(error);

}

setInterval(() => {
  try {

    fs.writeFile('./counter.txt', counter.toString(), err => {
      if (err) {
        console.error(err);
      }
      // file written successfully
    });
  } catch (error) {
    console.error(error);
  }

}, 3000)

const router = express.Router();
router.get('/', (req, res) => {
  counter += 1
  res.send({ index: counter });
});

module.exports = router;
