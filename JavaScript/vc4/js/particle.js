(function(){
  stage = new createjs.Stage("myCanvas");
particleSystem = new particlejs.ParticleSystem();
stage.addChild(particleSystem.container);
particleSystem.importFromJson(
  {
      "bgColor": "#00000",
      "width": 1024,
      "height": 1024,
      "emitFrequency": 176,
      "startX": 528,
      "startXVariance": 1024,
      "startY": 42,
      "startYVariance": 1024,
      "initialDirection": 0,
      "initialDirectionVariance": 0,
      "initialSpeed": 0,
      "initialSpeedVariance": 0.1,
      "friction": "0.0035",
      "accelerationSpeed": 0.0285,
      "accelerationDirection": 96.7,
      "startScale": 0,
      "startScaleVariance": 0.37,
      "finishScale": "0",
      "finishScaleVariance": "0",
      "lifeSpan": 33,
      "lifeSpanVariance": "500",
      "startAlpha": "0.51",
      "startAlphaVariance": "1",
      "finishAlpha": "0",
      "finishAlphaVariance": "0",
      "shapeIdList": [
          "blur_circle"
      ],
      "startColor": {
          "hue": "0",
          "hueVariance": "0",
          "saturation": "0",
          "saturationVariance": 0,
          "luminance": "100",
          "luminanceVariance": "47"
      },
      "blendMode": true,
      "alphaCurveType": "0",
      "VERSION": "0.1.3"
  }
);
createjs.Ticker.framerate = 60;
createjs.Ticker.timingMode = createjs.Ticker.RAF;
setTimeout(function(){
  createjs.Ticker.addEventListener("tick", handleTick);
},0);

function handleTick() {
  particleSystem.update();
  stage.update();
}

})();
