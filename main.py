@namespace
class SpriteKind:
    SuperFood = SpriteKind.create()
    Corner = SpriteKind.create()
"""

TODO:

Do Chase, Scatter, Frightened modes

Do a fun intermission after 5.

"""
# Fixes:
# 
# Time Since Start works for first play but not resetEnemies
def enemyKilledMe(sprite: Sprite):
    sprite.destroy(effects.fire, 100)
    music.power_down.play()
    info.change_life_by(-1)
    pause(2000)
    setupPlayer()
    resetEnemies()
def doBehavior(mySprite: Sprite):
    doChase(mySprite)
    if movementExperiment == 1:
        console.log_value("doChase", game.runtime())
        
        def on_after():
            doScatter(mySprite)
            console.log_value("doScatter", game.runtime())
        timer.after(3000, on_after)
        
        
        def on_after2():
            doChase(mySprite)
            console.log_value("doChase", game.runtime())
        timer.after(7000, on_after2)
        
        
        def on_after3():
            doScatter(mySprite)
            console.log_value("doScatter", game.runtime())
        timer.after(3000, on_after3)
        
def changeEnemiesNature(scared: bool):
    global pinkyScared, inkyScared, blinkyScared, clydeScared
    if scared:
        pinkyScared = 1
        inkyScared = 1
        blinkyScared = 1
        clydeScared = 1
    else:
        pinkyScared = 0
        inkyScared = 0
        blinkyScared = 0
        clydeScared = 0

def on_overlap_tile(sprite2, location):
    global ghostSpeed, pacmanSpeed, timeTillNormal
    tiles.set_tile_at(location, assets.tile("""
        transparency16
    """))
    music.power_up.play()
    info.change_score_by(superPelletPoints)
    ghostSpeed = scaredGhostSpeed
    pacmanSpeed = pacmanSpeedDuringScared
    controller.move_sprite(pacman, pacmanSpeed, pacmanSpeed)
    changeEnemiesNature(True)
    timeTillNormal = game.runtime() + ghostTime
    if changeGhostImagesExperiement == 0:
        Pinky.set_image(assets.image("""
            scaredGhost
        """))
    else:
        Pinky.set_image(assets.image("""
            scaredRoyalGuard
        """))
    if changeGhostImagesExperiement == 0:
        Inky.set_image(assets.image("""
            scaredGhost
        """))
    else:
        Inky.set_image(assets.image("""
            scaredDarthVadar
        """))
    if changeGhostImagesExperiement == 0:
        Blinky.set_image(assets.image("""
            scaredGhost
        """))
    else:
        Blinky.set_image(assets.image("""
            scaredBobaFett
        """))
    if changeGhostImagesExperiement == 0:
        Clyde.set_image(assets.image("""
            scaredGhost
        """))
    else:
        Clyde.set_image(assets.image("""
            scaredStormTrooper
        """))
    doFrightened(Pinky)
    doFrightened(Inky)
    doFrightened(Blinky)
    doFrightened(Clyde)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        superPellet
    """),
    on_overlap_tile)

def doChase(mySprite2: Sprite):
    mySprite2.follow(pacman, ghostSpeed)
def doFrightened(mySprite3: Sprite):
    doScatter(mySprite3)

def on_on_overlap(sprite3, otherSprite):
    otherSprite.set_velocity(0 - otherSprite.vx, 0 - otherSprite.vy)
sprites.on_overlap(SpriteKind.enemy, SpriteKind.enemy, on_on_overlap)

def animatePixels():
    light.show_animation(light.sparkle_animation, 500)
def resetFrightenedToNormal():
    global ghostSpeed, ghostKilledCount, pacmanSpeed
    ghostSpeed = normalGhostSpeed
    ghostKilledCount = 0
    animation.stop_animation(animation.AnimationTypes.ALL, Pinky)
    animation.stop_animation(animation.AnimationTypes.ALL, Inky)
    animation.stop_animation(animation.AnimationTypes.ALL, Blinky)
    animation.stop_animation(animation.AnimationTypes.ALL, Clyde)
    if changeGhostImagesExperiement == 0:
        Pinky.set_image(assets.image("""
            pinky
        """))
    else:
        Pinky.set_image(assets.image("""
            royalGuards
        """))
    if changeGhostImagesExperiement == 0:
        Inky.set_image(assets.image("""
            inky
        """))
    else:
        Inky.set_image(assets.image("""
            darthVadar
        """))
    if changeGhostImagesExperiement == 0:
        Blinky.set_image(assets.image("""
            blinky
        """))
    else:
        Blinky.set_image(assets.image("""
            bobaFett
        """))
    if changeGhostImagesExperiement == 0:
        Clyde.set_image(assets.image("""
            clyde
        """))
    else:
        Clyde.set_image(assets.image("""
            stormTrooper
        """))
    doBehavior(Blinky)
    doBehavior(Pinky)
    doBehavior(Inky)
    doBehavior(Clyde)
    changeEnemiesNature(False)
    pacmanSpeed = pacmanSpeedNormal
    controller.move_sprite(pacman, pacmanSpeed, pacmanSpeed)
def setupGame():
    info.set_score(0)
    info.set_life(3)
def buildLevel(level: number):
    global pacmanSpeedNormal, pacmanSpeedDuringScared, normalGhostSpeed, scaredGhostSpeed
    scene.set_background_color(15)
    if level == 0:
        light.set_pixel_color(0, 0xffff00)
        tiles.set_tilemap(tilemap("""
            level0
        """))
        pacmanSpeedNormal = 100
        pacmanSpeedDuringScared = 110
        if easyMode == 0:
            normalGhostSpeed = 90
            scaredGhostSpeed = 60
        else:
            normalGhostSpeed = 50
            scaredGhostSpeed = 40
    elif level == 1:
        light.set_pixel_color(1, 0xffff00)
        tiles.set_tilemap(tilemap("""
            level1
        """))
        pacmanSpeedNormal = 120
        pacmanSpeedDuringScared = 120
        if easyMode == 0:
            normalGhostSpeed = 90
            scaredGhostSpeed = 60
        else:
            normalGhostSpeed = 60
            scaredGhostSpeed = 50
    elif level == 2:
        light.set_pixel_color(2, 0xffff00)
        tiles.set_tilemap(tilemap("""
            level4
        """))
        pacmanSpeedNormal = 125
        pacmanSpeedDuringScared = 125
        if easyMode == 0:
            normalGhostSpeed = 110
            scaredGhostSpeed = 70
        else:
            normalGhostSpeed = 70
            scaredGhostSpeed = 60
    elif level == 3:
        light.set_pixel_color(3, 0xffff00)
        tiles.set_tilemap(tilemap("""
            level3
        """))
    elif level == 4:
        light.set_pixel_color(4, 0xffff00)
        tiles.set_tilemap(tilemap("""
            level5
        """))
    else:
        light.show_animation(light.rainbow_animation, 500)
        game.over(True, effects.star_field)
def animateScared():
    if pinkyScared == 1:
        if changeGhostImagesExperiement == 0:
            animation.run_image_animation(Pinky,
                assets.animation("""
                    flashingGhost
                """),
                200,
                True)
        else:
            animation.run_image_animation(Pinky,
                assets.animation("""
                    royalGuardScared
                """),
                200,
                True)
    if inkyScared == 1:
        if changeGhostImagesExperiement == 0:
            animation.run_image_animation(Inky, assets.animation("""
                flashingGhost
            """), 200, True)
        else:
            animation.run_image_animation(Inky,
                assets.animation("""
                    darthVadarScared
                """),
                200,
                True)
    if blinkyScared == 1:
        if changeGhostImagesExperiement == 0:
            animation.run_image_animation(Blinky,
                assets.animation("""
                    flashingGhost
                """),
                200,
                True)
        else:
            animation.run_image_animation(Blinky,
                assets.animation("""
                    bobaFettScared
                """),
                200,
                True)
    if clydeScared == 1:
        if changeGhostImagesExperiement == 0:
            animation.run_image_animation(Clyde,
                assets.animation("""
                    flashingGhost
                """),
                200,
                True)
        else:
            animation.run_image_animation(Clyde,
                assets.animation("""
                    stormtrooperScared
                """),
                200,
                True)
def setupPlayer():
    global pacman, pacmanSpeed
    pacman = sprites.create(assets.image("""upFacingFalcon"""), SpriteKind.player)
    tiles.place_on_tile(pacman, tiles.get_tile_location(8, 10))
    scene.camera_follow_sprite(pacman)
    pacmanSpeed = pacmanSpeedNormal
    controller.move_sprite(pacman, pacmanSpeed, pacmanSpeed)

def on_life_zero():
    game.over(False, effects.dissolve)
info.on_life_zero(on_life_zero)

def doScatter(mySprite4: Sprite):
    if mySprite4 == Pinky:
        mySprite4.follow(topRightCorner, ghostSpeed)
    if mySprite4 == Inky:
        mySprite4.follow(topLeftCorner, ghostSpeed)
    if mySprite4 == Blinky:
        mySprite4.follow(bottomLeftCorner, ghostSpeed)
    if mySprite4 == Clyde:
        mySprite4.follow(bottomRightCorner, ghostSpeed)
def resetEnemies():
    global ghostSpeed
    ghostSpeed = normalGhostSpeed
    tiles.place_on_tile(Pinky, tiles.get_tile_location(7, 6))
    tiles.place_on_tile(Inky, tiles.get_tile_location(7, 7))
    tiles.place_on_tile(Blinky, tiles.get_tile_location(8, 6))
    tiles.place_on_tile(Clyde, tiles.get_tile_location(8, 7))
    doBehavior(Pinky)
    
    def on_after4():
        doBehavior(Inky)
    timer.after(inkyWaitTime, on_after4)
    
    
    def on_after5():
        doBehavior(Blinky)
    timer.after(blinkyWaitTime, on_after5)
    
    
    def on_after6():
        doBehavior(Clyde)
    timer.after(clydeWaitTime, on_after6)
    
def setupEnemies():
    global ghostSpeed, Pinky, Inky, Blinky, Clyde
    ghostSpeed = normalGhostSpeed
    if changeGhostImagesExperiement == 0:
        Pinky = sprites.create(assets.image("""
            pinky
        """), SpriteKind.enemy)
    else:
        Pinky = sprites.create(assets.image("""
            royalGuards
        """), SpriteKind.enemy)
    tiles.place_on_random_tile(Pinky, assets.tile("""
        pinky
    """))
    tiles.replace_all_tiles(assets.tile("""
            pinky
        """),
        assets.tile("""
            transparency16
        """))
    doBehavior(Pinky)
    if changeGhostImagesExperiement == 0:
        Inky = sprites.create(assets.image("""
            inky
        """), SpriteKind.enemy)
    else:
        Inky = sprites.create(assets.image("""
            darthVadar
        """), SpriteKind.enemy)
    tiles.place_on_random_tile(Inky, assets.tile("""
        inky
    """))
    
    def on_after7():
        doBehavior(Inky)
    timer.after(inkyWaitTime, on_after7)
    
    tiles.replace_all_tiles(assets.tile("""
            inky
        """),
        assets.tile("""
            transparency16
        """))
    if changeGhostImagesExperiement == 0:
        Blinky = sprites.create(assets.image("""
            blinky
        """), SpriteKind.enemy)
    else:
        Blinky = sprites.create(assets.image("""
            bobaFett
        """), SpriteKind.enemy)
    tiles.place_on_random_tile(Blinky, assets.tile("""
        myTile10
    """))
    
    def on_after8():
        doBehavior(Blinky)
    timer.after(blinkyWaitTime, on_after8)
    
    tiles.replace_all_tiles(assets.tile("""
            myTile10
        """),
        assets.tile("""
            transparency16
        """))
    if changeGhostImagesExperiement == 0:
        Clyde = sprites.create(assets.image("""
            clyde
        """), SpriteKind.enemy)
    else:
        Clyde = sprites.create(assets.image("""
            stormTrooper
        """), SpriteKind.enemy)
    tiles.place_on_random_tile(Clyde, assets.tile("""
        clyde
    """))
    
    def on_after9():
        doBehavior(Clyde)
    timer.after(clydeWaitTime, on_after9)
    
    tiles.replace_all_tiles(assets.tile("""
            clyde
        """),
        assets.tile("""
            transparency16
        """))

def on_on_destroyed(sprite4):
    global Pinky, pinkyScared, Inky, inkyScared, Blinky, blinkyScared, Clyde, clydeScared
    if sprite4 == Pinky and pinkyScared == 1:
        if changeGhostImagesExperiement == 0:
            Pinky = sprites.create(assets.image("""
                pinky
            """), SpriteKind.enemy)
        else:
            Pinky = sprites.create(assets.image("""
                royalGuards
            """), SpriteKind.enemy)
        tiles.place_on_tile(Pinky, tiles.get_tile_location(7, 6))
        pinkyScared = 0
        doBehavior(Pinky)
    if sprite4 == Inky and inkyScared == 1:
        if changeGhostImagesExperiement == 0:
            Inky = sprites.create(assets.image("""
                inky
            """), SpriteKind.enemy)
        else:
            Inky = sprites.create(assets.image("""
                darthVadar
            """), SpriteKind.enemy)
        tiles.place_on_tile(Inky, tiles.get_tile_location(7, 7))
        inkyScared = 0
        
        def on_after10():
            doBehavior(Inky)
        timer.after(inkyWaitTime, on_after10)
        
    if sprite4 == Blinky and blinkyScared == 1:
        if changeGhostImagesExperiement == 0:
            Blinky = sprites.create(assets.image("""
                blinky
            """), SpriteKind.enemy)
        else:
            Blinky = sprites.create(assets.image("""
                bobaFett
            """), SpriteKind.enemy)
        tiles.place_on_tile(Blinky, tiles.get_tile_location(8, 6))
        blinkyScared = 0
        
        def on_after11():
            doBehavior(Blinky)
        timer.after(blinkyWaitTime, on_after11)
        
    if sprite4 == Clyde and clydeScared == 1:
        if changeGhostImagesExperiement == 0:
            Clyde = sprites.create(assets.image("""
                clyde
            """), SpriteKind.enemy)
        else:
            Clyde = sprites.create(assets.image("""
                stormTrooper
            """), SpriteKind.enemy)
        tiles.place_on_tile(Clyde, tiles.get_tile_location(8, 7))
        clydeScared = 0
        
        def on_after12():
            doBehavior(Clyde)
        timer.after(clydeWaitTime, on_after12)
        
sprites.on_destroyed(SpriteKind.enemy, on_on_destroyed)

def on_overlap_tile2(sprite5, location2):
    info.change_score_by(pointsForPellets)
    tiles.set_tile_at(location2, assets.tile("""
        transparency16
    """))
    music.pew_pew.play()
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        pellet
    """),
    on_overlap_tile2)

def on_on_overlap2(sprite6, otherSprite2):
    global ghostKilledCount
    ghostKilledCount += 1
    if otherSprite2 == Pinky and pinkyScared == 0:
        enemyKilledMe(sprite6)
    elif otherSprite2 == Pinky:
        otherSprite2.destroy(effects.fire, 100)
    else:
        pass
    if otherSprite2 == Inky and inkyScared == 0:
        enemyKilledMe(sprite6)
    elif otherSprite2 == Inky:
        otherSprite2.destroy(effects.fire, 100)
    else:
        pass
    if otherSprite2 == Blinky and blinkyScared == 0:
        enemyKilledMe(sprite6)
    elif otherSprite2 == Blinky:
        otherSprite2.destroy(effects.fire, 100)
    else:
        pass
    if otherSprite2 == Clyde and clydeScared == 0:
        enemyKilledMe(sprite6)
    elif otherSprite2 == Clyde:
        otherSprite2.destroy(effects.fire, 100)
    else:
        pass
    if ghostKilledCount == 1:
        info.change_score_by(200)
    elif ghostKilledCount == 2:
        info.change_score_by(400)
    elif ghostKilledCount == 3:
        info.change_score_by(800)
    else:
        info.change_score_by(1600)
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap2)

superFoodSpriteList: List[tiles.Location] = []
foodSpriteList: List[tiles.Location] = []
Clyde: Sprite = None
Blinky: Sprite = None
Inky: Sprite = None
Pinky: Sprite = None
timeTillNormal = 0
pacman: Sprite = None
ghostSpeed = 0
clydeScared = 0
blinkyScared = 0
inkyScared = 0
pinkyScared = 0
level2 = 0
bottomLeftCorner: Sprite = None
bottomRightCorner: Sprite = None
topLeftCorner: Sprite = None
topRightCorner: Sprite = None
ghostKilledCount = 0
superPelletPoints = 0
pointsForPellets = 0
clydeWaitTime = 0
blinkyWaitTime = 0
inkyWaitTime = 0
ghostTime = 0
scaredGhostSpeed = 0
normalGhostSpeed = 0
pacmanSpeedDuringScared = 0
pacmanSpeedNormal = 0
pacmanSpeed = 0
easyMode = 0
changeGhostImagesExperiement = 0
movementExperiment = 0
movementExperiment = 0
changeGhostImagesExperiement = 1
easyMode = 0
pacmanSpeed = 100
pacmanSpeedNormal = 100
pacmanSpeedDuringScared = 110
normalGhostSpeed = 90
scaredGhostSpeed = 60
ghostBlinkingTime = 2000
ghostTime = 7000
inkyWaitTime = 5000
blinkyWaitTime = 10000
clydeWaitTime = 15000
pointsForPellets = 10
superPelletPoints = 50
ghostKilledCount = 0
topRightCorner = sprites.create(assets.image("""
    none
"""), SpriteKind.Corner)
topLeftCorner = sprites.create(assets.image("""
    none
"""), SpriteKind.Corner)
bottomRightCorner = sprites.create(assets.image("""
    none
"""), SpriteKind.Corner)
bottomLeftCorner = sprites.create(assets.image("""
    none
"""), SpriteKind.Corner)
topRightCorner.set_position(16, 16)
topLeftCorner.set_position(16, 240)
bottomRightCorner.set_position(240, 16)
bottomLeftCorner.set_position(240, 240)
scene.set_background_image(assets.image("""
    starWarsTitle
"""))
animatePixels()
pause(1000)
scene.set_background_image(assets.image("""
    none
"""))
if game.ask("Easy Mode"):
    easyMode = 1
if game.ask("Ships, not Villans"):
    changeGhostImagesExperiement = 0
buildLevel(level2)
game.show_long_text("Welcome to Star Wars Pac-Man.  Collect as many dots as you can!!",
    DialogLayout.BOTTOM)
setupPlayer()
setupEnemies()

def on_on_update():
    if pacman.vx > 0:
        pacman.set_image(assets.image("""
            rightFacingFalcon
        """))
    elif pacman.vx < 0:
        pacman.set_image(assets.image("""
            leftFacingFalcon
        """))
    elif pacman.vy > 0:
        pacman.set_image(assets.image("""
            downFacingFalcon
        """))
    elif pacman.vy < 0:
        pacman.set_image(assets.image("""
            upFacingFalcon
        """))
    else:
        pass
game.on_update(on_on_update)

def on_on_update2():
    if pinkyScared == 1 or inkyScared == 1 or blinkyScared == 1 or clydeScared == 1:
        if not (game.runtime() > timeTillNormal - ghostBlinkingTime):
            animateScared()
        if game.runtime() > timeTillNormal:
            resetFrightenedToNormal()
game.on_update(on_on_update2)

def on_update_interval():
    global foodSpriteList, superFoodSpriteList, level2
    foodSpriteList = tiles.get_tiles_by_type(assets.tile("""
        pellet
    """))
    superFoodSpriteList = tiles.get_tiles_by_type(assets.tile("""
        superPellet
    """))
    if len(foodSpriteList) == 0 and len(superFoodSpriteList) == 0:
        level2 += 1
        buildLevel(level2)
        resetFrightenedToNormal()
        resetEnemies()
game.on_update_interval(500, on_update_interval)
