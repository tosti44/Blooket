(() => {
    let iframe = document.querySelector("iframe");
    if (window.fetch.call.toString() == 'function call() { [native code] }') {
        const call = window.fetch.call;
        window.fetch.call = function () {
            if (!arguments[1].includes("s.blooket.com/rc")) return call.apply(this, arguments);
        }
    }
    const cheat = (async () => {
        Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner.stateNode.state.choices.forEach(({ text }, index) => {
            let chest = document.querySelector(`div[class*='choice${index + 1}']`);
            if (!chest || chest.querySelector('div')) return;
            let choice = document.createElement('div')
            choice.style.color = "white";
            choice.style.fontFamily = "Eczar";
            choice.style.fontSize = "2em";
            choice.style.display = "flex";
            choice.style.justifyContent = "center";
            choice.style.transform = "translateY(200px)";
            choice.innerText = text;
            chest.append(choice)
        });
    });
cheat();
})();
