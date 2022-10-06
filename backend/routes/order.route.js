let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();
// order Model
let orderSchema = require('../models/order');
// CREATE order
router.route('/create-order').post((req, res, next) => {
  orderSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});
// user validation order
router.route('/valid-user').post((req, res, next) => {
  orderSchema.findOne(req.body, function (err, user) {
    if(user) {
      res.json({isExist: 'true'})
    } else {
      res.json({isExist: 'false'})
    }
  })})
// Login user
router.route('/login').post((req, res, next) => {
  orderSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
// READ orders
router.route('/').get((req, res) => {
  orderSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Get Single order
router.route('/edit-order/:id').get((req, res) => {
  orderSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update order
router.route('/update-order/:id').put((req, res, next) => {
  orderSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('order updated successfully !')
    }
  })
})
// Delete order
router.route('/delete-order/:id').delete((req, res, next) => {
  orderSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = router;
