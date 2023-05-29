require("dotenv").config(); // load .env variables
const { Router } = require("express"); // import router from express
const DynamicModel = require("../models/serve");
const homeModel = require('../models/home')
const auth_userModel = require("../models/auth")
const router = Router();
const auth_user = require('../helpers/userModel')

router.post("/editpage/:id", async (req, res) => {
    const id =  req.params.id
    console.log(req.body, "body")
    req.body.upload_image  = "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    const response = await DynamicModel.findByIdAndUpdate(id, {$set:req.body})
    console.log("response", response)
    res.status(200).send({
        "Status" : 200,
        data : "Updated Successfully"

    })

});

router.get("/deletepage/:id", async (req, res) => {
    const id =  req.params.id 
   
    const response = await DynamicModel.deleteOne({ _id: id })
    console.log("response", response)
    res.status(200).send({
        "Status" : 200,
        data : "Deleted Successfully"

    })

});

router.post("/serve", async (req, res) => {
    const { page_name, slug_url, category, upload_image, description } = req.body
    console.log(page_name, slug_url, category, upload_image, description)
    const dynamicdata = await new DynamicModel({
        page_name,
        slug_url,
        category,
        upload_image: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        description
    })
    const testres = DynamicModel(dynamicdata).save()
    // res.send("done updated", testres)
    res.status(200).send("done")

});

router.post("/login", async (req, res) => {
    
    const { email  } = req.body
   console.log("email", email )
   const user = await auth_user.findOne({ email });
    console.log("res", user)
    if (user) {
        res.status(200).send({
            "response": user,
            "status":true
        })
    }
    else {
    const { email, password  } = req.body

        await new auth_userModel({
            email,
            password
        }).save()
        
        res.status(200).send({
            "response": "User Been created successfully",
            "status":true
        })
    }

    
});



router.get("/serveall", async (req, res) => {
     
    const testres =  await DynamicModel.find()

    console.log("testres", testres)
    res.status(200).send({
        "data":testres, 
        "status":true
    })

});


router.post("/home", async (req, res) => {
    console.log("req", req.body)
    req.body.upload_image  = "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    const response = await homeModel.findByIdAndUpdate("64738f10e14a81d8fb238c87", {$set:req.body})
    console.log("response", response)
    res.status(200).send({
        "Status" : 200,
        data : "Updated Successfully"
    })
  
});

router.get("/homedata", async (req, res) => {
    const response = await homeModel.findById("64738f10e14a81d8fb238c87")
    console.log("response", response)
    res.status(200).send({
        "Status" : 200,
        data : response
    })
  
});

module.exports = router