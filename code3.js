gdjs.Menu2Code = {};
gdjs.Menu2Code.GDSkyBackgroundObjects1= [];
gdjs.Menu2Code.GDSkyBackgroundObjects2= [];
gdjs.Menu2Code.GDNewSpriteObjects1= [];
gdjs.Menu2Code.GDNewSpriteObjects2= [];
gdjs.Menu2Code.GDNewTextObjects1= [];
gdjs.Menu2Code.GDNewTextObjects2= [];
gdjs.Menu2Code.GDPlayerObjects1= [];
gdjs.Menu2Code.GDPlayerObjects2= [];
gdjs.Menu2Code.GDBomberObjects1= [];
gdjs.Menu2Code.GDBomberObjects2= [];
gdjs.Menu2Code.GDNewText2Objects1= [];
gdjs.Menu2Code.GDNewText2Objects2= [];
gdjs.Menu2Code.GDSpaceObjects1= [];
gdjs.Menu2Code.GDSpaceObjects2= [];
gdjs.Menu2Code.GDBullet3Objects1= [];
gdjs.Menu2Code.GDBullet3Objects2= [];
gdjs.Menu2Code.GDEnemyObjects1= [];
gdjs.Menu2Code.GDEnemyObjects2= [];
gdjs.Menu2Code.GDExplosionObjects1= [];
gdjs.Menu2Code.GDExplosionObjects2= [];
gdjs.Menu2Code.GDNewText3Objects1= [];
gdjs.Menu2Code.GDNewText3Objects2= [];
gdjs.Menu2Code.GDNewText4Objects1= [];
gdjs.Menu2Code.GDNewText4Objects2= [];


gdjs.Menu2Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "201dd93e55cac15f0eb487098c11eb4e3131e4e313d33e7d8798b197f0c72cce_Goldcrest.aac", true, 50, 1);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("SkyBackground"), gdjs.Menu2Code.GDSkyBackgroundObjects1);
{for(var i = 0, len = gdjs.Menu2Code.GDSkyBackgroundObjects1.length ;i < len;++i) {
    gdjs.Menu2Code.GDSkyBackgroundObjects1[i].setXOffset(gdjs.Menu2Code.GDSkyBackgroundObjects1[i].getXOffset() + (200 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 2 Part 1", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Menu2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Menu2Code.GDSkyBackgroundObjects1.length = 0;
gdjs.Menu2Code.GDSkyBackgroundObjects2.length = 0;
gdjs.Menu2Code.GDNewSpriteObjects1.length = 0;
gdjs.Menu2Code.GDNewSpriteObjects2.length = 0;
gdjs.Menu2Code.GDNewTextObjects1.length = 0;
gdjs.Menu2Code.GDNewTextObjects2.length = 0;
gdjs.Menu2Code.GDPlayerObjects1.length = 0;
gdjs.Menu2Code.GDPlayerObjects2.length = 0;
gdjs.Menu2Code.GDBomberObjects1.length = 0;
gdjs.Menu2Code.GDBomberObjects2.length = 0;
gdjs.Menu2Code.GDNewText2Objects1.length = 0;
gdjs.Menu2Code.GDNewText2Objects2.length = 0;
gdjs.Menu2Code.GDSpaceObjects1.length = 0;
gdjs.Menu2Code.GDSpaceObjects2.length = 0;
gdjs.Menu2Code.GDBullet3Objects1.length = 0;
gdjs.Menu2Code.GDBullet3Objects2.length = 0;
gdjs.Menu2Code.GDEnemyObjects1.length = 0;
gdjs.Menu2Code.GDEnemyObjects2.length = 0;
gdjs.Menu2Code.GDExplosionObjects1.length = 0;
gdjs.Menu2Code.GDExplosionObjects2.length = 0;
gdjs.Menu2Code.GDNewText3Objects1.length = 0;
gdjs.Menu2Code.GDNewText3Objects2.length = 0;
gdjs.Menu2Code.GDNewText4Objects1.length = 0;
gdjs.Menu2Code.GDNewText4Objects2.length = 0;

gdjs.Menu2Code.eventsList0(runtimeScene);

return;

}

gdjs['Menu2Code'] = gdjs.Menu2Code;
