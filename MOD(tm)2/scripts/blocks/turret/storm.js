const storm = extend(ItemTurret, "storm", {
  xSpacing: [-0.5, 0, 0.5],
  ySpacing: [-0.5, 0.1, -0.5],
  shotWidthY: 9,
  shotWidth: 9,
  shots: 3,
  burstSpacing: 3,
  barrels: 3
});

const stormBuildType = () => extendContent(ItemTurret.ItemTurretBuild, storm, {
   shoot(ammo){
        for(var i = 0; i < 3; i++){
            if(!(this instanceof Turret.TurretBuild) || !this.hasAmmo()) return;
            this.recoil = 4;
            this.heat = 1;
            Time.run(storm.burstSpacing * i, () => {
            for(var j = 0; j < storm.barrels; j++){
                if(!this.isValid() || !this.hasAmmo()) return;
                storm.tr.trns(this.rotation - 90, storm.xSpacing[j] * storm.shotWidth, (storm.size * Vars.tilesize / 2) + (storm.ySpacing[j] * storm.shotWidthY));
                this.bullet(ammo, this.rotation + Mathf.range(storm.inaccuracy));
                this.effects();
                this.useAmmo();
            }
            });
        }
    }
});
storm.buildType = stormBuildType;


	