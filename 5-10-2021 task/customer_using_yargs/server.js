const yargs = require('yargs')
//var uniqid = require('uniqid'); 

const  customer = require('./modules/customer')
yargs.command({
    command: "getAllcustomers",
    handler: function(){
        console.log(customer.getAll())
    }
})

yargs.command({
    command:"addcustomer",
    builder:{
        id:{
            type:"number",
            default: Date.now()
        },
        name:{
            type:"string",
            demandOption:true
        },  balance:{
            type:"number",
            demandOption:true
        }
              
    },
    handler:function(argv){
        let st = {
            id: argv.id,
            name: argv.name,
            balance:argv.balance
        
        }
        console.log(st.name)
        customer.addcustomer(st)
    }
})

yargs.command({
    command:"getcustomerId",
    builder:{
        id:{
            type:"number",
            demandOption:true
        }},
        
    handler:function(argv){
        console.log(customer.getcustomerID(argv.id))
    }

})
yargs.command({
    command:"stDelete",
    builder:{
        id:{
            type:"number",
            demandOption:true
        }},
        
    handler:function(argv){
        customer.deletecustomer(argv.id)
    }

})
yargs.command({
    command:"addBalance",
    builder:{
        id:{
        type:"number",
        default: Date.now()
        },
        balance:{
        type:"number",
        
        },
           },
    handler:function(argv){
      
        customer.addcustomerbalance(argv.id,argv.balance)
}
})
yargs.command({
    command:"withdrawBalance",
    builder:{
        id:{
        type:"number",
        default: Date.now()
        },
        balance:{
        type:"number",
        
        },
           },
    handler:function(argv){
      
        customer.withdrawCustomerbalance(argv.id,argv.balance)
}
})
yargs.argv















