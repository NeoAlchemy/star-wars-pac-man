// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile14 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile15 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile17 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile12 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile13 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level0":
            case "level2":return tiles.createTilemap(hex`10001000060a0a0a0a0a0a0a0a0a0a0a0a0a0a090b0c0c0c0c0c0c0c0c0c0c0c0c0c0c0b0b0c06050c0c010d0c010c0c03090c0b0b0c040c0c0c0c0c0c0c0c0c0c040c0b0b0c0c0c0c0c030a0a050c0c0c0c0c0b0b0c0c0c0c0c0c0c0c0c0c0c0c0c0c0b0b0c020c010c020f0e020c010c020c0b0b0c040c0c0c041011040c0c0c040c0b0b0c0c0c010c0c0c0c0c0c010c0c0c0b0b0c0d0c0c0c030a0a050c0c0c0d0c0b0b0c0c0c020c0c0c0c0c0c020c0c0c0b0b0c020c040c030a0a050c040c020c0b0b0c0b0c0c0c0c0c0c0c0c0c0c0b0c0b0b0c08050c0c010c0d010c0c03070c0b0b0c0c0c0c0c0c0c0c0c0c0c0c0c0c0b080a0a0a0a0a0a0a0a0a0a0a0a0a0a07`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . 2 2 . . 2 . . 2 . . 2 2 . 2 
2 . 2 . . . . . . . . . . 2 . 2 
2 . . . . . 2 2 2 2 . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . 2 . 2 . 2 . . 2 . 2 . 2 . 2 
2 . 2 . . . 2 . . 2 . . . 2 . 2 
2 . . . 2 . . . . . . 2 . . . 2 
2 . . . . . 2 2 2 2 . . . . . 2 
2 . . . 2 . . . . . . 2 . . . 2 
2 . 2 . 2 . 2 2 2 2 . 2 . 2 . 2 
2 . 2 . . . . . . . . . . 2 . 2 
2 . 2 2 . . 2 . . 2 . . 2 2 . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile4,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile10,myTiles.tile3,myTiles.tile5,myTiles.tile9,myTiles.tile11,myTiles.tile12,myTiles.tile13,myTiles.tile14,myTiles.tile15,myTiles.tile16,myTiles.tile17], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile4":
            case "tile6":return tile6;
            case "myTile5":
            case "tile7":return tile7;
            case "myTile6":
            case "tile8":return tile8;
            case "myTile8":
            case "tile10":return tile10;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile7":
            case "tile9":return tile9;
            case "myTile9":
            case "tile11":return tile11;
            case "pinky":
            case "tile14":return tile14;
            case "myTile10":
            case "tile15":return tile15;
            case "inky":
            case "tile16":return tile16;
            case "clyde":
            case "tile17":return tile17;
            case "pellet":
            case "tile12":return tile12;
            case "superPellet":
            case "tile13":return tile13;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
