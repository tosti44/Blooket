(() => {
    let iframe = document.querySelector("iframe");
    if (window.fetch.call.toString() == 'function call() { [native code] }') {
        const call = window.fetch.call;
        window.fetch.call = function () {
            if (!arguments[1].includes("s.blooket.com/rc")) return call.apply(this, arguments);
        }
    }
    const cheat = (async () => {
        let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
        stateNode.state.gold == 0 && stateNode.setState({ gold: 100, gold2: 100 });
        stateNode._choosePrize ||= stateNode.choosePrize;
        const triple = { type: "multiply", val: 3, text: "Triple Gold!", blook: "Unicorn" };
        stateNode.choosePrize = function (i) {
            stateNode.state.choices[i] = triple;
            stateNode._choosePrize(i);
        }
    });
cheat();
})();
