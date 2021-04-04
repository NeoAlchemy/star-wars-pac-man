namespace SpriteKind {
    export const SuperFood = SpriteKind.create()
    export const Corner = SpriteKind.create()
    export const ClydeCorner = SpriteKind.create()
    export const PinkyCorner = SpriteKind.create()
    export const BlinkyCorner = SpriteKind.create()
    export const InkyCorner = SpriteKind.create()
}
/**
 * TODO:
 * 
 * Do Chase, Scatter, Frightened modes
 * 
 * with scatter
 * 
 *     when hit corner then make another corner on other side to follow
 * 
 * Do a fun intermission after 5.
 */
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.ClydeCorner, function (sprite, otherSprite) {
    if (sprite == Clyde) {
        if (otherSprite == clydePath1) {
            sprite.follow(clydePath2, ghostSpeed)
        } else if (otherSprite == clydePath2) {
            sprite.follow(clydePath3, ghostSpeed)
        } else if (otherSprite == clydePath3) {
            sprite.follow(clydePath4, ghostSpeed)
        } else if (otherSprite == clydePath4) {
            sprite.follow(clydePath1, ghostSpeed)
        } else {
            sprite.follow(clydePath1, ghostSpeed)
        }
    }
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.BlinkyCorner, function (sprite, otherSprite) {
    if (sprite == Blinky) {
        if (otherSprite == blinkyPath1) {
            sprite.follow(blinkyPath2, ghostSpeed)
        } else if (otherSprite == blinkyPath2) {
            sprite.follow(blinkyPath3, ghostSpeed)
        } else if (otherSprite == blinkyPath3) {
            sprite.follow(blinkyPath4, ghostSpeed)
        } else if (otherSprite == blinkyPath4) {
            sprite.follow(blinkyPath1, ghostSpeed)
        } else {
            sprite.follow(blinkyPath1, ghostSpeed)
        }
    }
})
// Fixes:
// 
// Time Since Start works for first play but not resetEnemies
function enemyKilledMe (sprite: Sprite) {
    sprite.destroy(effects.fire, 100)
    music.powerDown.play()
    pause(1000)
    info.changeLifeBy(-1)
    setupPlayer()
    resetEnemies()
}
function doBehavior (mySprite: Sprite) {
    doChase(mySprite)
    if (movementExperiment == 1) {
        timer.after(3000, function () {
            doScatter(mySprite)
        })
        timer.after(7000, function () {
            doChase(mySprite)
        })
        timer.after(3000, function () {
            doScatter(mySprite)
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
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.InkyCorner, function (sprite, otherSprite) {
    if (sprite == Inky) {
        if (otherSprite == inkyPath1) {
            sprite.follow(inkyPath2, ghostSpeed)
        } else if (otherSprite == inkyPath2) {
            sprite.follow(inkyPath3, ghostSpeed)
        } else if (otherSprite == inkyPath3) {
            sprite.follow(inkyPath4, ghostSpeed)
        } else if (otherSprite == inkyPath4) {
            sprite.follow(inkyPath1, ghostSpeed)
        } else {
            sprite.follow(inkyPath1, ghostSpeed)
        }
    }
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
        pacmanSpeedNormal = 80
        pacmanSpeedDuringScared = 90
        if (easyMode == 0) {
            normalGhostSpeed = 75
            scaredGhostSpeed = 50
        } else {
            normalGhostSpeed = 40
            scaredGhostSpeed = 30
        }
    } else if (level == 1) {
        tiles.setTilemap(tilemap`level1`)
        pacmanSpeedNormal = 90
        pacmanSpeedDuringScared = 95
        if (easyMode == 0) {
            normalGhostSpeed = 85
            scaredGhostSpeed = 55
        } else {
            normalGhostSpeed = 50
            scaredGhostSpeed = 40
        }
    } else if (level == 2) {
        tiles.setTilemap(tilemap`level4`)
    } else if (level == 3) {
        tiles.setTilemap(tilemap`level3`)
    } else if (level == 4) {
        pacmanSpeedNormal = 100
        pacmanSpeedDuringScared = 100
        if (easyMode == 0) {
            normalGhostSpeed = 95
            scaredGhostSpeed = 60
        } else {
            normalGhostSpeed = 60
            scaredGhostSpeed = 50
        }
        tiles.setTilemap(tilemap`level5`)
    } else {
        game.over(true, effects.starField)
    }
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.PinkyCorner, function (sprite, otherSprite) {
    if (sprite == Pinky) {
        if (otherSprite == pinkyPath1) {
            sprite.follow(pinkyPath2, ghostSpeed)
        } else if (otherSprite == pinkyPath2) {
            sprite.follow(pinkyPath3, ghostSpeed)
        } else if (otherSprite == pinkyPath3) {
            sprite.follow(pinkyPath4, ghostSpeed)
        } else if (otherSprite == pinkyPath4) {
            sprite.follow(pinkyPath1, ghostSpeed)
        } else {
            sprite.follow(pinkyPath1, ghostSpeed)
        }
    }
})
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
        mySprite.follow(pinkyPath2, ghostSpeed)
    }
    if (mySprite == Inky) {
        mySprite.follow(inkyPath4, ghostSpeed)
    }
    if (mySprite == Clyde) {
        mySprite.follow(clydePath1, ghostSpeed)
    }
    if (mySprite == Blinky) {
        mySprite.follow(blinkyPath4, ghostSpeed)
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
let Inky: Sprite = null
let Pinky: Sprite = null
let timeTillNormal = 0
let pacman: Sprite = null
let pacmanSpeed = 0
let clydeScared = 0
let blinkyScared = 0
let inkyScared = 0
let pinkyScared = 0
let Blinky: Sprite = null
let ghostSpeed = 0
let Clyde: Sprite = null
let level = 0
let inkyPath4: Sprite = null
let inkyPath3: Sprite = null
let inkyPath2: Sprite = null
let inkyPath1: Sprite = null
let blinkyPath4: Sprite = null
let blinkyPath3: Sprite = null
let blinkyPath2: Sprite = null
let blinkyPath1: Sprite = null
let pinkyPath4: Sprite = null
let pinkyPath3: Sprite = null
let pinkyPath2: Sprite = null
let pinkyPath1: Sprite = null
let clydePath4: Sprite = null
let clydePath3: Sprite = null
let clydePath2: Sprite = null
let clydePath1: Sprite = null
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
let easyMode = 0
let changeGhostImagesExperiement = 0
let movementExperiment = 0
movementExperiment = 1
changeGhostImagesExperiement = 0
easyMode = 0
pacmanSpeedNormal = 100
pacmanSpeedDuringScared = 110
normalGhostSpeed = 50
scaredGhostSpeed = 40
let ghostBlinkingTime = 2000
ghostTime = 7000
inkyWaitTime = 5000
blinkyWaitTime = 10000
clydeWaitTime = 15000
pointsForPellets = 10
superPelletPoints = 50
ghostKilledCount = 0
clydePath1 = sprites.create(assets.image`none`, SpriteKind.ClydeCorner)
clydePath2 = sprites.create(assets.image`none`, SpriteKind.ClydeCorner)
clydePath3 = sprites.create(assets.image`none`, SpriteKind.ClydeCorner)
clydePath4 = sprites.create(assets.image`none`, SpriteKind.ClydeCorner)
pinkyPath1 = sprites.create(assets.image`none`, SpriteKind.PinkyCorner)
pinkyPath2 = sprites.create(assets.image`none`, SpriteKind.PinkyCorner)
pinkyPath3 = sprites.create(assets.image`none`, SpriteKind.PinkyCorner)
pinkyPath4 = sprites.create(assets.image`none`, SpriteKind.PinkyCorner)
blinkyPath1 = sprites.create(assets.image`none`, SpriteKind.BlinkyCorner)
blinkyPath2 = sprites.create(assets.image`none`, SpriteKind.BlinkyCorner)
blinkyPath3 = sprites.create(assets.image`none`, SpriteKind.BlinkyCorner)
blinkyPath4 = sprites.create(assets.image`none`, SpriteKind.BlinkyCorner)
inkyPath1 = sprites.create(assets.image`none`, SpriteKind.InkyCorner)
inkyPath2 = sprites.create(assets.image`none`, SpriteKind.InkyCorner)
inkyPath3 = sprites.create(assets.image`none`, SpriteKind.InkyCorner)
inkyPath4 = sprites.create(assets.image`none`, SpriteKind.InkyCorner)
inkyPath1.setPosition(176, 232)
inkyPath2.setPosition(196, 196)
inkyPath3.setPosition(232, 164)
inkyPath4.setPosition(232, 232)
clydePath1.setPosition(24, 158)
clydePath2.setPosition(64, 196)
clydePath3.setPosition(72, 232)
clydePath4.setPosition(24, 232)
pinkyPath1.setPosition(24, 72)
pinkyPath2.setPosition(54, 72)
pinkyPath3.setPosition(72, 16)
pinkyPath4.setPosition(16, 16)
blinkyPath1.setPosition(184, 24)
blinkyPath2.setPosition(240, 16)
blinkyPath3.setPosition(232, 84)
blinkyPath4.setPosition(184, 54)
scene.setBackgroundImage(assets.image`starWarsTitle`)
pause(3000)
scene.setBackgroundImage(assets.image`none`)
if (game.ask("Easy Mode")) {
    easyMode = 1
}
if (game.ask("Villains, Not Ships")) {
    changeGhostImagesExperiement = 1
}
game.showLongText("Welcome to Star Wars Pac-Man.  Collect as many dots as you can!!", DialogLayout.Bottom)
buildLevel(level)
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
