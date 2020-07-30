controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Ethan.isHittingTile(CollisionDirection.Bottom)) {
        Ethan.vy = -200
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.saplingPine, function (sprite, location) {
    game.over(false, effects.dissolve)
    music.wawawawaa.play()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    music.baDing.play()
    game.over(true, effects.confetti)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    music.powerDown.play()
    game.over(false, effects.dissolve)
})
let Ethan: Sprite = null
music.playMelody("B A G A G F A C5 ", 120)
info.startCountdown(20)
scene.setBackgroundColor(9)
Ethan = sprites.create(img`
    . . . . . . f f f f . . . . . . . . . . . . . . 
    . . . . f f f 2 2 f f f . . . . . . . . . . . . 
    . . . f f f 2 2 2 2 f f f . . . . . . . . . . . 
    . . f f f e e e e e e f f f . . . . . . . . . . 
    . . f f e 2 2 2 2 2 2 e e f . . . . . . . . . . 
    . . f e 2 f f f f f f 2 e f . . . . . . . . . . 
    . . f f f f e e e e f f f f . . . . . . c c c . 
    . f f e f b f 4 4 f b f e f f . . . . c d d c . 
    . f f e f b f 4 4 f b f e f f . . . c d d c . . 
    . f e e 4 d d d d d d 4 e e f . c c d d c . . . 
    f d f e e d d d d d 4 e e f f e c d d c . . . . 
    f b f f e e 4 4 4 4 e e 4 f d d c c c . . . . . 
    f b f 4 f 2 2 2 2 2 2 f 1 e d d e . . . . . . . 
    f c f . f 2 2 2 2 2 2 f 4 4 e e . . . . . . . . 
    . f f . f 4 4 5 5 4 4 f . . . . . . . . . . . . 
    . . . . f f f f f f f f . . . . . . . . . . . . 
    . . . . . f f . . f f . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Ethan)
tiles.setTilemap(tiles.createTilemap(hex`2000080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000060606000000000000000000000000000000000400000000000000000000000000000000000000040404040404040000000000040000000000000000000000000500030000000400050000000500000000000004000200000101010101010101010101010101010101010101010101010101010101010100`, img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . 2 2 2 . . . . . . . . . . . . . . . . 2 . . . . 
    . . . . . . . . . . . . . . . 2 . 2 2 2 . 2 . . . . . 2 . . . . 
    . . . . . . . . 2 . 2 . . . 2 . 2 . . . 2 . . . . . . 2 . 2 . . 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, [myTiles.transparency16,sprites.vehicle.roadHorizontal,sprites.dungeon.chestClosed,sprites.dungeon.collectibleRedCrystal,sprites.builtin.brick,sprites.castle.saplingPine,sprites.dungeon.floorDark0], TileScale.Sixteen))
Ethan.ay = 400
scene.cameraFollowSprite(Ethan)
controller.moveSprite(Ethan, 100, 0)
