/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
rndImgsAbout();
setTimeout(function () {
    animateCards();
}, 6000);
function animateCards() {
    var i1 = document.getElementById('img1');
    var i2 = document.getElementById('img2');
    var i3 = document.getElementById('img3');
    $("#img1").animate({
        top: "50vw",
        left: "- 10vw"
    }, 400, function () {
        rndImgsAbout();
        i1.style.top = '0vw';
        i1.style.left = '50vw';
    });
    $("#img2").animate({
        top: "50vw",
        left: "- 10vw"
    }, 500, function () {
        i2.style.top = '0vw';
        i2.style.left = '50vw';
    });
    $("#img3").animate({
        top: "50vw",
        left: "- 10vw"
    }, 700, function () {
        i3.style.top = '0vw';
        i3.style.left = '50vw';
    });
    $("#img1").animate({
        top: "0vw",
        left: "-2vw"
    }, 400, function () {
    });
    $("#img2").animate({
        top: "2vw",
        left: "2vw"
    }, 500, function () {
    });
    $("#img3").animate({
        top: "4vw",
        left: "12vw"
    }, 700, function () {
        setTimeout(function () {
            animateCards();
        }, 6000);
    });

}
function rndImgsAbout() {
    var files = [];
    for (i = 1; i <= 19; i++) {
        files.push('med (' + i + ').jpg');
        files.push('mild (' + i + ').jpg');
        files.push('spicy (' + i + ').jpg'); //.png for large folder
    }
//    var sectionToMod = document.getElementById(section);
//    var cardSlots = sectionToMod.getElementById('cards').getElementsByTagName('img');
    var cardSlots = document.querySelectorAll('#about #cards img');
    var usedCards = [];
    for (i = 0; i < cardSlots.length; i++) {
        var n = cardSlots[i].src;
        usedCards.push(n.substring(n.lastIndexOf('cards')));
//        console.log(usedCards[usedCards.length-1]);
    }
    for (i = 0; i < cardSlots.length; i++) {
        var rndIndex = parseInt(Math.random() * (files.length));
        while ($.inArray('cards_md/' + files[rndIndex], usedCards) !== -1) {
            var rndIndex = parseInt(Math.random() * (files.length));
        }
        cardSlots[i].src = './imgs/cards_md/' + files[rndIndex];
        usedCards.push(cardSlots[i].src);
    }
    
    for (i = 0; i < cardSlots.length; i++) {
        usedCards.pop();
    }

    if (cardSlots[0].src.includes("spicy")) {
        document.getElementById('support').style.backgroundColor = '#fc2923';
        document.getElementById('support_submit').style.color = '#fc2923';
        document.getElementById('mc-embedded-subscribe').style.color = '#fc2923';
        console.log('spicy');
//        document.getElementById('mild').style.opacity = '0';
//        document.getElementById('med').style.opacity = '0';
//        document.getElementById('spicy').style.opacity = '1';
    }
    else if (cardSlots[0].src.includes("med")) {
        document.getElementById('support').style.backgroundColor = '#fc982a';
        document.getElementById('support_submit').style.color = '#fc982a';
        document.getElementById('mc-embedded-subscribe').style.color = '#fc982a';
        console.log('med');
//        document.getElementById('mild').style.opacity = '0';
//        document.getElementById('med').style.opacity = '1';
//        document.getElementById('spicy').style.opacity = '0';
    }
    else if (cardSlots[0].src.includes("mild")) {
        document.getElementById('support').style.backgroundColor = '#f8b600';
        document.getElementById('support_submit').style.color = '#f8b600';
        document.getElementById('mc-embedded-subscribe').style.color = '#f8b600';
        console.log('mild');
//        document.getElementById('mild').style.opacity = 1;
//        document.getElementById('med').style.opacity = 0;
//        document.getElementById('spicy').style.opacity = 0;
    }
    
}
