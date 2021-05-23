const downpour = extend(ItemTurret, "downpour", {
  init(){
    this.ammo(
        Items.graphite, downpourDense,
        Items.surgeAlloy, downpourSurge,
        Items.blastCompound, downpourBlast,
        Items.silicon, downpourHoming,
        Items.plastanium, downpourPlastic,
        Vars.content.getByName(ContentType.item, "name-AP"), downpourAP,
        Vars.content.getByName(ContentType.item, "name-SAP"), downpourSAP,
        Vars.content.getByName(ContentType.item, "name-HE"), downpourHE
    );
    this.super$init();
  },
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
const downpourDense=extend(MissileBulletType,{
    lifetime: 200,
    speed: 2.5,
    splashDamageRadius: 22,
    splashDamage: 24,
    frontColor: Color.valueOf("ffcc33"),
    backColor: Color.valueOf("ff7733"), 
    damage: 22,
    incendAmount: 2,
    statusDuration: 200,
    sprite: "shell",
    width: 9,
    height: 9,
    ammoMultiplier: 7,
    hitEffect: Fx.flakExplosion,
    reloadMultiplier: 0.9
});

const downpourPlastic=extend(MissileBulletType,{
    lifetime: 160,
    speed: 3.4,
    splashDamageRadius: 37,
    splashDamage: 42,
    frontColor: Color.valueOf("d8d97f"),
    backColor: Color.valueOf("fffac6"),
    damage: 20,
    incendAmount: 2,
    statusDuration: 200,
    sprite: "shell",
    width: 9,
    height: 9,
    ammoMultiplier: 12,
    fragBullet: Bullets.fragPlasticFrag,
    fragBullets: 5,
    hitEffect: Fx.plasticExplosion,
    homingPower: 0.06,
    homingRange: 45
});

const downpourHoming=extend(MissileBulletType,{
    lifetime: 135,
    speed: 3.9,
    splashDamageRadius: 28,
    splashDamage: 34,
    frontColor: Color.valueOf("ffcc33"),
    backColor: Color.valueOf("ff7733"),
    damage: 21,
    incendAmount: 2,
    statusDuration: 200,
    sprite: "shell",
    width: 9,
    height: 9,
    ammoMultiplier: 9,
    hitEffect: Fx.flakExplosion,
    homingPower: 0.09,
    homingRange: 60,
    reloadMultiplier: 1.3
});

const downpourBlast=extend(MissileBulletType,{  
    lifetime: 160,
    speed: 3.5,
    splashDamageRadius: 43,
    splashDamage: 61,
    frontColor: Color.valueOf("ffd2ae"),
    backColor: Color.valueOf("e58956"),
    damage: 22,
    incendAmount: 2,
    statusDuration: 200,
    sprite: "shell",
    width: 11,
    height: 11,
    ammoMultiplier: 11,
    hitEffect: Fx.blastExplosion,
    reloadMultiplier: 0.9,
    homingPower: 0.06,
    homingRange: 45
});

const downpourAP=extend(MissileBulletType,{  
    lifetime: 100,
    speed: 4.9,
    splashDamageRadius: 20,
    splashDamage: 31,
    frontColor: Color.valueOf("ffcc33"),
    backColor: Color.valueOf("ff7733"),
    damage: 71,
    incendAmount: 2,
    statusDuration: 200,
    sprite: "shell",
    width: 9,
    height: 9,
    ammoMultiplier: 9,
    hitEffect: Fx.flakExplosion,
    homingPower: 0.09,
    homingRange: 60,
    reloadMultiplier: 1
});

const downpourHE=extend(MissileBulletType,{  
    lifetime: 130,
    speed: 4,
    splashDamageRadius: 44,
    splashDamage: 64,
    frontColor: Color.valueOf("ffd2ae"),
    backColor: Color.valueOf("e58956"),
    damage: 21,
    incendAmount: 2,
    statusDuration: 200,
    sprite: "shell",
    width: 11,
    height: 11,
    ammoMultiplier: 14,
    hitEffect: Fx.blastExplosion,
    reloadMultiplier: 1.15,
    homingPower: 0.05,
    homingRange: 60
});

const downpourSurge=extend(MissileBulletType,{  
    lifetime: 135,
    speed: 3.9,
    splashDamageRadius: 39,
    splashDamage: 60,
    frontColor: Color.valueOf("ffff33"),
    backColor: Color.valueOf("ff9933"),
    damage: 0,
    incendAmount: 2,
    statusDuration: 200,
    sprite: "shell",
    width: 9,
    height: 9,
    lightning: 3,
    lightningLength: 13,
    lightningDamage: 16,
    ammoMultiplier: 9,
    hitEffect: Fx.flakExplosion,
    homingPower: 0.09,
    homingRange: 50,
    reloadMultiplier: 1.15
});

const downpourSAP=extend(MissileBulletType,{
    hit(b){
      this.super$hit(b,b.x,b.y);
      Units.nearbyEnemies(b.team, b.x - 60, b.y - 60, 60 * 2, 60 * 2, cons(unit => {
            if(unit.within(b.x, b.y, 60)){
                unit.health -= (unit.maxHealth * 0.02);
            };
      })); 
    }, 
    lifetime: 135,
    speed: 3.9,
    splashDamageRadius: 44,
    splashDamage: 60,
    frontColor: Pal.sapBullet,
    backColor: Pal.sapBulletBack,
    damage: 27,
    incendAmount: 2,
    statusDuration: 200,
    sprite: "shell",
    width: 9,
    height: 9,
    ammoMultiplier: 9,
    hitEffect: Fx.sapExplosion,
    homingPower: 0.09,
    homingRange: 50,
    reloadMultiplier: 1.2
});



	