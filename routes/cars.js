const router = require('express').Router();

 let Car = require('../models/car.model');



 router.route('/').get((req,res )=> {
     Car.find()
     .then(cars => res.json(cars))
     .catch(err => res.status(400).json('Error:'+ err));
 });


 router.route('/add').post((req,res)=> { 
      
    const number = Number(req.body.number);
    const maker = req.body.maker;
     const name = req.body.name;
     const image= req.body.image;
     const size = Number(req.body.size);
     const year = req.body.year;
     const price = Number(req.body.price);
     const kms = req.body.kms;
  const rent = req.body.rent;
     const newCar = new Car({number,
        maker, 
     name ,
     image,
     size,
     year ,
     price,
     kms ,
     rent,
     });

     newCar.save()
     .then(() => res.json('Car added')) 
     .catch(err => res.status(400).json('Error:' + err));
 });




 router.route('/:id').get((req,res)=>{
     Car.findById(req.params.id).then(car => res.json(car))
     .catch(err=>res.status(400).json('Error:'+ err))
 })



 router.route('/:id').delete((req,res)=>{
    Car.findByIdAndDelete(req.params.id).then(() => res.json('Car deleted.'))
    .catch(err=>res.status(400).json('Error:'+ err))
})


router.route('/update/:id').post((req,res)=>{
    Car.findById(req.params.id).then(car => {
        car.number = Number(req.body.number);
        car.maker = req.body.maker;
         car.name = req.body.name;
         car.image= req.body.image;
         car.size = Number(req.body.size);
         car.year = req.body.year;
         car.price = Number(req.body.price);
       car.kms = req.body.kms;
        car.rent = req.body.rent;

       car.save()
     .then(() => res.json('Car updated')) 
     .catch(err => res.status(400).json('Error:' + err));
    })
    .catch(err => res.status(400).json('Error:' + err));  
})

  module.exports = router;