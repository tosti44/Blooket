(() => {
    let iframe = document.querySelector("iframe");
    if (window.fetch.call.toString() == 'function call() { [native code] }') {
        const call = window.fetch.call;
        window.fetch.call = function () {
            if (!arguments[1].includes("s.blooket.com/rc")) return call.apply(this, arguments);
        }
    }
    const cheat = (async () => {
        Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner.stateNode.setState({
            blooks: Array.from({ length: 10 }, () => ({
                name: "Mega Bot",
                color: "#d71f27",
                class: "🤖",
                rarity: "Legendary",
                cash: [8e4, 43e4, 42e5, 62e6, 1e9],
                time: [5, 5, 3, 3, 3],
                price: [7e6, 12e7, 19e8, 35e9],
                active: false,
                level: 4,
                bonus: 5.5
            }))
        });
    });
cheat();
})();
