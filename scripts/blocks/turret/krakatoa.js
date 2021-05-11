const lazy = require("name/lazy");
const volcano = extendContent(ItemTurret, "volcano", {
    init(){
		this.ammo(
		    Items.pyratite, volcanoPyra,
		    Vars.content.getByName(ContentType.item, "name-SAP"), volcanoSAP,
		    Vars.content.getByName(ContentType.item, "name-HE"), volcanoExplosive
		);
		this.super$init();
	  }
});

const volcanoShoot = new Effect(25, e => {
	Draw.color(Pal.lightPyraFlame, Pal.darkPyraFlame, Color.gray, e.fin());
    Angles.randLenVectors(e.id, 40, e.finpow() * 90, e.rotation, 6, new Floatc2(){get: (x, y) => {
        Fill.circle(e.x + x, e.y + y, 1.4 + e.fout() * 3.4);
    }});
});

const shellHit = new Effect(27, e => {
    var lThick = e.fout() * 3;
    var lDist = Mathf.lerp(15, 80, e.finpow());
    var lLen = Mathf.lerp(14, 1, e.fin());
    lazy.splashL(e.x, e.y, Pal.missileYellow, lThick, lDist, lLen, 36, e.id);
    var sAlpha = 0.3 + e.fout() * 0.7;
    var sRadius = Mathf.lerp(14, 1, e.fin());
    Angles.randLenVectors(e.id, 33, Mathf.lerp(5, 70, e.finpow()), new Floatc2(){get: (a, b) => {
        lazy.fillC(e.x + a, e.y + b, Color.gray, sAlpha, sRadius);
  }});
});


const volcanoPyra=extend(ArtilleryBulletType,{
	hit(b){
      this.super$hit(b,b.x,b.y);
      Units.nearbyEnemies(b.team, b.x - 64, b.y - 64, 64 * 2, 64 * 2, cons(unit => {
            if(unit.within(b.x, b.y, 64)){
                unit.health -= unit.health * 0.001; 
            };
      })); 
	}
});
volcanoPyra.lifetime=185;
volcanoPyra.speed=3.2;
volcanoPyra.splashDamage=140;
volcanoPyra.splashDamageRadius=64;
volcanoPyra.hitEffect=Fx.massiveExplosion;
volcanoPyra.shootEffect=volcanoShoot;
volcanoPyra.width=18;
volcanoPyra.height=18;
volcanoPyra.backColor=Color.valueOf("ffaa68");
volcanoPyra.frontColor=Color.valueOf("ff9987");
volcanoPyra.status=StatusEffects.burning;
volcanoPyra.hittable=false;
volcanoPyra.homingPower=0.03;
volcanoPyra.homingRange=80;


const volcanoExplosive=extend(ArtilleryBulletType,{
	hit(b){
      this.super$hit(b,b.x,b.y);
      Units.nearbyEnemies(b.team, b.x - 84, b.y - 84, 84 * 2, 84 * 2, cons(unit => {
            if(unit.within(b.x, b.y, 84)){
                unit.health -= unit.health * 0.0025; 
            };
      })); 
	}
});
volcanoExplosive.lifetime=210;
volcanoExplosive.speed=2.9;
volcanoExplosive.splashDamage=260;
volcanoExplosive.reloadMultiplier=1.15;
volcanoExplosive.splashDamageRadius=84;
volcanoExplosive.hitEffect=shellHit;
volcanoExplosive.shootEffect=volcanoShoot;
volcanoExplosive.width=20;
volcanoExplosive.height=20;
volcanoExplosive.homingPower=0.03;
volcanoExplosive.homingRange=80;
volcanoExplosive.height=20;
volcanoExplosive.backColor=Color.valueOf("ff7568");
volcanoExplosive.frontColor=Color.valueOf("ff7987");
volcanoExplosive.status=StatusEffects.blasted;
volcanoExplosive.hittable=false;


const volcanoSAP=extend(ArtilleryBulletType,{
	hit(b){
      this.super$hit(b,b.x,b.y);
      Units.nearbyEnemies(b.team, b.x - 84, b.y - 84, 84 * 2, 84 * 2, cons(unit => {
            if(unit.within(b.x, b.y, 84)){
                unit.health -= unit.health * 0.006; 
            };
      })); 
	}
});
volcanoSAP.lifetime=190;
volcanoSAP.speed=3.3;
volcanoSAP.splashDamage=200;
volcanoSAP.reloadMultiplier=1.4;
volcanoSAP.splashDamageRadius=84;
volcanoSAP.hitEffect=shellHit;
volcanoSAP.shootEffect=volcanoShoot;
volcanoSAP.width=20;
volcanoSAP.height=20;
volcanoSAP.homingPower=0.03;
volcanoSAP.homingRange=96;
volcanoSAP.height=20;
volcanoSAP.backColor=Color.valueOf("ff7588");
volcanoSAP.frontColor=Color.valueOf("ff9999");
volcanoSAP.status=StatusEffects.sapped;
volcanoSAP.hittable=false;