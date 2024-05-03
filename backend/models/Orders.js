const mongoose=require('mongoose');
const OrderSchema = new mongoose.Schema({
     Orderid:{
         type:String,
         required:true
     },Customer:{
         type:String,
         required:true
     },Customerid:{
         type:String
     },Orderdate:{
         type:String,
         required:true
     },Deliverydate:{
            type:String,
            required:true
      },Areacode:{
            type:String
      },Status:{
            type:String,
            required:true
      },Orderdetails:{
            type:String,
            required:true
      },Total:{
            type:Number,
            required:true
      }

});