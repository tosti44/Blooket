(() => {
    let iframe = document.querySelector("iframe");
    if (window.fetch.call.toString() == 'function call() { [native code] }') {
        const call = window.fetch.call;
        window.fetch.call = function () {
            if (!arguments[1].includes("s.blooket.com/rc")) return call.apply(this, arguments);
        }
    }
    const cheat = (async () => {
        Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner.stateNode.state.towers.forEach(tower => {
            tower.stats.dmg = 1e6;
            tower.stats.fireRate = 50;
            tower.stats.ghostDetect = true;
            tower.stats.maxTargets = 1e6;
            tower.stats.numProjectiles &&= 100;
            tower.stats.range = 100;
            if (tower.stats.auraBuffs) for (const buff in tower.stats.auraBuffs) tower.stats.auraBuffs[buff] *= 100;
        });
    });
cheat();
})();
