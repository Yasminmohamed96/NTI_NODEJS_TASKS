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
const writeData = (allStudents)=>{
    fs.writeFileSync('data.json', JSON.stringify(allStudents))
}

class Student{
    static getAll(){
        return readData()
    }
    static addStudent(studentData){
       // console.log(studentData)
       if(!validator.isEmail(studentData.email)) return console.log('invalid email')
        let all= readData()
        all.push(studentData)
        writeData(all)
    }
    static getStudentID(id){
        let all= readData()
        let target=all.find(val=>val.id==id) 
        if(!target)return console.log("not found ")

       // console.log(target)
        return target    
    }
    static deleteStudent(id){
        let all= readData()
        let INDEX=all.findIndex(val=>val.id==id) 
        if(INDEX==-1)return console.log("not found ")
        all.splice(INDEX,1)
        writeData(all)
      
    }
    static editStudent(editData){
        let all= readData()
        let record=all.find(val=>val.id==editData.id) 
        let record_id=all.findIndex(val=>val.id==editData.id) 
        if(record_id==-1)return console.log("not found ")
        if(editData.name!=null)
        {
            record.name=editData.name
        }
        if(editData.age!=null)
        {
            record.age=editData.age
        }
        if(editData.grade!=null)
        {
            record.grade=editData.grade
        }
        if(editData.email!=null)
        {
            record.email=email
        }
        all[record_id]=record
        writeData(all)
      
    }
}

module.exports = Student