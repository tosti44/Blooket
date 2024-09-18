(() => {
    let iframe = document.querySelector("iframe");
    if (window.fetch.call.toString() == 'function call() { [native code] }') {
        const call = window.fetch.call;
        window.fetch.call = function () {
            if (!arguments[1].includes("s.blooket.com/rc")) return call.apply(this, arguments);
        }
    }
    const cheat = (async () => {
        const colliders = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner.stateNode.game.current.config.sceneConfig.physics.world.colliders._active.filter(x => x.callbackContext?.toString?.()?.includes?.('dmgCd'));
        for (let i = 0; i < colliders.length; i++) {
            const enemies = colliders[i].object2;
            let _start = enemies.classType.prototype.start;
            enemies.classType.prototype.start = function () { _start.apply(this, arguments); this.hp = 1; };
            enemies.children.entries.forEach(e => e.hp = 1);
        }
    });
cheat();
})();