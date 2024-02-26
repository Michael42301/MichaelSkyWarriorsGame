gdjs.Level_321_32Part_322Code = {};
gdjs.Level_321_32Part_322Code.GDSkyBackgroundObjects1= [];
gdjs.Level_321_32Part_322Code.GDSkyBackgroundObjects2= [];
gdjs.Level_321_32Part_322Code.GDSkyBackgroundObjects3= [];
gdjs.Level_321_32Part_322Code.GDNewSpriteObjects1= [];
gdjs.Level_321_32Part_322Code.GDNewSpriteObjects2= [];
gdjs.Level_321_32Part_322Code.GDNewSpriteObjects3= [];
gdjs.Level_321_32Part_322Code.GDNewTextObjects1= [];
gdjs.Level_321_32Part_322Code.GDNewTextObjects2= [];
gdjs.Level_321_32Part_322Code.GDNewTextObjects3= [];
gdjs.Level_321_32Part_322Code.GDPlayerObjects1= [];
gdjs.Level_321_32Part_322Code.GDPlayerObjects2= [];
gdjs.Level_321_32Part_322Code.GDPlayerObjects3= [];
gdjs.Level_321_32Part_322Code.GDBomberObjects1= [];
gdjs.Level_321_32Part_322Code.GDBomberObjects2= [];
gdjs.Level_321_32Part_322Code.GDBomberObjects3= [];
gdjs.Level_321_32Part_322Code.GDNewText2Objects1= [];
gdjs.Level_321_32Part_322Code.GDNewText2Objects2= [];
gdjs.Level_321_32Part_322Code.GDNewText2Objects3= [];
gdjs.Level_321_32Part_322Code.GDSpaceObjects1= [];
gdjs.Level_321_32Part_322Code.GDSpaceObjects2= [];
gdjs.Level_321_32Part_322Code.GDSpaceObjects3= [];
gdjs.Level_321_32Part_322Code.GDBullet3Objects1= [];
gdjs.Level_321_32Part_322Code.GDBullet3Objects2= [];
gdjs.Level_321_32Part_322Code.GDBullet3Objects3= [];
gdjs.Level_321_32Part_322Code.GDEnemyObjects1= [];
gdjs.Level_321_32Part_322Code.GDEnemyObjects2= [];
gdjs.Level_321_32Part_322Code.GDEnemyObjects3= [];
gdjs.Level_321_32Part_322Code.GDExplosionObjects1= [];
gdjs.Level_321_32Part_322Code.GDExplosionObjects2= [];
gdjs.Level_321_32Part_322Code.GDExplosionObjects3= [];
gdjs.Level_321_32Part_322Code.GDEnemyBulletObjects1= [];
gdjs.Level_321_32Part_322Code.GDEnemyBulletObjects2= [];
gdjs.Level_321_32Part_322Code.GDEnemyBulletObjects3= [];
gdjs.Level_321_32Part_322Code.GDNewTiledSprite2Objects1= [];
gdjs.Level_321_32Part_322Code.GDNewTiledSprite2Objects2= [];
gdjs.Level_321_32Part_322Code.GDNewTiledSprite2Objects3= [];
gdjs.Level_321_32Part_322Code.GDNewTiledSpriteObjects1= [];
gdjs.Level_321_32Part_322Code.GDNewTiledSpriteObjects2= [];
gdjs.Level_321_32Part_322Code.GDNewTiledSpriteObjects3= [];
gdjs.Level_321_32Part_322Code.GDBomber2Objects1= [];
gdjs.Level_321_32Part_322Code.GDBomber2Objects2= [];
gdjs.Level_321_32Part_322Code.GDBomber2Objects3= [];
gdjs.Level_321_32Part_322Code.GDNewTiledSprite3Objects1= [];
gdjs.Level_321_32Part_322Code.GDNewTiledSprite3Objects2= [];
gdjs.Level_321_32Part_322Code.GDNewTiledSprite3Objects3= [];
gdjs.Level_321_32Part_322Code.GDNewText3Objects1= [];
gdjs.Level_321_32Part_322Code.GDNewText3Objects2= [];
gdjs.Level_321_32Part_322Code.GDNewText3Objects3= [];
gdjs.Level_321_32Part_322Code.GDNewTiledSprite4Objects1= [];
gdjs.Level_321_32Part_322Code.GDNewTiledSprite4Objects2= [];
gdjs.Level_321_32Part_322Code.GDNewTiledSprite4Objects3= [];
gdjs.Level_321_32Part_322Code.GDNewPanelSpriteObjects1= [];
gdjs.Level_321_32Part_322Code.GDNewPanelSpriteObjects2= [];
gdjs.Level_321_32Part_322Code.GDNewPanelSpriteObjects3= [];
gdjs.Level_321_32Part_322Code.GDEnemy2Objects1= [];
gdjs.Level_321_32Part_322Code.GDEnemy2Objects2= [];
gdjs.Level_321_32Part_322Code.GDEnemy2Objects3= [];
gdjs.Level_321_32Part_322Code.GDNewText4Objects1= [];
gdjs.Level_321_32Part_322Code.GDNewText4Objects2= [];
gdjs.Level_321_32Part_322Code.GDNewText4Objects3= [];
gdjs.Level_321_32Part_322Code.GDNewText5Objects1= [];
gdjs.Level_321_32Part_322Code.GDNewText5Objects2= [];
gdjs.Level_321_32Part_322Code.GDNewText5Objects3= [];
gdjs.Level_321_32Part_322Code.GDFinishLineObjects1= [];
gdjs.Level_321_32Part_322Code.GDFinishLineObjects2= [];
gdjs.Level_321_32Part_322Code.GDFinishLineObjects3= [];
gdjs.Level_321_32Part_322Code.GDNewText6Objects1= [];
gdjs.Level_321_32Part_322Code.GDNewText6Objects2= [];
gdjs.Level_321_32Part_322Code.GDNewText6Objects3= [];
gdjs.Level_321_32Part_322Code.GDFinishLine2Objects1= [];
gdjs.Level_321_32Part_322Code.GDFinishLine2Objects2= [];
gdjs.Level_321_32Part_322Code.GDFinishLine2Objects3= [];


gdjs.Level_321_32Part_322Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321_32Part_322Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Level_321_32Part_322Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_321_32Part_322Code.GDPlayerObjects2[i].addPolarForce(270, 200, 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321_32Part_322Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Level_321_32Part_322Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_321_32Part_322Code.GDPlayerObjects2[i].addPolarForce(90, 200, 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321_32Part_322Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Level_321_32Part_322Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_321_32Part_322Code.GDPlayerObjects2[i].addPolarForce(180, 200, 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321_32Part_322Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_321_32Part_322Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321_32Part_322Code.GDPlayerObjects1[i].addPolarForce(0, 200, 0);
}
}}

}


};gdjs.Level_321_32Part_322Code.mapOfGDgdjs_9546Level_9595321_959532Part_9595322Code_9546GDBullet3Objects2Objects = Hashtable.newFrom({"Bullet3": gdjs.Level_321_32Part_322Code.GDBullet3Objects2});
gdjs.Level_321_32Part_322Code.mapOfGDgdjs_9546Level_9595321_959532Part_9595322Code_9546GDBullet3Objects2Objects = Hashtable.newFrom({"Bullet3": gdjs.Level_321_32Part_322Code.GDBullet3Objects2});
gdjs.Level_321_32Part_322Code.mapOfGDgdjs_9546Level_9595321_959532Part_9595322Code_9546GDEnemy2Objects2Objects = Hashtable.newFrom({"Enemy2": gdjs.Level_321_32Part_322Code.GDEnemy2Objects2});
gdjs.Level_321_32Part_322Code.mapOfGDgdjs_9546Level_9595321_959532Part_9595322Code_9546GDBullet3Objects2Objects = Hashtable.newFrom({"Bullet3": gdjs.Level_321_32Part_322Code.GDBullet3Objects2});
gdjs.Level_321_32Part_322Code.mapOfGDgdjs_9546Level_9595321_959532Part_9595322Code_9546GDExplosionObjects2Objects = Hashtable.newFrom({"Explosion": gdjs.Level_321_32Part_322Code.GDExplosionObjects2});
gdjs.Level_321_32Part_322Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321_32Part_322Code.GDPlayerObjects2);
gdjs.Level_321_32Part_322Code.GDBullet3Objects2.length = 0;

{for(var i = 0, len = gdjs.Level_321_32Part_322Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_321_32Part_322Code.GDPlayerObjects2[i].getBehavior("FireBullet").Fire((gdjs.Level_321_32Part_322Code.GDPlayerObjects2[i].getPointX("")) + 120, (gdjs.Level_321_32Part_322Code.GDPlayerObjects2[i].getPointY("")) + 75, gdjs.Level_321_32Part_322Code.mapOfGDgdjs_9546Level_9595321_959532Part_9595322Code_9546GDBullet3Objects2Objects, 0, 600, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Level_321_32Part_322Code.GDBullet3Objects2.length ;i < len;++i) {
    gdjs.Level_321_32Part_322Code.GDBullet3Objects2[i].setAngle(90);
}
}{for(var i = 0, len = gdjs.Level_321_32Part_322Code.GDBullet3Objects2.length ;i < len;++i) {
    gdjs.Level_321_32Part_322Code.GDBullet3Objects2[i].getBehavior("Resizable").setSize(10, 10);
}
}{for(var i = 0, len = gdjs.Level_321_32Part_322Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_321_32Part_322Code.GDPlayerObjects2[i].getBehavior("FireBullet").Fire((gdjs.Level_321_32Part_322Code.GDPlayerObjects2[i].getPointX("")) + 120, (gdjs.Level_321_32Part_322Code.GDPlayerObjects2[i].getPointY("")) + 129, gdjs.Level_321_32Part_322Code.mapOfGDgdjs_9546Level_9595321_959532Part_9595322Code_9546GDBullet3Objects2Objects, 0, 600, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Level_321_32Part_322Code.GDBullet3Objects2.length ;i < len;++i) {
    gdjs.Level_321_32Part_322Code.GDBullet3Objects2[i].setAngle(90);
}
}{for(var i = 0, len = gdjs.Level_321_32Part_322Code.GDBullet3Objects2.length ;i < len;++i) {
    gdjs.Level_321_32Part_322Code.GDBullet3Objects2[i].getBehavior("Resizable").setSize(10, 10);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet3"), gdjs.Level_321_32Part_322Code.GDBullet3Objects2);
gdjs.copyArray(runtimeScene.getObjects("Enemy2"), gdjs.Level_321_32Part_322Code.GDEnemy2Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321_32Part_322Code.mapOfGDgdjs_9546Level_9595321_959532Part_9595322Code_9546GDEnemy2Objects2Objects, gdjs.Level_321_32Part_322Code.mapOfGDgdjs_9546Level_9595321_959532Part_9595322Code_9546GDBullet3Objects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321_32Part_322Code.GDBullet3Objects2 */
/* Reuse gdjs.Level_321_32Part_322Code.GDEnemy2Objects2 */
{for(var i = 0, len = gdjs.Level_321_32Part_322Code.GDBullet3Objects2.length ;i < len;++i) {
    gdjs.Level_321_32Part_322Code.GDBullet3Objects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level_321_32Part_322Code.GDEnemy2Objects2.length ;i < len;++i) {
    gdjs.Level_321_32Part_322Code.GDEnemy2Objects2[i].getBehavior("Health").Hit(25, true, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) + (150 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)), "", 0);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("SkyBackground"), gdjs.Level_321_32Part_322Code.GDSkyBackgroundObjects2);
{for(var i = 0, len = gdjs.Level_321_32Part_322Code.GDSkyBackgroundObjects2.length ;i < len;++i) {
    gdjs.Level_321_32Part_322Code.GDSkyBackgroundObjects2[i].setXOffset(gdjs.Level_321_32Part_322Code.GDSkyBackgroundObjects2[i].getXOffset() + (400 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Bomber"), gdjs.Level_321_32Part_322Code.GDBomberObjects2);
gdjs.copyArray(runtimeScene.getObjects("Bomber2"), gdjs.Level_321_32Part_322Code.GDBomber2Objects2);
gdjs.copyArray(runtimeScene.getObjects("NewText5"), gdjs.Level_321_32Part_322Code.GDNewText5Objects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321_32Part_322Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Level_321_32Part_322Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_321_32Part_322Code.GDPlayerObjects2[i].addForce(150, 0, 0);
}
}{for(var i = 0, len = gdjs.Level_321_32Part_322Code.GDBomber2Objects2.length ;i < len;++i) {
    gdjs.Level_321_32Part_322Code.GDBomber2Objects2[i].addForce(150, 0, 0);
}
}{for(var i = 0, len = gdjs.Level_321_32Part_322Code.GDNewText5Objects2.length ;i < len;++i) {
    gdjs.Level_321_32Part_322Code.GDNewText5Objects2[i].addForce(150, 0, 0);
}
}{for(var i = 0, len = gdjs.Level_321_32Part_322Code.GDBomberObjects2.length ;i < len;++i) {
    gdjs.Level_321_32Part_322Code.GDBomberObjects2[i].addForce(150, 0, 0);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy2"), gdjs.Level_321_32Part_322Code.GDEnemy2Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321_32Part_322Code.GDEnemy2Objects2.length;i<l;++i) {
    if ( gdjs.Level_321_32Part_322Code.GDEnemy2Objects2[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Level_321_32Part_322Code.GDEnemy2Objects2[k] = gdjs.Level_321_32Part_322Code.GDEnemy2Objects2[i];
        ++k;
    }
}
gdjs.Level_321_32Part_322Code.GDEnemy2Objects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321_32Part_322Code.GDEnemy2Objects2 */
gdjs.Level_321_32Part_322Code.GDExplosionObjects2.length = 0;

{for(var i = 0, len = gdjs.Level_321_32Part_322Code.GDEnemy2Objects2.length ;i < len;++i) {
    gdjs.Level_321_32Part_322Code.GDEnemy2Objects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level_321_32Part_322Code.mapOfGDgdjs_9546Level_9595321_959532Part_9595322Code_9546GDExplosionObjects2Objects, (( gdjs.Level_321_32Part_322Code.GDEnemy2Objects2.length === 0 ) ? 0 :gdjs.Level_321_32Part_322Code.GDEnemy2Objects2[0].getPointX("")) + 45, (( gdjs.Level_321_32Part_322Code.GDEnemy2Objects2.length === 0 ) ? 0 :gdjs.Level_321_32Part_322Code.GDEnemy2Objects2[0].getPointY("")) + 75, "");
}{gdjs.evtTools.sound.playSound(runtimeScene, "b10e78c09b693a36332e73b9c1a6ce981d0205b93efdf44612314b06eb2aa099_Explosion 5.aac", false, 20, 1);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Explosion"), gdjs.Level_321_32Part_322Code.GDExplosionObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321_32Part_322Code.GDExplosionObjects1.length;i<l;++i) {
    if ( gdjs.Level_321_32Part_322Code.GDExplosionObjects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.Level_321_32Part_322Code.GDExplosionObjects1[k] = gdjs.Level_321_32Part_322Code.GDExplosionObjects1[i];
        ++k;
    }
}
gdjs.Level_321_32Part_322Code.GDExplosionObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321_32Part_322Code.GDExplosionObjects1 */
{for(var i = 0, len = gdjs.Level_321_32Part_322Code.GDExplosionObjects1.length ;i < len;++i) {
    gdjs.Level_321_32Part_322Code.GDExplosionObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.Level_321_32Part_322Code.mapOfGDgdjs_9546Level_9595321_959532Part_9595322Code_9546GDEnemy2Objects2Objects = Hashtable.newFrom({"Enemy2": gdjs.Level_321_32Part_322Code.GDEnemy2Objects2});
gdjs.Level_321_32Part_322Code.mapOfGDgdjs_9546Level_9595321_959532Part_9595322Code_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Level_321_32Part_322Code.GDPlayerObjects2});
gdjs.Level_321_32Part_322Code.mapOfGDgdjs_9546Level_9595321_959532Part_9595322Code_9546GDExplosionObjects2Objects = Hashtable.newFrom({"Explosion": gdjs.Level_321_32Part_322Code.GDExplosionObjects2});
gdjs.Level_321_32Part_322Code.mapOfGDgdjs_9546Level_9595321_959532Part_9595322Code_9546GDExplosionObjects1Objects = Hashtable.newFrom({"Explosion": gdjs.Level_321_32Part_322Code.GDExplosionObjects1});
gdjs.Level_321_32Part_322Code.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Enemy2"), gdjs.Level_321_32Part_322Code.GDEnemy2Objects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321_32Part_322Code.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321_32Part_322Code.mapOfGDgdjs_9546Level_9595321_959532Part_9595322Code_9546GDEnemy2Objects2Objects, gdjs.Level_321_32Part_322Code.mapOfGDgdjs_9546Level_9595321_959532Part_9595322Code_9546GDPlayerObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321_32Part_322Code.GDEnemy2Objects2 */
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite2"), gdjs.Level_321_32Part_322Code.GDNewTiledSprite2Objects2);
/* Reuse gdjs.Level_321_32Part_322Code.GDPlayerObjects2 */
gdjs.Level_321_32Part_322Code.GDExplosionObjects2.length = 0;

{for(var i = 0, len = gdjs.Level_321_32Part_322Code.GDEnemy2Objects2.length ;i < len;++i) {
    gdjs.Level_321_32Part_322Code.GDEnemy2Objects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level_321_32Part_322Code.mapOfGDgdjs_9546Level_9595321_959532Part_9595322Code_9546GDExplosionObjects2Objects, (( gdjs.Level_321_32Part_322Code.GDEnemy2Objects2.length === 0 ) ? 0 :gdjs.Level_321_32Part_322Code.GDEnemy2Objects2[0].getPointX("")) + 45, (( gdjs.Level_321_32Part_322Code.GDEnemy2Objects2.length === 0 ) ? 0 :gdjs.Level_321_32Part_322Code.GDEnemy2Objects2[0].getPointY("")) + 75, "");
}{for(var i = 0, len = gdjs.Level_321_32Part_322Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_321_32Part_322Code.GDPlayerObjects2[i].getBehavior("Health").Hit(1, true, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Level_321_32Part_322Code.GDNewTiledSprite2Objects2.length ;i < len;++i) {
    gdjs.Level_321_32Part_322Code.GDNewTiledSprite2Objects2[i].getBehavior("Resizable").setWidth((( gdjs.Level_321_32Part_322Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Level_321_32Part_322Code.GDPlayerObjects2[0].getBehavior("Health").Health((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) * 110);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "b10e78c09b693a36332e73b9c1a6ce981d0205b93efdf44612314b06eb2aa099_Explosion 5.aac", false, 20, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321_32Part_322Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321_32Part_322Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level_321_32Part_322Code.GDPlayerObjects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Level_321_32Part_322Code.GDPlayerObjects1[k] = gdjs.Level_321_32Part_322Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level_321_32Part_322Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Bomber"), gdjs.Level_321_32Part_322Code.GDBomberObjects1);
gdjs.copyArray(runtimeScene.getObjects("Bomber2"), gdjs.Level_321_32Part_322Code.GDBomber2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs.Level_321_32Part_322Code.GDNewText3Objects1);
/* Reuse gdjs.Level_321_32Part_322Code.GDPlayerObjects1 */
gdjs.Level_321_32Part_322Code.GDExplosionObjects1.length = 0;

{for(var i = 0, len = gdjs.Level_321_32Part_322Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321_32Part_322Code.GDPlayerObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level_321_32Part_322Code.mapOfGDgdjs_9546Level_9595321_959532Part_9595322Code_9546GDExplosionObjects1Objects, (( gdjs.Level_321_32Part_322Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321_32Part_322Code.GDPlayerObjects1[0].getPointX("")) + 45, (( gdjs.Level_321_32Part_322Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321_32Part_322Code.GDPlayerObjects1[0].getPointY("")) + 75, "");
}{for(var i = 0, len = gdjs.Level_321_32Part_322Code.GDNewText3Objects1.length ;i < len;++i) {
    gdjs.Level_321_32Part_322Code.GDNewText3Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Level_321_32Part_322Code.GDBomberObjects1.length ;i < len;++i) {
    gdjs.Level_321_32Part_322Code.GDBomberObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level_321_32Part_322Code.GDBomber2Objects1.length ;i < len;++i) {
    gdjs.Level_321_32Part_322Code.GDBomber2Objects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "b10e78c09b693a36332e73b9c1a6ce981d0205b93efdf44612314b06eb2aa099_Explosion 5.aac", false, 20, 1);
}}

}


};gdjs.Level_321_32Part_322Code.mapOfGDgdjs_9546Level_9595321_959532Part_9595322Code_9546GDEnemy2Objects2Objects = Hashtable.newFrom({"Enemy2": gdjs.Level_321_32Part_322Code.GDEnemy2Objects2});
gdjs.Level_321_32Part_322Code.mapOfGDgdjs_9546Level_9595321_959532Part_9595322Code_9546GDBomberObjects2Objects = Hashtable.newFrom({"Bomber": gdjs.Level_321_32Part_322Code.GDBomberObjects2});
gdjs.Level_321_32Part_322Code.mapOfGDgdjs_9546Level_9595321_959532Part_9595322Code_9546GDExplosionObjects2Objects = Hashtable.newFrom({"Explosion": gdjs.Level_321_32Part_322Code.GDExplosionObjects2});
gdjs.Level_321_32Part_322Code.mapOfGDgdjs_9546Level_9595321_959532Part_9595322Code_9546GDExplosionObjects1Objects = Hashtable.newFrom({"Explosion": gdjs.Level_321_32Part_322Code.GDExplosionObjects1});
gdjs.Level_321_32Part_322Code.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Bomber"), gdjs.Level_321_32Part_322Code.GDBomberObjects2);
gdjs.copyArray(runtimeScene.getObjects("Enemy2"), gdjs.Level_321_32Part_322Code.GDEnemy2Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321_32Part_322Code.mapOfGDgdjs_9546Level_9595321_959532Part_9595322Code_9546GDEnemy2Objects2Objects, gdjs.Level_321_32Part_322Code.mapOfGDgdjs_9546Level_9595321_959532Part_9595322Code_9546GDBomberObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321_32Part_322Code.GDBomberObjects2 */
/* Reuse gdjs.Level_321_32Part_322Code.GDEnemy2Objects2 */
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.Level_321_32Part_322Code.GDNewTiledSpriteObjects2);
gdjs.Level_321_32Part_322Code.GDExplosionObjects2.length = 0;

{for(var i = 0, len = gdjs.Level_321_32Part_322Code.GDEnemy2Objects2.length ;i < len;++i) {
    gdjs.Level_321_32Part_322Code.GDEnemy2Objects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level_321_32Part_322Code.mapOfGDgdjs_9546Level_9595321_959532Part_9595322Code_9546GDExplosionObjects2Objects, (( gdjs.Level_321_32Part_322Code.GDEnemy2Objects2.length === 0 ) ? 0 :gdjs.Level_321_32Part_322Code.GDEnemy2Objects2[0].getPointX("")) + 45, (( gdjs.Level_321_32Part_322Code.GDEnemy2Objects2.length === 0 ) ? 0 :gdjs.Level_321_32Part_322Code.GDEnemy2Objects2[0].getPointY("")) + 75, "");
}{for(var i = 0, len = gdjs.Level_321_32Part_322Code.GDBomberObjects2.length ;i < len;++i) {
    gdjs.Level_321_32Part_322Code.GDBomberObjects2[i].getBehavior("Health").Hit(1, true, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Level_321_32Part_322Code.GDNewTiledSpriteObjects2.length ;i < len;++i) {
    gdjs.Level_321_32Part_322Code.GDNewTiledSpriteObjects2[i].getBehavior("Resizable").setWidth((( gdjs.Level_321_32Part_322Code.GDBomberObjects2.length === 0 ) ? 0 :gdjs.Level_321_32Part_322Code.GDBomberObjects2[0].getBehavior("Health").Health((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) * 150);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "b10e78c09b693a36332e73b9c1a6ce981d0205b93efdf44612314b06eb2aa099_Explosion 5.aac", false, 20, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bomber"), gdjs.Level_321_32Part_322Code.GDBomberObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321_32Part_322Code.GDBomberObjects1.length;i<l;++i) {
    if ( gdjs.Level_321_32Part_322Code.GDBomberObjects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Level_321_32Part_322Code.GDBomberObjects1[k] = gdjs.Level_321_32Part_322Code.GDBomberObjects1[i];
        ++k;
    }
}
gdjs.Level_321_32Part_322Code.GDBomberObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321_32Part_322Code.GDBomberObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Bomber2"), gdjs.Level_321_32Part_322Code.GDBomber2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs.Level_321_32Part_322Code.GDNewText3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321_32Part_322Code.GDPlayerObjects1);
gdjs.Level_321_32Part_322Code.GDExplosionObjects1.length = 0;

{for(var i = 0, len = gdjs.Level_321_32Part_322Code.GDBomberObjects1.length ;i < len;++i) {
    gdjs.Level_321_32Part_322Code.GDBomberObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level_321_32Part_322Code.mapOfGDgdjs_9546Level_9595321_959532Part_9595322Code_9546GDExplosionObjects1Objects, (( gdjs.Level_321_32Part_322Code.GDBomberObjects1.length === 0 ) ? 0 :gdjs.Level_321_32Part_322Code.GDBomberObjects1[0].getPointX("")) + 90, (( gdjs.Level_321_32Part_322Code.GDBomberObjects1.length === 0 ) ? 0 :gdjs.Level_321_32Part_322Code.GDBomberObjects1[0].getPointY("")) + 100, "");
}{for(var i = 0, len = gdjs.Level_321_32Part_322Code.GDNewText3Objects1.length ;i < len;++i) {
    gdjs.Level_321_32Part_322Code.GDNewText3Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Level_321_32Part_322Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321_32Part_322Code.GDPlayerObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level_321_32Part_322Code.GDBomber2Objects1.length ;i < len;++i) {
    gdjs.Level_321_32Part_322Code.GDBomber2Objects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "b10e78c09b693a36332e73b9c1a6ce981d0205b93efdf44612314b06eb2aa099_Explosion 5.aac", false, 20, 1);
}}

}


};gdjs.Level_321_32Part_322Code.mapOfGDgdjs_9546Level_9595321_959532Part_9595322Code_9546GDEnemy2Objects2Objects = Hashtable.newFrom({"Enemy2": gdjs.Level_321_32Part_322Code.GDEnemy2Objects2});
gdjs.Level_321_32Part_322Code.mapOfGDgdjs_9546Level_9595321_959532Part_9595322Code_9546GDBomber2Objects2Objects = Hashtable.newFrom({"Bomber2": gdjs.Level_321_32Part_322Code.GDBomber2Objects2});
gdjs.Level_321_32Part_322Code.mapOfGDgdjs_9546Level_9595321_959532Part_9595322Code_9546GDExplosionObjects2Objects = Hashtable.newFrom({"Explosion": gdjs.Level_321_32Part_322Code.GDExplosionObjects2});
gdjs.Level_321_32Part_322Code.mapOfGDgdjs_9546Level_9595321_959532Part_9595322Code_9546GDExplosionObjects1Objects = Hashtable.newFrom({"Explosion": gdjs.Level_321_32Part_322Code.GDExplosionObjects1});
gdjs.Level_321_32Part_322Code.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Bomber2"), gdjs.Level_321_32Part_322Code.GDBomber2Objects2);
gdjs.copyArray(runtimeScene.getObjects("Enemy2"), gdjs.Level_321_32Part_322Code.GDEnemy2Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321_32Part_322Code.mapOfGDgdjs_9546Level_9595321_959532Part_9595322Code_9546GDEnemy2Objects2Objects, gdjs.Level_321_32Part_322Code.mapOfGDgdjs_9546Level_9595321_959532Part_9595322Code_9546GDBomber2Objects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321_32Part_322Code.GDBomber2Objects2 */
/* Reuse gdjs.Level_321_32Part_322Code.GDEnemy2Objects2 */
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite3"), gdjs.Level_321_32Part_322Code.GDNewTiledSprite3Objects2);
gdjs.Level_321_32Part_322Code.GDExplosionObjects2.length = 0;

{for(var i = 0, len = gdjs.Level_321_32Part_322Code.GDEnemy2Objects2.length ;i < len;++i) {
    gdjs.Level_321_32Part_322Code.GDEnemy2Objects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level_321_32Part_322Code.mapOfGDgdjs_9546Level_9595321_959532Part_9595322Code_9546GDExplosionObjects2Objects, (( gdjs.Level_321_32Part_322Code.GDEnemy2Objects2.length === 0 ) ? 0 :gdjs.Level_321_32Part_322Code.GDEnemy2Objects2[0].getPointX("")) + 45, (( gdjs.Level_321_32Part_322Code.GDEnemy2Objects2.length === 0 ) ? 0 :gdjs.Level_321_32Part_322Code.GDEnemy2Objects2[0].getPointY("")) + 75, "");
}{for(var i = 0, len = gdjs.Level_321_32Part_322Code.GDBomber2Objects2.length ;i < len;++i) {
    gdjs.Level_321_32Part_322Code.GDBomber2Objects2[i].getBehavior("Health").Hit(1, true, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Level_321_32Part_322Code.GDNewTiledSprite3Objects2.length ;i < len;++i) {
    gdjs.Level_321_32Part_322Code.GDNewTiledSprite3Objects2[i].getBehavior("Resizable").setWidth((( gdjs.Level_321_32Part_322Code.GDBomber2Objects2.length === 0 ) ? 0 :gdjs.Level_321_32Part_322Code.GDBomber2Objects2[0].getBehavior("Health").Health((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) * 150);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "b10e78c09b693a36332e73b9c1a6ce981d0205b93efdf44612314b06eb2aa099_Explosion 5.aac", false, 20, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bomber2"), gdjs.Level_321_32Part_322Code.GDBomber2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321_32Part_322Code.GDBomber2Objects1.length;i<l;++i) {
    if ( gdjs.Level_321_32Part_322Code.GDBomber2Objects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Level_321_32Part_322Code.GDBomber2Objects1[k] = gdjs.Level_321_32Part_322Code.GDBomber2Objects1[i];
        ++k;
    }
}
gdjs.Level_321_32Part_322Code.GDBomber2Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Bomber"), gdjs.Level_321_32Part_322Code.GDBomberObjects1);
/* Reuse gdjs.Level_321_32Part_322Code.GDBomber2Objects1 */
gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs.Level_321_32Part_322Code.GDNewText3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321_32Part_322Code.GDPlayerObjects1);
gdjs.Level_321_32Part_322Code.GDExplosionObjects1.length = 0;

{for(var i = 0, len = gdjs.Level_321_32Part_322Code.GDBomber2Objects1.length ;i < len;++i) {
    gdjs.Level_321_32Part_322Code.GDBomber2Objects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level_321_32Part_322Code.mapOfGDgdjs_9546Level_9595321_959532Part_9595322Code_9546GDExplosionObjects1Objects, (( gdjs.Level_321_32Part_322Code.GDBomber2Objects1.length === 0 ) ? 0 :gdjs.Level_321_32Part_322Code.GDBomber2Objects1[0].getPointX("")) + 90, (( gdjs.Level_321_32Part_322Code.GDBomberObjects1.length === 0 ) ? 0 :gdjs.Level_321_32Part_322Code.GDBomberObjects1[0].getPointY("")) + 160, "");
}{for(var i = 0, len = gdjs.Level_321_32Part_322Code.GDNewText3Objects1.length ;i < len;++i) {
    gdjs.Level_321_32Part_322Code.GDNewText3Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Level_321_32Part_322Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321_32Part_322Code.GDPlayerObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level_321_32Part_322Code.GDBomberObjects1.length ;i < len;++i) {
    gdjs.Level_321_32Part_322Code.GDBomberObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "b10e78c09b693a36332e73b9c1a6ce981d0205b93efdf44612314b06eb2aa099_Explosion 5.aac", false, 20, 1);
}}

}


};gdjs.Level_321_32Part_322Code.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Enemy2"), gdjs.Level_321_32Part_322Code.GDEnemy2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321_32Part_322Code.GDEnemy2Objects1.length;i<l;++i) {
    if ( gdjs.Level_321_32Part_322Code.GDEnemy2Objects1[i].getX() <= gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) + 450 ) {
        isConditionTrue_0 = true;
        gdjs.Level_321_32Part_322Code.GDEnemy2Objects1[k] = gdjs.Level_321_32Part_322Code.GDEnemy2Objects1[i];
        ++k;
    }
}
gdjs.Level_321_32Part_322Code.GDEnemy2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321_32Part_322Code.GDEnemy2Objects1 */
{for(var i = 0, len = gdjs.Level_321_32Part_322Code.GDEnemy2Objects1.length ;i < len;++i) {
    gdjs.Level_321_32Part_322Code.GDEnemy2Objects1[i].addPolarForce(180, 200, 0);
}
}}

}


};gdjs.Level_321_32Part_322Code.mapOfGDgdjs_9546Level_9595321_959532Part_9595322Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level_321_32Part_322Code.GDPlayerObjects1});
gdjs.Level_321_32Part_322Code.mapOfGDgdjs_9546Level_9595321_959532Part_9595322Code_9546GDFinishLine2Objects1Objects = Hashtable.newFrom({"FinishLine2": gdjs.Level_321_32Part_322Code.GDFinishLine2Objects1});
gdjs.Level_321_32Part_322Code.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Bomber"), gdjs.Level_321_32Part_322Code.GDBomberObjects1);
gdjs.copyArray(runtimeScene.getObjects("Bomber2"), gdjs.Level_321_32Part_322Code.GDBomber2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs.Level_321_32Part_322Code.GDNewText3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText6"), gdjs.Level_321_32Part_322Code.GDNewText6Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.Level_321_32Part_322Code.GDNewTiledSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite2"), gdjs.Level_321_32Part_322Code.GDNewTiledSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite3"), gdjs.Level_321_32Part_322Code.GDNewTiledSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321_32Part_322Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_321_32Part_322Code.GDNewTiledSprite2Objects1.length ;i < len;++i) {
    gdjs.Level_321_32Part_322Code.GDNewTiledSprite2Objects1[i].getBehavior("Resizable").setWidth((( gdjs.Level_321_32Part_322Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321_32Part_322Code.GDPlayerObjects1[0].getBehavior("Health").Health((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) * 110);
}
}{for(var i = 0, len = gdjs.Level_321_32Part_322Code.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.Level_321_32Part_322Code.GDNewTiledSpriteObjects1[i].getBehavior("Resizable").setWidth((( gdjs.Level_321_32Part_322Code.GDBomberObjects1.length === 0 ) ? 0 :gdjs.Level_321_32Part_322Code.GDBomberObjects1[0].getBehavior("Health").Health((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) * 150);
}
}{for(var i = 0, len = gdjs.Level_321_32Part_322Code.GDNewTiledSprite3Objects1.length ;i < len;++i) {
    gdjs.Level_321_32Part_322Code.GDNewTiledSprite3Objects1[i].getBehavior("Resizable").setWidth((( gdjs.Level_321_32Part_322Code.GDBomber2Objects1.length === 0 ) ? 0 :gdjs.Level_321_32Part_322Code.GDBomber2Objects1[0].getBehavior("Health").Health((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) * 150);
}
}{for(var i = 0, len = gdjs.Level_321_32Part_322Code.GDNewText3Objects1.length ;i < len;++i) {
    gdjs.Level_321_32Part_322Code.GDNewText3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level_321_32Part_322Code.GDNewText6Objects1.length ;i < len;++i) {
    gdjs.Level_321_32Part_322Code.GDNewText6Objects1[i].hide();
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "20cf126eb6af22a79ebdefaf678127a45db4f1ff5475504b1bdacab0078821d1_Epic Boss Battle.aac", false, 10, 1);
}}

}


{


gdjs.Level_321_32Part_322Code.eventsList0(runtimeScene);
}


{


gdjs.Level_321_32Part_322Code.eventsList1(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.Level_321_32Part_322Code.eventsList2(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.Level_321_32Part_322Code.eventsList3(runtimeScene);
}


{


gdjs.Level_321_32Part_322Code.eventsList4(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.Level_321_32Part_322Code.eventsList5(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "r");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1 Part 1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FinishLine2"), gdjs.Level_321_32Part_322Code.GDFinishLine2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321_32Part_322Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321_32Part_322Code.mapOfGDgdjs_9546Level_9595321_959532Part_9595322Code_9546GDPlayerObjects1Objects, gdjs.Level_321_32Part_322Code.mapOfGDgdjs_9546Level_9595321_959532Part_9595322Code_9546GDFinishLine2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu2", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Level_321_32Part_322Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_321_32Part_322Code.GDSkyBackgroundObjects1.length = 0;
gdjs.Level_321_32Part_322Code.GDSkyBackgroundObjects2.length = 0;
gdjs.Level_321_32Part_322Code.GDSkyBackgroundObjects3.length = 0;
gdjs.Level_321_32Part_322Code.GDNewSpriteObjects1.length = 0;
gdjs.Level_321_32Part_322Code.GDNewSpriteObjects2.length = 0;
gdjs.Level_321_32Part_322Code.GDNewSpriteObjects3.length = 0;
gdjs.Level_321_32Part_322Code.GDNewTextObjects1.length = 0;
gdjs.Level_321_32Part_322Code.GDNewTextObjects2.length = 0;
gdjs.Level_321_32Part_322Code.GDNewTextObjects3.length = 0;
gdjs.Level_321_32Part_322Code.GDPlayerObjects1.length = 0;
gdjs.Level_321_32Part_322Code.GDPlayerObjects2.length = 0;
gdjs.Level_321_32Part_322Code.GDPlayerObjects3.length = 0;
gdjs.Level_321_32Part_322Code.GDBomberObjects1.length = 0;
gdjs.Level_321_32Part_322Code.GDBomberObjects2.length = 0;
gdjs.Level_321_32Part_322Code.GDBomberObjects3.length = 0;
gdjs.Level_321_32Part_322Code.GDNewText2Objects1.length = 0;
gdjs.Level_321_32Part_322Code.GDNewText2Objects2.length = 0;
gdjs.Level_321_32Part_322Code.GDNewText2Objects3.length = 0;
gdjs.Level_321_32Part_322Code.GDSpaceObjects1.length = 0;
gdjs.Level_321_32Part_322Code.GDSpaceObjects2.length = 0;
gdjs.Level_321_32Part_322Code.GDSpaceObjects3.length = 0;
gdjs.Level_321_32Part_322Code.GDBullet3Objects1.length = 0;
gdjs.Level_321_32Part_322Code.GDBullet3Objects2.length = 0;
gdjs.Level_321_32Part_322Code.GDBullet3Objects3.length = 0;
gdjs.Level_321_32Part_322Code.GDEnemyObjects1.length = 0;
gdjs.Level_321_32Part_322Code.GDEnemyObjects2.length = 0;
gdjs.Level_321_32Part_322Code.GDEnemyObjects3.length = 0;
gdjs.Level_321_32Part_322Code.GDExplosionObjects1.length = 0;
gdjs.Level_321_32Part_322Code.GDExplosionObjects2.length = 0;
gdjs.Level_321_32Part_322Code.GDExplosionObjects3.length = 0;
gdjs.Level_321_32Part_322Code.GDEnemyBulletObjects1.length = 0;
gdjs.Level_321_32Part_322Code.GDEnemyBulletObjects2.length = 0;
gdjs.Level_321_32Part_322Code.GDEnemyBulletObjects3.length = 0;
gdjs.Level_321_32Part_322Code.GDNewTiledSprite2Objects1.length = 0;
gdjs.Level_321_32Part_322Code.GDNewTiledSprite2Objects2.length = 0;
gdjs.Level_321_32Part_322Code.GDNewTiledSprite2Objects3.length = 0;
gdjs.Level_321_32Part_322Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.Level_321_32Part_322Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.Level_321_32Part_322Code.GDNewTiledSpriteObjects3.length = 0;
gdjs.Level_321_32Part_322Code.GDBomber2Objects1.length = 0;
gdjs.Level_321_32Part_322Code.GDBomber2Objects2.length = 0;
gdjs.Level_321_32Part_322Code.GDBomber2Objects3.length = 0;
gdjs.Level_321_32Part_322Code.GDNewTiledSprite3Objects1.length = 0;
gdjs.Level_321_32Part_322Code.GDNewTiledSprite3Objects2.length = 0;
gdjs.Level_321_32Part_322Code.GDNewTiledSprite3Objects3.length = 0;
gdjs.Level_321_32Part_322Code.GDNewText3Objects1.length = 0;
gdjs.Level_321_32Part_322Code.GDNewText3Objects2.length = 0;
gdjs.Level_321_32Part_322Code.GDNewText3Objects3.length = 0;
gdjs.Level_321_32Part_322Code.GDNewTiledSprite4Objects1.length = 0;
gdjs.Level_321_32Part_322Code.GDNewTiledSprite4Objects2.length = 0;
gdjs.Level_321_32Part_322Code.GDNewTiledSprite4Objects3.length = 0;
gdjs.Level_321_32Part_322Code.GDNewPanelSpriteObjects1.length = 0;
gdjs.Level_321_32Part_322Code.GDNewPanelSpriteObjects2.length = 0;
gdjs.Level_321_32Part_322Code.GDNewPanelSpriteObjects3.length = 0;
gdjs.Level_321_32Part_322Code.GDEnemy2Objects1.length = 0;
gdjs.Level_321_32Part_322Code.GDEnemy2Objects2.length = 0;
gdjs.Level_321_32Part_322Code.GDEnemy2Objects3.length = 0;
gdjs.Level_321_32Part_322Code.GDNewText4Objects1.length = 0;
gdjs.Level_321_32Part_322Code.GDNewText4Objects2.length = 0;
gdjs.Level_321_32Part_322Code.GDNewText4Objects3.length = 0;
gdjs.Level_321_32Part_322Code.GDNewText5Objects1.length = 0;
gdjs.Level_321_32Part_322Code.GDNewText5Objects2.length = 0;
gdjs.Level_321_32Part_322Code.GDNewText5Objects3.length = 0;
gdjs.Level_321_32Part_322Code.GDFinishLineObjects1.length = 0;
gdjs.Level_321_32Part_322Code.GDFinishLineObjects2.length = 0;
gdjs.Level_321_32Part_322Code.GDFinishLineObjects3.length = 0;
gdjs.Level_321_32Part_322Code.GDNewText6Objects1.length = 0;
gdjs.Level_321_32Part_322Code.GDNewText6Objects2.length = 0;
gdjs.Level_321_32Part_322Code.GDNewText6Objects3.length = 0;
gdjs.Level_321_32Part_322Code.GDFinishLine2Objects1.length = 0;
gdjs.Level_321_32Part_322Code.GDFinishLine2Objects2.length = 0;
gdjs.Level_321_32Part_322Code.GDFinishLine2Objects3.length = 0;

gdjs.Level_321_32Part_322Code.eventsList6(runtimeScene);

return;

}

gdjs['Level_321_32Part_322Code'] = gdjs.Level_321_32Part_322Code;
