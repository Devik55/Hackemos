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
        <button id="skip" class="button">Skip Lesson</button>
        <button id="setQuestions" class="button">Set Questions</button>
        <button id="setTime" class="button">Set Time</button>
        <div class="bottomTitle" id="versionText">v1</div>
    </div>
`;

document.body.appendChild(UI);

window.dragElement(UI.firstElementChild);

// the hacks are still being worked on and there are some major flaws in the website, this is temporary and i just wanted to release something
document.getElementById('skip').addEventListener('click', () => {
    // placeholder
});

document.getElementById('setQuestions').addEventListener('click', () => {
    // placeholder
});

document.getElementById('setTime').addEventListener('click', () => {
    // placeholder
});

document.getElementById('versionText').addEventListener('click', () => {
    window.open('https://github.com/Devik55/Hackemos', '_blank'); 
});
