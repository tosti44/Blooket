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
        let progress = stateNode.props.client.amount - (parseInt(prompt("How many questions left do you want?")) || 0);
        if (isNaN(progress) || progress < 0) alert("Invalid amount");
        else {
            stateNode.setState({ progress });
            stateNode.props.liveGameController.setVal({
                path: "c/" + stateNode.props.client.name + "/pr",
                val: progress
            });
        }
    });
cheat();
})();
