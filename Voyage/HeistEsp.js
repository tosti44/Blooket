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
        let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
        if (stateNode.state.stage == "heist") {
            const imgs = Array.prototype.map.call(Array.prototype.slice.call(document.querySelector("[class*=prizesList]").children, 1, 4), (x) => x.querySelector("img").src);
            const esp = Object.values(document.querySelector("[class*=modal]"))[0].return.memoizedState.memoizedState;
            for (const e of document.querySelectorAll("[class*=boxContent] > div")) e.remove();
            const open = Object.values(document.querySelector("[class*=modal]"))[0].return.memoizedState.next.next.memoizedState;
            Array.prototype.forEach.call(document.querySelector("[class*=chestsWrapper]").children, (container, i) => {
                const box = container.firstChild.firstChild;
                if (open.includes(i)) return box.style.opacity = "";
                box.style.opacity = "0.5";
                let d = document.createElement("div");
                d.innerHTML = "<img src='" + imgs[2 - esp[i]] + "' style='max-width: 75%; max-height: 75%'></img>";
                d.className = "chestESP";
                d.style.position = "absolute";
                d.style.inset = "0";
                d.style.display = "grid";
                d.style.placeItems = "center";
                d.style.pointerEvents = "none"
                container.onclick = () => {
                    d.remove();
                    box.style.opacity = "";
                };
                container.firstChild.prepend(d);
            });
        } else alert("You must be in a heist!");
    });
cheat();
})();
