var run = 350;
window.onkeydown = function () {
    console.log(event.keyCode);
    var character = document.getElementById("charaOne");
    if (event.keyCode === 39) {
        character.src = "stand.gif";
        run = run + 50;
        console.log(run);
        character.style.left = run + "px";
        setTimeout(function () {
            character.src = "run.gif";
        }, 100);
    }
    if (event.keyCode === 13) {
        character.src = "stand.gif";
        run = run + 50;
        console.log(run);
        character.style.left = run + "px";
        setTimeout(function () {
            character.src = "fire.gif";
        }, 1000);
    }
};