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
        stateNode.props.liveGameController.getDatabaseVal("c", (val) => {
            if (val == null) return;
            const players = [];
            for (const name in val) {
                if (name == stateNode.props.client.name) continue;
                players.push({ name, blook: val[name].b, toys: val[name].t || 0 });
            };
            stateNode.setState({
                choosingPlayer: false,
                players,
                phaseTwo: true,
                stage: "prize",
                choiceObj: { type: "swap" }
            }, () => setTimeout(() => stateNode.setState({ choosingPlayer: true }), 300));
        });
    });
cheat();
})();
