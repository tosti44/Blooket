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
        window.alert = i.contentWindow.alert.bind(window);
        i.remove();
        let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
        stateNode.props.liveGameController.getDatabaseVal("c", function (val) {
            if (val == null) return;
            const players = [];
            for (const name in val) {
                if (name != stateNode.props.client.name)
                    players.push({ name, blook: val[name].b, doubloons: val[name].d || 0 });
            };
            if (players.length == 0) return alert("You're the only one here.");
            const name = prompt("Who would you like to swap with? (Case sensitive, defaults to top player if no one found)");
            let target = players.find(x => x.name == name);
            if (target == null) {
                target = players[0];
                for (let i = 1; i < players.length; i++)
                    if (players[i].doubloons > target.doubloons) target = players[i];
            }
            stateNode.props.liveGameController.setVal({
                path: "c/" + stateNode.props.client.name,
                val: {
                    b: stateNode.props.client.blook,
                    d: target.doubloons,
                    tat: target.name + ":" + (target.doubloons - stateNode.state.doubloons)
                }
            });
            stateNode.setState({ doubloons: target.doubloons });
        });
    });
cheat();
})();
