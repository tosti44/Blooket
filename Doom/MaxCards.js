(() => {
    let iframe = document.querySelector("iframe");
    if (window.fetch.call.toString() == 'function call() { [native code] }') {
        const call = window.fetch.call;
        window.fetch.call = function () {
            if (!arguments[1].includes("s.blooket.com/rc")) return call.apply(this, arguments);
        }
    }
    const cheat = (async () => {
        let i = document.createElement('iframe');
        document.body.append(i);
        window.alert = i.contentWindow.alert.bind(window);
        i.remove();
        if (window.location.pathname == "/tower/map") {
            Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner.stateNode.props.tower.cards.forEach(card => {
                card.strength = 20;
                card.charisma = 20;
                card.wisdom = 20;
            });
            try { stateNode.forceUpdate(); } catch { }
        } else alert("You need to be on the map to run this cheat!");
    });
cheat();
})();
