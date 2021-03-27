namespace SpriteKind {
    export const SuperFood = SpriteKind.create()
    export const Corner = SpriteKind.create()
}
function enemyKilledMe (sprite: Sprite) {
    sprite.destroy(effects.fire, 100)
    music.powerDown.play()
    info.changeLifeBy(-1)
    setupPlayer()
    resetEnemies()
}
function changeEnemiesNature (scared: boolean) {
    if (scared) {
        pinkyScared = 1
        inkyScared = 1
        blinkyScared = 1
        clydeScared = 1
    } else {
        pinkyScared = 0
        inkyScared = 0
        blinkyScared = 0
        clydeScared = 0
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`superPellet`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    music.powerUp.play()
    info.changeScoreBy(superPelletPoints)
    ghostSpeed = scaredGhostSpeed
    changeEnemiesNature(true)
    timeTillNormal = game.runtime() + ghostTime
    Pinky.setImage(assets.image`scaredGhost`)
    Inky.setImage(assets.image`scaredGhost`)
    Blinky.setImage(assets.image`scaredGhost`)
    Clyde.setImage(assets.image`scaredGhost`)
    doChase(Pinky)
    doChase(Inky)
    doChase(Blinky)
    doChase(Clyde)
})
function doChase (mySprite: Sprite) {
    mySprite.follow(pacman, ghostSpeed)
}
function doFrightened (mySprite: Sprite) {
    topRightCorner = sprites.create(img`
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
        `, SpriteKind.Corner)
    topLeftCorner = sprites.create(img`
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
        `, SpriteKind.Corner)
    bottomRightCorner = sprites.create(img`
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
        `, SpriteKind.Corner)
    bottomLeftCorner = sprites.create(img`
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
        `, SpriteKind.Corner)
    topRightCorner.setPosition(0, 0)
    topLeftCorner.setPosition(0, 0)
    bottomRightCorner.setPosition(0, 0)
    bottomLeftCorner.setPosition(0, 0)
    if (mySprite == Pinky) {
        mySprite.follow(topRightCorner, ghostSpeed)
    }
    if (mySprite == Inky) {
        mySprite.follow(topLeftCorner, ghostSpeed)
    }
    if (mySprite == Blinky) {
        mySprite.follow(bottomLeftCorner, ghostSpeed)
    }
    if (mySprite == Clyde) {
        mySprite.follow(bottomRightCorner, ghostSpeed)
    }
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.setVelocity(0 - otherSprite.vx, 0 - otherSprite.vy)
})
function resetFrightenedToNormal () {
    ghostSpeed = normalGhostSpeed
    animation.stopAnimation(animation.AnimationTypes.All, Pinky)
    animation.stopAnimation(animation.AnimationTypes.All, Inky)
    animation.stopAnimation(animation.AnimationTypes.All, Blinky)
    animation.stopAnimation(animation.AnimationTypes.All, Clyde)
    Clyde.setImage(assets.image`clyde`)
    Pinky.setImage(assets.image`pinky`)
    Inky.setImage(assets.image`inky`)
    Blinky.setImage(assets.image`blinky`)
    doChase(Blinky)
    doChase(Pinky)
    doChase(Inky)
    doChase(Clyde)
    changeEnemiesNature(false)
}
function setupGame () {
    info.setScore(0)
}
function buildLevel (level: number) {
    scene.setBackgroundColor(15)
    if (level == 0) {
        tiles.setTilemap(tilemap`level0`)
    } else if (level == 1) {
        tiles.setTilemap(tilemap`level1`)
    } else {
        game.over(true, effects.starField)
    }
}
function animateScared () {
    if (pinkyScared == 1) {
        animation.runImageAnimation(
        Pinky,
        assets.animation`flashingGhost`,
        200,
        true
        )
    }
    if (inkyScared == 1) {
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
    if (blinkyScared == 1) {
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
    if (clydeScared == 1) {
        animation.runImageAnimation(
        Clyde,
        assets.animation`flashingGhost`,
        200,
        true
        )
    }
}
function setupPlayer () {
    pacman = sprites.create(assets.image`upFacingFalcon`, SpriteKind.Player)
    tiles.placeOnRandomTile(pacman, assets.tile`pellet`)
    scene.cameraFollowSprite(pacman)
    controller.moveSprite(pacman, pacmanSpeed, pacmanSpeed)
}
info.onLifeZero(function () {
    game.over(false, effects.dissolve)
})
function resetEnemies () {
    ghostSpeed = normalGhostSpeed
    tiles.placeOnTile(Pinky, tiles.getTileLocation(7, 6))
    tiles.placeOnTile(Inky, tiles.getTileLocation(7, 7))
    tiles.placeOnTile(Blinky, tiles.getTileLocation(8, 6))
    tiles.placeOnTile(Clyde, tiles.getTileLocation(8, 7))
    doChase(Pinky)
    inkyStartTime = game.runtime()
    blinkyStartTime = game.runtime()
    clydeStartTime = game.runtime()
}
function setupEnemies () {
    ghostSpeed = normalGhostSpeed
    Pinky = sprites.create(assets.image`pinky`, SpriteKind.Enemy)
    tiles.placeOnRandomTile(Pinky, assets.tile`pinky`)
    tiles.replaceAllTiles(assets.tile`pinky`, assets.tile`transparency16`)
    doChase(Pinky)
    Inky = sprites.create(assets.image`inky`, SpriteKind.Enemy)
    tiles.placeOnRandomTile(Inky, assets.tile`inky`)
    inkyStartTime = game.runtime()
    tiles.replaceAllTiles(assets.tile`inky`, assets.tile`transparency16`)
    Blinky = sprites.create(assets.image`blinky`, SpriteKind.Enemy)
    tiles.placeOnRandomTile(Blinky, assets.tile`myTile10`)
    blinkyStartTime = game.runtime()
    tiles.replaceAllTiles(assets.tile`myTile10`, assets.tile`transparency16`)
    Clyde = sprites.create(assets.image`clyde`, SpriteKind.Enemy)
    tiles.placeOnRandomTile(Clyde, assets.tile`clyde`)
    clydeStartTime = game.runtime()
    tiles.replaceAllTiles(assets.tile`clyde`, assets.tile`transparency16`)
}
sprites.onDestroyed(SpriteKind.Enemy, function (sprite) {
    if (sprite == Pinky && pinkyScared == 1) {
        Pinky = sprites.create(assets.image`pinky`, SpriteKind.Enemy)
        tiles.placeOnTile(Pinky, tiles.getTileLocation(7, 6))
        pinkyScared = 0
        doChase(Pinky)
    }
    if (sprite == Inky && inkyScared == 1) {
        Inky = sprites.create(assets.image`inky`, SpriteKind.Enemy)
        tiles.placeOnTile(Inky, tiles.getTileLocation(7, 7))
        inkyScared = 0
        inkyStartTime = game.runtime()
    }
    if (sprite == Blinky && blinkyScared == 1) {
        Blinky = sprites.create(assets.image`blinky`, SpriteKind.Enemy)
        tiles.placeOnTile(Blinky, tiles.getTileLocation(8, 6))
        blinkyScared = 0
        blinkyStartTime = game.runtime()
    }
    if (sprite == Clyde && clydeScared == 1) {
        Clyde = sprites.create(assets.image`clyde`, SpriteKind.Enemy)
        tiles.placeOnTile(Clyde, tiles.getTileLocation(8, 7))
        clydeScared = 0
        clydeStartTime = game.runtime()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`pellet`, function (sprite, location) {
    info.changeScoreBy(pointsForPellets)
    tiles.setTileAt(location, assets.tile`transparency16`)
    music.pewPew.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (otherSprite == Pinky && pinkyScared == 0) {
        enemyKilledMe(sprite)
    } else if (otherSprite == Pinky) {
        otherSprite.destroy(effects.fire, 100)
        info.changeScoreBy(ghostPoints)
    } else {
    	
    }
    if (otherSprite == Inky && inkyScared == 0) {
        enemyKilledMe(sprite)
    } else if (otherSprite == Inky) {
        otherSprite.destroy(effects.fire, 100)
        info.changeScoreBy(ghostPoints)
    } else {
    	
    }
    if (otherSprite == Blinky && blinkyScared == 0) {
        enemyKilledMe(sprite)
    } else if (otherSprite == Blinky) {
        otherSprite.destroy(effects.fire, 100)
        info.changeScoreBy(ghostPoints)
    } else {
    	
    }
    if (otherSprite == Clyde && clydeScared == 0) {
        enemyKilledMe(sprite)
    } else if (otherSprite == Clyde) {
        otherSprite.destroy(effects.fire, 100)
        info.changeScoreBy(ghostPoints)
    } else {
    	
    }
})
let superFoodSpriteList: tiles.Location[] = []
let foodSpriteList: tiles.Location[] = []
let clydeStartTime = 0
let blinkyStartTime = 0
let inkyStartTime = 0
let bottomLeftCorner: Sprite = null
let bottomRightCorner: Sprite = null
let topLeftCorner: Sprite = null
let topRightCorner: Sprite = null
let pacman: Sprite = null
let Clyde: Sprite = null
let Blinky: Sprite = null
let Inky: Sprite = null
let Pinky: Sprite = null
let timeTillNormal = 0
let ghostSpeed = 0
let clydeScared = 0
let blinkyScared = 0
let inkyScared = 0
let pinkyScared = 0
let superPelletPoints = 0
let ghostPoints = 0
let pointsForPellets = 0
let ghostTime = 0
let scaredGhostSpeed = 0
let normalGhostSpeed = 0
let pacmanSpeed = 0
info.setLife(3)
let level = 0
pacmanSpeed = 100
normalGhostSpeed = 75
scaredGhostSpeed = 25
let ghostBlinkingTime = 2000
ghostTime = 7000
let inkyWaitTime = 5000
let blinkyWaitTime = 10000
let clydeWaitTime = 15000
pointsForPellets = 10
ghostPoints = 200
superPelletPoints = 50
buildLevel(level)
setupPlayer()
game.showLongText("Welcome to Star Wars Pac-Man.  Collect as many pellets as you can!!", DialogLayout.Bottom)
setupEnemies()
game.onUpdate(function () {
    if (pinkyScared == 1 || inkyScared == 1 || blinkyScared == 1 || clydeScared == 1) {
        if (!(game.runtime() > timeTillNormal - ghostBlinkingTime)) {
            animateScared()
        }
        if (game.runtime() > timeTillNormal) {
            resetFrightenedToNormal()
        }
    }
})
game.onUpdate(function () {
    foodSpriteList = tiles.getTilesByType(assets.tile`pellet`)
    superFoodSpriteList = tiles.getTilesByType(assets.tile`superPellet`)
    if (foodSpriteList.length == 0 && superFoodSpriteList.length == 0) {
        level += 1
    }
})
game.onUpdate(function () {
    if (!(game.runtime() - inkyStartTime < inkyWaitTime)) {
        doChase(Inky)
    }
    if (!(game.runtime() - blinkyStartTime < blinkyWaitTime)) {
        doChase(Blinky)
    }
    if (!(game.runtime() - clydeStartTime < clydeWaitTime)) {
        doChase(Clyde)
    }
})
game.onUpdate(function () {
    if (pacman.vx > 0) {
        pacman.setImage(assets.image`rightFacingFalcon`)
    } else if (pacman.vx < 0) {
        pacman.setImage(assets.image`leftFacingFalcon`)
    } else if (pacman.vy > 0) {
        pacman.setImage(assets.image`downFacingFalcon`)
    } else if (pacman.vy < 0) {
        pacman.setImage(assets.image`upFacingFalcon`)
    } else {
    	
    }
})
