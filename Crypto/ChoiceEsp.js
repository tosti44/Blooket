(() => {
    let iframe = document.querySelector("iframe");
    if (window.fetch.call.toString() == 'function call() { [native code] }') {
        const call = window.fetch.call;
        window.fetch.call = function () {
            if (!arguments[1].includes("s.blooket.com/rc")) return call.apply(this, arguments);
        }
    }
    const cheat = (async () => {
        let chest = document.querySelector('[class*=feedbackContainer]');
        if (chest.children.length <= 4) {
            let choice = document.createElement('div')
            choice.style.color = "white";
            choice.style.fontFamily = "Inconsolata,Helvetica,monospace,sans-serif";
            choice.style.fontSize = "2em";
            choice.style.display = "flex";
            choice.style.justifyContent = "center";
            choice.style.marginTop = "675px";
            choice.innerText = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner.state.choices[0].text;
            chest.append(choice);
        }
    });
cheat();
})();