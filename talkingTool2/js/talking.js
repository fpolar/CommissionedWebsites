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

var syncPoints = [wfc, wfs, sld];//array of possible points to sync from

var namesAndTimes = [];
var currNameAndTime = ["-1", -1, -1];

var refreshID;
var scrollInterval;
var scrollOn = false;

var newWidth = 100 * myVideo.duration;
wf.style.width = "" + newWidth + "%";

var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: 'violet',
    progressColor: 'purple',
    normalize: true
});
wavesurfer.load('videos/spy_sample.mp4');

document.onkeyup = function (event) {
    if (!(document.getElementById("name") === document.activeElement))
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
        myVideo.currentTime = 0;
        return;
    } else if (!(myVideo.paused))
    {
        wfc.scrollLeft = (myVideo.currentTime / myVideo.duration) * wf.clientWidth;
        sld.value = 0;
        var newPosition = wfc.scrollLeft + sld.value / 100 * wfc.clientWidth;
        var offsetSld = 0;
        wfs.style.left = newPosition + offsetSld + "px";
        console.log("video playing");
        setTimeout(sync, 10);
    } else
    {
        var newPosition = wfc.scrollLeft + sld.value / 100 * wfc.clientWidth;
        wfs.style.left = newPosition + "px";
        var vidPercent = newPosition / wf.clientWidth;
        myVideo.currentTime = vidPercent * myVideo.duration;
        console.log("video not playing");
//        clearInterval(refreshID);
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
    currNameAndTime[0] = document.getElementById("name").value;
    console.log("start");
    if (currNameAndTime[1] === -1)
    {
        console.log("set start if");
        currNameAndTime[1] = myVideo.currentTime;

        document.getElementById("start_selector").style.left =
                document.getElementById("selector").style.left;
        document.getElementById("start_selector").style.display = "block";
    }
}

function setEnd()
{
    currNameAndTime[0] = document.getElementById("name").value;
    if (currNameAndTime[2] === -1)
    {
        console.log("set end");
        currNameAndTime[2] = myVideo.currentTime;

        document.getElementById("end_selector").style.left =
                document.getElementById("selector").style.left;
        document.getElementById("end_selector").style.display = "block";
    }
    console.log("end");
}

function clearCurrent(save)
{
    console.log("clear");
    if (save)
    {
        console.log("save");
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
            extras = " with no outside sound";
        } else {
            extras = " with " + extras.substr(0, extras.length - 3);
        }
        namesAndTimes.push(currNameAndTime);
        document.getElementById("lastSub").innerHTML = "Submitted: " + currNameAndTime[0] + " talked from " + currNameAndTime[1] + " to " + currNameAndTime[2] + extras;
    } else {
        document.getElementById("lastSub").innerHTML = "Cleared";
    }
    var s = document.getElementById("start_selector");
    var e = document.getElementById("end_selector");
    e.style.display = s.style.display = "none";
    currNameAndTime = ["-1", -1, -1];
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
