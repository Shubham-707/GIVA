const express = require('express');
const models = require('mongoose');
const router = new express.Router();
const User = require('./models');

//GET request handling
// router.get('/user', async (req, res) => {
//     try {
//         const getUsers = await User.find({}).sort({"name":1});
//         res.send(getUsers);
//     } catch (e) {
//         res.status(400).send(e)
//     }
// });

//GET request for individual user
router.get("/user/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const getUser = await User.findById(_id);
        res.send(getUser);
    } catch (e) {
        res.status(400).send(e)
    }
});

//API Filter for individual state
router.get("/user",async (req,res)=>{
    const reqQuery={...req.query}
    const a =Object.keys(reqQuery)
    const b=Object.values(reqQuery)
    let q="{"+"\""+a+"\""+":"+"{\"$eq\""+":"+"\""+b+"\""+"}}"
    console.log(q)
    const data=await User.find(JSON.parse(q))
    res.send(data)
})

module.exports = router