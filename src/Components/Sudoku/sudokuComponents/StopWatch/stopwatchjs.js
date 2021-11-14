let watch = () => {
    const stopwatch = document.querySelector("#sudoku-stopwatch");
    const timestamp = document.querySelector("#sudoku-timestamp");
    const startstop = document.querySelector("#startstop");
    const reset = document.querySelector("#reset");

    let currentTime = 0;
    let isRunning = false;
    let trackerCount = 0;

    let timer;

    function startTimer() {
        isRunning = true;
        stopwatch.classList.add("running");
        // The note here is that setInterval and setTimeout can have their return values
        // stored in a variable... but despite the syntax - they are actually being called
        // so despite not seing setInterval() invoked... it's actually happening
        timer = setInterval(() => {
            currentTime++;

            if (currentTime % 100 === 0) {
                createTracker();
            }

            let minutes = Math.floor(currentTime / 100 / 60);
            let seconds = currentTime / 100 - minutes * 60;
            let finalTime = `${minutes}:${seconds < 10 ? 0 : ""}${seconds.toFixed(1)}`;
            timestamp.innerText = minutes > 0 ? finalTime : seconds.toFixed(1);
        }, 10);
        startstop.innerText = "Stop";
    }

    function stopTimer() {
        isRunning = false;
        stopwatch.classList.remove("running");
        // and store the timer in a variable is vital for actually handling the clear of the timer
        clearInterval(timer);
        startstop.innerText = "Start";
    }

    function resetTimer() {
        currentTime = 0;
        currentTime = currentTime.toFixed(1);
        trackerCount = 0;
        timestamp.innerText = currentTime;
        startstop.innerText = "Start";
    }

    function handleStartStop() {
        if (isRunning) {
            stopTimer();
        } else {
            startTimer();
        }
    }

    function handleReset() {
        stopTimer();
        resetTimer();
        clearTrackers();
    }

    function createTracker() {
        let startingAngle = -90;
        let setAngle = startingAngle + 6 * trackerCount;
        let trackerNode = document.createElement("div");

        trackerNode.classList.add("sudoku-counter");
        applyStyle(trackerNode, {
            transform: `rotate(${setAngle}deg) translateX(9rem)`
        });

        stopwatch.appendChild(trackerNode);
        trackerCount++;

        if (trackerCount > 10) {
            let trackers = document.querySelectorAll(".sudoku-counter");
            trackers[0].remove();
        }
    }

    function clearTrackers() {
        let trackers = document.querySelectorAll(".sudoku-counter");
        for (let counter of trackers) {
            counter.remove();
        }
    }

    function applyStyle(element, style) {
        for (const property in style) element.style[property] = style[property];
    }

    startstop.addEventListener("click", handleStartStop);
    reset.addEventListener("click", handleReset);

}

export {watch};