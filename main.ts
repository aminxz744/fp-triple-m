namespace SpriteKind {
    export const Npc = SpriteKind.create()
}
function Animation () {
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . f f f f f . . . . . . 
        . . . . . f e e e f . . . . . . 
        . . . . . e f e f e . . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . . 1 1 2 1 1 . . . . . . 
        . . . . f 1 1 2 1 1 f . . . . . 
        . . . f . 1 1 1 1 1 . f . . . . 
        . . . f . f f 1 f f . f . . . . 
        . . . f f f f f f f f f . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f f . f f . . . . . . 
        . . . . . f f . f f . . . . . . 
        . . . . . f f . f f . . . . . . 
        . . . . . f f . f f . . . . . . 
        . . . . . f f . f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f e e e f . . . . . . 
        . . . . . e f e f e . . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . f 1 1 2 1 1 f . . . . . 
        . . . f . 1 1 1 1 1 . f . . . . 
        . . . f . f f 1 f f . f . . . . 
        . . . f . f f f f f . f . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f f . f f . . . . . . 
        . . . . . f f . f f . . . . . . 
        . . . . . f f . f f . . . . . . 
        . . . . . f f . f f . . . . . . 
        . . . . . f f . f f . . . . . . 
        `,img`
        . . . . . f f f f f . . . . . . 
        . . . . . f e e e f . . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . . 1 1 2 1 1 . . . . . . 
        . . . . f 1 1 2 1 1 f . . . . . 
        . . . f . 1 1 1 1 1 . f . . . . 
        . . . f . f f 1 f f . f . . . . 
        . . . f . f f f f f . f . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f f . f f . . . . . . 
        . . . . . f f . f f . . . . . . 
        . . . . . f f . f f . . . . . . 
        . . . . . f f . f f . . . . . . 
        . . . . . f f . f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f e e e f . . . . . . 
        . . . . . e f e f e . . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . f 1 1 2 1 1 f . . . . . 
        . . . f . 1 1 1 1 1 . f . . . . 
        . . . f . f f 1 f f . f . . . . 
        . . . f . f f f f f . f . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f f . f f . . . . . . 
        . . . . . f f . f f . . . . . . 
        . . . . . f f . f f . . . . . . 
        . . . . . f f . f f . . . . . . 
        . . . . . f f . f f . . . . . . 
        `,img`
        . . . . . f f f f f . . . . . . 
        . . . . . f e e e f . . . . . . 
        . . . . . e f e f e . . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . . 1 1 2 1 1 . . . . . . 
        . . . . f 1 1 2 1 1 f . . . . . 
        . . . f . 1 1 1 1 1 . f . . . . 
        . . . f . f f 1 f f . f . . . . 
        . . . f f f f f f f f f . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f f . f f . . . . . . 
        . . . . . f f . f f . . . . . . 
        . . . . . f f . f f . . . . . . 
        . . . . . f f . f f . . . . . . 
        . . . . . f f . f f . . . . . . 
        `],
    500,
    characterAnimations.rule(Predicate.NotMoving)
    )
}
function Animation2 () {
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . f f f f f f . . . . . 
        . . . . . f e e e f f . . . . . 
        . . . . . . f e f e e . . . . . 
        . . . . . . e e e e e . . . . . 
        . . . . . . e e e e . . . . . . 
        . . . . . . 1 2 1 1 . . . . . . 
        . e f f f 2 2 1 1 1 f . . . . . 
        . . . . f f 1 1 1 1 . f . . . . 
        . . . . . f f 1 f f . f . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . f f f f . . . . . . 
        `],
    500,
    characterAnimations.rule(Predicate.MovingLeft)
    )
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    controller.moveSprite(otherSprite)
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . f f f f f . . . . . . 
    . . . . . f e e e f . . . . . . 
    . . . . . e f e f e . . . . . . 
    . . . . . e e e e e . . . . . . 
    . . . . . e e e e e . . . . . . 
    . . . . . 1 1 2 1 1 . . . . . . 
    . . . . f 1 1 2 1 1 f . . . . . 
    . . . f . 1 1 1 1 1 . f . . . . 
    . . . f . f f 1 f f . f . . . . 
    . . . f f f f f f f f f . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f f . f f . . . . . . 
    . . . . . f f . f f . . . . . . 
    . . . . . f f . f f . . . . . . 
    . . . . . f f . f f . . . . . . 
    . . . . . f f . f f . . . . . . 
    `, SpriteKind.Player)
Animation()
let Key = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 5 5 5 5 5 5 5 . . . . 
    . . . . . 5 . . 5 . . 5 . . . . 
    . . . . . 5 5 5 5 5 5 5 . . . . 
    . . . . . . . . 5 . . . . . . . 
    . . . . . . . . 5 . . . . . . . 
    . . . . . . . . 5 . . . . . . . 
    . . . . . . . . 5 . . . . . . . 
    . . . . . . . . 5 . . . . . . . 
    . . . . . . . 5 5 . . . . . . . 
    . . . . . . . . 5 . . . . . . . 
    . . . . . . 5 5 5 . . . . . . . 
    . . . . . . . . 5 . . . . . . . 
    . . . . . 5 5 5 5 . . . . . . . 
    `, SpriteKind.Food)
controller.moveSprite(mySprite, 100, 100)
scene.setBackgroundColor(2)
tiles.setCurrentTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleInsignia)
tiles.placeOnRandomTile(Key, assets.tile`myTile0`)
scene.cameraFollowSprite(mySprite)
