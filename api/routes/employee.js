import express from "express";
import mongoose from "mongoose";

//Import Item Model
import Employee from "../models/employeeScema";

const router = express.Router();

//Get All Of The Data From The DataBase
router.route('/employee').get((req, res, next) => {
    Employee
    .find()
    .select('name price date _id')
    .exec()
    .then(items => {
      if (items.length < 1) {
        return res.status(404).json({
          message: `items not found...`
        });
      } else {
        return res.status(200).json(items);
      }
    })
    .catch(err => {
      return res.status(500).json(err);
    });
});

router.route('/employee/:id').delete((req, res, next) => {
    Employee.findOneAndRemove({
    _id: req.params.id
  }, (err, it) => {
    if (err) res.json(err);
    res.json(it);
    console.log(it);
  });
})

router.route('/employee/:id').put((req, res, next) => {
  const emp = new Employee();
  emp.name = req.body.name;
  emp.price = req.body.price;
  emp.date = req.body.date;

  return Employee.findOneAndUpdate({_id: req.params.id},
     item, (err, it) => {
       if (err) res.sendStatus(500);
       else res.json(it);
     });
})

//Seed Items To The DataBase
router.route('/employee/seed').post((req, res, next) => {
  let emp = new  Employee({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price
  });
  return emp
    .save()
    .then(item => {
      return res.status(200).json({
        success: true,
        emp: emp
      });
    })
    .catch(err => {
      return res.status(500).json(err);
    });
});



export default router;