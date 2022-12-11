let Max = document.getElementById("MaxScore")
let Result = document.getElementById("result");
Result.innerHTML += " " + localStorage.getItem("score");
localStorage.setItem("MaxScore", null);

// function HigthScore(){
//     if(Max==null){
//         Max=Result;
//         }
//         else{
//             if(Result>Max){
//                 Max=Result;
//                 }   
//         }
// }




function HigthScore() {
    if (localStorage.getItem("MaxScore") == null || Result > localStorage.getItem("MaxScore")) {
        localStorage.setItem("MaxScore", Result);
        localStorage.setItem("Resule", Result);
        // localStorage.setItem("MaxScore", )
        // Max = Result;


        
    }
    // else {
        // Max=Max;
    //     localStorage.setItem("MaxScore", Max);
    //     localStorage.setItem("Result", Result);
    // }
    // if (Result > Max) {
    // localStorage.setItem("MaxScore", Result);
    // Max = Resul;
    // }

}





// function HigthScore(){
//     if (localStorage.getItem("Max_Score")==null|| localStorage.getItem("Max_Score")< localStorage.getItem("Score")){
//         // localStorage.setItem("Max_Score" ,localStorage.getItem("Score") )
//         document.getElementById("Max_Score").innerHTML=localStorage.getItem("Score");

//     }
// }

// // document.getElementById("Max_Score").innerHTML=localStorage.getItem("Score");

// HigthScore()


