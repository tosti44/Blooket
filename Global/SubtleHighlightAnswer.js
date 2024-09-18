(() => {
    let iframe = document.querySelector("iframe");
    if (window.fetch.call.toString() == 'function call() { [native code] }') {
        const call = window.fetch.call;
        window.fetch.call = function () {
            if (!arguments[1].includes("s.blooket.com/rc")) return call.apply(this, arguments);
        }
    }
    const cheat = (async () => {
        const { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
        const Question = stateNode.state.question || stateNode.props.client.question;
        let ind = 0;
        while (ind < Question.answers.length) {
            let j = 0;
            let found = false;
            while (j < Question.correctAnswers.length) {
                if (Question.answers[ind] == Question.correctAnswers[j]) {
                    found = true;
                    break;
                }
                j++;
            }
            ind++;
            if (found) document.querySelector("[class*='answersHolder'] :nth-child(" + ind + ") > div").style.boxShadow = "unset";
        }
    });
cheat();
})();
