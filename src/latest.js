if (window.location.href.startsWith("https://conjuguemos.com/")) {
    window.dragElement = e => {;let t=0,n=0,o=0,l=0;function u(e){(e=e||window.event).preventDefault(),o=e.clientX,l=e.clientY,document.onmouseup=s,document.onmousemove=i}function i(u){(u=u||window.event).preventDefault(),t=o-u.clientX,n=l-u.clientY,o=u.clientX,l=u.clientY,e.style.top=e.offsetTop-n+"px",e.style.left=e.offsetLeft-t+"px"}function s(){document.onmouseup=null,document.onmousemove=null}if(document.getElementById(e.id+"header")){document.getElementById(e.id+"header").onmousedown=u}else{e.onmousedown=u}};
    
    const UI = document.createElement("div");
    UI.innerHTML = `
        <div id="menu" class="menu" style="outline: gray solid 2px; min-height: 250px; transform: translateX(0px) translateY(-32px); opacity: 0.85; font-family: sans-serif; width: 175px; height: 250px; background: black; position: absolute; border-radius: 5px; display: grid; place-items: center; color: white; font-size: larger; top: 151px; left: 21px; z-index: 99999; padding-bottom: 20px;">
            <center><h1 class="bottomTitle"></h1></center>
            <div id="pic" class="pic center"></div>
            <h1 class="title"><center>Hackemos</center></h1>
            <style id="thing">
                .pic {
                    height: 50px;
                    width: 50px;
                    position: relative;
                }
    
                .pic::before,
                .pic::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-size: contain;
                    background-repeat: no-repeat;
                    background-position: center;
                    transition: opacity 0.5s ease-in-out;
                }
    
                .pic::before {
                    background-image: url("https://github.com/Devik55/Hackemos/blob/b6de711725a0695330ccffc79307ca4da8e751af/assets/logo%20outline.png?raw=true");
                    opacity: 1;
                }
    
                .pic::after {
                    background-image: url("https://github.com/Devik55/Hackemos/blob/main/assets/logo%20filled%20.png?raw=true");
                    opacity: 0;
                }
    
                .pic:hover::before {
                    opacity: 0;
                }
    
                .pic:hover::after {
                    opacity: 1;
                }
    
                .title {
                    font-family: 'Arial', sans-serif;
                    font-size: 30px;
                    color: white;
                    margin-top: -20px;
                }
    
                .bottomTitle {
                    font-family: 'Arial', sans-serif;
                    font-size: 15px;
                    margin-top: -0.7rem;
                    position: absolute;
                    bottom: 10px; 
                    width: 100%;
                    text-align: center;
                    font-size: 12px; 
                    color: #ccc;
                }
    
                .button { 
                    font-family: 'Arial', sans-serif; 
                    border: none; 
                    color: white; 
                    text-align: center; 
                    font-size: 16px; 
                    cursor: pointer; 
                    -webkit-transition: all 0.3s ease; 
                    transition: all 0.3s ease; 
                    width: 70%; 
                    margin-top: -15px; 
                    background-color: black; 
                    border-radius: 5px; 
                    padding: 5px;
                    white-space: nowrap; 
                }
    
                .button:hover { 
                    color: black; 
                    background-color: #ffff; 
                    transform: scale(1.03);
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); 
                }
    
                .button:active { 
                    background-color: #333; 
                    transform: scale(0.98); 
                    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2); 
                }
    
                .center {
                    display: block;
                    margin-left: auto;
                    margin-right: auto;
                }
            </style>
            <button id="skip" class="button">Finish Lesson</button>
            <button id="showAnswers" class="button">Show Answer</button>
            <button id="skipQ" class="button">Skip Question</button>
            <button id="chngData" class="button">Change Data</button>
            <div class="bottomTitle" id="versionText">v1</div>
        </div>
    `;
    
    document.body.appendChild(UI);
    
    window.dragElement(UI.firstElementChild);
    
    let disclaimer = true;
    
    document.getElementById('skip').addEventListener('click', () => {
    skipLesson();
    });
    
    document.getElementById('showAnswers').addEventListener('click', () => {
        if (!disclaimer) {
            settings.see_correct = 1;
        } else {
            alert("This only gives you the answer when you get it incorrect. I'm working on another method soon.");
            disclaimer = false;
            settings.see_correct = 1;
        }
    });
    
    
    document.getElementById('chngData').addEventListener('click', () => {
        // for students who are too good to not cheat through the whole thing and skip the lesson, but only hack part of it
        const choice = prompt(
            "What data would you like to change?\nOption 1: Question (1)\nOption 2: Minute Amount (2)\nOption 3: Cancel (anything other than 1 or 2)"
        );
    
        if (choice.toUpperCase() === "1") {
            let question = prompt("How many questions do you want, and how many did you get correct? Write it as a fraction.", "Ex: 44/45");
    
            if (question.includes("/")) {
                let [correct, total] = question.split("/").map(num => parseInt(num.trim(), 10));
                if (!isNaN(correct) && !isNaN(total) && total > 0) {
                    activity.correctAttempts = function () {
                        return correct;
                    };
    
                    let attempts = [];
                    while (attempts.length < total) {
                        activity.currentList.forEach((item, idx) => {
                            if (attempts.length < total) {
                                attempts.push(["question", idx < correct ? 1 : 0, item.id, 5]);
                            }
                        });
                    }
    
                    activity.attempts = attempts.slice(0, total);
                    activity.save();
                    alert("Reloading the lesson and applying changes...");
                    setTimeout(function(){
                        window.location.reload();
                    }, 1000);
    
                } else {
                    alert("invalid input. please provide valid numbers.");
                }
            } else {
                alert("invalid input. please provide the question data in fraction format (e.g., 44/45).");
            }
    
        } else if (choice === "2") {
    
            let timeAmt = prompt("What do you wanna set your timer to? (Format: mm:ss)", "Ex: 10:23");
    
            if (/^\d{1,2}:\d{2}$/.test(timeAmt)) {
                let [minutes, seconds] = timeAmt.split(":").map(num => parseInt(num.trim(), 10));
    
                if (!isNaN(minutes) && !isNaN(seconds) && seconds >= 0 && seconds < 60) {
                    let formatTime = (minutes * 60 + seconds) * 1000;
    
                    ConjuguemosTimer.getElapsedTime = function () {
                        return formatTime;
                    };
                    activity.save();
                    alert("Reloading the lesson and applying changes...");
                    setTimeout(function(){
                        window.location.reload();
                    }, 1000);
            } else {
                alert("please enter the time as mm:ss (e.g., 10:23).");
            }
        } else {
            alert("canceled.");
        }
    }});
    
    document.getElementById('skipQ').addEventListener('click', () => {
        settings.skip = 1
        activity.skip()
    });
    
    document.getElementById('versionText').addEventListener('click', () => {
        window.open('https://github.com/Devik55/Hackemos', '_blank'); 
    });
    
    skipLesson = function () {
        // its kinda funny this is a straight copy of the change data method
        let question = prompt("How many questions do you want, and how many did you get correct? Write it as a fraction.", "Ex: 44/45");
    
        if (question.includes("/")) {
            let [correct, total] = question.split("/").map(num => parseInt(num.trim(), 10));
            if (!isNaN(correct) && !isNaN(total) && total > 0) {
                activity.correctAttempts = function () {
                    return correct;
                };
    
                let attempts = [];
                while (attempts.length < total) {
                    activity.currentList.forEach((item, idx) => {
                        if (attempts.length < total) {
                            attempts.push(["question", idx < correct ? 1 : 0, item.id, 5]);
                        }
                    });
                }
    
                activity.attempts = attempts.slice(0, total);
    
                let timeAmt = prompt("How many minutes do you want? (Format: mm:ss)", "Ex: 10:23");
    
                if (/^\d{1,2}:\d{2}$/.test(timeAmt)) {
                    let [minutes, seconds] = timeAmt.split(":").map(num => parseInt(num.trim(), 10));
        
                    if (!isNaN(minutes) && !isNaN(seconds) && seconds >= 0 && seconds < 60) {
                        let formatTime = (minutes * 60 + seconds) * 1000;
        
                        ConjuguemosTimer.getElapsedTime = function () {
                            return formatTime;
                        };
    
    
                activity.save();
                alert("Wait and don't click stuff. Submitting...");
                setTimeout(function(){
                    window.location.reload();
                }, 100);
            } else {
                alert("wrong input format")
            }
        }}}
    };
    
    
    
    let toggle = true
    document.addEventListener('keydown', (event) => {
        if (event.key === 'f' && event.target.tagName !== 'INPUT' && event.target.tagName !== 'TEXTAREA') {
            toggle = !toggle;
            UI.style.display = toggle ? 'block' : 'none';
        }
    });
    
} else {
    alert("You must be on the conjugemos site and open a lesson")
}
