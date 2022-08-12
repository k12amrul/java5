
     

    //Problem:1 convart radianToDegree  

function radianToDegree(radian){
   if(typeof radian !=="number"){
                   return "please enter a valid number"
            }
   const degree= radian*57.2957795 
   const twoFixedDegree=degree.toFixed(2)
  

    return twoFixedDegree
} 
var a= radianToDegree(10)

console.log(a)

   //Problem:2  isJavaScriptFile 

function isJavaScriptFile(str){
     if(typeof str !=="string"){
          return "please enter a string"
}

      const doesExist= str.toLowerCase().endsWith(".js")
       return doesExist

      
 }    
      var js =isJavaScriptFile("app.js")
      console.log(js)


     // Problem 3: calculateOilPrice

 function oilPrice(dieselNeed,petrolNeed,octaneNeed ){
      if(typeof dieselNeed !=="number" && petrolNeed !=="number" && octaneNeed !=="number"){
          return "please enter  valid number"
       }
      
      const perLitterDieselPraice=114
      const perLitterPetrolParice=130
      const perLitterOctanePraice=135

      const dieselPrice=perLitterDieselPraice*dieselNeed
      const petrolPrice=perLitterPetrolParice*petrolNeed
      const octanePrice=perLitterOctanePraice*octaneNeed

      const totalPraice=dieselPrice+petrolPrice+octanePrice
    
     return totalPraice
  }

    const tp= oilPrice(30,20,10)
    console.log(tp)

   //Problem 4: publicBusFare

 function publicBusFare(pasengar){
      if(typeof pasengar !=="number"){
            return "please enter a number"
      }

      const basPasengar=pasengar %50
      const maicroPasengar=basPasengar%11
      const localBasPasengar =maicroPasengar*250

      return localBasPasengar


 }


const localBasVara= publicBusFare(236)
 console.log(localBasVara)




     //  Problem 5: isBestFriend

  function isBestFriend(obj1,obj2){
     if(typeof obj1 !=="object" &&  obj2 !=="object" ){
                return "please enter  object"
          }

      if(obj1.name===obj2.fraiend && obj1.fraiend===obj2.name){
          return true  
      }else{
           return false
      }
  }
  
  const obj1={name:"kamrul",fraiend:"hasan"}
  const obj2={name:"hasan",fraiend:"kamrul"}


  const obj=  isBestFriend(obj1,obj2)
       console.log(obj)





  