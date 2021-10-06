// const yargs = require('yargs')

// yargs.command({
//     command: "testCommand",
//     handler: function(){
//         console.log('test')
//     }
// })

// yargs.command({
//     command:"myCommand",
//     handler: function(){
//         console.log('ay 7aga')
//     }
// })

// yargs.command({
//     command:"sayHello",
//     describe:"say hello command",
//     builder:{
//         name:{
//             type:"string",
//             describe:"name of user",
//             demandOption: true
//         }
//     },
//     handler: function(argv){
//         console.log(argv)
//         console.log(`hello ${argv.name}`)
//         console.log(argv.x)
//     }
// })

// yargs.argv


// student => id,name, age, grade, email  => add , edit, delete, show all, showsingle

// fs, yargs, validator
const yargs = require('yargs')
//var uniqid = require('uniqid'); 

const student = require('./modules/student')
yargs.command({
    command: "getAllStudents",
    handler: function(){
        console.log(student.getAll())
    }
})

yargs.command({
    command:"addStudent",
    builder:{
        id:{
            type:"number",
            default: Date.now()
        },
        name:{
            type:"string",
            demandOption:true
        },
        age:{
            type: "number",
            demandOption:true
        },
        grade:{
            type:"number",
            default:0
        },
        email:{
            type:"string",
            demandOption:true
        } 
    },
    handler:function(argv){
        let st = {
            id: argv.id,
            name: argv.name,
            age:argv.age,
            grade:argv.grade,
            email:argv.email
        }
        student.addStudent(st)
    }
})

yargs.command({
    command:"getStudentId",
    builder:{
        id:{
            type:"number",
            demandOption:true
        }},
        
    handler:function(argv){
        console.log(student.getStudentID(argv.id))
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
        student.deleteStudent(argv.id)
    }

})
yargs.command({
    command:"editStudent",
    builder:{
        id:{
        type:"number",
        default: Date.now()
        },
        name:{
        type:"string",
        
        },
        age:{
            type: "number",
           
        },
        grade:{
            type:"number",
            default:0
        },
        email:{
            type:"string",
           
        } 
    },
    handler:function(argv){
        let st = {
            id: argv.id,
            name: argv.name,
            age:argv.age,
            grade:argv.grade,
            email:argv.email
        }
        student.editStudent(st)
}
})
yargs.argv















