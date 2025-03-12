const express = require('express');
const router = express.Router();
let Customer = require('../../models/customer_model')

//middleware
router.use(express.jscleaon())

router.get('/get_customer', async (req, res) => {
    let {id} = req.body

    let customer = null

    try{
        customer = await Customer.findById(id)
    }
    catch(err){
        res.json({err: err.toString()})
    }

    res.json({customer: customer})
}
)

module.exports = router;