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
        window.prompt = i.contentWindow.prompt.bind(window);
        i.remove();
        if (location.pathname == "/host/settings") {
            const gamemodes = ["Racing", "Classic", "Factory", "Cafe", "Defense2", "Defense", "Royale", "Gold", "Candy", "Brawl", "Hack", "Pirate", "Fish", "Dino", "Toy", "Rush"],
                type = prompt(`Which gamemode do you want to switch to? (Case sensitive)\n${gamemodes.slice(0, gamemodes.length - 1).join(", ")} or ${gamemodes[gamemodes.length - 1]}`);
            if (gamemodes.includes(type))
                Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner.stateNode.setState({ settings: { type } });
            else alert("Gamemode not found, make sure you spelled and capitalized it right.");
        } else alert("Run this script on the host settings page");
    });
cheat();
})();
