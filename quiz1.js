let na = [];
let user_ans = Array(5).fill(null); // Initialize user_ans
let i = 0;
let questions = [
    'Q.1 which is the smallest unit of data in a computer?',
    'Q.2 Which of the following is NOT an anti-virus software?',
    'Q.3 In the context of digital computer, which of the following pairs of digits is referred to as binary code?',
    'Q.4 Which unit of the computer is considered as the brain of the computer?',
    'Q.5 What is the full form of PROM?'
];
let opta = ['Gigabyte', 'Avast', '3 and 4', 'Memory unit', 'Program read-only memory'];
let optb = ['Bit', 'Linux', '0 and 1', 'Input unit', 'Primary read-only memory'];
let optc = ['Byte', 'Norton', '2 and 3', 'CPU', 'Programmable read-only memory'];
let optd = ['Terabyte', 'Kaspersky', '1 and 2', 'Output unit', 'Program read-output memory'];
let correctans = ['Bit', 'Linux', '0 and 1', 'CPU', 'Programmable read-only memory'];

function init() {
    document.getElementById("ques").innerHTML = questions[i];
    document.getElementById("opta").innerHTML = opta[i];
    document.getElementById("optb").innerHTML = optb[i];
    document.getElementById("optc").innerHTML = optc[i];
    document.getElementById("optd").innerHTML = optd[i];
}

function start() {
    if (document.getElementById("f-input").value === "") {
        alert("Please Enter your name to start!!");
    } else {
        document.getElementById("front-box").style.display = "none";
        document.getElementById("in-box-1").style.display = "block";
        na[i] = document.getElementById("f-input").value;
        document.getElementById("name").innerHTML += na[i];
    }
}

function optionaa() {
    user_ans[i] = document.getElementById("opta").innerHTML;
    check_ans_color();
}

function optionbb() {
    user_ans[i] = document.getElementById("optb").innerHTML;
    check_ans_color();
}

function optioncc() {
    user_ans[i] = document.getElementById("optc").innerHTML;
    check_ans_color();
}

function optiondd() {
    user_ans[i] = document.getElementById("optd").innerHTML;
    check_ans_color();
}

function finish() {
    let marks = 0;
    for (let j = 0; j < questions.length; j++) {
        if (correctans[j] === user_ans[j]) {
            marks++;
        }
    }
    document.getElementById("result").innerHTML = marks;
    document.getElementById("result-panel").style.display = "block";
    document.getElementById("in-box-1").style.display = "none";
}

function check_ans_color() {
    const ans_one = document.getElementById("opta").innerHTML;
    const ans_two = document.getElementById("optb").innerHTML;
    const ans_three = document.getElementById("optc").innerHTML;
    const ans_four = document.getElementById("optd").innerHTML;

    resetOptionColors();

    if (user_ans[i] === ans_one) {
        document.getElementById("opta").style.background = "green";
        document.getElementById("opta").style.color = "white";
    } else if (user_ans[i] === ans_two) {
        document.getElementById("optb").style.background = "green";
        document.getElementById("optb").style.color = "white";
    } else if (user_ans[i] === ans_three) {
        document.getElementById("optc").style.background = "green";
        document.getElementById("optc").style.color = "white";
    } else if (user_ans[i] === ans_four) {
        document.getElementById("optd").style.background = "green";
        document.getElementById("optd").style.color = "white";
    }
}

function prev() {
    if (i > 0) {
        i--;
        updateQuestion();
    }
}

function next() {
    if (i < questions.length - 1) {
        i++;
        updateQuestion();
    }
}

function updateQuestion() {
    resetOptionColors();
    
    document.getElementById("ques").innerHTML = questions[i];
    document.getElementById("opta").innerHTML = opta[i];
    document.getElementById("optb").innerHTML = optb[i];
    document.getElementById("optc").innerHTML = optc[i];
    document.getElementById("optd").innerHTML = optd[i];

    check_ans_color();
}

function resetOptionColors() {
    const options = [document.getElementById("opta"), document.getElementById("optb"), 
                     document.getElementById("optc"), document.getElementById("optd")];

    options.forEach(option => {
        option.style.background = "#fff";
        option.style.color = "#000";
    });
}

// Call init to set up the initial question and options
init();



/*let na=[];
let user_ans=[];
let i=0;
let questions=['Q.1 which is the smallest unit of data in a compute?',
'Q.2 Which of the following is NOT an anti-virus software ?',
'Q.3 In the context of digital computer, which of the following pairs of digits is referred to as binary code ?',
'Q.4 Which unit of the computer is considered as the brain of the computer ?',
'Q.5 What is the full form of PROM ?']
let opta=['Gigabyte','Avast','3 and 4','Memory unit','Program read-only memory']
let optb=['Bit','Linux','0 and 1','Input unit','Primary read-only memory']
let optc=['Byte','Norton','2 and 3','CPU','Programmable read-only memory']
let optd=['Terabyte','Kaspersky','1 and 2','Output unit','Program read-output memory']
let correctans=['Bit','Linux','0 and 1','CPU','Programmable read-only memory']
document.getElementById("ques").innerHTML=questions[i]
document.getElementById("opta").innerHTML=opta[i]
document.getElementById("optb").innerHTML=optb[i]
document.getElementById("optc").innerHTML=optc[i]
document.getElementById("optd").innerHTML=optd[i]
function start(){

if(document.getElementById("f-input").value=="")
{
alert("Please Enter your name to start!!");
}
else{
    document.getElementById("front-box").style.display="none";
    document.getElementById("in-box-1").style.display="block";
    na[i]=document.getElementById("f-input").value;
    document.getElementById("name").innerHTML=document.getElementById("name").innerHTML+na[i];
}


}
function optionaa(){
    user_ans[i] = document.getElementById("opta").innerHTML; 
    check_ans_color(); // Just call this to handle the coloring
}

function optionbb(){
    user_ans[i] = document.getElementById("optb").innerHTML;
    check_ans_color();
}

function optioncc(){
    user_ans[i] = document.getElementById("optc").innerHTML;
    check_ans_color();
}

function optiondd(){
    user_ans[i] = document.getElementById("optd").innerHTML;
    check_ans_color();
}


function finish(){
    let marks=0;
    for (let j=0;j<=4;j++){
        if (correctans[j]==user_ans[j])
    {marks=marks+1;
    console.log(correctans[j]);
    console.log(user_ans[j]);}
    else{
        marks=marks+0;
        console.log(correctans[j]);
    console.log(user_ans[j]);
    }
    }
    document.getElementById("result").innerHTML=marks;
    document.getElementById("result-panel").style.display="block";
    document.getElementById("in-box-1").style.display="none";
}

function check_ans_color() {
    const ans_one = document.getElementById("opta").innerHTML;
    const ans_two = document.getElementById("optb").innerHTML;
    const ans_three = document.getElementById("optc").innerHTML;
    const ans_four = document.getElementById("optd").innerHTML;

    resetOptionColors(); // Reset before checking colors

    if (user_ans[i] === ans_one) {
        document.getElementById("opta").style.background = "green";
        document.getElementById("opta").style.color = "white";
    } else if (user_ans[i] === ans_two) {
        document.getElementById("optb").style.background = "green";
        document.getElementById("optb").style.color = "white";
    } else if (user_ans[i] === ans_three) {
        document.getElementById("optc").style.background = "green";
        document.getElementById("optc").style.color = "white";
    } else if (user_ans[i] === ans_four) {
        document.getElementById("optd").style.background = "green";
        document.getElementById("optd").style.color = "white";
    }
}

function prev() {
    i = i - 1;
    if (i < 0) {
        i = 0;
    }
    updateQuestion();
}

function next() {
    i = i + 1;
    if (i > 4) {
        i = 4;
    }
    updateQuestion();
}

function updateQuestion() {
    // Reset option colors before displaying the new question
    resetOptionColors();
    
    document.getElementById("ques").innerHTML = questions[i];
    document.getElementById("opta").innerHTML = opta[i];
    document.getElementById("optb").innerHTML = optb[i];
    document.getElementById("optc").innerHTML = optc[i];
    document.getElementById("optd").innerHTML = optd[i];

    check_ans_color();
}

function resetOptionColors() {
    const options = [document.getElementById("opta"), document.getElementById("optb"), 
                     document.getElementById("optc"), document.getElementById("optd")];

    options.forEach(option => {
        option.style.background = "#fff";
        option.style.color = "#000";
    });
}
    */
