const btnCheck = document.querySelector("#getCheckBtn")
const ikBtn = document.querySelector("#ikBtn")
const idkBtn = document.querySelector("#idkBtn")
const socreNum = document.querySelector("#scoreNum")
const ques = document.querySelector("#ques")
const failVoc = document.querySelector("#failVoc")
const letterList = ["A","B","C","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const gameEndText = "Check the block below and remember to review."

var debug = FileSystemWritableFileStream;
var score = document.querySelector("#score").querySelector("h3")
var question = document.querySelector("#ques")
var jsonObjGet
var questionList = []
var ansList = {}

//Function Definition===================================================
function getJsonObj(){

    //new xmlHttpRequest method
    // var reqUrl = 'assets/jsonFolder/vocFile.json'
    // var nReqObj = new XMLHttpRequest()
    // nReqObj.open("Get",reqUrl)
    // nReqObj.responseType="json"
    // nReqObj.send()
    // nReqObj.onload = function(){
    //     jsonObjGet= nReqObj.response;
    //     // console.log(jsonObjGet) 
    // }
    
// fetch

fetch('assets/jsonFolder/vocFile.json').then(function(response){
    return response.json()
}).then(function(result){
    // console.log(result)
    jsonObjGet = result
})
}



function getObj(){
    failVoc.innerHTML =""
    document.querySelector("#ikBtn").disabled = false
    document.querySelector("#idkBtn").disabled = false
    questionList = []
    var letterRange = document.querySelector("#vocRangeID").value
    var letterAmount = document.querySelector("#vocListRange").value

    getJsonObj();
    // var vocRangeGet = document.querySelector("#vocRangeName")
    // console.log(document.querySelector("#vocListRange").value)
    for(let i = 0;i<=letterList.indexOf(letterRange);i++){
        let temp = jsonObjGet["voc"+letterList[i]]
        questionList = questionList.concat(temp)
        // console.log(temp+","+letterList[i])
        // console.log("temp = "+temp+", ql = "+questionList)
    }
    ansList = jsonObjGet["answer"]
    // console.log(jsonObjGet["answer"])

    if(letterAmount>questionList.length || letterAmount < 1){
        letterAmount = questionList.length
    }
    let flag = true
    let temp =[]
    while(flag){
        let number = Math.floor(Math.random()*questionList.length)
        let voc = questionList[number]
        if(parseInt(temp.indexOf(voc)) === -1){
            temp.push(voc)
        }
        // console.log(temp.indexOf(voc)+","+typeof(temp.indexOf(voc))+","+voc+","+temp.length)
        if(temp.length===parseInt(letterAmount)){
            questionList = temp
            flag = false
        }
    }
    socreNum.innerHTML = questionList.length
    ques.innerHTML = questionList[0]
}

function testEnd(){
    socreNum.innerHTML = "-Test End-"
    ques.innerHTML = gameEndText
    document.querySelector("#ikBtn").disabled = true
    document.querySelector("#idkBtn").disabled = true
    failVoc.innerHTML+="==========END==========\nTo restart?\nPress the Generate Button"
}
// idk and ik button function definition============================================
function ikFun(){
    // this.disabled = true
        let orig = ques.innerHTML
        if(ansList[ques.innerHTML]!= undefined){
        ques.innerHTML += " "+ansList[ques.innerHTML]
        }
        setTimeout(()=>{console.log("timeout")
        if(parseInt(questionList.length)>1){
        questionList.splice(questionList.indexOf(orig),1)
        ques.innerHTML = questionList[0]
        socreNum.innerHTML = questionList.length
        console.log(questionList)
        }else{
            ikBtn.disabled = true
            testEnd()
            console.log('gameEnd')
                
        }
    },1200)
        // delete item
    // this.disabled = false
        
}
function idkFun(){
    // this.disabled = true
    if(ansList[ques.innerHTML]!= undefined){
        failVoc.innerHTML+= ques.innerHTML+" "+ansList[ques.innerHTML]+"\n"
        }
    if(parseInt(questionList.length)>1){
        questionList.splice(questionList.indexOf(ques.innerHTML),1)
        ques.innerHTML = questionList[0]
        socreNum.innerHTML = questionList.length
        console.log(questionList)
        }else{
            idkBtn.disabled = true
            testEnd()
            console.log('gameEnd')
        }
    // this.disabled = false
    
    
}
//main body===========================================================================
// btnCheck.addEventListener("click",getObj)
// ikBtn.addEventListener("click",ikFun)
// idkBtn.addEventListener("click",idkFun)
//Test block====================================================================
if(debug){

}