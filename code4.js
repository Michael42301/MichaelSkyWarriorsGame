gdjs.Level_321_32Part_321Code = {};
gdjs.Level_321_32Part_321Code.GDSkyBackgroundObjects1= [];
gdjs.Level_321_32Part_321Code.GDSkyBackgroundObjects2= [];
gdjs.Level_321_32Part_321Code.GDNewSpriteObjects1= [];
gdjs.Level_321_32Part_321Code.GDNewSpriteObjects2= [];
gdjs.Level_321_32Part_321Code.GDNewTextObjects1= [];
gdjs.Level_321_32Part_321Code.GDNewTextObjects2= [];
gdjs.Level_321_32Part_321Code.GDPlayerObjects1= [];
gdjs.Level_321_32Part_321Code.GDPlayerObjects2= [];
gdjs.Level_321_32Part_321Code.GDBomberObjects1= [];
gdjs.Level_321_32Part_321Code.GDBomberObjects2= [];
gdjs.Level_321_32Part_321Code.GDNewText2Objects1= [];
gdjs.Level_321_32Part_321Code.GDNewText2Objects2= [];
gdjs.Level_321_32Part_321Code.GDSpaceObjects1= [];
gdjs.Level_321_32Part_321Code.GDSpaceObjects2= [];
gdjs.Level_321_32Part_321Code.GDBullet3Objects1= [];
gdjs.Level_321_32Part_321Code.GDBullet3Objects2= [];
gdjs.Level_321_32Part_321Code.GDEnemyObjects1= [];
gdjs.Level_321_32Part_321Code.GDEnemyObjects2= [];
gdjs.Level_321_32Part_321Code.GDExplosionObjects1= [];
gdjs.Level_321_32Part_321Code.GDExplosionObjects2= [];
gdjs.Level_321_32Part_321Code.GDNewText3Objects1= [];
gdjs.Level_321_32Part_321Code.GDNewText3Objects2= [];
gdjs.Level_321_32Part_321Code.GDNewText4Objects1= [];
gdjs.Level_321_32Part_321Code.GDNewText4Objects2= [];


gdjs.Level_321_32Part_321Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "201dd93e55cac15f0eb487098c11eb4e3131e4e313d33e7d8798b197f0c72cce_Goldcrest.aac", false, 50, 1);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("SkyBackground"), gdjs.Level_321_32Part_321Code.GDSkyBackgroundObjects1);
{for(var i = 0, len = gdjs.Level_321_32Part_321Code.GDSkyBackgroundObjects1.length ;i < len;++i) {
    gdjs.Level_321_32Part_321Code.GDSkyBackgroundObjects1[i].setXOffset(gdjs.Level_321_32Part_321Code.GDSkyBackgroundObjects1[i].getXOffset() + (200 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1 Part 2", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Level_321_32Part_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_321_32Part_321Code.GDSkyBackgroundObjects1.length = 0;
gdjs.Level_321_32Part_321Code.GDSkyBackgroundObjects2.length = 0;
gdjs.Level_321_32Part_321Code.GDNewSpriteObjects1.length = 0;
gdjs.Level_321_32Part_321Code.GDNewSpriteObjects2.length = 0;
gdjs.Level_321_32Part_321Code.GDNewTextObjects1.length = 0;
gdjs.Level_321_32Part_321Code.GDNewTextObjects2.length = 0;
gdjs.Level_321_32Part_321Code.GDPlayerObjects1.length = 0;
gdjs.Level_321_32Part_321Code.GDPlayerObjects2.length = 0;
gdjs.Level_321_32Part_321Code.GDBomberObjects1.length = 0;
gdjs.Level_321_32Part_321Code.GDBomberObjects2.length = 0;
gdjs.Level_321_32Part_321Code.GDNewText2Objects1.length = 0;
gdjs.Level_321_32Part_321Code.GDNewText2Objects2.length = 0;
gdjs.Level_321_32Part_321Code.GDSpaceObjects1.length = 0;
gdjs.Level_321_32Part_321Code.GDSpaceObjects2.length = 0;
gdjs.Level_321_32Part_321Code.GDBullet3Objects1.length = 0;
gdjs.Level_321_32Part_321Code.GDBullet3Objects2.length = 0;
gdjs.Level_321_32Part_321Code.GDEnemyObjects1.length = 0;
gdjs.Level_321_32Part_321Code.GDEnemyObjects2.length = 0;
gdjs.Level_321_32Part_321Code.GDExplosionObjects1.length = 0;
gdjs.Level_321_32Part_321Code.GDExplosionObjects2.length = 0;
gdjs.Level_321_32Part_321Code.GDNewText3Objects1.length = 0;
gdjs.Level_321_32Part_321Code.GDNewText3Objects2.length = 0;
gdjs.Level_321_32Part_321Code.GDNewText4Objects1.length = 0;
gdjs.Level_321_32Part_321Code.GDNewText4Objects2.length = 0;

gdjs.Level_321_32Part_321Code.eventsList0(runtimeScene);

return;

}

gdjs['Level_321_32Part_321Code'] = gdjs.Level_321_32Part_321Code;
