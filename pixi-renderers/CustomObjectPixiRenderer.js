var gdjs;(function(r){class o{constructor(e,i,n){this._isContainerDirty=!0;this._debugDraw=null;this._debugDrawContainer=null;this._object=e,this._instanceContainer=i,this._pixiContainer=new PIXI.Container,this._threeGroup=typeof THREE!="undefined"?new THREE.Group:null,this._debugDrawRenderedObjectsPoints={},this._pixiContainer.sortableChildren=!0,this._debugDraw=null;const t=n.getLayer("");t&&(t.getRenderer().addRendererObject(this._pixiContainer,e.getZOrder()),this._threeGroup&&t.getRenderer().add3DRendererObject(this._threeGroup))}reinitialize(e,i){this._object=e,this._isContainerDirty=!0;const n=i.getLayer("");n&&(n.getRenderer().addRendererObject(this._pixiContainer,e.getZOrder()),this._threeGroup&&n.getRenderer().add3DRendererObject(this._threeGroup))}getRendererObject(){return this._pixiContainer}get3DRendererObject(){return this._threeGroup}_updatePIXIContainer(){this._pixiContainer.pivot.x=this._object.getUnscaledCenterX(),this._pixiContainer.pivot.y=this._object.getUnscaledCenterY(),this._pixiContainer.position.x=this._object.getX()+this._pixiContainer.pivot.x*Math.abs(this._object._scaleX),this._pixiContainer.position.y=this._object.getY()+this._pixiContainer.pivot.y*Math.abs(this._object._scaleY),this._pixiContainer.rotation=r.toRad(this._object.angle),this._pixiContainer.scale.x=this._object._scaleX,this._pixiContainer.scale.y=this._object._scaleY,this._pixiContainer.visible=!this._object.hidden,this._pixiContainer.alpha=this._object.opacity/255,this._isContainerDirty=!1}_updateThreeGroup(){if(!this._threeGroup)return;const e=this._object.getUnscaledCenterX(),i=this._object.getUnscaledCenterY();this._threeGroup.position.x=this._object.getX()+e*Math.abs(this._object._scaleX),this._threeGroup.position.y=this._object.getY()+i*Math.abs(this._object._scaleY),this._threeGroup.rotation.z=r.toRad(this._object.angle),this._threeGroup.scale.x=this._object._scaleX,this._threeGroup.scale.y=this._object._scaleY,this._threeGroup.visible=!this._object.hidden}ensureUpToDate(){this._isContainerDirty&&(this._updatePIXIContainer(),this._updateThreeGroup())}update(){this._isContainerDirty=!0}updateX(){this._pixiContainer.position.x=this._object.x+this._pixiContainer.pivot.x*Math.abs(this._object._scaleX),this._threeGroup&&(this._threeGroup.position.x=this._object.getX()+.5*Math.abs(this._object._scaleX))}updateY(){this._pixiContainer.position.y=this._object.y+this._pixiContainer.pivot.y*Math.abs(this._object._scaleY),this._threeGroup&&(this._threeGroup.position.y=this._object.getY()+.5*Math.abs(this._object._scaleY))}updateAngle(){this._pixiContainer.rotation=r.toRad(this._object.angle),this._threeGroup&&(this._threeGroup.rotation.z=r.toRad(this._object.angle))}updateOpacity(){this._pixiContainer.alpha=this._object.opacity/255}updateVisibility(){this._pixiContainer.visible=!this._object.hidden,this._threeGroup&&(this._threeGroup.visible=!this._object.hidden)}getPIXIContainer(){return this._pixiContainer}getPIXIRenderer(){return null}setLayerIndex(e,i){const n=e.getRenderer();let t=n.getRendererObject();e.isLightingLayer()&&(t=n.getLightingSprite()),!!t&&this._pixiContainer.children.indexOf(t)!==i&&(this._pixiContainer.removeChild(t),this._pixiContainer.addChildAt(t,i))}}r.CustomObjectPixiRenderer=o,r.CustomObjectRenderer=r.CustomObjectPixiRenderer})(gdjs||(gdjs={}));
//# sourceMappingURL=CustomObjectPixiRenderer.js.map