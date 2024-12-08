
let mode;

if (window.location.href.startsWith("https://conjuguemos.com/") && window.is_assignment !== undefined) {
    if (activity.currentList) {
        mode = window.is_assignment ? 'assignment' : 'vocab';
    }

    if (activity.conjugations) {
        mode = window.is_assignment ? 'verb-assignment' : 'verb';
    }


    window.dragElement = e => {;let t=0,n=0,o=0,l=0;function u(e){(e=e||window.event).preventDefault(),o=e.clientX,l=e.clientY,document.onmouseup=s,document.onmousemove=i}function i(u){(u=u||window.event).preventDefault(),t=o-u.clientX,n=l-u.clientY,o=u.clientX,l=u.clientY,e.style.top=e.offsetTop-n+"px",e.style.left=e.offsetLeft-t+"px"}function s(){document.onmouseup=null,document.onmousemove=null}if(document.getElementById(e.id+"header")){document.getElementById(e.id+"header").onmousedown=u}else{e.onmousedown=u}};
        const themes = { 
            Berry: {
                primary: '#7b1fa2', 
                secondary: '#4a0072', 
                tertiary: '#9c27b0',
                boxShadow: ['rgba(123, 31, 162, 0.5)', 'rgba(74, 0, 114, 0.4)', 'rgba(156, 39, 176, 0.3)'],
                gradient: '135deg, #4a0072, #7b1fa2, #e040fb',
                hoverBg: '#4a0072',
                activeBg: '#2e003e', 
                textPrimary: '#ffffff',
                textSecondary: '#f3e5f5', 
                background: '#1c0030', 
            },
            Dark: {
                primary: 'gray',
                secondary: '#3700b3',
                tertiary: '#03dac6',
                boxShadow: ['rgba(0, 0, 0, 0.4)', 'rgba(255, 255, 255, 0.2)', 'rgba(0, 0, 0, 0.3)'],
                gradient: '90deg, #ffff, #D1D9E0',
                hoverBg: '#ffffff',
                activeBg: '#333',
                textPrimary: '#ffffff',
                textSecondary: 'black',
                background: '#121212',
            },
            Cherry: {
                primary: '#d32f2f', 
                secondary: '#b71c1c',
                tertiary: '#f44336', 
                boxShadow: ['rgba(211, 47, 47, 0.5)', 'rgba(183, 28, 28, 0.4)', 'rgba(255, 69, 69, 0.3)'],
                gradient: '135deg, #b71c1c, #f44336, #ff5252',
                hoverBg: '#b71c1c',
                activeBg: '#8e0000', 
                textPrimary: '#ffffff',
                textSecondary: '#ffe6e6',
                background: '#330000', 
            },
            Ocean: {
                primary: '#0288d1', 
                secondary: '#01579b', 
                tertiary: '#03a9f4',
                boxShadow: ['rgba(2, 136, 209, 0.5)', 'rgba(1, 87, 155, 0.4)', 'rgba(3, 169, 244, 0.3)'],
                gradient: '135deg, #01579b, #0288d1, #40c4ff',
                hoverBg: '#01579b',
                activeBg: '#002f6c',
                textPrimary: '#ffffff',
                textSecondary: '#e0f7fa', 
                background: '#001f3f',
            },
            Sunset: {
                primary: '#ff6f00', 
                secondary: '#f4511e', 
                tertiary: '#ff9100', 
                boxShadow: ['rgba(255, 111, 0, 0.5 )', 'rgba(244, 81, 30, 0.4)', 'rgba(255, 145, 0, 0.3)'],
                gradient: '135deg, #f4511e, #ff6f00, #ffd740',
                hoverBg: '#f4511e',
                activeBg: '#bf360c', 
                textPrimary: '#ffffff',
                textSecondary: '#ffe0b2', 
                background: '#3e2723',
            },
            Forest: {
                primary: '#2e7d32', 
                secondary: '#1b5e20',
                tertiary: '#4caf50', 
                boxShadow: ['rgba(46, 125, 50, 0.5)', 'rgba(27, 94, 32, 0.4)', 'rgba(76, 175, 80, 0.3)'],
                gradient: '135deg, #1b5e20, #2e7d32, #76ff03',
                hoverBg: '#1b5e20',
                activeBg: '#0d3b09', 
                textPrimary: '#ffffff',
                textSecondary: '#c8e6c9', 
                background: '#0d2b0d', 
            },
        
    };
    
    let currentTheme = localStorage.getItem('currentTheme') || 'Dark';
    if (!localStorage.getItem('currentTheme')) {
        localStorage.setItem('currentTheme', 'Dark');
    }
    const themeKeys = Object.keys(themes);
    let current = themeKeys.indexOf(currentTheme);
    
    let n = null; 
    const showNoti = (t, e) => { 
        n && (document.body.removeChild(n), clearTimeout(n.timeout)); 
        let o = document.createElement("div"), d = document.createElement("div"), b = document.createElement("div"); 
        const dur = Math.max(3000, 50 * t.length); 
        o.style.cssText = `position:fixed;top:20px;left:0;background:linear-gradient(to right,${themes[themeKeys[current]].primary || "grey"} 5px,rgba(20,20,20,0.8) 5px);color:white;z-index:9999;opacity:0;transition:left 0.5s ease-in-out,opacity 0.5s ease-in-out;max-width:300px;padding:10px;;` 
        d.style.cssText = "font-size:18px;word-wrap:break-word;"; 
        d.textContent = t; 
        b.style.cssText = `position:absolute;left:0;bottom:0;height:5px;width:100%;background:${themes[themeKeys[current]].primary || "grey"};transition:width ${dur}ms linear;;` 
        o.appendChild(d); 
        o.appendChild(b); 
        document.body.appendChild(o); 
        n = o; 
        n.timeout = setTimeout(() => { 
            o.style.opacity = "1"; 
            b.style.width = "0%"; 
        }, 100); 
        o.onclick = () => { 
            o.style.opacity = "0"; 
            o.style.left = "-100%"; 
            setTimeout(() => { 
                document.body.removeChild(o); 
                n = null; 
            }, 500); 
        }; 
        setTimeout(() => { 
            o.style.opacity = "0"; 
            o.style.left = "-100%"; 
            setTimeout(() => { 
                document.body.removeChild(o); 
                n = null; 
            }, 500); 
        }, dur); 
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
                <div class="bottomTitle" id="versionTxt">v2.2.1</div>
</div>

        </div>
    `;

    document.body.appendChild(UI);
    window.dragElement(UI.firstElementChild);
    if (localStorage.getItem("disclaimer2") === null) {
        bootbox.alert({
            title: "Welcome to the Conjuguemos Hack",
            message: `
                <p style="margin-bottom: 20px;">
                    We are not responsible for any damages caused by using this script, as it serves as a proof of concept of the insecurities of the site and how they can be exploited.
                </p>
                <p style="margin-bottom: 20px;">
                    The menu is open-sourced and is available on GitHub via clicking on the version text at the bottom.
                </p>
                <h4 style="margin-bottom: 10px;">Supported Lesson Types:</h4>
                <ul style="margin-bottom: 20px;">
                    <li>Custom Assignments</li>
                    <li>Guided Practices</li>
                </ul>
                <h4 style="margin-bottom: 10px;">Menu Features:</h4>
                <ul>
                    <li>Theme Changer (click the menu icon)</li>
                    <li>Menu Toggle (Press F)</li>
                    <li>Complete Lessons</li>
                    <li>Set Questions</li>
                    <li>Set the Timer</li>
                    <li>Show Answers to Incorrect</li>
                    <li>Skip Question</li>
                </ul>
            `
        }, function() {
            localStorage.setItem("disclaimer2", "true");
        });
        
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
    
    const skipLesson = function () {
        if (mode) {
            if (localStorage.getItem("disclaimer2") === 'true' && (mode === 'assignment' || mode === 'verb-assignment')) {
                alert("If you set the questions and time to amount that doesn't meet the requirements to finish the lesson it will be submitted anyway, and it will look suspious. be careful when choosing values.");
                localStorage.setItem("disclaimer2", "false");
            }
    
            let question = prompt("How many questions do you want, and how many did you get correct? Write it as a fraction.", "Ex: 44/45");
    
            if (question.includes("/")) {
                let [correct, total] = question.split("/").map(num => parseInt(num.trim(), 10));
                if (!isNaN(correct) && !isNaN(total) && total > 0) {
                    let timeAmt = prompt("How many minutes do you want? (Format: mm:ss)", "Ex: 10:23");
    
                    if (/^\d{1,2}:\d{2}$/.test(timeAmt)) {
                        let [minutes, seconds] = timeAmt.split(":").map(num => parseInt(num.trim(), 10));
                        if (!isNaN(minutes) && !isNaN(seconds) && seconds >= 0 && seconds < 60) {
                            let formatTime = (minutes * 60 + seconds) * 1000;
    
                            bootbox.confirm(
                                "The lesson will be skipped with " + Math.round((correct / total) * 100) + "% accuracy and the time taken will be " + timeAmt +
                                ". The lesson start date will show as " + new Date(Date.now() - formatTime).toLocaleString() +
                                " and the end date will show as " + new Date().toLocaleString() +
                                ". Confirm lesson skip? Once it reloads you might have to leave the lesson and reenter to fully submit.",
                                function (result) {
                                    if (result) {
                                        if (mode === 'assignment') {
                                            setQuestions(correct, total);
                                            ConjuguemosTimer.getElapsedTime = () => formatTime;
                                            activity.save();
                                            activity.submit()
                                        } else if (mode === 'verb-assignment') {
                                            setQuestionsVerb(correct, total);
                                            ConjuguemosTimer.getElapsedTime = () => formatTime;
                                            activity.save();
                                            activity.submit()
                                        } else if (mode === 'vocab') {
                                            setQuestions(correct, total);
                                            ConjuguemosTimer.getTime = () => timeAmt;
                                            ConjuguemosTimer.getStart = () => Date.now() - formatTime;
                                            activity.submit();
                                        } else if (mode === 'verb') {
                                            setQuestionsVerb(correct, total);
                                            ConjuguemosTimer.getTime = () => timeAmt;
                                            ConjuguemosTimer.getStart = () => Date.now() - formatTime;
                                            activity.submit();
                                        }
                                    } else {
                                        bootbox.alert({
                                            title: "Hackemos " + version,
                                            message: "Lesson skip canceled."
                                        });
                                    }
                                }
                            );
                            return;
                        }
                    }
                }
            }
    
            showNoti("Invalid input error.");
        }
    };
    
    document.getElementById('skip').addEventListener('click', () => {
        skipLesson();
    });
    
    document.getElementById('skipQ').addEventListener('click', () => {
        settings.skip = 1;
        showNoti("Question Skipped!");
        activity.skip();
    });
    
    let aToggle = true;
    document.getElementById('showAnswers').addEventListener('click', () => {
        if (aToggle) {
            showNoti("Show answer on incorrect enabled.");
            settings.see_correct = 1;
            aToggle = false;
        } else {
            showNoti("Show answer on incorrect disabled.");
            settings.see_correct = 0;
            aToggle = true;
        }
    });
    
    document.getElementById('chngData').addEventListener('click', () => {
        if (mode === 'assignment' || mode === 'verb-assignment') {
            const choice = prompt(
                "What data would you like to change?\nOption 1: Question (1)\nOption 2: Minute Amount (2)\nOption 3: Cancel (anything other than 1 or 2)"
            );
    
            if (choice === "1") {
                let question = prompt("How many questions do you want, and how many did you get correct? Write it as a fraction.", "44/45");
    
                if (question.includes("/")) {
                    let [correct, total] = question.split("/").map(num => parseInt(num.trim(), 10));
                    if (!isNaN(correct) && !isNaN(total) && total > 0) {
                        if (mode === 'assignment' || mode === 'verb-assignment') {
                            setQuestions(correct, total);
                            activity.save();
    
                            showNoti("Reloading the lesson and applying changes...");
                            setTimeout(() => {
                                window.location.reload();
                            }, 1000);
                        }
                    } else {
                        showNoti("Invalid input. Please provide valid numbers.");
                    }
                } else {
                    showNoti("Invalid input. Please provide the question data in fraction format (e.g., 44/45).");
                }
            } else if (choice === "2") {
                let timeAmt = prompt("What do you wanna set your timer to? (Format: mm:ss)", "10:23");
    
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
                        showNoti("Please enter the time as mm:ss (ex: 10:23).");
                    }
                } else {
                    showNoti("Invalid input error.");
                }
            }
        } else {
            showNoti("Unsupported lesson type. Only works on assignments.")
        }
    });
    let version = document.getElementById('versionTxt').textContent;
    let versionTxt = document.getElementById('versionTxt')
    versionTxt.addEventListener('click', () => {
        window.open('https://github.com/Devik55/Hackemos');
    });
    
    function setQuestions(correct,total) {
        const attempts = Array.from({ length: total }, (_, i) => [
            "error",
            i < correct ? 1 : 0,
        activity.currentList[i % activity.currentList.length].id ,
            5,        
        ]); 
        activity.correctAttempts = () => correct;
        activity.attempts = attempts;
    }

        function setQuestionsVerb(correct,total) {
            const attempts = Array.from({ length: total }, (_, i) => [
                "error",
                i < correct ? 1 : 0,
            activity.conjugations[i % activity.conjugations.length].idVerb ,
            activity.conjugations[i % activity.conjugations.length].translation,
            activity.conjugations[i % activity.conjugations.length].idPronoun,
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
