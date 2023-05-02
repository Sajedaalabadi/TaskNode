const fs = require ('fs')
const yargs = require('yargs')  
const addperson = (fname , lname , age , city , id) => {
    const allData = loadInfo()

    const duplicatedData = allData.filter ((obj) => {
       return obj.id === id
    } )
    if (duplicatedData.length == 0 ) {
   
    allData.push ({
       id : id,
       fname : fname ,
       lname : lname , 
       age : age ,
       city : city 
    })

    saveallData (allData)

   } else {
       console.log("Error Data")
   }
    
}


const loadInfo = () => {
 

    try {
        const dataJson = fs.readFileSync( "data.json").toString()
        return JSON.parse (dataJson)
        
    } catch {
        return []
    }

 }
 

 const saveallData = (allData) => {
      const saveallDataJson  = JSON.stringify(allData)
      fs.writeFileSync ("data.json" , saveallDataJson)
 }




  // Delete data :

  const deletedData = (id) => {
    const allData = loadInfo()

    const dataToKeep = allData.filter ((obj) => {
        return  obj.id !== id 
    })
  

    saveallData (dataToKeep)
    console.log(" You have successfully deleted the item ")
  

}

 // read data :

 const readData = (id) => {
        
    const allData = loadInfo()
 
    const itemNeeded =  allData.find ((obj) => {
        return  obj.id == id 
    })
     console.log(itemNeeded)
 
     if (itemNeeded) {
        console.log(itemNeeded.id)
     } else {
        console.log("id needed not found ")
     }
 }


     // list data :

     const listData = () => {
        const allData = loadInfo()

        allData.forEach ((obj) => {
            console.log(obj.fname ,  obj.id)
        })
  }




module.exports = {
 addperson ,
 deletedData ,
 readData ,
 listData
}