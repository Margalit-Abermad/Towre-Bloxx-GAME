let ScrollUp = 49300;
let goto = 0;
let place = 550;
let right = 600;
let ele;
let d = document.getElementById("div1");
let once = 0;

let lives = 3;
let score = 0;
let bloxx = 0;

let positionBlock = 500;
let leftOfPreviousBlock = 0;
let leftOfCurrentBlock = 0;

var x = 0;
let place_after = 550;
let top_after = 49450;

function throwBlock() {
    clearInterval(inter);
    leftOfCurrentBlock = l;
    if (!leftOfPreviousBlock)
        document.getElementById("allMusic").play();
    let top = 49450;
    if (leftOfCurrentBlock == leftOfPreviousBlock) {
        // let top = 49450
        once += 1;

        if (bloxx > 8) {
            if (once == 3) {
                scrollDown(ScrollUp);
                ScrollUp -= 300;
                x += 550;
                top = 49450 - x;
                place = 550 + x;
                once = 0;
                top_after = top;
                place_after = place;
            }
            else {
                top = top_after;
                place = place_after;
            }
        }
        else {
            if (once == 4) {
                scrollDown(ScrollUp);
                ScrollUp -= 350;
                x += 550;
                top = 49450 - x;
                place = 550 + x;
                once = 0;
                top_after = top;
                place_after = place;
            }
            else {
                top = top_after;
                place = place_after;
            }

        }
        ele.setAttribute("src", "../images/BOX.png");
        let minutes = 10;
        while (place > goto) {
            setTimeout(() => {
                top += 10;
                ele.style.top = top + "px";
            }, minutes);
            minutes += 10;
            place -= 10;
        }
        goto += 100;

        setTimeout(() => {
            bloxx += 1;
            document.getElementById("bloxx1").innerHTML = bloxx;
            score += 30;
            document.getElementById("score1").innerHTML = score;
            document.getElementById("win").play();
            createNewBox();
            place = place_after;
        }, minutes + 5);

        ele.style.position = "absolute";
        ele.style.top = 50600 + "px";
        leftOfPreviousBlock = leftOfCurrentBlock;
    }


    else if (!leftOfPreviousBlock || leftOfCurrentBlock > leftOfPreviousBlock && leftOfCurrentBlock < leftOfPreviousBlock + 100 || leftOfCurrentBlock + 100 > leftOfPreviousBlock && leftOfCurrentBlock + 100 < leftOfPreviousBlock + 100 || leftOfCurrentBlock == leftOfPreviousBlock) {
        // let top = 49450
        once += 1;
        if (bloxx > 8) {
            if (once == 3) {
                scrollDown(ScrollUp);
                ScrollUp -= 300;
                x += 550;
                top = 49450 - x;
                place = 550 + x;
                once = 0;
                top_after = top;
                place_after = place;
            }
            else {
                top = top_after;
                place = place_after;
            }
        }
        else {
            if (once == 4) {
                scrollDown(ScrollUp);
                ScrollUp -= 350;
                x += 550;
                top = 49450 - x;
                place = 550 + x;
                once = 0;
                top_after = top;
                place_after = place;
            }
            else {
                top = top_after;
                place = place_after;
            }
        }

        ele.setAttribute("src", "../images/BOX.png");
        let minutes = 10;
        while (place > goto) {
            setTimeout(() => {
                top += 10;
                ele.style.top = top + "px";
            }, minutes);
            minutes += 10;
            place -= 10;
        }
        goto += 100;

        setTimeout(() => {
            bloxx += 1;
            document.getElementById("bloxx1").innerHTML = bloxx;
            score += 20;
            document.getElementById("score1").innerHTML = score;
            document.getElementById("win").play();

            createNewBox();
            place = place_after;
        }, minutes + 5);

        ele.style.position = "absolute";
        ele.style.top = 50600 + "px";
        leftOfPreviousBlock = leftOfCurrentBlock;
    }

    else {
        let top = top_after;
        ele.setAttribute("src", "../images/BOX.png");

        let minutes = 10;
        while (place > 0) {
            setTimeout(() => {
                top += 10;
                ele.style.top = top + "px";
            }, minutes);
            minutes += 10;
            place -= 10;
        }

        setTimeout(() => {
            lives -= 1;
            document.getElementById("lives1").innerHTML = lives;
            ele.style.display = "none";
            place = place_after;
            document.getElementById("error").play();

            if (lives == 0) {
                document.getElementById("over").style.display = "block";
                setTimeout(() => {
                    LocalStorage();
                    window.location.href = "../Pages/scoreGame.html";
                }, 3000);
            }
            else {
                createNewBox();
            }
        }, minutes + 5);

        ele.style.position = "absolute";
        ele.style.top = 50600 + "px";
        ele.style.display = "block";
    }
}

function moveTime() {
    setTimeout(() => {
        moveBlock();
    }, 1000);
}


let m = 20;
let l = 500;
let inter;
function moveRight() {
    inter = setInterval(() => {
        l += 10;
        ele.style.left = l + "px";
        if (l == 900) {
            clearInterval(inter);
            moveLeft();
        }
    }, m);
}

function moveLeft() {
    inter = setInterval(() => {
        l -= 10;
        ele.style.left = l + "px";
        if (l == 300) {
            clearInterval(inter);
            moveRight();
        }
    }, m);
}

let CounterBloxx = 0; 
function moveBlock() {
    if (bloxx == CounterBloxx + 8) {
        m -= 3;
        CounterBloxx = bloxx;
    }
    moveRight();
}

//scroll page up every 4 bloxx

function scrollDown(ScrollUp) {
    window.scrollTo(0, ScrollUp);
}



function createNewBox() {
    ele = document.createElement("img")
    ele.classList.add("slideBottom")
    ele.setAttribute("src", "../images/BOX+HOOK.png")
    d.appendChild(ele)
    l = 500
    moveBlock()
}
scrollPage()
createNewBox()

// Will drop a block only when clicked on enter

window.addEventListener("keypress", f)
function f(e) {
    if (e.keyCode == 13)
        throwBlock()
}


function scrollPage() {
    window.scrollBy(0, 494500)
}


//save data of the games in local-storage
function LocalStorage() {
    localStorage.setItem("score", score);
    let MaxScore = localStorage.getItem("Max_Score");
    let numOfGame = JSON.parse(localStorage.getItem("numOfGame"))
    if (MaxScore && MaxScore > score);
    else localStorage.setItem("Max_Score", score);
    if (numOfGame) {
        localStorage.setItem("numOfGame", numOfGame + 1)
    }
    else {
        localStorage.setItem("numOfGame", 1)
    }
    localStorage.setItem("bloxx", bloxx);
    let maxBloxx = localStorage.getItem("max_Bloxx");
    if (maxBloxx && maxBloxx > bloxx);
    else localStorage.setItem("max_Bloxx", bloxx);
}


