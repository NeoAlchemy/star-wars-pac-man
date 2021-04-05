namespace SpriteKind {
    export const SuperFood = SpriteKind.create()
    export const Corner = SpriteKind.create()
}
/**
 * TODO:
 * 
 * Do Chase, Scatter, Frightened modes
 * 
 * Do a fun intermission after 5.
 */
// Fixes:
// 
// Time Since Start works for first play but not resetEnemies
function enemyKilledMe (sprite: Sprite) {
    sprite.destroy(effects.fire, 100)
    music.powerDown.play()
    info.changeLifeBy(-1)
    pause(2000)
    setupPlayer()
    resetEnemies()
}
function doBehavior (mySprite: Sprite) {
    doChase(mySprite)
    if (movementExperiment == 1) {
        console.logValue("doChase", game.runtime())
        timer.after(3000, function () {
            doScatter(mySprite)
            console.logValue("doScatter", game.runtime())
        })
        timer.after(7000, function () {
            doChase(mySprite)
            console.logValue("doChase", game.runtime())
        })
        timer.after(3000, function () {
            doScatter(mySprite)
            console.logValue("doScatter", game.runtime())
        })
    }
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
    pacmanSpeed = pacmanSpeedDuringScared
    controller.moveSprite(pacman, pacmanSpeed, pacmanSpeed)
    changeEnemiesNature(true)
    timeTillNormal = game.runtime() + ghostTime
    if (changeGhostImagesExperiement == 0) {
        Pinky.setImage(assets.image`scaredGhost`)
    } else {
        Pinky.setImage(assets.image`scaredRoyalGuard`)
    }
    if (changeGhostImagesExperiement == 0) {
        Inky.setImage(assets.image`scaredGhost`)
    } else {
        Inky.setImage(assets.image`scaredDarthVadar`)
    }
    if (changeGhostImagesExperiement == 0) {
        Blinky.setImage(assets.image`scaredGhost`)
    } else {
        Blinky.setImage(assets.image`scaredBobaFett`)
    }
    if (changeGhostImagesExperiement == 0) {
        Clyde.setImage(assets.image`scaredGhost`)
    } else {
        Clyde.setImage(assets.image`scaredStormTrooper`)
    }
    doFrightened(Pinky)
    doFrightened(Inky)
    doFrightened(Blinky)
    doFrightened(Clyde)
})
function doChase (mySprite: Sprite) {
    mySprite.follow(pacman, ghostSpeed)
}
function doFrightened (mySprite: Sprite) {
    doScatter(mySprite)
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.setVelocity(0 - otherSprite.vx, 0 - otherSprite.vy)
})
function resetFrightenedToNormal () {
    ghostSpeed = normalGhostSpeed
    ghostKilledCount = 0
    animation.stopAnimation(animation.AnimationTypes.All, Pinky)
    animation.stopAnimation(animation.AnimationTypes.All, Inky)
    animation.stopAnimation(animation.AnimationTypes.All, Blinky)
    animation.stopAnimation(animation.AnimationTypes.All, Clyde)
    if (changeGhostImagesExperiement == 0) {
        Pinky.setImage(assets.image`pinky`)
    } else {
        Pinky.setImage(assets.image`royalGuards`)
    }
    if (changeGhostImagesExperiement == 0) {
        Inky.setImage(assets.image`inky`)
    } else {
        Inky.setImage(assets.image`darthVadar`)
    }
    if (changeGhostImagesExperiement == 0) {
        Blinky.setImage(assets.image`blinky`)
    } else {
        Blinky.setImage(assets.image`bobaFett`)
    }
    if (changeGhostImagesExperiement == 0) {
        Clyde.setImage(assets.image`clyde`)
    } else {
        Clyde.setImage(assets.image`stormTrooper`)
    }
    doBehavior(Blinky)
    doBehavior(Pinky)
    doBehavior(Inky)
    doBehavior(Clyde)
    changeEnemiesNature(false)
    pacmanSpeed = pacmanSpeedNormal
    controller.moveSprite(pacman, pacmanSpeed, pacmanSpeed)
}
function setupGame () {
    info.setScore(0)
    info.setLife(3)
}
function buildLevel (level: number) {
    scene.setBackgroundColor(15)
    if (level == 0) {
        tiles.setTilemap(tilemap`level0`)
        pacmanSpeedNormal = 100
        pacmanSpeedDuringScared = 110
        if (easyMode == 0) {
            normalGhostSpeed = 90
            scaredGhostSpeed = 60
        } else {
            normalGhostSpeed = 50
            scaredGhostSpeed = 40
        }
    } else if (level == 1) {
        tiles.setTilemap(tilemap`level1`)
        pacmanSpeedNormal = 120
        pacmanSpeedDuringScared = 120
        if (easyMode == 0) {
            normalGhostSpeed = 90
            scaredGhostSpeed = 60
        } else {
            normalGhostSpeed = 60
            scaredGhostSpeed = 50
        }
    } else if (level == 2) {
        tiles.setTilemap(tilemap`level4`)
        pacmanSpeedNormal = 125
        pacmanSpeedDuringScared = 125
        if (easyMode == 0) {
            normalGhostSpeed = 110
            scaredGhostSpeed = 70
        } else {
            normalGhostSpeed = 70
            scaredGhostSpeed = 60
        }
    } else if (level == 3) {
        tiles.setTilemap(tilemap`level3`)
    } else if (level == 4) {
        tiles.setTilemap(tilemap`level5`)
    } else {
        game.over(true, effects.starField)
    }
}
function animateScared () {
    if (pinkyScared == 1) {
        if (changeGhostImagesExperiement == 0) {
            animation.runImageAnimation(
            Pinky,
            assets.animation`flashingGhost`,
            200,
            true
            )
        } else {
            animation.runImageAnimation(
            Pinky,
            assets.animation`royalGuardScared`,
            200,
            true
            )
        }
    }
    if (inkyScared == 1) {
        if (changeGhostImagesExperiement == 0) {
            animation.runImageAnimation(
            Inky,
            assets.animation`flashingGhost`,
            200,
            true
            )
        } else {
            animation.runImageAnimation(
            Inky,
            assets.animation`darthVadarScared`,
            200,
            true
            )
        }
    }
    if (blinkyScared == 1) {
        if (changeGhostImagesExperiement == 0) {
            animation.runImageAnimation(
            Blinky,
            assets.animation`flashingGhost`,
            200,
            true
            )
        } else {
            animation.runImageAnimation(
            Blinky,
            assets.animation`bobaFettScared`,
            200,
            true
            )
        }
    }
    if (clydeScared == 1) {
        if (changeGhostImagesExperiement == 0) {
            animation.runImageAnimation(
            Clyde,
            assets.animation`flashingGhost`,
            200,
            true
            )
        } else {
            animation.runImageAnimation(
            Clyde,
            assets.animation`stormtrooperScared`,
            200,
            true
            )
        }
    }
}
function setupPlayer () {
    pacman = sprites.create(assets.image`upFacingFalcon`, SpriteKind.Player)
    tiles.placeOnTile(pacman, tiles.getTileLocation(8, 10))
    scene.cameraFollowSprite(pacman)
    pacmanSpeed = pacmanSpeedNormal
    controller.moveSprite(pacman, pacmanSpeed, pacmanSpeed)
}
info.onLifeZero(function () {
    game.over(false, effects.dissolve)
})
function doScatter (mySprite: Sprite) {
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
function resetEnemies () {
    ghostSpeed = normalGhostSpeed
    tiles.placeOnTile(Pinky, tiles.getTileLocation(7, 6))
    tiles.placeOnTile(Inky, tiles.getTileLocation(7, 7))
    tiles.placeOnTile(Blinky, tiles.getTileLocation(8, 6))
    tiles.placeOnTile(Clyde, tiles.getTileLocation(8, 7))
    doBehavior(Pinky)
    timer.after(inkyWaitTime, function () {
        doBehavior(Inky)
    })
    timer.after(blinkyWaitTime, function () {
        doBehavior(Blinky)
    })
    timer.after(clydeWaitTime, function () {
        doBehavior(Clyde)
    })
}
function setupEnemies () {
    ghostSpeed = normalGhostSpeed
    if (changeGhostImagesExperiement == 0) {
        Pinky = sprites.create(assets.image`pinky`, SpriteKind.Enemy)
    } else {
        Pinky = sprites.create(assets.image`royalGuards`, SpriteKind.Enemy)
    }
    tiles.placeOnRandomTile(Pinky, assets.tile`pinky`)
    tiles.replaceAllTiles(assets.tile`pinky`, assets.tile`transparency16`)
    doBehavior(Pinky)
    if (changeGhostImagesExperiement == 0) {
        Inky = sprites.create(assets.image`inky`, SpriteKind.Enemy)
    } else {
        Inky = sprites.create(assets.image`darthVadar`, SpriteKind.Enemy)
    }
    tiles.placeOnRandomTile(Inky, assets.tile`inky`)
    timer.after(inkyWaitTime, function () {
        doBehavior(Inky)
    })
    tiles.replaceAllTiles(assets.tile`inky`, assets.tile`transparency16`)
    if (changeGhostImagesExperiement == 0) {
        Blinky = sprites.create(assets.image`blinky`, SpriteKind.Enemy)
    } else {
        Blinky = sprites.create(assets.image`bobaFett`, SpriteKind.Enemy)
    }
    tiles.placeOnRandomTile(Blinky, assets.tile`myTile10`)
    timer.after(blinkyWaitTime, function () {
        doBehavior(Blinky)
    })
    tiles.replaceAllTiles(assets.tile`myTile10`, assets.tile`transparency16`)
    if (changeGhostImagesExperiement == 0) {
        Clyde = sprites.create(assets.image`clyde`, SpriteKind.Enemy)
    } else {
        Clyde = sprites.create(assets.image`stormTrooper`, SpriteKind.Enemy)
    }
    tiles.placeOnRandomTile(Clyde, assets.tile`clyde`)
    timer.after(clydeWaitTime, function () {
        doBehavior(Clyde)
    })
    tiles.replaceAllTiles(assets.tile`clyde`, assets.tile`transparency16`)
}
sprites.onDestroyed(SpriteKind.Enemy, function (sprite) {
    if (sprite == Pinky && pinkyScared == 1) {
        if (changeGhostImagesExperiement == 0) {
            Pinky = sprites.create(assets.image`pinky`, SpriteKind.Enemy)
        } else {
            Pinky = sprites.create(assets.image`royalGuards`, SpriteKind.Enemy)
        }
        tiles.placeOnTile(Pinky, tiles.getTileLocation(7, 6))
        pinkyScared = 0
        doBehavior(Pinky)
    }
    if (sprite == Inky && inkyScared == 1) {
        if (changeGhostImagesExperiement == 0) {
            Inky = sprites.create(assets.image`inky`, SpriteKind.Enemy)
        } else {
            Inky = sprites.create(assets.image`darthVadar`, SpriteKind.Enemy)
        }
        tiles.placeOnTile(Inky, tiles.getTileLocation(7, 7))
        inkyScared = 0
        timer.after(inkyWaitTime, function () {
            doBehavior(Inky)
        })
    }
    if (sprite == Blinky && blinkyScared == 1) {
        if (changeGhostImagesExperiement == 0) {
            Blinky = sprites.create(assets.image`blinky`, SpriteKind.Enemy)
        } else {
            Blinky = sprites.create(assets.image`bobaFett`, SpriteKind.Enemy)
        }
        tiles.placeOnTile(Blinky, tiles.getTileLocation(8, 6))
        blinkyScared = 0
        timer.after(blinkyWaitTime, function () {
            doBehavior(Blinky)
        })
    }
    if (sprite == Clyde && clydeScared == 1) {
        if (changeGhostImagesExperiement == 0) {
            Clyde = sprites.create(assets.image`clyde`, SpriteKind.Enemy)
        } else {
            Clyde = sprites.create(assets.image`stormTrooper`, SpriteKind.Enemy)
        }
        tiles.placeOnTile(Clyde, tiles.getTileLocation(8, 7))
        clydeScared = 0
        timer.after(clydeWaitTime, function () {
            doBehavior(Clyde)
        })
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`pellet`, function (sprite, location) {
    info.changeScoreBy(pointsForPellets)
    tiles.setTileAt(location, assets.tile`transparency16`)
    music.pewPew.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    ghostKilledCount += 1
    if (otherSprite == Pinky && pinkyScared == 0) {
        enemyKilledMe(sprite)
    } else if (otherSprite == Pinky) {
        otherSprite.destroy(effects.fire, 100)
    } else {
    	
    }
    if (otherSprite == Inky && inkyScared == 0) {
        enemyKilledMe(sprite)
    } else if (otherSprite == Inky) {
        otherSprite.destroy(effects.fire, 100)
    } else {
    	
    }
    if (otherSprite == Blinky && blinkyScared == 0) {
        enemyKilledMe(sprite)
    } else if (otherSprite == Blinky) {
        otherSprite.destroy(effects.fire, 100)
    } else {
    	
    }
    if (otherSprite == Clyde && clydeScared == 0) {
        enemyKilledMe(sprite)
    } else if (otherSprite == Clyde) {
        otherSprite.destroy(effects.fire, 100)
    } else {
    	
    }
    if (ghostKilledCount == 1) {
        info.changeScoreBy(200)
    } else if (ghostKilledCount == 2) {
        info.changeScoreBy(400)
    } else if (ghostKilledCount == 3) {
        info.changeScoreBy(800)
    } else {
        info.changeScoreBy(1600)
    }
})
let superFoodSpriteList: tiles.Location[] = []
let foodSpriteList: tiles.Location[] = []
let Clyde: Sprite = null
let Blinky: Sprite = null
let Inky: Sprite = null
let Pinky: Sprite = null
let timeTillNormal = 0
let pacman: Sprite = null
let ghostSpeed = 0
let clydeScared = 0
let blinkyScared = 0
let inkyScared = 0
let pinkyScared = 0
let level = 0
let bottomLeftCorner: Sprite = null
let bottomRightCorner: Sprite = null
let topLeftCorner: Sprite = null
let topRightCorner: Sprite = null
let ghostKilledCount = 0
let superPelletPoints = 0
let pointsForPellets = 0
let clydeWaitTime = 0
let blinkyWaitTime = 0
let inkyWaitTime = 0
let ghostTime = 0
let scaredGhostSpeed = 0
let normalGhostSpeed = 0
let pacmanSpeedDuringScared = 0
let pacmanSpeedNormal = 0
let pacmanSpeed = 0
let easyMode = 0
let changeGhostImagesExperiement = 0
let movementExperiment = 0
movementExperiment = 0
changeGhostImagesExperiement = 0
easyMode = 0
pacmanSpeed = 100
pacmanSpeedNormal = 100
pacmanSpeedDuringScared = 110
normalGhostSpeed = 90
scaredGhostSpeed = 60
let ghostBlinkingTime = 2000
ghostTime = 7000
inkyWaitTime = 5000
blinkyWaitTime = 10000
clydeWaitTime = 15000
pointsForPellets = 10
superPelletPoints = 50
ghostKilledCount = 0
topRightCorner = sprites.create(assets.image`none`, SpriteKind.Corner)
topLeftCorner = sprites.create(assets.image`none`, SpriteKind.Corner)
bottomRightCorner = sprites.create(assets.image`none`, SpriteKind.Corner)
bottomLeftCorner = sprites.create(assets.image`none`, SpriteKind.Corner)
topRightCorner.setPosition(16, 16)
topLeftCorner.setPosition(16, 240)
bottomRightCorner.setPosition(240, 16)
bottomLeftCorner.setPosition(240, 240)
scene.setBackgroundImage(assets.image`starWarsTitle`)
pause(3000)
scene.setBackgroundImage(assets.image`none`)
if (game.ask("Easy Mode")) {
    easyMode = 1
}
if (game.ask("Villains, Not Ships")) {
    changeGhostImagesExperiement = 1
}
buildLevel(level)
game.showLongText("Welcome to Star Wars Pac-Man.  Collect as many dots as you can!!", DialogLayout.Bottom)
setupPlayer()
setupEnemies()
game.onUpdate(function () {
    foodSpriteList = tiles.getTilesByType(assets.tile`pellet`)
    superFoodSpriteList = tiles.getTilesByType(assets.tile`superPellet`)
    if (foodSpriteList.length == 0 && superFoodSpriteList.length == 0) {
        level += 1
        resetFrightenedToNormal()
        buildLevel(level)
        resetEnemies()
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
