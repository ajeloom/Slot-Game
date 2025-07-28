var coins = 300;

const Symbol = {
    cherry: 0,
    watermelon: 1,
    diamond: 2,
    star: 3,
    bar: 4,
    seven: 5,
}

function startGame()
{
    if (coins >= 3) {
        coins -= 3;

        updateCoinCount();

        document.getElementById("paragraph").innerHTML = "";
        
        var num1 = getRandomInt();
        var num2 = getRandomInt();
        var num3 = getRandomInt();

        // const numbers = [num1, num2, num3]

        // for (var i = 0; i < 3; i++) {
        //     document.getElementById("paragraph").innerHTML += numbers[i] + " ";
        // }

        updateSlotPicture("img1", num1);
        updateSlotPicture("img2", num2);
        updateSlotPicture("img3", num3);

        findMatchingPayline(num1, num2, num3);
    }
    else {
        document.getElementById("paragraph").innerHTML = "Game Over - Not enough coins...";
    }

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

function updateSlotPicture(imageID, number)
{
    switch (number) {
        case Symbol.cherry:
            document.getElementById(imageID).src = "cherry.png";
            break;
        case Symbol.watermelon:
            document.getElementById(imageID).src = "watermelon.png";
            break;
        case Symbol.diamond:
            document.getElementById(imageID).src = "diamond.png";
            break;
        case Symbol.star:
            document.getElementById(imageID).src = "star.png";
            break;
        case Symbol.bar:
            document.getElementById(imageID).src = "bar.png";
            break;
        case Symbol.seven:
            document.getElementById(imageID).src = "7.png";
            break;
    }
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
    }
}
