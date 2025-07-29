var coins = 300;

const Symbol = {
    cherry: 0,
    watermelon: 1,
    diamond: 2,
    star: 3,
    bar: 4,
    seven: 5,
}

var symbolImages = [
    "cherry.png", 
    "watermelon.png", 
    "diamond.png", 
    "star.png",
    "bar.png",
    "7.png"
];

var num1, num2, num3;
var slotArray = [0, 0, 0];

function startGame()
{
    if (coins >= 3) {
        coins -= 3;

        updateCoinCount();

        document.getElementById("startButton").hidden = true;
        document.getElementById("resetButton").hidden = true;

        num1 = getRandomInt();
        num2 = getRandomInt();
        num3 = getRandomInt();

        // document.getElementById("paragraph").innerHTML += " num1: " + num1;
        // document.getElementById("paragraph").innerHTML += " num2: " + num2;
        // document.getElementById("paragraph").innerHTML += " num3: " + num3;

        scrollSlots();
    }
    else {
        document.getElementById("paragraph").innerHTML = "Game Over - Not enough coins...";
    }
}

var i = 0;
var step = 0;
var maxsteps = 30;

function scrollSlots()
{
    if (step < maxsteps) {
        document.getElementById("img1").src = symbolImages[i];
        document.getElementById("img2").src = symbolImages[i];
        document.getElementById("img3").src = symbolImages[i];

        slotArray[0] = i;
        slotArray[1] = i;
        slotArray[2] = i;
        
        step++;
    }
    else {
        if (slotArray[0] != num1) {
            document.getElementById("img1").src = symbolImages[i];
            slotArray[0] = i;
        }

        if (slotArray[1] != num2) {
            document.getElementById("img2").src = symbolImages[i];
            slotArray[1] = i;
        }

        if (slotArray[2] != num3) {
            document.getElementById("img3").src = symbolImages[i];
            slotArray[2] = i;
        }
    }

    if (i < symbolImages.length - 1) {
        i++;
    }
    else {
        i = 0;
    }    

    var myVar = setTimeout("scrollSlots()", 100);

    if (step == maxsteps) {
        if ((slotArray[0] == num1)
                && (slotArray[1] == num2)
                && (slotArray[2] == num3)) {
            clearTimeout(myVar);
            step = 0;
            stopSlot();
        }
    }
}

function stopSlot()
{
    document.getElementById("paragraph").innerHTML = "";

    findMatchingPayline(num1, num2, num3);

    if (coins >= 3) {
        document.getElementById("startButton").hidden = false;
    }

    document.getElementById("resetButton").hidden = false;
}

function resetGame()
{
    coins = 300;
    document.getElementById("paragraph").innerHTML = "";
    updateCoinCount();
}

function updateCoinCount()
{
    document.getElementById("coinCounter").innerHTML = "Coins: " + coins;
}

function getRandomInt()
{
    return Math.floor(Math.random() * 6);
}

function findMatchingPayline(num1, num2, num3)
{
    var gainedCoins;

    // Three of a kind
    if ((num1 == num2) && (num1 == num3)) {
        switch (num1) {
            case Symbol.cherry:
                gainedCoins = 6;
                break;
            case Symbol.watermelon:
                gainedCoins = 12;
                break;
            case Symbol.diamond:
                gainedCoins = 25;
                break;
            case Symbol.star:
                gainedCoins = 50;
                break;
            case Symbol.bar:
                gainedCoins = 100;
                break;
            case Symbol.seven:
                gainedCoins = 300;
                break;
        }

        coins += gainedCoins;
        document.getElementById("paragraph").innerHTML += " Jackpot! ";
        document.getElementById("paragraph").innerHTML += "Gained " + gainedCoins + " coins!";
        updateCoinCount();
    }
}
