const downpour = extend(ItemTurret, "downpour", {
  xSpacing: [-1.22,-0.4,0.4,1.22,-1.22,-0.4,0.4,1.22],
  ySpacing: [0,0,0,0,-0.8,-0.8,-0.8,-0.8],
  shotWidthY: 9,
  shotWidth: 9,
  shots: 2,
  burstSpacing: 6,
  barrels: 8
});

const downpourBuildType = () => extendContent(ItemTurret.ItemTurretBuild, downpour, {
   shoot(ammo){
        for(var i = 0; i < downpour.shots; i++){
            if(!(this instanceof Turret.TurretBuild) || !this.hasAmmo()) return;
            this.recoil = 4;
            this.heat = 1;
            Time.run(downpour.burstSpacing * i, () => {
            for(var j = 0; j < downpour.barrels; j++){
                if(!this.isValid() || !this.hasAmmo()) return;
                downpour.tr.trns(this.rotation - 90, downpour.xSpacing[j] * downpour.shotWidth, (downpour.size * Vars.tilesize / 2) + (downpour.ySpacing[j] * downpour.shotWidthY));
                this.bullet(ammo, this.rotation + Mathf.range(downpour.inaccuracy));
                this.effects();
                this.useAmmo();
            }
            });
        }
    }
});
downpour.buildType = downpourBuildType;


	