(() => {
    let iframe = document.querySelector("iframe");
    if (window.fetch.call.toString() == 'function call() { [native code] }') {
        const call = window.fetch.call;
        window.fetch.call = function () {
            if (!arguments[1].includes("s.blooket.com/rc")) return call.apply(this, arguments);
        }
    }
    const cheat = (async () => {
        setInterval(() => {
            let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
            if (stateNode.state.stage == "prize") {
                stateNode.props.liveGameController.getDatabaseVal("c", (players) => {
                    if (players == null) return;
                    players = Object.entries(players);
                    let most = 0, max = 0, index = -1;
                    for (let i = 0; i < players.length; i++)
                        if (players[i][0] != stateNode.props.client.name && players[i][1] > most)
                            most = players[i][1];
                    for (let i = 0; i < stateNode.state.choices.length; i++) {
                        const choice = stateNode.state.choices[i];
                        let value = stateNode.state.gold;
                        if (choice.type == "gold")
                            value = stateNode.state.gold + choice.val || stateNode.state.gold;
                        else if (choice.type == "multiply" || choice.type == "divide")
                            value = Math.round(stateNode.state.gold * choice.val) || stateNode.state.gold;
                        else if (choice.type == "swap")
                            value = most || stateNode.state.gold;
                        else if (choice.type == "take")
                            value = stateNode.state.gold + most * choice.val || stateNode.state.gold;
                        if ((value || 0) <= max) continue;
                        max = value;
                        index = i + 1;
                    }
                    document.querySelector("div[class*='choice" + index + "']")?.click();
                });
            }
        }, 50);
    });
cheat();
})();
