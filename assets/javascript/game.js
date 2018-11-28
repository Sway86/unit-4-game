console.log("java");

//crystal varzzzz

var crystal = {
    blue:
    {
        name: "Blue",
        value: 0
    },

    green:
    {
        name: "Green",
        value: 0
    },

    red:
    {
        name: "Red",
        value: 0
    },

    yellow:
    {
        name: "Yellow",
        value: 0
    }
};

var currentScore = 0;
var targetScore = 0;

var winCount = 0;
var lossCount = 0;

//fuction for getting random numbers

var getRandom = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

var startGame = function () {
    currentScore = 0;

    targetScore = getRandom(19, 120);

    crystal.blue.value = getRandom(1, 12);
    crystal.red.value = getRandom(1, 12);
    crystal.green.value = getRandom(1, 12);
    crystal.yellow.value = getRandom(1, 12);


    //updates HTML
    $("#your-score").text(currentScore);
    $("#target-score").text(tagertScore);

    //testing console
    console.log("---");
    console.log("Target Score: " + targetScore);
    console.log("Blue: " + crystal.blue.value + " | Green: " + crystal.green.value + " | Red: " + crystal.red.value + " | Yellow: " + crystal.yellow.value);
    console.log("-------");
};

var checkWin = function() {
    if (currentScore > target) {
        alert("My condolences");
        console.log("May you rest in peace");

        loseCount++;

        $("#loss-count")
    }
}