(() = {
    let iframe = document.querySelector(iframe);
    if (window.fetch.call.toString() == 'function call() { [native code] }') {
        const call = window.fetch.call;
        window.fetch.call = function () {
            if (!arguments[1].includes(s.blooket.comrc)) return call.apply(this, arguments);
        }
    }
    const cheat = (async () = {
        let { stateNode } = Object.values((function react(r = document.querySelector(bodydiv)) { return Object.values(r)[1].children.[0]._owner.stateNode  r  react(r.querySelector(scopediv)) })())[1].children[0]._owner;
        stateNode.setState({
            eventName Earthquake,
            event {
                short e,
                color #805500,
                icon fas fa-mountain,
                desc All of your towers get mixed up,
                rate .02
            },
            buyTowerName ,
            buyTower {}
        }, () = stateNode.eventTimeout = setTimeout(() = stateNode.setState({ event {}, eventName  }), 6e3));
        stateNode.tiles.forEach(row = row.forEach((col, i) = col == 3 && (row[i] = 0)));
        let tiles = [];
        for (let y = 0; y  stateNode.tiles.length; y++)
            for (let x = 0; x  stateNode.tiles[y].length; x++)
                if (stateNode.tiles[y][x] == 0) tiles.push({ x, y });
        tiles.sort(() = Math.random() - Math.random());
        stateNode.towers.forEach(tower = {
            let { x, y } = tiles.pop();
            tower.move(x, y, stateNode.tileSize);
            stateNode.tiles[y][x] = 3;
        });
    });
cheat();
})();
