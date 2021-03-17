namespace SpriteKind {
    export const SuperFood = SpriteKind.create()
}
function makeGreenWalls () {
    scene.setTile(8, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
        . . 7 . . . . . . . . . . 7 . . 
        . . 7 . . . . . . . . . . 7 . . 
        . . 7 . . . . . . . . . . 7 . . 
        . . 7 . . . . . . . . . . 7 . . 
        . . 7 . . . . . . . . . . 7 . . 
        . . 7 . . . . . . . . . . 7 . . 
        . . 7 . . . . . . . . . . 7 . . 
        . . 7 . . . . . . . . . . 7 . . 
        . . 7 . . . . . . . . . . 7 . . 
        . . 7 . . . . . . . . . . 7 . . 
        . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, true)
    scene.setTile(9, img`
        . . 7 . . . . . . . . . . 7 . . 
        . . 7 . . . . . . . . . . 7 . . 
        . . 7 . . . . . . . . . . 7 . . 
        . . 7 . . . . . . . . . . 7 . . 
        . . 7 . . . . . . . . . . 7 . . 
        . . 7 . . . . . . . . . . 7 . . 
        . . 7 . . . . . . . . . . 7 . . 
        . . 7 . . . . . . . . . . 7 . . 
        . . 7 . . . . . . . . . . 7 . . 
        . . 7 . . . . . . . . . . 7 . . 
        . . 7 . . . . . . . . . . 7 . . 
        . . 7 . . . . . . . . . . 7 . . 
        . . 7 . . . . . . . . . . 7 . . 
        . . 7 . . . . . . . . . . 7 . . 
        . . 7 . . . . . . . . . . 7 . . 
        . . 7 . . . . . . . . . . 7 . . 
        `, true)
    scene.setTile(6, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, true)
    scene.setTile(7, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . 
        . . . . . . . . . . . . . 7 . . 
        . . . . . . . . . . . . . 7 . . 
        . . . . . . . . . . . . . 7 . . 
        . . . . . . . . . . . . . 7 . . 
        . . . . . . . . . . . . . 7 . . 
        . . . . . . . . . . . . . 7 . . 
        . . . . . . . . . . . . . 7 . . 
        . . . . . . . . . . . . . 7 . . 
        . . . . . . . . . . . . . 7 . . 
        . . . . . . . . . . . . . 7 . . 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, true)
    scene.setTile(10, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        . . 7 . . . . . . . . . . . . . 
        . . 7 . . . . . . . . . . . . . 
        . . 7 . . . . . . . . . . . . . 
        . . 7 . . . . . . . . . . . . . 
        . . 7 . . . . . . . . . . . . . 
        . . 7 . . . . . . . . . . . . . 
        . . 7 . . . . . . . . . . . . . 
        . . 7 . . . . . . . . . . . . . 
        . . 7 . . . . . . . . . . . . . 
        . . 7 . . . . . . . . . . . . . 
        . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, true)
    scene.setTile(11, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        . . 7 . . . . . . . . . . . . . 
        . . 7 . . . . . . . . . . . . . 
        . . 7 . . . . . . . . . . . . . 
        . . 7 . . . . . . . . . . . . . 
        . . 7 . . . . . . . . . . . . . 
        . . 7 . . . . . . . . . . . . . 
        . . 7 . . . . . . . . . . . . . 
        . . 7 . . . . . . . . . . . . . 
        . . 7 . . . . . . . . . . . . . 
        . . 7 . . . . . . . . . . . . . 
        . . 7 . . . . . . . . . . 7 7 7 
        . . 7 . . . . . . . . . . 7 . . 
        . . 7 . . . . . . . . . . 7 . . 
        `, true)
    scene.setTile(12, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . 
        . . . . . . . . . . . . . 7 . . 
        . . . . . . . . . . . . . 7 . . 
        . . . . . . . . . . . . . 7 . . 
        . . . . . . . . . . . . . 7 . . 
        . . . . . . . . . . . . . 7 . . 
        . . . . . . . . . . . . . 7 . . 
        . . . . . . . . . . . . . 7 . . 
        . . . . . . . . . . . . . 7 . . 
        . . . . . . . . . . . . . 7 . . 
        . . . . . . . . . . . . . 7 . . 
        7 7 7 . . . . . . . . . . 7 . . 
        . . 7 . . . . . . . . . . 7 . . 
        . . 7 . . . . . . . . . . 7 . . 
        `, true)
    scene.setTile(13, img`
        . . 7 . . . . . . . . . . 7 . . 
        . . 7 . . . . . . . . . . 7 . . 
        . . 7 . . . . . . . . . . 7 7 7 
        . . 7 . . . . . . . . . . . . . 
        . . 7 . . . . . . . . . . . . . 
        . . 7 . . . . . . . . . . . . . 
        . . 7 . . . . . . . . . . . . . 
        . . 7 . . . . . . . . . . . . . 
        . . 7 . . . . . . . . . . . . . 
        . . 7 . . . . . . . . . . . . . 
        . . 7 . . . . . . . . . . . . . 
        . . 7 . . . . . . . . . . . . . 
        . . 7 . . . . . . . . . . . . . 
        . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, true)
    scene.setTile(14, img`
        . . 7 . . . . . . . . . . 7 . . 
        . . 7 . . . . . . . . . . 7 . . 
        7 7 7 . . . . . . . . . . 7 . . 
        . . . . . . . . . . . . . 7 . . 
        . . . . . . . . . . . . . 7 . . 
        . . . . . . . . . . . . . 7 . . 
        . . . . . . . . . . . . . 7 . . 
        . . . . . . . . . . . . . 7 . . 
        . . . . . . . . . . . . . 7 . . 
        . . . . . . . . . . . . . 7 . . 
        . . . . . . . . . . . . . 7 . . 
        . . . . . . . . . . . . . 7 . . 
        . . . . . . . . . . . . . 7 . . 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, true)
    scene.setTile(2, img`
        . . 7 . . . . . . . . . . 7 . . 
        . . 7 . . . . . . . . . . 7 . . 
        . . 7 . . . . . . . . . . 7 . . 
        . . 7 . . . . . . . . . . 7 . . 
        . . 7 . . . . . . . . . . 7 . . 
        . . 7 . . . . . . . . . . 7 . . 
        . . 7 . . . . . . . . . . 7 . . 
        . . 7 . . . . . . . . . . 7 . . 
        . . 7 . . . . . . . . . . 7 . . 
        . . 7 . . . . . . . . . . 7 . . 
        . . 7 . . . . . . . . . . 7 . . 
        . . 7 . . . . . . . . . . 7 . . 
        . . 7 . . . . . . . . . . 7 . . 
        . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, true)
    scene.setTile(3, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
        . . 7 . . . . . . . . . . 7 . . 
        . . 7 . . . . . . . . . . 7 . . 
        . . 7 . . . . . . . . . . 7 . . 
        . . 7 . . . . . . . . . . 7 . . 
        . . 7 . . . . . . . . . . 7 . . 
        . . 7 . . . . . . . . . . 7 . . 
        . . 7 . . . . . . . . . . 7 . . 
        . . 7 . . . . . . . . . . 7 . . 
        . . 7 . . . . . . . . . . 7 . . 
        . . 7 . . . . . . . . . . 7 . . 
        . . 7 . . . . . . . . . . 7 . . 
        . . 7 . . . . . . . . . . 7 . . 
        . . 7 . . . . . . . . . . 7 . . 
        `, true)
}
function enemyKilledMe (sprite: Sprite) {
    sprite.destroy(effects.fire, 100)
    music.powerDown.play()
    info.changeLifeBy(-1)
    cleanup(true)
    buildLevel(level)
    initMainCharacter()
    initEnemies()
}
function animateFlashState () {
    if (enemyCount >= 1 && pinkyScared == 1) {
        animation.runImageAnimation(
        Pinky,
        [img`
            . . . . . . . . . . . . . . . . 
            . . 8 . . . . . . . . . . 8 . . 
            . . 8 . . . . . . . . . . 8 . . 
            . 8 . . . . . . . . . . . . 8 . 
            . 8 . . . . 8 8 8 8 . . . . 8 . 
            . 8 . . . 3 3 8 8 3 3 . . . 8 . 
            8 8 . 8 8 3 1 8 8 3 1 8 8 . 8 8 
            8 8 8 8 8 1 1 8 8 1 1 8 8 8 8 8 
            8 8 . 8 8 8 8 8 8 8 8 8 8 . 8 8 
            . 8 . . . 8 8 8 8 8 8 . . . 8 . 
            . 8 . . . . 8 8 8 8 . . . . 8 . 
            . 8 . . . . . . . . . . . . 8 . 
            . . 8 . . . . . . . . . . 8 . . 
            . . 8 . . . . . . . . . . 8 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . 1 . . . . . . . . . . 1 . . 
            . . 1 . . . . . . . . . . 1 . . 
            . 1 . . . . . . . . . . . . 1 . 
            . 1 . . . . 1 1 1 1 . . . . 1 . 
            . 1 . . . 2 2 1 1 2 2 . . . 1 . 
            1 1 . 1 1 2 d 1 1 2 d 1 1 . 1 1 
            1 1 1 1 1 d d 1 1 d d 1 1 1 1 1 
            1 1 . 1 1 1 1 1 1 1 1 1 1 . 1 1 
            . 1 . . . 1 1 1 1 1 1 . . . 1 . 
            . 1 . . . . 1 1 1 1 . . . . 1 . 
            . 1 . . . . . . . . . . . . 1 . 
            . . 1 . . . . . . . . . . 1 . . 
            . . 1 . . . . . . . . . . 1 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        200,
        true
        )
    }
    if (enemyCount >= 2 && inkyScared == 1) {
        animation.runImageAnimation(
        Inky,
        [img`
            . . . . . . . . . . . . . . . . 
            . . 8 . . . . . . . . . . 8 . . 
            . . 8 . . . . . . . . . . 8 . . 
            . 8 . . . . . . . . . . . . 8 . 
            . 8 . . . . 8 8 8 8 . . . . 8 . 
            . 8 . . . 3 3 8 8 3 3 . . . 8 . 
            8 8 . 8 8 3 1 8 8 3 1 8 8 . 8 8 
            8 8 8 8 8 1 1 8 8 1 1 8 8 8 8 8 
            8 8 . 8 8 8 8 8 8 8 8 8 8 . 8 8 
            . 8 . . . 8 8 8 8 8 8 . . . 8 . 
            . 8 . . . . 8 8 8 8 . . . . 8 . 
            . 8 . . . . . . . . . . . . 8 . 
            . . 8 . . . . . . . . . . 8 . . 
            . . 8 . . . . . . . . . . 8 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . 1 . . . . . . . . . . 1 . . 
            . . 1 . . . . . . . . . . 1 . . 
            . 1 . . . . . . . . . . . . 1 . 
            . 1 . . . . 1 1 1 1 . . . . 1 . 
            . 1 . . . 2 2 1 1 2 2 . . . 1 . 
            1 1 . 1 1 2 d 1 1 2 d 1 1 . 1 1 
            1 1 1 1 1 d d 1 1 d d 1 1 1 1 1 
            1 1 . 1 1 1 1 1 1 1 1 1 1 . 1 1 
            . 1 . . . 1 1 1 1 1 1 . . . 1 . 
            . 1 . . . . 1 1 1 1 . . . . 1 . 
            . 1 . . . . . . . . . . . . 1 . 
            . . 1 . . . . . . . . . . 1 . . 
            . . 1 . . . . . . . . . . 1 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        200,
        true
        )
    }
    if (enemyCount >= 3 && blinkyScared == 1) {
        animation.runImageAnimation(
        Blinky,
        [img`
            . . . . . . . . . . . . . . . . 
            . . 8 . . . . . . . . . . 8 . . 
            . . 8 . . . . . . . . . . 8 . . 
            . 8 . . . . . . . . . . . . 8 . 
            . 8 . . . . 8 8 8 8 . . . . 8 . 
            . 8 . . . 3 3 8 8 3 3 . . . 8 . 
            8 8 . 8 8 3 1 8 8 3 1 8 8 . 8 8 
            8 8 8 8 8 1 1 8 8 1 1 8 8 8 8 8 
            8 8 . 8 8 8 8 8 8 8 8 8 8 . 8 8 
            . 8 . . . 8 8 8 8 8 8 . . . 8 . 
            . 8 . . . . 8 8 8 8 . . . . 8 . 
            . 8 . . . . . . . . . . . . 8 . 
            . . 8 . . . . . . . . . . 8 . . 
            . . 8 . . . . . . . . . . 8 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . 1 . . . . . . . . . . 1 . . 
            . . 1 . . . . . . . . . . 1 . . 
            . 1 . . . . . . . . . . . . 1 . 
            . 1 . . . . 1 1 1 1 . . . . 1 . 
            . 1 . . . 2 2 1 1 2 2 . . . 1 . 
            1 1 . 1 1 2 d 1 1 2 d 1 1 . 1 1 
            1 1 1 1 1 d d 1 1 d d 1 1 1 1 1 
            1 1 . 1 1 1 1 1 1 1 1 1 1 . 1 1 
            . 1 . . . 1 1 1 1 1 1 . . . 1 . 
            . 1 . . . . 1 1 1 1 . . . . 1 . 
            . 1 . . . . . . . . . . . . 1 . 
            . . 1 . . . . . . . . . . 1 . . 
            . . 1 . . . . . . . . . . 1 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        200,
        true
        )
    }
    if (enemyCount >= 4 && clydeScared == 1) {
        animation.runImageAnimation(
        Clyde,
        [img`
            . . . . . . . . . . . . . . . . 
            . . 8 . . . . . . . . . . 8 . . 
            . . 8 . . . . . . . . . . 8 . . 
            . 8 . . . . . . . . . . . . 8 . 
            . 8 . . . . 8 8 8 8 . . . . 8 . 
            . 8 . . . 3 3 8 8 3 3 . . . 8 . 
            8 8 . 8 8 3 1 8 8 3 1 8 8 . 8 8 
            8 8 8 8 8 1 1 8 8 1 1 8 8 8 8 8 
            8 8 . 8 8 8 8 8 8 8 8 8 8 . 8 8 
            . 8 . . . 8 8 8 8 8 8 . . . 8 . 
            . 8 . . . . 8 8 8 8 . . . . 8 . 
            . 8 . . . . . . . . . . . . 8 . 
            . . 8 . . . . . . . . . . 8 . . 
            . . 8 . . . . . . . . . . 8 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . 1 . . . . . . . . . . 1 . . 
            . . 1 . . . . . . . . . . 1 . . 
            . 1 . . . . . . . . . . . . 1 . 
            . 1 . . . . 1 1 1 1 . . . . 1 . 
            . 1 . . . 2 2 1 1 2 2 . . . 1 . 
            1 1 . 1 1 2 d 1 1 2 d 1 1 . 1 1 
            1 1 1 1 1 d d 1 1 d d 1 1 1 1 1 
            1 1 . 1 1 1 1 1 1 1 1 1 1 . 1 1 
            . 1 . . . 1 1 1 1 1 1 . . . 1 . 
            . 1 . . . . 1 1 1 1 . . . . 1 . 
            . 1 . . . . . . . . . . . . 1 . 
            . . 1 . . . . . . . . . . 1 . . 
            . . 1 . . . . . . . . . . 1 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        200,
        true
        )
    }
}
function initEnemies () {
    if (enemyCount >= 1) {
        Pinky = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . 3 . . . . . . . . . . 3 . . 
            . . 3 . . . . . . . . . . 3 . . 
            . 3 . . . . . . . . . . . . 3 . 
            . 3 . . . . 3 3 3 3 . . . . 3 . 
            . 3 . . . 8 8 3 3 8 8 . . . 3 . 
            3 3 . 3 3 8 1 3 3 8 1 3 3 . 3 3 
            3 3 3 3 3 1 1 3 3 1 1 3 3 3 3 3 
            3 3 . 3 3 3 3 3 3 3 3 3 3 . 3 3 
            . 3 . . . 3 3 3 3 3 3 . . . 3 . 
            . 3 . . . . 3 3 3 3 . . . . 3 . 
            . 3 . . . . . . . . . . . . 3 . 
            . . 3 . . . . . . . . . . 3 . . 
            . . 3 . . . . . . . . . . 3 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        scene.placeOnRandomTile(Pinky, 4)
        doWander(Pinky)
    }
    if (enemyCount >= 2) {
        Inky = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . 9 . . . . . . . . . . 9 . . 
            . . 9 . . . . . . . . . . 9 . . 
            . 9 . . . . . . . . . . . . 9 . 
            . 9 . . . . 9 9 9 9 . . . . 9 . 
            . 9 . . . 8 8 9 9 8 8 . . . 9 . 
            9 9 . 9 9 8 1 9 9 8 1 9 9 . 9 9 
            9 9 9 9 9 1 1 9 9 1 1 9 9 9 9 9 
            9 9 . 9 9 9 9 9 9 9 9 9 9 . 9 9 
            . 9 . . . 9 9 9 9 9 9 . . . 9 . 
            . 9 . . . . 9 9 9 9 . . . . 9 . 
            . 9 . . . . . . . . . . . . 9 . 
            . . 9 . . . . . . . . . . 9 . . 
            . . 9 . . . . . . . . . . 9 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        scene.placeOnRandomTile(Inky, 4)
        inkyStartTime = game.runtime()
    }
    if (enemyCount >= 3) {
        Blinky = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . 2 . . . . . . . . . . 2 . . 
            . . 2 . . . . . . . . . . 2 . . 
            . 2 . . . . . . . . . . . . 2 . 
            . 2 . . . . 2 2 2 2 . . . . 2 . 
            . 2 . . . 8 8 2 2 8 8 . . . 2 . 
            2 2 . 2 2 8 1 2 2 8 1 2 2 . 2 2 
            2 2 2 2 2 1 1 2 2 1 1 2 2 2 2 2 
            2 2 . 2 2 2 2 2 2 2 2 2 2 . 2 2 
            . 2 . . . 2 2 2 2 2 2 . . . 2 . 
            . 2 . . . . 2 2 2 2 . . . . 2 . 
            . 2 . . . . . . . . . . . . 2 . 
            . . 2 . . . . . . . . . . 2 . . 
            . . 2 . . . . . . . . . . 2 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        scene.placeOnRandomTile(Blinky, 4)
        blinkyStartTime = game.runtime()
    }
    if (enemyCount >= 4) {
        Clyde = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . 4 . . . . . . . . . . 4 . . 
            . . 4 . . . . . . . . . . 4 . . 
            . 4 . . . . . . . . . . . . 4 . 
            . 4 . . . . 4 4 4 4 . . . . 4 . 
            . 4 . . . 8 8 4 4 8 8 . . . 4 . 
            4 4 . 4 4 8 1 4 4 8 1 4 4 . 4 4 
            4 4 4 4 4 1 1 4 4 1 1 4 4 4 4 4 
            4 4 . 4 4 4 4 4 4 4 4 4 4 . 4 4 
            . 4 . . . 4 4 4 4 4 4 . . . 4 . 
            . 4 . . . . 4 4 4 4 . . . . 4 . 
            . 4 . . . . . . . . . . . . 4 . 
            . . 4 . . . . . . . . . . 4 . . 
            . . 4 . . . . . . . . . . 4 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        scene.placeOnRandomTile(Clyde, 4)
        clydeStartTime = game.runtime()
    }
}
function initMainCharacter () {
    pacman = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . 5 . . 5 . . . . . . . 
        . . . . . 5 . . 5 . . . . . . . 
        . . . . 5 5 . . 5 5 . . . . . . 
        . . . 5 5 5 . . 5 5 5 . 5 . . . 
        . . . 5 5 5 . . 5 5 5 . 5 . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
        . . . 5 5 5 5 5 5 5 5 5 . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    scene.placeOnRandomTile(pacman, 1)
    scene.cameraFollowSprite(pacman)
    controller.moveSprite(pacman, pacmanSpeed, pacmanSpeed)
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.setVelocity(0 - otherSprite.vx, 0 - otherSprite.vy)
})
function cleanup (justEnemy: boolean) {
    if (!(justEnemy)) {
        foodSpriteList = sprites.allOfKind(SpriteKind.Food)
        for (let value of foodSpriteList) {
            value.destroy()
        }
    }
    if (enemyCount >= 1) {
        Pinky.destroy()
    }
    if (enemyCount >= 2) {
        Inky.destroy()
    }
    if (enemyCount >= 3) {
        Blinky.destroy()
    }
    if (enemyCount >= 4) {
        Clyde.destroy()
    }
}
function doWander (mySprite: Sprite) {
    mySprite.follow(pacman, ghostSpeed, 3)
}
function resetFrightenedToNormal () {
    ghostSpeed = 200
    if (enemyCount >= 1) {
        animation.stopAnimation(animation.AnimationTypes.All, Pinky)
        Pinky.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . 3 . . . . . . . . . . 3 . . 
            . . 3 . . . . . . . . . . 3 . . 
            . 3 . . . . . . . . . . . . 3 . 
            . 3 . . . . 3 3 3 3 . . . . 3 . 
            . 3 . . . 8 8 3 3 8 8 . . . 3 . 
            3 3 . 3 3 8 1 3 3 8 1 3 3 . 3 3 
            3 3 3 3 3 1 1 3 3 1 1 3 3 3 3 3 
            3 3 . 3 3 3 3 3 3 3 3 3 3 . 3 3 
            . 3 . . . 3 3 3 3 3 3 . . . 3 . 
            . 3 . . . . 3 3 3 3 . . . . 3 . 
            . 3 . . . . . . . . . . . . 3 . 
            . . 3 . . . . . . . . . . 3 . . 
            . . 3 . . . . . . . . . . 3 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        doWander(Pinky)
    }
    if (enemyCount >= 2) {
        animation.stopAnimation(animation.AnimationTypes.All, Inky)
        Inky.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . 9 . . . . . . . . . . 9 . . 
            . . 9 . . . . . . . . . . 9 . . 
            . 9 . . . . . . . . . . . . 9 . 
            . 9 . . . . 9 9 9 9 . . . . 9 . 
            . 9 . . . 8 8 9 9 8 8 . . . 9 . 
            9 9 . 9 9 8 1 9 9 8 1 9 9 . 9 9 
            9 9 9 9 9 1 1 9 9 1 1 9 9 9 9 9 
            9 9 . 9 9 9 9 9 9 9 9 9 9 . 9 9 
            . 9 . . . 9 9 9 9 9 9 . . . 9 . 
            . 9 . . . . 9 9 9 9 . . . . 9 . 
            . 9 . . . . . . . . . . . . 9 . 
            . . 9 . . . . . . . . . . 9 . . 
            . . 9 . . . . . . . . . . 9 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        doWander(Inky)
    }
    if (enemyCount >= 3) {
        animation.stopAnimation(animation.AnimationTypes.All, Blinky)
        Blinky.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . 2 . . . . . . . . . . 2 . . 
            . . 2 . . . . . . . . . . 2 . . 
            . 2 . . . . . . . . . . . . 2 . 
            . 2 . . . . 2 2 2 2 . . . . 2 . 
            . 2 . . . 8 8 2 2 8 8 . . . 2 . 
            2 2 . 2 2 8 1 2 2 8 1 2 2 . 2 2 
            2 2 2 2 2 1 1 2 2 1 1 2 2 2 2 2 
            2 2 . 2 2 2 2 2 2 2 2 2 2 . 2 2 
            . 2 . . . 2 2 2 2 2 2 . . . 2 . 
            . 2 . . . . 2 2 2 2 . . . . 2 . 
            . 2 . . . . . . . . . . . . 2 . 
            . . 2 . . . . . . . . . . 2 . . 
            . . 2 . . . . . . . . . . 2 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        doWander(Blinky)
    }
    if (enemyCount >= 4) {
        animation.stopAnimation(animation.AnimationTypes.All, Clyde)
        Clyde.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . 4 . . . . . . . . . . 4 . . 
            . . 4 . . . . . . . . . . 4 . . 
            . 4 . . . . . . . . . . . . 4 . 
            . 4 . . . . 4 4 4 4 . . . . 4 . 
            . 4 . . . 8 8 4 4 8 8 . . . 4 . 
            4 4 . 4 4 8 1 4 4 8 1 4 4 . 4 4 
            4 4 4 4 4 1 1 4 4 1 1 4 4 4 4 4 
            4 4 . 4 4 4 4 4 4 4 4 4 4 . 4 4 
            . 4 . . . 4 4 4 4 4 4 . . . 4 . 
            . 4 . . . . 4 4 4 4 . . . . 4 . 
            . 4 . . . . . . . . . . . . 4 . 
            . . 4 . . . . . . . . . . 4 . . 
            . . 4 . . . . . . . . . . 4 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        doWander(Clyde)
    }
    pinkyScared = 0
    inkyScared = 0
    blinkyScared = 0
    clydeScared = 0
}
function makeBlueWalls () {
    scene.setTile(8, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . 8 . . . . . . . . . . 8 . . 
        . . 8 . . . . . . . . . . 8 . . 
        . . 8 . . . . . . . . . . 8 . . 
        . . 8 . . . . . . . . . . 8 . . 
        . . 8 . . . . . . . . . . 8 . . 
        . . 8 . . . . . . . . . . 8 . . 
        . . 8 . . . . . . . . . . 8 . . 
        . . 8 . . . . . . . . . . 8 . . 
        . . 8 . . . . . . . . . . 8 . . 
        . . 8 . . . . . . . . . . 8 . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, true)
    scene.setTile(9, img`
        . . 8 . . . . . . . . . . 8 . . 
        . . 8 . . . . . . . . . . 8 . . 
        . . 8 . . . . . . . . . . 8 . . 
        . . 8 . . . . . . . . . . 8 . . 
        . . 8 . . . . . . . . . . 8 . . 
        . . 8 . . . . . . . . . . 8 . . 
        . . 8 . . . . . . . . . . 8 . . 
        . . 8 . . . . . . . . . . 8 . . 
        . . 8 . . . . . . . . . . 8 . . 
        . . 8 . . . . . . . . . . 8 . . 
        . . 8 . . . . . . . . . . 8 . . 
        . . 8 . . . . . . . . . . 8 . . 
        . . 8 . . . . . . . . . . 8 . . 
        . . 8 . . . . . . . . . . 8 . . 
        . . 8 . . . . . . . . . . 8 . . 
        . . 8 . . . . . . . . . . 8 . . 
        `, true)
    scene.setTile(6, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, true)
    scene.setTile(7, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . . . . . . . . . . . . 8 . . 
        . . . . . . . . . . . . . 8 . . 
        . . . . . . . . . . . . . 8 . . 
        . . . . . . . . . . . . . 8 . . 
        . . . . . . . . . . . . . 8 . . 
        . . . . . . . . . . . . . 8 . . 
        . . . . . . . . . . . . . 8 . . 
        . . . . . . . . . . . . . 8 . . 
        . . . . . . . . . . . . . 8 . . 
        . . . . . . . . . . . . . 8 . . 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, true)
    scene.setTile(10, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        . . 8 . . . . . . . . . . . . . 
        . . 8 . . . . . . . . . . . . . 
        . . 8 . . . . . . . . . . . . . 
        . . 8 . . . . . . . . . . . . . 
        . . 8 . . . . . . . . . . . . . 
        . . 8 . . . . . . . . . . . . . 
        . . 8 . . . . . . . . . . . . . 
        . . 8 . . . . . . . . . . . . . 
        . . 8 . . . . . . . . . . . . . 
        . . 8 . . . . . . . . . . . . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, true)
    scene.setTile(11, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        . . 8 . . . . . . . . . . . . . 
        . . 8 . . . . . . . . . . . . . 
        . . 8 . . . . . . . . . . . . . 
        . . 8 . . . . . . . . . . . . . 
        . . 8 . . . . . . . . . . . . . 
        . . 8 . . . . . . . . . . . . . 
        . . 8 . . . . . . . . . . . . . 
        . . 8 . . . . . . . . . . . . . 
        . . 8 . . . . . . . . . . . . . 
        . . 8 . . . . . . . . . . . . . 
        . . 8 . . . . . . . . . . 8 8 8 
        . . 8 . . . . . . . . . . 8 . . 
        . . 8 . . . . . . . . . . 8 . . 
        `, true)
    scene.setTile(12, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . . . . . . . . . . . . 8 . . 
        . . . . . . . . . . . . . 8 . . 
        . . . . . . . . . . . . . 8 . . 
        . . . . . . . . . . . . . 8 . . 
        . . . . . . . . . . . . . 8 . . 
        . . . . . . . . . . . . . 8 . . 
        . . . . . . . . . . . . . 8 . . 
        . . . . . . . . . . . . . 8 . . 
        . . . . . . . . . . . . . 8 . . 
        . . . . . . . . . . . . . 8 . . 
        8 8 8 . . . . . . . . . . 8 . . 
        . . 8 . . . . . . . . . . 8 . . 
        . . 8 . . . . . . . . . . 8 . . 
        `, true)
    scene.setTile(13, img`
        . . 8 . . . . . . . . . . 8 . . 
        . . 8 . . . . . . . . . . 8 . . 
        . . 8 . . . . . . . . . . 8 8 8 
        . . 8 . . . . . . . . . . . . . 
        . . 8 . . . . . . . . . . . . . 
        . . 8 . . . . . . . . . . . . . 
        . . 8 . . . . . . . . . . . . . 
        . . 8 . . . . . . . . . . . . . 
        . . 8 . . . . . . . . . . . . . 
        . . 8 . . . . . . . . . . . . . 
        . . 8 . . . . . . . . . . . . . 
        . . 8 . . . . . . . . . . . . . 
        . . 8 . . . . . . . . . . . . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, true)
    scene.setTile(14, img`
        . . 8 . . . . . . . . . . 8 . . 
        . . 8 . . . . . . . . . . 8 . . 
        8 8 8 . . . . . . . . . . 8 . . 
        . . . . . . . . . . . . . 8 . . 
        . . . . . . . . . . . . . 8 . . 
        . . . . . . . . . . . . . 8 . . 
        . . . . . . . . . . . . . 8 . . 
        . . . . . . . . . . . . . 8 . . 
        . . . . . . . . . . . . . 8 . . 
        . . . . . . . . . . . . . 8 . . 
        . . . . . . . . . . . . . 8 . . 
        . . . . . . . . . . . . . 8 . . 
        . . . . . . . . . . . . . 8 . . 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, true)
    scene.setTile(2, img`
        . . 8 . . . . . . . . . . 8 . . 
        . . 8 . . . . . . . . . . 8 . . 
        . . 8 . . . . . . . . . . 8 . . 
        . . 8 . . . . . . . . . . 8 . . 
        . . 8 . . . . . . . . . . 8 . . 
        . . 8 . . . . . . . . . . 8 . . 
        . . 8 . . . . . . . . . . 8 . . 
        . . 8 . . . . . . . . . . 8 . . 
        . . 8 . . . . . . . . . . 8 . . 
        . . 8 . . . . . . . . . . 8 . . 
        . . 8 . . . . . . . . . . 8 . . 
        . . 8 . . . . . . . . . . 8 . . 
        . . 8 . . . . . . . . . . 8 . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, true)
    scene.setTile(3, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . 8 . . . . . . . . . . 8 . . 
        . . 8 . . . . . . . . . . 8 . . 
        . . 8 . . . . . . . . . . 8 . . 
        . . 8 . . . . . . . . . . 8 . . 
        . . 8 . . . . . . . . . . 8 . . 
        . . 8 . . . . . . . . . . 8 . . 
        . . 8 . . . . . . . . . . 8 . . 
        . . 8 . . . . . . . . . . 8 . . 
        . . 8 . . . . . . . . . . 8 . . 
        . . 8 . . . . . . . . . . 8 . . 
        . . 8 . . . . . . . . . . 8 . . 
        . . 8 . . . . . . . . . . 8 . . 
        . . 8 . . . . . . . . . . 8 . . 
        `, true)
}
function buildLevel (num: number) {
    backgroundImageList = [img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `, img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `, img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `]
    tileMapList = [img`
        b 6 6 6 6 6 6 6 6 6 6 6 6 6 6 c 
        9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 
        9 1 b 7 1 1 8 5 1 8 1 1 a c 1 9 
        9 1 2 1 1 1 1 1 1 1 1 1 1 2 1 9 
        9 1 1 1 1 1 a 6 6 7 1 1 1 1 1 9 
        9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 
        9 1 3 1 8 1 3 4 4 3 1 8 1 3 1 9 
        9 1 2 1 1 1 2 4 4 2 1 1 1 2 1 9 
        9 1 1 1 8 1 1 1 1 1 1 8 1 1 1 9 
        9 1 5 1 1 1 a 6 6 7 1 1 1 5 1 9 
        9 1 1 1 3 1 1 1 1 1 1 3 1 1 1 9 
        9 1 3 1 2 1 a 6 6 7 1 2 1 3 1 9 
        9 1 9 1 1 1 1 1 1 1 1 1 1 9 1 9 
        9 1 d 7 1 1 8 1 5 8 1 1 a e 1 9 
        9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 
        d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 e 
        `, img`
        b 6 6 6 6 6 6 6 6 6 6 6 6 6 6 c 
        9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 
        9 1 b 7 1 1 8 5 1 8 1 1 a c 1 9 
        9 1 2 1 1 1 1 1 1 1 1 1 1 2 1 9 
        9 1 1 1 1 1 a 6 6 7 1 1 1 1 1 9 
        9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 
        9 1 3 1 8 1 3 4 4 3 1 8 1 3 1 9 
        9 1 2 1 1 1 2 4 4 2 1 1 1 2 1 9 
        9 1 1 1 8 1 1 1 1 1 1 8 1 1 1 9 
        9 1 5 1 1 1 a 6 6 7 1 1 1 5 1 9 
        9 1 1 1 3 1 1 1 1 1 1 3 1 1 1 9 
        9 1 3 1 2 1 a 6 6 7 1 2 1 3 1 9 
        9 1 9 1 1 1 1 1 1 1 1 1 1 9 1 9 
        9 1 d 7 1 1 8 1 5 8 1 1 a e 1 9 
        9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 
        d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 e 
        `, img`
        b 6 6 6 6 6 6 6 6 6 6 6 6 6 6 c 
        9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 
        9 1 b 7 1 1 8 5 1 8 1 1 a c 1 9 
        9 1 2 1 1 1 1 1 1 1 1 1 1 2 1 9 
        9 1 1 1 1 1 a 6 6 7 1 1 1 1 1 9 
        9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 
        9 1 3 1 8 1 3 4 4 3 1 8 1 3 1 9 
        9 1 2 1 1 1 2 4 4 2 1 1 1 2 1 9 
        9 1 1 1 8 1 1 1 1 1 1 8 1 1 1 9 
        9 1 5 1 1 1 a 6 6 7 1 1 1 5 1 9 
        9 1 1 1 3 1 1 1 1 1 1 3 1 1 1 9 
        9 1 3 1 2 1 a 6 6 7 1 2 1 3 1 9 
        9 1 9 1 1 1 1 1 1 1 1 1 1 9 1 9 
        9 1 d 7 1 1 8 1 5 8 1 1 a e 1 9 
        9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 
        d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 e 
        `]
    if (num < tileMapList.length) {
        scene.setBackgroundImage(backgroundImageList[num])
        scene.setTileMap(tileMapList[num], TileScale.Sixteen)
        scene.setTile(1, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, false)
        scene.setTile(4, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, false)
        scene.setTile(5, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, false)
        if (num == 0) {
            makeBlueWalls()
        } else if (num == 1) {
            makeGreenWalls()
        } else {
            makeRedWalls()
        }
    } else {
        game.over(true, effects.starField)
    }
}
function initFood () {
    foodTiles = scene.getTilesByType(1)
    for (let value2 of foodTiles) {
        item = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 1 . . . . . . . . 
            . . . . . . 1 1 1 . . . . . . . 
            . . . . . 1 1 1 1 1 . . . . . . 
            . . . . . . 1 1 1 . . . . . . . 
            . . . . . . . 1 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Food)
        value2.place(item)
    }
    foodTiles = scene.getTilesByType(5)
    for (let value22 of foodTiles) {
        item = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 4 4 1 . . . . . . . 
            . . . . . 4 4 4 4 1 . . . . . . 
            . . . . 4 4 4 4 4 4 1 . . . . . 
            . . . . 4 4 4 4 1 4 1 . . . . . 
            . . . . . 4 4 1 4 1 . . . . . . 
            . . . . . . 4 4 1 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.SuperFood)
        value22.place(item)
    }
}
function nextLevel () {
    pinkyScared = 0
    inkyScared = 0
    blinkyScared = 0
    clydeScared = 0
    cleanup(false)
    buildLevel(level)
    initFood()
    initEnemies()
}
info.onLifeZero(function () {
    game.over(false, effects.dissolve)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.SuperFood, function (sprite, otherSprite) {
    otherSprite.destroy(effects.halo, 200)
    music.powerUp.play()
    info.changeScoreBy(50)
    ghostSpeed = 25
    pinkyScared = 1
    inkyScared = 1
    blinkyScared = 1
    clydeScared = 1
    timeTillNormal = game.runtime() + 7000
    if (enemyCount >= 1) {
        Pinky.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . 8 . . . . . . . . . . 8 . . 
            . . 8 . . . . . . . . . . 8 . . 
            . 8 . . . . . . . . . . . . 8 . 
            . 8 . . . . 8 8 8 8 . . . . 8 . 
            . 8 . . . 3 3 8 8 3 3 . . . 8 . 
            8 8 . 8 8 3 1 8 8 3 1 8 8 . 8 8 
            8 8 8 8 8 1 1 8 8 1 1 8 8 8 8 8 
            8 8 . 8 8 8 8 8 8 8 8 8 8 . 8 8 
            . 8 . . . 8 8 8 8 8 8 . . . 8 . 
            . 8 . . . . 8 8 8 8 . . . . 8 . 
            . 8 . . . . . . . . . . . . 8 . 
            . . 8 . . . . . . . . . . 8 . . 
            . . 8 . . . . . . . . . . 8 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        doWander(Pinky)
    }
    if (enemyCount >= 2) {
        Inky.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . 8 . . . . . . . . . . 8 . . 
            . . 8 . . . . . . . . . . 8 . . 
            . 8 . . . . . . . . . . . . 8 . 
            . 8 . . . . 8 8 8 8 . . . . 8 . 
            . 8 . . . 3 3 8 8 3 3 . . . 8 . 
            8 8 . 8 8 3 1 8 8 3 1 8 8 . 8 8 
            8 8 8 8 8 1 1 8 8 1 1 8 8 8 8 8 
            8 8 . 8 8 8 8 8 8 8 8 8 8 . 8 8 
            . 8 . . . 8 8 8 8 8 8 . . . 8 . 
            . 8 . . . . 8 8 8 8 . . . . 8 . 
            . 8 . . . . . . . . . . . . 8 . 
            . . 8 . . . . . . . . . . 8 . . 
            . . 8 . . . . . . . . . . 8 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        doWander(Inky)
    }
    if (enemyCount >= 3) {
        Blinky.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . 8 . . . . . . . . . . 8 . . 
            . . 8 . . . . . . . . . . 8 . . 
            . 8 . . . . . . . . . . . . 8 . 
            . 8 . . . . 8 8 8 8 . . . . 8 . 
            . 8 . . . 3 3 8 8 3 3 . . . 8 . 
            8 8 . 8 8 3 1 8 8 3 1 8 8 . 8 8 
            8 8 8 8 8 1 1 8 8 1 1 8 8 8 8 8 
            8 8 . 8 8 8 8 8 8 8 8 8 8 . 8 8 
            . 8 . . . 8 8 8 8 8 8 . . . 8 . 
            . 8 . . . . 8 8 8 8 . . . . 8 . 
            . 8 . . . . . . . . . . . . 8 . 
            . . 8 . . . . . . . . . . 8 . . 
            . . 8 . . . . . . . . . . 8 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        doWander(Blinky)
    }
    if (enemyCount >= 4) {
        Clyde.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . 8 . . . . . . . . . . 8 . . 
            . . 8 . . . . . . . . . . 8 . . 
            . 8 . . . . . . . . . . . . 8 . 
            . 8 . . . . 8 8 8 8 . . . . 8 . 
            . 8 . . . 3 3 8 8 3 3 . . . 8 . 
            8 8 . 8 8 3 1 8 8 3 1 8 8 . 8 8 
            8 8 8 8 8 1 1 8 8 1 1 8 8 8 8 8 
            8 8 . 8 8 8 8 8 8 8 8 8 8 . 8 8 
            . 8 . . . 8 8 8 8 8 8 . . . 8 . 
            . 8 . . . . 8 8 8 8 . . . . 8 . 
            . 8 . . . . . . . . . . . . 8 . 
            . . 8 . . . . . . . . . . 8 . . 
            . . 8 . . . . . . . . . . 8 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        doWander(Clyde)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy(effects.halo, 200)
    info.changeScoreBy(10)
    music.pewPew.play()
})
sprites.onDestroyed(SpriteKind.Enemy, function (sprite) {
    if (sprite == Pinky && pinkyScared == 1) {
        Pinky = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . 3 . . . . . . . . . . 3 . . 
            . . 3 . . . . . . . . . . 3 . . 
            . 3 . . . . . . . . . . . . 3 . 
            . 3 . . . . 3 3 3 3 . . . . 3 . 
            . 3 . . . 8 8 3 3 8 8 . . . 3 . 
            3 3 . 3 3 8 1 3 3 8 1 3 3 . 3 3 
            3 3 3 3 3 1 1 3 3 1 1 3 3 3 3 3 
            3 3 . 3 3 3 3 3 3 3 3 3 3 . 3 3 
            . 3 . . . 3 3 3 3 3 3 . . . 3 . 
            . 3 . . . . 3 3 3 3 . . . . 3 . 
            . 3 . . . . . . . . . . . . 3 . 
            . . 3 . . . . . . . . . . 3 . . 
            . . 3 . . . . . . . . . . 3 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        scene.placeOnRandomTile(Pinky, 4)
        pinkyScared = 0
        doWander(Pinky)
    }
    if (sprite == Inky && inkyScared == 1) {
        Inky = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . 9 . . . . . . . . . . 9 . . 
            . . 9 . . . . . . . . . . 9 . . 
            . 9 . . . . . . . . . . . . 9 . 
            . 9 . . . . 9 9 9 9 . . . . 9 . 
            . 9 . . . 8 8 9 9 8 8 . . . 9 . 
            9 9 . 9 9 8 1 9 9 8 1 9 9 . 9 9 
            9 9 9 9 9 1 1 9 9 1 1 9 9 9 9 9 
            9 9 . 9 9 9 9 9 9 9 9 9 9 . 9 9 
            . 9 . . . 9 9 9 9 9 9 . . . 9 . 
            . 9 . . . . 9 9 9 9 . . . . 9 . 
            . 9 . . . . . . . . . . . . 9 . 
            . . 9 . . . . . . . . . . 9 . . 
            . . 9 . . . . . . . . . . 9 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        scene.placeOnRandomTile(Inky, 4)
        inkyScared = 0
        inkyStartTime = game.runtime()
    }
    if (sprite == Blinky && blinkyScared == 1) {
        Blinky = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . 2 . . . . . . . . . . 2 . . 
            . . 2 . . . . . . . . . . 2 . . 
            . 2 . . . . . . . . . . . . 2 . 
            . 2 . . . . 2 2 2 2 . . . . 2 . 
            . 2 . . . 8 8 2 2 8 8 . . . 2 . 
            2 2 . 2 2 8 1 2 2 8 1 2 2 . 2 2 
            2 2 2 2 2 1 1 2 2 1 1 2 2 2 2 2 
            2 2 . 2 2 2 2 2 2 2 2 2 2 . 2 2 
            . 2 . . . 2 2 2 2 2 2 . . . 2 . 
            . 2 . . . . 2 2 2 2 . . . . 2 . 
            . 2 . . . . . . . . . . . . 2 . 
            . . 2 . . . . . . . . . . 2 . . 
            . . 2 . . . . . . . . . . 2 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        scene.placeOnRandomTile(Blinky, 4)
        blinkyScared = 0
        blinkyStartTime = game.runtime()
    }
    if (sprite == Clyde && clydeScared == 1) {
        Clyde = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . 4 . . . . . . . . . . 4 . . 
            . . 4 . . . . . . . . . . 4 . . 
            . 4 . . . . . . . . . . . . 4 . 
            . 4 . . . . 4 4 4 4 . . . . 4 . 
            . 4 . . . 8 8 4 4 8 8 . . . 4 . 
            4 4 . 4 4 8 1 4 4 8 1 4 4 . 4 4 
            4 4 4 4 4 1 1 4 4 1 1 4 4 4 4 4 
            4 4 . 4 4 4 4 4 4 4 4 4 4 . 4 4 
            . 4 . . . 4 4 4 4 4 4 . . . 4 . 
            . 4 . . . . 4 4 4 4 . . . . 4 . 
            . 4 . . . . . . . . . . . . 4 . 
            . . 4 . . . . . . . . . . 4 . . 
            . . 4 . . . . . . . . . . 4 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        scene.placeOnRandomTile(Clyde, 4)
        clydeScared = 0
        clydeStartTime = game.runtime()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (otherSprite == Pinky && pinkyScared == 0) {
        enemyKilledMe(sprite)
    } else {
        otherSprite.destroy(effects.fire, 100)
    }
    if (otherSprite == Inky && inkyScared == 0) {
        enemyKilledMe(sprite)
    } else {
        otherSprite.destroy(effects.fire, 100)
    }
    if (otherSprite == Blinky && blinkyScared == 0) {
        enemyKilledMe(sprite)
    } else {
        otherSprite.destroy(effects.fire, 100)
    }
    if (otherSprite == Clyde && clydeScared == 0) {
        enemyKilledMe(sprite)
    } else {
        otherSprite.destroy(effects.fire, 100)
    }
})
function makeRedWalls () {
    scene.setTile(8, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 . . . . . . . . . . 2 . . 
        . . 2 . . . . . . . . . . 2 . . 
        . . 2 . . . . . . . . . . 2 . . 
        . . 2 . . . . . . . . . . 2 . . 
        . . 2 . . . . . . . . . . 2 . . 
        . . 2 . . . . . . . . . . 2 . . 
        . . 2 . . . . . . . . . . 2 . . 
        . . 2 . . . . . . . . . . 2 . . 
        . . 2 . . . . . . . . . . 2 . . 
        . . 2 . . . . . . . . . . 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, true)
    scene.setTile(9, img`
        . . 2 . . . . . . . . . . 2 . . 
        . . 2 . . . . . . . . . . 2 . . 
        . . 2 . . . . . . . . . . 2 . . 
        . . 2 . . . . . . . . . . 2 . . 
        . . 2 . . . . . . . . . . 2 . . 
        . . 2 . . . . . . . . . . 2 . . 
        . . 2 . . . . . . . . . . 2 . . 
        . . 2 . . . . . . . . . . 2 . . 
        . . 2 . . . . . . . . . . 2 . . 
        . . 2 . . . . . . . . . . 2 . . 
        . . 2 . . . . . . . . . . 2 . . 
        . . 2 . . . . . . . . . . 2 . . 
        . . 2 . . . . . . . . . . 2 . . 
        . . 2 . . . . . . . . . . 2 . . 
        . . 2 . . . . . . . . . . 2 . . 
        . . 2 . . . . . . . . . . 2 . . 
        `, true)
    scene.setTile(6, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, true)
    scene.setTile(7, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . . . . . . . . . . . . 2 . . 
        . . . . . . . . . . . . . 2 . . 
        . . . . . . . . . . . . . 2 . . 
        . . . . . . . . . . . . . 2 . . 
        . . . . . . . . . . . . . 2 . . 
        . . . . . . . . . . . . . 2 . . 
        . . . . . . . . . . . . . 2 . . 
        . . . . . . . . . . . . . 2 . . 
        . . . . . . . . . . . . . 2 . . 
        . . . . . . . . . . . . . 2 . . 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, true)
    scene.setTile(10, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        . . 2 . . . . . . . . . . . . . 
        . . 2 . . . . . . . . . . . . . 
        . . 2 . . . . . . . . . . . . . 
        . . 2 . . . . . . . . . . . . . 
        . . 2 . . . . . . . . . . . . . 
        . . 2 . . . . . . . . . . . . . 
        . . 2 . . . . . . . . . . . . . 
        . . 2 . . . . . . . . . . . . . 
        . . 2 . . . . . . . . . . . . . 
        . . 2 . . . . . . . . . . . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, true)
    scene.setTile(11, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        . . 2 . . . . . . . . . . . . . 
        . . 2 . . . . . . . . . . . . . 
        . . 2 . . . . . . . . . . . . . 
        . . 2 . . . . . . . . . . . . . 
        . . 2 . . . . . . . . . . . . . 
        . . 2 . . . . . . . . . . . . . 
        . . 2 . . . . . . . . . . . . . 
        . . 2 . . . . . . . . . . . . . 
        . . 2 . . . . . . . . . . . . . 
        . . 2 . . . . . . . . . . . . . 
        . . 2 . . . . . . . . . . 2 2 2 
        . . 2 . . . . . . . . . . 2 . . 
        . . 2 . . . . . . . . . . 2 . . 
        `, true)
    scene.setTile(12, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . . . . . . . . . . . . 2 . . 
        . . . . . . . . . . . . . 2 . . 
        . . . . . . . . . . . . . 2 . . 
        . . . . . . . . . . . . . 2 . . 
        . . . . . . . . . . . . . 2 . . 
        . . . . . . . . . . . . . 2 . . 
        . . . . . . . . . . . . . 2 . . 
        . . . . . . . . . . . . . 2 . . 
        . . . . . . . . . . . . . 2 . . 
        . . . . . . . . . . . . . 2 . . 
        2 2 2 . . . . . . . . . . 2 . . 
        . . 2 . . . . . . . . . . 2 . . 
        . . 2 . . . . . . . . . . 2 . . 
        `, true)
    scene.setTile(13, img`
        . . 2 . . . . . . . . . . 2 . . 
        . . 2 . . . . . . . . . . 2 . . 
        . . 2 . . . . . . . . . . 2 2 2 
        . . 2 . . . . . . . . . . . . . 
        . . 2 . . . . . . . . . . . . . 
        . . 2 . . . . . . . . . . . . . 
        . . 2 . . . . . . . . . . . . . 
        . . 2 . . . . . . . . . . . . . 
        . . 2 . . . . . . . . . . . . . 
        . . 2 . . . . . . . . . . . . . 
        . . 2 . . . . . . . . . . . . . 
        . . 2 . . . . . . . . . . . . . 
        . . 2 . . . . . . . . . . . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, true)
    scene.setTile(14, img`
        . . 2 . . . . . . . . . . 2 . . 
        . . 2 . . . . . . . . . . 2 . . 
        2 2 2 . . . . . . . . . . 2 . . 
        . . . . . . . . . . . . . 2 . . 
        . . . . . . . . . . . . . 2 . . 
        . . . . . . . . . . . . . 2 . . 
        . . . . . . . . . . . . . 2 . . 
        . . . . . . . . . . . . . 2 . . 
        . . . . . . . . . . . . . 2 . . 
        . . . . . . . . . . . . . 2 . . 
        . . . . . . . . . . . . . 2 . . 
        . . . . . . . . . . . . . 2 . . 
        . . . . . . . . . . . . . 2 . . 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, true)
    scene.setTile(2, img`
        . . 2 . . . . . . . . . . 2 . . 
        . . 2 . . . . . . . . . . 2 . . 
        . . 2 . . . . . . . . . . 2 . . 
        . . 2 . . . . . . . . . . 2 . . 
        . . 2 . . . . . . . . . . 2 . . 
        . . 2 . . . . . . . . . . 2 . . 
        . . 2 . . . . . . . . . . 2 . . 
        . . 2 . . . . . . . . . . 2 . . 
        . . 2 . . . . . . . . . . 2 . . 
        . . 2 . . . . . . . . . . 2 . . 
        . . 2 . . . . . . . . . . 2 . . 
        . . 2 . . . . . . . . . . 2 . . 
        . . 2 . . . . . . . . . . 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, true)
    scene.setTile(3, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 . . . . . . . . . . 2 . . 
        . . 2 . . . . . . . . . . 2 . . 
        . . 2 . . . . . . . . . . 2 . . 
        . . 2 . . . . . . . . . . 2 . . 
        . . 2 . . . . . . . . . . 2 . . 
        . . 2 . . . . . . . . . . 2 . . 
        . . 2 . . . . . . . . . . 2 . . 
        . . 2 . . . . . . . . . . 2 . . 
        . . 2 . . . . . . . . . . 2 . . 
        . . 2 . . . . . . . . . . 2 . . 
        . . 2 . . . . . . . . . . 2 . . 
        . . 2 . . . . . . . . . . 2 . . 
        . . 2 . . . . . . . . . . 2 . . 
        `, true)
}
let timeTillNormal = 0
let item: Sprite = null
let foodTiles: tiles.Tile[] = []
let tileMapList: Image[] = []
let backgroundImageList: Image[] = []
let foodSpriteList: Sprite[] = []
let clydeStartTime = 0
let blinkyStartTime = 0
let inkyStartTime = 0
let Clyde: Sprite = null
let clydeScared = 0
let Blinky: Sprite = null
let blinkyScared = 0
let Inky: Sprite = null
let inkyScared = 0
let Pinky: Sprite = null
let pinkyScared = 0
let pacmanSpeed = 0
let enemyCount = 0
let level = 0
let pacman: Sprite = null
let ghostSpeed = 0
info.setScore(0)
info.setLife(3)
level = 0
enemyCount = 4
pacmanSpeed = 100
ghostSpeed = 500
buildLevel(level)
initFood()
initMainCharacter()
initEnemies()
game.onUpdate(function () {
    if (pinkyScared == 1 || inkyScared == 1 || blinkyScared == 1 || clydeScared == 1) {
        if (!(game.runtime() > timeTillNormal - 2000)) {
            animateFlashState()
        }
        if (game.runtime() > timeTillNormal) {
            resetFrightenedToNormal()
        }
    }
})
game.onUpdate(function () {
    if (pacman.vx > 0) {
        pacman.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 5 5 5 5 5 5 . . . . . . 
            . . . 5 5 5 5 5 5 5 5 5 5 . . . 
            . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
            . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            . 5 5 5 5 5 5 5 5 5 5 . . . . . 
            . 5 5 5 5 5 5 5 5 5 5 . . . . . 
            . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
            . 5 5 5 5 5 5 5 5 5 5 5 5 . . . 
            . . 5 5 5 5 5 5 5 5 5 . . . . . 
            . . . 5 5 5 5 5 5 5 5 5 5 . . . 
            . . . . 5 5 5 5 5 5 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (pacman.vx < 0) {
        pacman.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 5 5 5 5 5 5 . . . . 
            . . . 5 5 5 5 5 5 5 5 5 5 . . . 
            . . . . . 5 5 5 5 5 5 5 5 5 . . 
            . . . 5 5 5 5 5 5 5 5 5 5 5 5 . 
            . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
            . . . . . 5 5 5 5 5 5 5 5 5 5 . 
            . . . . . 5 5 5 5 5 5 5 5 5 5 . 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
            . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
            . . . 5 5 5 5 5 5 5 5 5 5 . . . 
            . . . . . . 5 5 5 5 5 5 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (pacman.vy > 0) {
        pacman.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 5 5 5 5 5 . . . . . 
            . . . . . 5 5 5 5 5 5 5 . . . . 
            . . . . 5 5 5 5 5 5 5 5 5 . . . 
            . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
            . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
            . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
            . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
            . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
            . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
            . . . 5 . 5 5 5 . . 5 5 5 . . . 
            . . . 5 . 5 5 5 . . 5 5 5 . . . 
            . . . . . . 5 5 . . 5 5 . . . . 
            . . . . . . . 5 . . 5 . . . . . 
            . . . . . . . 5 . . 5 . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (pacman.vy < 0) {
        pacman.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . 5 . . 5 . . . . . . . 
            . . . . . 5 . . 5 . . . . . . . 
            . . . . 5 5 . . 5 5 . . . . . . 
            . . . 5 5 5 . . 5 5 5 . 5 . . . 
            . . . 5 5 5 . . 5 5 5 . 5 . . . 
            . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
            . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
            . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
            . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
            . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
            . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
            . . . 5 5 5 5 5 5 5 5 5 . . . . 
            . . . . 5 5 5 5 5 5 5 . . . . . 
            . . . . . 5 5 5 5 5 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else {
    	
    }
})
game.onUpdate(function () {
    if (!(game.runtime() - inkyStartTime < 5000) && enemyCount >= 2) {
        doWander(Inky)
    }
    if (!(game.runtime() - blinkyStartTime < 10000) && enemyCount >= 3) {
        doWander(Blinky)
    }
    if (!(game.runtime() - clydeStartTime < 15000) && enemyCount >= 4) {
        doWander(Clyde)
    }
})
game.onUpdate(function () {
    foodSpriteList = sprites.allOfKind(SpriteKind.Food)
    if (foodSpriteList.length == 0) {
        level += 1
        nextLevel()
    }
})
