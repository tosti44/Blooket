(() => {
    let iframe = document.querySelector("iframe");
    if (window.fetch.call.toString() == 'function call() { [native code] }') {
        const call = window.fetch.call;
        window.fetch.call = function () {
            if (!arguments[1].includes("s.blooket.com/rc")) return call.apply(this, arguments);
        }
    }
    const cheat = (async () => {
        Object.values(document.querySelector("#phaser-bouncy"))[0].return.updateQueue.lastEffect.deps[0].current.config.sceneConfig.physics.world.bodies.entries.forEach(x => {
            if (!x.gameObject.frame.texture.key.startsWith("blook")) return;
            x.checkCollision.none = x.gameObject.alpha == 1;
            x.gameObject.setAlpha(x.gameObject.alpha == 1 ? 0.5 : 1);
        });
    });
cheat();
})();
