/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var myVideo = document.getElementById("v");
var pButton = document.getElementById("pp");
var wf = document.getElementById("waveform");
var wfc = document.getElementById("waveform_container");
var sld = document.getElementById("sld");

var namesAndTimes = [];
var currNameAndTime = ["-1", "-1", "-1"];

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

$("input").mouseup(function ()
{
    //setting current time of video according to slider
    var dur = myVideo.duration;
    myVideo.currentTime = sld.value * dur / 100;
    
//    //setting current time of video according to slider
//    var dur = myVideo.duration;
//    console.log(wfc.scrollLeft);
//    console.log(wfc.clientWidth);
//    console.log(wf.clientWidth);
//    var tempay = 
//    wfc.scrollLeft/wfc.clientwidth;// + sld.value/100*wf.clientWidth * dur / 100;
//    console.log(tempay);
//    myVideo.currentTime = tempay;
//    wavesurfer.seekTo(myVideo.currentTime/dur);
//    //above takes how much user has scrolled out of total and 
//    //adds how far slider is and makes it the percent of the way user is into the video


    //setting new position of waveform selector;
    var wfs = document.getElementById("selector");
    var newSldPos = wfc.clientWidth *sld.value/100 + wfc.scrollLeft;
    console.log(wfc.clientWidth);
    console.log(wfc.scrollLeft);
    console.log(newSldPos);
    wfs.style.left = newSldPos + "px";
//    wfs.style.left = (sld.value + wfc.scrollLeft/newWidth) + "%";

});

function letsPlay()
{

    if (myVideo.paused)
    {
        wavesurfer.play();
        myVideo.play();
        pp.src = "img/pause.png";
        refreshID = setInterval(refreshSlider, 5);
    } else
    {
        myVideo.pause();
        wavesurfer.pause();
        pp.src = "img/play.png";
        clearInterval(refreshID);
    }
}

function refreshSlider()
{
    var curr_sec = myVideo.currentTime;
    var dur = myVideo.duration;

    var new_pos = curr_sec / dur * 100;

    sld.value = new_pos;

    //setting new position of waveform selector;
    var wf = document.getElementById("selector");
    wf.style.left = new_pos + "%";
}

function setStart()
{
    currNameAndTime[0] = document.getElementById("name").value;
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
}

function clearCurrent(save)
{
    console.log("clear");
    if (save)
    {
        console.log("save");
        namesAndTimes.push(currNameAndTime);
        document.getElementById("lastSub").innerHTML = "Submitted: " + currNameAndTime[0] + " talked from " + currNameAndTime[1] + " to " + currNameAndTime[2];
    }
    var s = document.getElementById("start_selector");
    var e = document.getElementById("end_selector");
    e.style.display = s.style.display = "none";
    currNameAndTime = ["-1", "-1", "-1"];
}

function selectScroll()
{
    if (!scrollOn && sld.value >= 95)
    {
//        console.log("scrolling");
        wfc.scrollLeft = wfc.scrollLeft + 10;
        clearInterval(scrollInterval);
        scrollInterval = setInterval(selectScroll, 100);
        scrollOn = true;
    } else if (scrollOn && sld.value >= 95)
    {
//        console.log("scrolling");
        wfc.scrollLeft = wfc.scrollLeft + 10;
    } else if (scrollOn && sld.value < 95)
    {
//        console.log("scrolling off");
        clearInterval(scrollInterval);
        scrollOn = false;
    } else if (!scrollOn && sld.value < 95)
    {
//        console.log("not scrolling");
        scrollInterval = setInterval(selectScroll, 5);
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
