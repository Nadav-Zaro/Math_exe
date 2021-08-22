1
function getRandom100() {
    return Math.floor(Math.random()* 100)
}
getRandom100() 

2
function getRandom1000() {
    return Math.floor(Math.random()* 1000)
}
getRandom1000() 

3
function getRandom55() {
    return Math.floor(Math.random()* 55)
}
getRandom55() 

4
function getUserRandom(userInput) {
    return Math.floor(Math.random()* userInput)
}
getUserRandom()

5
function getNumberUoTo9(userInput) {
    let random = Math.floor(Math.random() * 10)
    if(userInput > 10){
        alert("number between 0-10"); }
        if (userInput == random) {
                alert("bingo")
        }
        alert("try again"); 
    }
getNumberUoTo9(10)

6
function getNumberUoTo99(userInput) {
    let random = Math.floor(Math.random() * 100)
    if(userInput > 100){
        alert("number between 0-100"); }
        if (userInput == random) {
                alert("bingo")
        }
        alert("try again"); 
    }
getNumberUoTo9(10)

7
function getTheBingo(userName, userNumber) {
    let random = Math.floor(Math.random() * 10)
    if(userNumber > 9){
        alert("number between 0-9"); }
        if (userNumber == random) {
                alert(`hi ${userName}, u won the lottery. ur lucky number ${random}`)
        }
        alert("try again"); 
    }
getTheBingo("nadav", 8)