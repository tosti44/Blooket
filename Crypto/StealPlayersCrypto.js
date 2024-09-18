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
        window.prompt = i.contentWindow.prompt.bind(window);
        i.remove();
        let target = prompt("Who's crypto would you like to steal?");
        let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
        stateNode.props.liveGameController.getDatabaseVal("c", (players) => {
            let player;
            if (players && (player = Object.entries(players).find((x) => x[0].toLowerCase() == target.toLowerCase()))) {
                const cr = player[1].cr;
                stateNode.setState({
                    crypto: stateNode.state.crypto + cr,
                    crypto2: stateNode.state.crypto + cr
                });
                stateNode.props.liveGameController.setVal({
                    path: "c/" + stateNode.props.client.name,
                    val: {
                        b: stateNode.props.client.blook,
                        p: stateNode.state.password,
                        cr: stateNode.state.crypto + cr,
                        tat: player[0] + ":" + cr
                    }
                });
            }
        })
    });
cheat();
})();