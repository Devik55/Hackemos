

let mode;

if (window.location.href.startsWith("https://conjuguemos.com/vocabulary/")) {
    mode = "homework";
}

if (window.location.href.startsWith("https://conjuguemos.com/assignment/")) {
    mode = "assignment";
}

if (mode) {
    window.dragElement = e => {;let t=0,n=0,o=0,l=0;function u(e){(e=e||window.event).preventDefault(),o=e.clientX,l=e.clientY,document.onmouseup=s,document.onmousemove=i}function i(u){(u=u||window.event).preventDefault(),t=o-u.clientX,n=l-u.clientY,o=u.clientX,l=u.clientY,e.style.top=e.offsetTop-n+"px",e.style.left=e.offsetLeft-t+"px"}function s(){document.onmouseup=null,document.onmousemove=null}if(document.getElementById(e.id+"header")){document.getElementById(e.id+"header").onmousedown=u}else{e.onmousedown=u}};
    const themes = {
        Berry: {
            primary: '#8e24aa',
            secondary: '#6a1b9a',
            tertiary: '#7c20a2',
            boxShadow: ['rgba(0, 0, 0, 0.4)', 'rgba(142, 36, 170, 0.5)', 'rgba(255, 0, 255, 0.3)'],
            gradient: '45deg, #6a1b9a, #8e24aa',
            hoverBg: '#7c20a2',
            activeBg: '#333',
            textPrimary: '#ffffff',
            textSecondary: '#ffffff',
            background: 'black',
        },
        Dark: {
            primary: 'gray',
            secondary: '#3700b3',
            tertiary: '#03dac6',
            boxShadow: ['rgba(0, 0, 0, 0.4)', 'rgba(255, 255, 255, 0.2)', 'rgba(0, 0, 0, 0.3)'],
            gradient: '90deg, #ffff, #D1D9E0',
            hoverBg: '#ffff',
            activeBg: '#333',
            textPrimary: '#ffffff',
            textSecondary: 'black',
            background: '#121212',
        },
    };
    
    let currentTheme = localStorage.getItem('currentTheme') || 'Dark';
    if (!localStorage.getItem('currentTheme')) {
        localStorage.setItem('currentTheme', 'Dark');
    }
    const themeKeys = Object.keys(themes);
    let current = themeKeys.indexOf(currentTheme);
    
    const showNoti = (t, e) => {
        let o = document.createElement("div"),
            d = document.createElement("div"),
            bar = document.createElement("div");
        o.style.cssText = `position: fixed; top: 20px; left: 0; background: linear-gradient(to right, ${themes[themeKeys[current]].primary || "grey"} 5px, rgba(20, 20, 20, 0.8) 5px); color: white; z-index: 9999; opacity: 0; transition: left 0.5s ease-in-out, opacity 0.5s ease-in-out; max-width: 300px; padding: 10px;`;
        d.style.cssText = "font-size: 18px; word-wrap: break-word;";
        d.textContent = t;
        bar.style.cssText = `position: absolute; left: 0; bottom: 0; height: 5px; width: 100%; background: ${themes[themeKeys[current]].primary || "grey"}; transition: width 5s linear;`;
        o.appendChild(d);
        o.appendChild(bar);
        document.body.appendChild(o);
        setTimeout(() => {
            o.style.opacity = "1";
            bar.style.transition = "width 5s linear";
            bar.style.width = "0%";
        }, 100);
        setTimeout(() => {
            o.style.opacity = "0";
            o.style.left = "-100%";
            setTimeout(() => {
                document.body.removeChild(o);
            }, 500);
        }, Math.max(5000, 50 * t.length));
    };
    
    const UI = document.createElement("div");
    UI.innerHTML = `
        <div id="menu" style="min-height: 250px; opacity: 0.85; width: 175px; height: 250px; background: ${themes[themeKeys[current]].background}; border: solid 3px ${themes[themeKeys[current]].primary}; box-shadow: 0 0 10px ${themes[themeKeys[current]].boxShadow[0]}, 0 0 15px ${themes[themeKeys[current]].boxShadow[1]}, 0 0 25px ${themes[themeKeys[current]].boxShadow[2]}; position: absolute; border-radius: 5px; display: grid; place-items: center; color: ${themes[themeKeys[current]].textPrimary}; font-size: larger; top: 151px; left: 21px; z-index: 99999; padding-bottom: 20px;">
            <center><h1 class="bottomTitle"></h1></center>
            <div id="pic" class="pic center"></div>
            <h1 class="title"><center>Hackemos</center></h1>
            <style>
                .pic {
                    height: 50px;
                    width: 50px;
                    position: relative;
                    transition: all 0.3s ease;
                    text-shadow: 0 0 3px rgba(255, 255, 255, 0.5), 0 0 6px rgba(255, 255, 255, 0.4), 0 0 9px rgba(255, 255, 255, 0.3);
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
                    transition: opacity 0.2s ease-in-out;
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
                    color: ${themes[themeKeys[current]].textPrimary};
                    text-shadow: 0 0 3px rgba(255, 255, 255, 0.5), 0 0 6px rgba(255, 255, 255, 0.4), 0 0 9px rgba(255, 255, 255, 0.3);
                    margin-top: -20px;
                    transition: text-shadow 0.3s ease, transform 0.3s ease;
                }
    
                .title:hover {
                    text-shadow: 0 0 10px rgba(255, 255, 255, 0.6), 0 0 20px rgba(255, 255, 255, 0.5), 0 0 30px rgba(255, 255, 255, 0.4);
                    transform: scale(1.03);
                }
    
                .button {
                    font-family: 'Arial', sans-serif;
                    border: none;
                    color: ${themes[themeKeys[current]].textPrimary};
                    text-align: center;
                    font-size: 16px;
                    cursor: pointer;
                    width: 70%;
                    -webkit-transition: all 0.3s ease;
                    margin-top: -15px;
                    background-color: ${themes[themeKeys[current]].background};
                    border-radius: 5px;
                    padding: 5px;
                    transition: color 0.2s ease-in-out, background 0.2s ease-in-out;
                }
    
                .bottomTitle {
                    font-family: 'Arial', sans-serif;
                    font-size: 12px;
                    margin-top: -0.7rem;
                    position: absolute;
                    bottom: 10px;
                    width: 100%;
                    text-align: center;
                    color: #ccc;
                }
    
                .button:hover {
                    color: ${themes[themeKeys[current]].textSecondary};
                    background-image: linear-gradient(${themes[themeKeys[current]].gradient});
                    background-size: 200% 200%;
                    animation: gradientIdle 1s infinite alternate;
                    transform: scale(1.03);
                    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2), 0 8px 20px rgba(0, 0, 0, 0.3);
                    text-shadow: 0 2px 5px rgba(255, 255, 255, 0.5);
                }
    
                .button:active {
                    background-color: ${themes[themeKeys[current]].activeBg};
                    transform: scale(0.98);
                    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
                }
    
                @keyframes gradientIdle {
                    0% {
                        background-position: 0% 0%;
                    }
                    100% {
                        background-position: 100% 100%;
                    }
                }
            </style>
            <button id="skip" class="button">Finish Lesson</button>
            <button id="chngData" class="button">Change Data</button>
            <button id="showAnswers" class="button">Show Answer</button>
            <button id="skipQ" class="button">Skip Question</button>
                <div class="bottomTitle" id="versionTxt">v2.0</div>
</div>

        </div>
    `;
    
    document.body.appendChild(UI);
    window.dragElement(UI.firstElementChild);

    if (localStorage.getItem("disclaimer") === null) {
        localStorage.setItem("disclaimer","true")
    }

    if (localStorage.getItem("disclaimer2") === null) {
        localStorage.setItem("disclaimer2","true")
    }
    
    document.querySelector(".pic").onclick = () => {
        current = (current + 1) % themeKeys.length;
        currentTheme = themeKeys[current];
        localStorage.setItem('currentTheme', currentTheme);
        updateUI();
    };
    
    function updateUI() {
        const theme = themes[themeKeys[current]];
    
        const menu = document.getElementById("menu");
        menu.style.background = theme.background;
        menu.style.border = `solid 3px ${theme.primary}`;
        menu.style.boxShadow = `0 0 10px ${theme.boxShadow[0]}, 0 0 15px ${theme.boxShadow[1]}, 0 0 25px ${theme.boxShadow[2]}`;
    
        document.querySelectorAll(".button").forEach(button => {
            button.style.backgroundColor = theme.background;
            button.style.color = theme.textPrimary;
            button.onmouseover = () => {
                button.style.color = theme.textSecondary;
                button.style.backgroundImage = `linear-gradient(${theme.gradient})`;
                button.style.backgroundSize = "200% 200%";
                button.style.animation = "gradientIdle 3s infinite alternate";
            };
    
            button.onmouseout = () => {
                button.style.backgroundImage = "none";
                button.style.backgroundColor = theme.background;
                button.style.color = theme.textPrimary;
            };
        });
    
        document.querySelector(".title").style.color = theme.textPrimary;
        document.querySelector(".bottomTitle").style.color = theme.textSecondary;
        showNoti("Theme updated to " + currentTheme);
    }
    
      skipLesson = function () {
        if (localStorage.getItem("disclaimer2") === 'true') {
        alert("This is essentially the change data method so if you didnt set it to be enough questions to pass it won't submit the lesson. The old method didn't do this but it was buggy and could cause you to get caught.")
        localStorage.setItem("disclaimer2","false")
    }
        let question = prompt("How many questions do you want, and how many did you get correct? Write it as a fraction.", "Ex: 44/45");

        if (question.includes("/")) {
            let [correct, total] = question.split("/").map(num => parseInt(num.trim(), 10));
            if (!isNaN(correct) && !isNaN(total) && total > 0) {
               setQuestions(correct,total)
                let timeAmt = prompt("How many minutes do you want? (Format: mm:ss)", "Ex: 10:23");

                if (/^\d{1,2}:\d{2}$/.test(timeAmt)) {
                    let [minutes, seconds] = timeAmt.split(":").map(num => parseInt(num.trim(), 10));

                    if (!isNaN(minutes) && !isNaN(seconds) && seconds >= 0 && seconds < 60) {
                        let formatTime = (minutes * 60 + seconds) * 1000;

                        ConjuguemosTimer.getElapsedTime = () => formatTime;

                        activity.save();
                        showNoti("Wait and dont click stuff. Submitting...");
                        setTimeout(() => {
                            window.location.reload();
                        }, 100);
                    } else {
                        showNoti("Wrong input format");
                    }
                }
            }
        }
    };
      
    document.getElementById('skip').addEventListener('click', () => {
        skipLesson();
    });
    
    document.getElementById('skipQ').addEventListener('click', () => {
            settings.skip = 1;
            activity.skip()
    });
    
    document.getElementById('showAnswers').addEventListener('click', () => {
        if (localStorage.getItem("disclaimer") === 'false') {
            settings.see_correct = 1;
        } else {
            showNoti("This only gives you the answer when you get it incorrect. I'm working on another method soon.");
            localStorage.setItem("disclaimer","false");
            settings.see_correct = 1;
        }
    });
    
    document.getElementById('chngData').addEventListener('click', () => {
        const choice = prompt(
            "What data would you like to change?\nOption 1: Question (1)\nOption 2: Minute Amount (2)\nOption 3: Cancel (anything other than 1 or 2)"
        );

        if (choice.toUpperCase() === "1") {
            let question = prompt("How many questions do you want, and how many did you get correct? Write it as a fraction.", "Ex: 44/45");

            if (question.includes("/")) {
                let [correct, total] = question.split("/").map(num => parseInt(num.trim(), 10));
                if (!isNaN(correct) && !isNaN(total) && total > 0) {
                    setQuestions(correct,total)
                    activity.save();

                    showNoti("Reloading the lesson and applying changes...");
                    setTimeout(() => {
                        window.location.reload();
                    }, 1000);
                } else {
                    showNoti("Invalid input. Please provide valid numbers.");
                }
            } else {
                showNoti("Invalid input. Please provide the question data in fraction format (e.g., 44/45).");
            }
        } else if (choice === "2") {
            let timeAmt = prompt("What do you wanna set your timer to? (Format: mm:ss)", "Ex: 10:23");

            if (/^\d{1,2}:\d{2}$/.test(timeAmt)) {
                let [minutes, seconds] = timeAmt.split(":").map(num => parseInt(num.trim(), 10));

                if (!isNaN(minutes) && !isNaN(seconds) && seconds >= 0 && seconds < 60) {
                    let formatTime = (minutes * 60 + seconds) * 1000;

                    ConjuguemosTimer.getElapsedTime = () => formatTime;
                    activity.save();

                    showNoti("Reloading the lesson and applying changes...");
                    setTimeout(() => {
                        window.location.reload();
                    }, 1000);
                } else {
                    showNoti("Please enter the time as mm:ss (e.g., 10:23).");
                }
            } else {
                showNoti("Canceled.");
            }
        }
    });

    
    document.getElementById('versionTxt').addEventListener('click', () => {
        window.open('https://github.com/Devik55/Hackemos');
    });
    



    function setQuestions(correct,total) {
        const attempts = Array.from({ length: total }, (_, i) => [
            "error",
            i < correct ? 1 : 0,
            activity.currentList[i % activity.currentList.length].id,
            5,
        ]);

        activity.correctAttempts = () => correct;
        activity.attempts = attempts;
    }

    let toggle;
    document.addEventListener('keydown', (event) => {
        if (event.key === 'f' && event.target.tagName !== 'INPUT' && event.target.tagName !== 'TEXTAREA') {
            toggle = !toggle;
            UI.style.display = toggle ? 'block' : 'none';
        }
    });

} else {
    alert("You must be on the conjugemos site and open a lesson");
}
