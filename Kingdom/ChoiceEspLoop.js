(() => {
    let iframe = document.querySelector("iframe");
    if (window.fetch.call.toString() == 'function call() { [native code] }') {
        const call = window.fetch.call;
        window.fetch.call = function () {
            if (!arguments[1].includes("s.blooket.com/rc")) return call.apply(this, arguments);
        }
    }
    const cheat = (async () => {
        setInterval(stats => {
            let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
            let elements = Array.prototype.reduce.call(document.querySelectorAll('[class*=statContainer]'), (obj, container, i) => (obj[stats[i]] = container, obj), {});
            if (stateNode.state.phase == "choice") {
                Array.prototype.forEach.call(document.querySelectorAll('.choiceESP'), x => x.remove());
                Object.keys(stateNode.state.guest.yes || {}).forEach(x => {
                    if (elements[x] == null) return;
                    let element = document.createElement('div');
                    element.className = 'choiceESP';
                    element.style = 'font-size: 24px; color: rgb(75, 194, 46); font-weight: bolder;';
                    element.innerText = String(stateNode.state.guest.yes[x]);
                    elements[x].appendChild(element);
                });
                Object.keys(stateNode.state.guest.no || {}).forEach(x => {
                    if (elements[x] == null) return;
                    let element = document.createElement('div');
                    element.className = 'choiceESP';
                    element.style = 'font-size: 24px; color: darkred; font-weight: bolder;';
                    element.innerText = String(stateNode.state.guest.no[x]);
                    elements[x].appendChild(element);
                });
                Array.prototype.forEach.call(document.querySelectorAll("[class*=guestButton][role=button]"), x => (x.onclick = () => Array.prototype.forEach.call(document.querySelectorAll(".choiceESP"), x => x.remove())));
            }
        }, 50, ['materials', 'people', 'happiness', 'gold']);
    });
cheat();
})();
