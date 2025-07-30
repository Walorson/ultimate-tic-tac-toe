const conditionStraight = new Condition('straight', [3,4,5,6,7,8], 
[                                                                         //1. Tablica: Warunek zwycięstwa X i Y; 2. Cały warunek zwycięstwa
    [[0,1,2],[0,0,0]], //Horizontal                                       //3. Wszystkie warunki zwycięstwa 4: Warianty tych warunków zwycięstwa
    [[0,0,0],[0,1,2]], //Vertical
],
[
    [[0,1,2,3],[0,0,0,0]],
    [[0,0,0,0],[0,1,2,3]]
],
[
    [[0,1,2,3,4],[0,0,0,0,0]],
    [[0,0,0,0,0],[0,1,2,3,4]]
],
[
    [[0,1,2,3,4,5],[0,0,0,0,0,0]],
    [[0,0,0,0,0,0],[0,1,2,3,4,5]]
],
[
    [[0,1,2,3,4,5,6],[0,0,0,0,0,0,0]],
    [[0,0,0,0,0,0,0],[0,1,2,3,4,5,6]]
],
[
    [[0,1,2,3,4,5,6,7],[0,0,0,0,0,0,0,0]],
    [[0,0,0,0,0,0,0,0],[0,1,2,3,4,5,6,7]]
]
);
const conditionCross = new Condition('cross', [3,4,5,6,7,8],
[
    [[0,1,2],[0,1,2]],
    [[0,-1,-2],[0,1,2]]
],
[
    [[0,1,2,3],[0,1,2,3]],
    [[0,-1,-2,-3],[0,1,2,3]]
],
[
    [[0,1,2,3,4],[0,1,2,3,4]],
    [[0,-1,-2,-3,-4],[0,1,2,3,4]]
],
[
    [[0,1,2,3,4,5],[0,1,2,3,4,5]],
    [[0,-1,-2,-3,-4,-5],[0,1,2,3,4,5]]
],
[
    [[0,1,2,3,4,5,6],[0,1,2,3,4,5,6]],
    [[0,-1,-2,-3,-4,-5,-6],[0,1,2,3,4,5,6]]
],
[
    [[0,1,2,3,4,5,6,7],[0,1,2,3,4,5,6,7]],
    [[0,-1,-2,-3,-4,-5,-6,-7],[0,1,2,3,4,5,6,7]]
],
);
const conditionSquare = new Condition("square",[2,3],
    [
        [[0,1,0,1],[0,0,1,1]]
    ],
    [
        [[0,1,2,0,1,2,0,1,2],[0,0,0,1,1,1,2,2,2]]
    ]
);
const conditionDiamond = new Condition("diamond",[1], 
    [
        [[0,1,2,1],[0,0,0,1]],
        [[0,1,1,1],[0,-1,0,1]],
        [[0,1,2,1],[0,0,0,-1]],
        [[0,0,0,1],[0,-1,1,0]]
    ]
);
const conditionPlus = new Condition("plus",[1],
    [
        [[0,1,2,1,1],[0,0,0,1,-1]]
    ]
);
const conditionSplit = new Condition("split",[1],
    [
        [[0,1,1,2], [0,0,1,1]]
    ]
);
const conditionPistol = new Condition("pistol",[2], 
    [
        [[0,1,2,0], [0,0,0,1]]
    ]
);
const conditionBridge = new Condition("bridge",[2],
    [
        [[0,1,2,0,2], [0,0,0,1,1]]
    ]
);
const conditionCrosshair = new Condition("crosshair",[1],
    [
        [[0,1,1,2], [0,-1,1,0]]
    ]
);
const conditionV = new Condition("v",[1],
    [
        [[0,1,2], [0,1,0]]
    ]
);
const conditionX = new Condition("x",[1],
    [
        [[0,0,1,2,2], [0,2,1,0,2]]
    ]
);
const conditionRing = new Condition("ring",[1],
    [
        [[0,1,2,0,2,0,1,2], [0,0,0,1,1,2,2,2]]
    ]
);

let conditionsList = {
    'straight': conditionStraight,
    'cross': conditionCross,
    'square': conditionSquare,
    'diamond': conditionDiamond,
    'plus': conditionPlus,
    'split': conditionSplit,
    'pistol': conditionPistol,
    'bridge': conditionBridge,
    'crosshair': conditionCrosshair,
    'v': conditionV,
    'x': conditionX,
    'ring': conditionRing
};