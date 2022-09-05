
const Visitor = require("../models/index")

const readCount = async (req, res) => {
    let visitors = await Visitor.findOne({name: 'localhost'})

    console.log(visitors);

    if(visitors == null) {
          
        const beginCount = new Visitor({
            name : 'localhost',
            count : 1
        })
  
        
        beginCount.save()
        res.json({count: 1})
  
        
    }
    else{
          
        visitors.count += 1;
        visitors.save()
        res.json({count: visitors.count})
        console.log("visitor arrived: ",visitors.count)
    }
    

}


module.exports = {
    readCount
}