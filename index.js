// code your solution here

function saturdayFun(activity = `roller-skate`) {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity =`go to the office`){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(adj = "*") {
    const inner = function (pass = "special") {
        return `You are ${adj}${pass}${adj}!`
    }; return inner

}

// testing code along

// function outer(greeting,msg = "today is nice" ){
//     const inner = function(name = 'renan' , tech){
//         return `${greeting} ${name}, ${msg}, ${tech},`
//     }; return inner
// }
// console.log(outer("Hi yo !")("Hernando000","Javascreipt sucks"))
 