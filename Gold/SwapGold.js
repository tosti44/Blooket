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
        const player = prompt("Who's gold would you like to swap with? (Case sensitive)");
        stateNode.props.liveGameController.getDatabaseVal("c", (players) => {
            if (!players || players[player] == null) return;
            const gold = players[player].g || 0;
            stateNode.props.liveGameController.setVal({
                path: "c/" + stateNode.props.client.name,
                val: {
                    b: stateNode.props.client.blook,
                    tat: player + ":swap:" + (stateNode.state.gold || 0),
                    g: gold
                }
            });
            stateNode.setState({ gold, gold2: gold });
        });
    });
cheat();
})();
