/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//initializing everything
var myVideo = document.getElementById("v");
var pButton = document.getElementById("pp");//play/pause button
var wf = document.getElementById("waveform");
var wfc = document.getElementById("waveform_container");
var wfs = document.getElementById("selector");//the selector
var sld = document.getElementById("sld");//the slider

var cName = "-1";
var cGender = "-1";
var cStart = -1;
var cStop = -1;
var cNoise = "-1";

var refreshID;
var scrollInterval;
var scrollOn = false;
var resumeTime = 0;

var newWidth = 100 * myVideo.duration;
wf.style.width = "" + newWidth + "%";
$(document).ready(function () {
    console.log("ready!");
    var wavesurfer = WaveSurfer.create({
        container: '#waveform',
        waveColor: 'violet',
        progressColor: 'purple',
        normalize: true
    });
    wavesurfer.load('videos/spy_sample.mp4');

});
document.onkeyup = function (event) {
    if (document.activeElement.tagName !== "INPUT")
    {
        var key = event.keyCode;
        if (key === 90)
        {
            setStart();
        }
        if (key === 88)
        {
            setEnd();
        }
        if (key === 83)
        {
            clearCurrent(true);
        }
        if (key === 65)
        {
            clearCurrent(false);
        }
        if (key === 32)
        {
            letsPlay();
        }
    }
};
//end of initialization

function sync()
{
    if (myVideo.ended)
    {
        myVideo.pause();
//        clearInterval(refreshID);
        pp.src = "img/play.png";
//        myVideo.currentTime = 0;
        return;
    } else if (!(myVideo.paused))
    {
        sld.value = (myVideo.currentTime / myVideo.duration) * 100;
//        console.log((myVideo.currentTime / myVideo.duration) * 100);
//        console.log(sld.value);
        var textForTimer = '' + myVideo.currentTime;
        textForTimer = textForTimer.substr(0, textForTimer.indexOf('.') + 7);
        if (textForTimer.indexOf('.') === 1)
        {
            textForTimer = '00:00:0' + textForTimer;
        } else if (textForTimer.indexOf('.') === 2) {
            textForTimer = '00:00:' + textForTimer;
        } else if (textForTimer.indexOf(':') === 1)
        {
            textForTimer = '00:0' + textForTimer;
        } else
        {
            textForTimer = '00:' + textForTimer;
        }
        $("#timer").text(textForTimer);
        setTimeout(sync, 10);
    } else
    {
        var newPosition = sld.value / 100 * myVideo.duration;
        myVideo.currentTime = newPosition;
        var textForTimer = '' + myVideo.currentTime;
        textForTimer = textForTimer.substr(0, textForTimer.indexOf('.') + 7);
        if (textForTimer.indexOf('.') === 1 || textForTimer.indexOf('.') === -1)
        {
            textForTimer = '00:00:0' + textForTimer;
        } else if (textForTimer.indexOf('.') === 2) {
            textForTimer = '00:00:' + textForTimer;
        } else if (textForTimer.indexOf(':') === 1)
        {
            textForTimer = '00:0' + textForTimer;
        } else
        {
            textForTimer = '00:' + textForTimer;
        }
        $("#timer").text(textForTimer);
    }
}

function letsPlay()
{
    if (myVideo.paused)
    {
        myVideo.play();
        pp.src = "img/pause.png";
        sync();
    } else
    {
        myVideo.pause();
        pp.src = "img/play.png";

    }
}

function setStart()
{
    cName = document.getElementById("name").value;
    console.log("start");
    letsPlay();
    if (cStart === -1)
    {
        console.log("set start if");
        cStart = myVideo.currentTime;

        document.getElementById("start_selector").style.left =
                document.getElementById("selector").style.left;
        document.getElementById("start_selector").style.display = "block";
    }
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
    if (myVideo.paused)
    {
        letsPlay();
    }
}

function setEnd()
{
    cName = document.getElementById("name").value;
    if (cStop === -1)
    {
        console.log("set end");
        cStop = myVideo.currentTime;

        document.getElementById("end_selector").style.left =
                document.getElementById("selector").style.left;
        document.getElementById("end_selector").style.display = "block";
    }
    if (!(myVideo.paused))
    {
        letsPlay();
    }
    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = true;
}

function clearCurrent(save)
{
    console.log("clear");
    if (save)
    {
        console.log("save");
        if (document.getElementById("name").value === null || document.getElementById("name").value === "")
        {
            alert("Please fill in all the fields");
            return;
        }
        var extras = "";
        if (document.getElementById("music").checked)
        {
            extras += "music, ";
        }
        if (document.getElementById("speech").checked)
        {
            extras += "background speech, ";
        }
        if (document.getElementById("noises").checked)
        {
            extras += "background noises, ";
        }
        if (document.getElementById("animal").checked)
        {
            extras += "animal sounds, ";
        }
        if (extras === "")
        {
            extras = cNoise = " with no outside sound";
        } else {
            cNoise = extras;
            extras = " with " + extras.substr(0, extras.length - 2);
        }
        if (cName === "-1")
        {
            cName = document.getElementById("name").value;
        }
        if (cGender === "-1")
        {
            cGender = document.getElementById("gender").value;
        }
        insertCharToSheet(cName, cGender, cStart, cStop, cNoise);
        document.getElementById("lastSub").innerHTML = "Submitted: " + cName + " talked from " + cStart + " to " + cStop + extras;
    } else {
        document.getElementById("lastSub").innerHTML = "Cleared";
    }
    var s = document.getElementById("start_selector");
    var e = document.getElementById("end_selector");
    e.style.display = s.style.display = "none";

    cName = "-1";
    cGender = "-1";
    cStart = -1;
    cStop = -1;
    cNoise = "-1";

    document.getElementById("name").value = '';
    document.getElementById("music").checked = false;
    document.getElementById("speech").checked = false;
    document.getElementById("noises").checked = false;
    document.getElementById("animal").checked = false;
}

function insertCharToSheet(name, gender, start, stop, noises) {
    var char = document.createElement("li");
    char.className = "timestamp";
    //inputs
    var nameInput = document.createElement("input");
    nameInput.value = name;
    nameInput.className = "nameIn";
    var genderInput = document.createElement("input");
    genderInput.value = gender;
    genderInput.className = "genderIn";
    var startInput = document.createElement("input");
    startInput.value = start;
    startInput.className = "startIn";
    var stopInput = document.createElement("input");
    stopInput.value = stop;
    stopInput.className = "stopIn";
    var noisesInput = document.createElement("input");
    noisesInput.value = noises;
    noisesInput.className = "noisesIn";
    var editButton = document.createElement("button");
    editButton.innerHTML = "delete";
    editButton.className = "delete";

    char.appendChild(nameInput);
    char.appendChild(genderInput);
    char.appendChild(startInput);
    char.appendChild(stopInput);
    char.appendChild(noisesInput);
    char.appendChild(editButton);

    document.getElementById("sheet").appendChild(char);

    $(".startIn").on('click focus', function () {
        console.log('start input click');
        myVideo.currentTime = $(this).val();
        sld.value = myVideo.currentTime / myVideo.duration * 100;
        sync();
    });
    $(".stopIn").on('click focus', function () {
        console.log('stop input click');
        myVideo.currentTime = $(this).val();
        sld.value = myVideo.currentTime / myVideo.duration * 100;
        sync();
    });
    $(".delete").on('click', function () {
        console.log('delete button click');
        $(this).closest('.timestamp').remove();
    });
}

function selectScroll()
{
    if (!scrollOn && sld.value >= 95)
    {
        wfc.scrollLeft = wfc.scrollLeft + 5;
        clearInterval(scrollInterval);
        scrollInterval = setInterval(selectScroll, 100);
        scrollOn = true;
    } else if (scrollOn && sld.value >= 95)
    {
        wfc.scrollLeft = wfc.scrollLeft + 5;
    } else if (scrollOn && sld.value < 95)
    {
        clearInterval(scrollInterval);
        scrollOn = false;
    } else if (!scrollOn && sld.value < 95)
    {
        scrollInterval = setInterval(selectScroll, 100);
    }
}

function stopScroll()
{
    clearInterval(scrollInterval);
    if (scrollOn)
    {
        console.log("scrolling off");
        scrollOn = false;
    }
}

//other structures of these objects could be used
//like every instance of a character in the sheets could add
//to a count array for each of the characters (or create
//new value in the array for the character) and the id for each val
//instead of being just count it would be 'name'+count[name]
function submit() {
    var output = {};
    var count = 0;
    $('li').each(function () {
        output[count] = {
            'character': $(this).children('.nameIn').val(),
            'gender': $(this).children('.genderIn').val(),
            'start': $(this).children('.startIn').val(),
            'stop': $(this).children('.stopIn').val(),
            'noises': $(this).children('.noisesIn').val()
        };
        count++;
    });
    var txtFile = "output.txt";
    var file = new File([""], txtFile);
    var str = JSON.stringify(output, null, 4);
    console.log(str);
}

$(sld).click(function () {

});

//$("#sheet").on('click', 'li', (function(){
//$("ul").on('click', '.edit', function () {
//    //so right now im thinking this would just delete it and then re-add it anywhere in the list
//    //but later I would want the list sorted by start time so this would be cleaner
//    //might be a little slow with larger lists, not sure
//    //use this for reference later
//    resumeTime = myVideo.currentTime;
//    var name = $(this).closest('.name');
//    var gender = $(this).closest('.gender');
//    var start = $(this).closest('.start');
//    var stop = $(this).closest('.stop');
//    var noises = $(this).closest('.noises');
//    console.log("clicked on a character timestamp");
//    //change wavelength scroll, and three selector positions
//    wfs.style.left = "50%";
//    document.getElementById("start_selector").style.left = "25%";
//    document.getElementById("start_selector").style.display = "block";
//    document.getElementById("end_selector").style.left = "75%";
//    document.getElementById("end_selector").style.display = "block";
//});