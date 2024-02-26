gdjs.MenuCode = {};
gdjs.MenuCode.GDSkyBackgroundObjects1= [];
gdjs.MenuCode.GDSkyBackgroundObjects2= [];
gdjs.MenuCode.GDNewSpriteObjects1= [];
gdjs.MenuCode.GDNewSpriteObjects2= [];
gdjs.MenuCode.GDNewTextObjects1= [];
gdjs.MenuCode.GDNewTextObjects2= [];
gdjs.MenuCode.GDPlayerObjects1= [];
gdjs.MenuCode.GDPlayerObjects2= [];
gdjs.MenuCode.GDBomberObjects1= [];
gdjs.MenuCode.GDBomberObjects2= [];
gdjs.MenuCode.GDNewText2Objects1= [];
gdjs.MenuCode.GDNewText2Objects2= [];
gdjs.MenuCode.GDSpaceObjects1= [];
gdjs.MenuCode.GDSpaceObjects2= [];


gdjs.MenuCode.eventsList0 = function(runtimeScene) {

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
gdjs.copyArray(runtimeScene.getObjects("SkyBackground"), gdjs.MenuCode.GDSkyBackgroundObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDSkyBackgroundObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDSkyBackgroundObjects1[i].setXOffset(gdjs.MenuCode.GDSkyBackgroundObjects1[i].getXOffset() + (200 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1 Part 1", false);
}}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDSkyBackgroundObjects1.length = 0;
gdjs.MenuCode.GDSkyBackgroundObjects2.length = 0;
gdjs.MenuCode.GDNewSpriteObjects1.length = 0;
gdjs.MenuCode.GDNewSpriteObjects2.length = 0;
gdjs.MenuCode.GDNewTextObjects1.length = 0;
gdjs.MenuCode.GDNewTextObjects2.length = 0;
gdjs.MenuCode.GDPlayerObjects1.length = 0;
gdjs.MenuCode.GDPlayerObjects2.length = 0;
gdjs.MenuCode.GDBomberObjects1.length = 0;
gdjs.MenuCode.GDBomberObjects2.length = 0;
gdjs.MenuCode.GDNewText2Objects1.length = 0;
gdjs.MenuCode.GDNewText2Objects2.length = 0;
gdjs.MenuCode.GDSpaceObjects1.length = 0;
gdjs.MenuCode.GDSpaceObjects2.length = 0;

gdjs.MenuCode.eventsList0(runtimeScene);

return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
