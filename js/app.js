// -------------- Declarations -------------- 

let dificulty = 0;
const arrayAnswers = [];
const randomsWordsArray = [];
let allAnswerCorrects = "True";
let numberOfwords = 3;
let index = 1;
let time= 0;
let rounds = 1;



const wordsArray = ["gap", "gold", "myth", "discourage", "merit", "recognize", "penalty", "cousin", "fare", "fair", "cater", "formulate", "skeleton", "laboratory", "castle", "gregarious", "sermon", "jury", "photograph",
                "deny", "smell", "disposition", "notebook", "machinery", "spontaneous", "pay", "diplomatic", "turkey", "tumble", "make", "hope", "exposure", "thin", "agriculture", "basic", "reception", "disk",
                "letter", "loop", "fantasy", "articulate", "mastermind", "mushroom", "morsel", "listen", "gravel", "health", "settle", "pudding", "dilemma", "resident", "license", "correspond", "attention", "suspicion",
                "hunter", "mark", "drill", "seal", "spoil", "tire", "preparation", "spray", "usefull", "attitude", "reach", "wave", "sustain", "honor", "elapse", "wriggle", "contract", "live", "friend", "representative",
                "turn", "multiply", "analyst", "dialogue", "laborer", "displace", "reader", "cafe", "absorption", "socialist", "priority", "harmful", "offense", "trial", "risk", "charter", "mayor", "appendix", "omission",
                "supplementary", "dine", "peace"];
         
                
// -------------- Functions -------------- 


function createRandomArray(array1, array2){
        while( array1.length ) {      
                let = i = Math.floor( Math.random()*array1.length );
                array2[array1.length]= array1.splice( i, 1 );
        }
}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}


function showWords(array, wordsNumber, time) {
        let top = getRandomInt(0,1400);
        let left = getRandomInt(0,1400); 
        setTimeout(function() {
            index++;   
            const windowWord = window.open("", "",`top=${top},left=${left},width=200,height=100`);
            windowWord.document.write(`<style>h1{color:red; text-align:center;}</style><h1>${array[index]}</h1>`);
            setTimeout(function() {windowWord.close()}, time);        
            if (index <= wordsNumber) {         
                showWords(array, wordsNumber, time);            
        }  
      }, time)
}


function selectDificulty(){
    while (dificulty != "Easy" || dificulty != "Normal" || dificulty != "Hard" ){
        dificulty = prompt("Please, select level of dificulty of the MemoTest: \n \n 1. Easy \n \n 2. Normal \n \n 3. Hard \n \n");
        if (dificulty == "Easy") {
            time = 2000;
            alert(" \n EASY dificulty selected. \n \n Are you ready??");
            showWords(randomsWordsArray, numberOfwords, time);
            break;
        }
        if (dificulty == "Normal") {
            time = 1400
            alert(" \n NORMAL dificulty selected \n \n Are you ready??");
            showWords(randomsWordsArray, numberOfwords, time);
            break;
        }
        if (dificulty == "Hard") {
            time = 900;
            alert(" \n HARD dificulty selected \n \n Are you ready??");
            showWords(randomsWordsArray, numberOfwords, time);
            break;
        }
        else{
            alert("the option is invalid, please enter a the dificulty");
        }
    }
}

                             
function compareArrays(array1, array2, length){
    let i = 0;
    let z = 2;
    while (allAnswerCorrects && i < length){
        if (array1[i] != array2[z]){
            allAnswerCorrects = "False";
        };
        i++;
        z++;
    }
    console.log(allAnswerCorrects);
}

function userAnswers(array){
    const answers = [];
    for (let i = 0; i < numberOfwords; i++){
        answers [i] = prompt(`Enter the word N° ${i+1}`);
    }
    compareArrays(answers, array, numberOfwords);
    if (allAnswerCorrects == "True"){
        const result = window.open("", "","top=300,left=700,width=300,height=100");
        result.document.write("<style>body{background-color:green;}h1{color:white; text-align:center;}</style><h1>You Win!</h1>");
        console.log("entro por el if");
    }
    else{
        const result2 = window.open("", "","top=300,left=700,width=300,height=100");
        result2.document.write("<style>body{background-color:red;}h1{color:black; text-align:center;}</style><h1>Game Over..</h1>");
    }
} 

function showUserPrompt(){
    setTimeout(() => {
        userAnswers(randomsWordsArray);
    }, time*4.5);
}


// -------------- Execution -------------- 


alert("˚̥̐  ο ° ˚̥̐  ο  °҉ ҈ ჻◦ᵒᵒ◦˚̥̐  ο ° ˚̥̐  °҉ ҈჻◦°҉ᵒᵒ◦˚̥̐  ο °\n◦˚̥̐   ₋ ₋ ₋ ₋ ₋ ₋ ₋ ₋ ₋ ₋ ₋ ₋ ₋ ₋ ₋ ₋ ₋ ₋ ₋ ₋  ҈჻◦\n◦°◦|              MEMO TEST               | ᵒᵒ\nο°|   →Trainning your Memory!← |◦˚̥̐҈ \n ᵒᵒ   ˉ ˉ ˉ ˉ ˉ ˉ ˉ ˉ ˉ ˉ ˉ ˉ ˉ ˉ ˉ ˉ ˉ ˉ ˉ ˉ ˉ  ᵒ◦˚̐  \n Welcome to MEMOTEST! \n In this game, your memory will be challenged. You need to remeber the words appairing on the screen and then writining! \n Good Luck!");
createRandomArray(wordsArray, randomsWordsArray);
selectDificulty(numberOfwords);
showUserPrompt();