const fs = require('fs')
const validator = require('validator')
// require('../c')
// read all data
const readData = () =>{
    let data
    try{
        data = JSON.parse(fs.readFileSync('data.json'))
        if(!Array.isArray(data)) throw new Error()
    }
    catch(e){
        data=[]
    }
    return data
}
//write data
const writeData = (allcustomers)=>{
    fs.writeFileSync('data.json', JSON.stringify(allcustomers))
}

class customer{
    static getAll(){
        return readData()
    }
    static addcustomer(customerData){
       // console.log(customerData)
      // if(!validator.isEmail(customerData.email)) return console.log('invalid email')
        let all= readData()
        all.push(customerData)
        writeData(all)
    }
    static getcustomerID(id){
        let all= readData()
        let target=all.find(val=>val.id==id) 
        if(!target)return console.log("not found ")

       // console.log(target)
        return target    
    }
    static deletecustomer(id){
        let all= readData()
        let INDEX=all.findIndex(val=>val.id==id) 
        if(INDEX==-1)return console.log("not found ")
        all.splice(INDEX,1)
        writeData(all)
      
    }
    static addcustomerbalance(id,addedValue=0){
        let all= readData()
        let record=all.find(val=>val.id== id) 
        let record_id=all.findIndex(val=>val.id== id) 
        if(record_id==-1)return console.log("not found ")
        if( addedValue!=null)
        {
            if((record.balance<10000)&&((parseInt(record.balance)+parseInt(addedValue))<10000))
            record.balance= parseInt(record.balance)+parseInt(addedValue)
        }
       
        all[record_id]=record
        writeData(all)
      
    }
    static withdrawCustomerbalance(id,subValue=0){
        let all= readData()
        let record=all.find(val=>val.id== id) 
        let record_id=all.findIndex(val=>val.id== id) 
        if(record_id==-1)return console.log("not found ")
        if( subValue!=null)
        {
            if(subValue<record.balance)
            record.balance= (record.balance)-(subValue)
        }
       
        all[record_id]=record
        writeData(all)
      
    }
}

module.exports = customer