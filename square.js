(function (PIXI, lib) {

    var MovieClip = PIXI.animate.MovieClip;
    var Container = PIXI.Container;
    var Graphics = PIXI.Graphics;
    var shapes = PIXI.animate.ShapesCache;

    lib.Graphic1 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.square[0]);
        this.addChild(instance1);
    });

    lib.Symbol_2 = Container.extend(function () {
        Container.call(this);
        var instance2 = new Graphics()
            .drawCommands(shapes.square[1]);
        var instance1 = new lib.Graphic1();
        this.addChild(instance2, instance1);
    });

    lib.Symbol_1 = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 50
        });
        var instance1 = new lib.Symbol_2();
        this.addTimedChild(instance1, 0, 50, {
            "0": {
                x: 237.05,
                y: 161.75,
                sx: 1,
                sy: 1
            },
            "1": {
                x: 235.65,
                y: 160.675,
                sx: 1.034,
                sy: 1.034
            },
            "2": {
                x: 234.247,
                y: 159.597,
                sx: 1.067,
                sy: 1.067
            },
            "3": {
                x: 232.851,
                y: 158.475,
                sx: 1.101,
                sy: 1.101
            },
            "4": {
                x: 231.452,
                y: 157.45,
                sx: 1.134,
                sy: 1.134
            },
            "5": {
                x: 229.998,
                y: 156.322,
                sx: 1.168,
                sy: 1.168
            },
            "6": {
                x: 228.599,
                y: 155.247,
                sx: 1.201,
                sy: 1.201
            },
            "7": {
                x: 227.149,
                y: 154.122,
                sx: 1.235,
                sy: 1.235
            },
            "8": {
                x: 225.746,
                y: 153.044,
                sx: 1.268,
                sy: 1.268
            },
            "9": {
                x: 224.4,
                y: 151.922,
                sx: 1.302,
                sy: 1.302
            },
            "10": {
                x: 222.95,
                y: 150.847,
                sx: 1.335,
                sy: 1.335
            },
            "11": {
                x: 221.547,
                y: 149.719,
                sx: 1.369,
                sy: 1.369
            },
            "12": {
                x: 220.097,
                y: 148.694,
                sx: 1.402,
                sy: 1.402
            },
            "13": {
                x: 218.698,
                y: 147.569,
                sx: 1.436,
                sy: 1.436
            },
            "14": {
                x: 217.244,
                y: 146.491,
                sx: 1.469,
                sy: 1.469
            },
            "15": {
                x: 215.898,
                y: 145.369,
                sx: 1.503,
                sy: 1.503
            },
            "16": {
                x: 214.449,
                y: 144.294,
                sx: 1.537,
                sy: 1.537
            },
            "17": {
                x: 213.046,
                y: 143.166,
                sx: 1.57,
                sy: 1.57
            },
            "18": {
                x: 211.646,
                y: 142.091,
                sx: 1.604,
                sy: 1.604
            },
            "19": {
                x: 210.196,
                y: 140.966,
                sx: 1.637,
                sy: 1.637
            },
            "20": {
                x: 208.793,
                y: 139.938,
                sx: 1.671,
                sy: 1.671
            },
            "21": {
                x: 207.397,
                y: 138.816,
                sx: 1.704,
                sy: 1.704
            },
            "22": {
                x: 205.997,
                y: 137.74,
                sx: 1.738,
                sy: 1.738
            },
            "23": {
                x: 204.594,
                y: 136.613,
                sx: 1.771,
                sy: 1.771
            },
            "24": {
                x: 202.95,
                y: 135.4,
                sx: 1.805,
                sy: 1.805
            },
            "25": {
                x: 204.324,
                y: 136.531,
                sx: 1.773,
                sy: 1.773
            },
            "26": {
                x: 205.704,
                y: 137.565,
                sx: 1.74,
                sy: 1.74
            },
            "27": {
                x: 207.083,
                y: 138.65,
                sx: 1.708,
                sy: 1.708
            },
            "28": {
                x: 208.363,
                y: 139.685,
                sx: 1.676,
                sy: 1.676
            },
            "29": {
                x: 209.746,
                y: 140.722,
                sx: 1.644,
                sy: 1.644
            },
            "30": {
                x: 211.123,
                y: 141.755,
                sx: 1.612,
                sy: 1.612
            },
            "31": {
                x: 212.506,
                y: 142.792,
                sx: 1.579,
                sy: 1.579
            },
            "32": {
                x: 213.833,
                y: 143.874,
                sx: 1.547,
                sy: 1.547
            },
            "33": {
                x: 215.216,
                y: 144.911,
                sx: 1.515,
                sy: 1.515
            },
            "34": {
                x: 216.546,
                y: 145.996,
                sx: 1.483,
                sy: 1.483
            },
            "35": {
                x: 217.922,
                y: 147.029,
                sx: 1.451,
                sy: 1.451
            },
            "36": {
                x: 219.252,
                y: 148.113,
                sx: 1.418,
                sy: 1.418
            },
            "37": {
                x: 220.632,
                y: 149.098,
                sx: 1.386,
                sy: 1.386
            },
            "38": {
                x: 222.012,
                y: 150.183,
                sx: 1.354,
                sy: 1.354
            },
            "39": {
                x: 223.392,
                y: 151.218,
                sx: 1.322,
                sy: 1.322
            },
            "40": {
                x: 224.722,
                y: 152.303,
                sx: 1.29,
                sy: 1.29
            },
            "41": {
                x: 226.055,
                y: 153.34,
                sx: 1.258,
                sy: 1.258
            },
            "42": {
                x: 227.432,
                y: 154.372,
                sx: 1.225,
                sy: 1.225
            },
            "43": {
                x: 228.815,
                y: 155.459,
                sx: 1.193,
                sy: 1.193
            },
            "44": {
                x: 230.191,
                y: 156.492,
                sx: 1.161,
                sy: 1.161
            },
            "45": {
                x: 231.524,
                y: 157.529,
                sx: 1.129,
                sy: 1.129
            },
            "46": {
                x: 232.854,
                y: 158.564,
                sx: 1.097,
                sy: 1.097
            },
            "47": {
                x: 234.234,
                y: 159.648,
                sx: 1.064,
                sy: 1.064
            },
            "48": {
                x: 235.614,
                y: 160.683,
                sx: 1.032,
                sy: 1.032
            },
            "49": {
                x: 237.05,
                y: 161.75,
                sx: 1,
                sy: 1
            }
        });
    });

    lib.square = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 1,
            framerate: 24,
            loop: false
        });
        var instance1 = new lib.Symbol_1();
        this.addChild(instance1);
    });

    lib.square.assets = {
        "square": "images/square.shapes.txt"
    };
})(PIXI, lib = lib || {});
var lib;