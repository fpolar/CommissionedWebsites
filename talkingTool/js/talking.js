/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var myVideo = document.getElementById("v");
var pButton = document.getElementById("pp");
var sld = document.getElementById("sld");
var namesAndTimes = [];
var currNameAndTime = ["-1", "-1", "-1"];

var refreshID;

$("input").mouseup(function ()
{
    //setting current time of video according to slider
    var dur = myVideo.duration;
    myVideo.currentTime = sld.value * dur / 100;

    //setting new position of waveform selector;
    var wf = document.getElementById("selector");
    wf.style.left = sld.value + "%";

});

function letsPlay()
{

    if (myVideo.paused)
    {
        myVideo.play();
        pp.src = "img/pause.png";
        refreshID = setInterval(refreshSlider, 5);
    } else
    {
        myVideo.pause();
        pp.src = "img/play.png";
        clearInterval(refreshID);
    }
}

function refreshSlider()
{
    var curr_sec = myVideo.currentTime;
    var dur = myVideo.duration;

    var new_pos = curr_sec / dur * 100;

    console.log(new_pos);

    sld.value = new_pos;

    //setting new position of waveform selector;
    var wf = document.getElementById("selector");
    wf.style.left = new_pos + "%";
}

function setStart()
{
    currNameAndTime[0] = document.getElementById("name").value;
    if (currNameAndTime[1] == -1)
    {
        console.log("set start if");
        currNameAndTime[1] = myVideo.currentTime;

        var wfc = document.getElementById("waveform_container");
        wfc.innerHTML = wfc.innerHTML + "<div id=\"start_selector\"><div class=\"trans\"></div></div>";
        document.getElementById("start_selector").style.left = document.getElementById("selector").style.left;
    }
}

function setEnd()
{
    currNameAndTime[0] = document.getElementById("name").value;
    if (currNameAndTime[2] == -1)
    {
        console.log("set end");
        currNameAndTime[2] = myVideo.currentTime;

        var wfc = document.getElementById("waveform_container");
        wfc.innerHTML = wfc.innerHTML + "<div id=\"end_selector\"><div class=\"trans\"></div></div>";
        document.getElementById("end_selector").style.left = document.getElementById("selector").style.left;

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
    s.parentNode.removeChild(s);
    e.parentNode.removeChild(e);
    currNameAndTime = ["-1", "-1", "-1"];
}
