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
        let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
        const numDefense = Math.min(parseInt(prompt("How much defense do you want? (Max 4)")) || 0, 4);
        stateNode.setState({ numDefense });
        stateNode.props.liveGameController.setVal({
            path: (stateNode.isTeam ? "a/" : "c/") + stateNode.props.client.name + "/d",
            val: numDefense
        });
    });
cheat();
})();
