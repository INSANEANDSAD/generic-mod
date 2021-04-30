const lazy = require("name/lazy");
const pyraShoot = new Effect(32, e => {
	Draw.color(Pal.lightPyraFlame, Pal.darkPyraFlame, Color.gray, e.fin());
    Angles.randLenVectors(e.id, 24, e.finpow() * 220, e.rotation, 6, new Floatc2(){get: (x, y) => {
        Fill.circle(e.x + x, e.y + y, 1.2 + e.fout() * 2.4);
    }});
});

const shellHit = new Effect(24, e => {
  var lThick = e.fout() * 3;
  var lDist = Mathf.lerp(20, 100, e.finpow());
  var lLen = Mathf.lerp(14, 1, e.fin());
  lazy.splashL(e.x, e.y, Pal.missileYellow, lThick, lDist, lLen, 40, e.id);
  var sAlpha = 0.3 + e.fout() * 0.7;
  var sRadius = Mathf.lerp(14, 1, e.fin());
  Angles.randLenVectors(e.id, 36, Mathf.lerp(5, 84, e.finpow()), new Floatc2(){get: (a, b) => {
    lazy.fillC(e.x + a, e.y + b, Color.gray, sAlpha, sRadius);
  }});
});

const flakL=extend(FlakBulletType,{});
flakL.lifetime=30;
flakL.speed=10;
flakL.splashDamage=70;
flakL.damage=35;
flakL.splashDamageRadius=34;
flakL.hitEffect=Fx.flakExplosion;
flakL.status=StatusEffects.blasted;
flakL.length=31;
flakL.width=10;
flakL.collidesGround=true;
flakL.fragBullet=Bullets.fragSurge;
flakL.fragBullets=3;
flakL.shootEffect=Fx.shootBig;
flakL.explodeRange=24;

const trebuchetL=extend(LaserBulletType,{});
trebuchetL.damage=200;
trebuchetL.splashDamage=100;
trebuchetL.splashDamageRadius=36;
trebuchetL.hitEffect=Fx.flakExplosion;
trebuchetL.status=StatusEffects.shocked;
trebuchetL.length=340;
trebuchetL.lifetime=10
trebuchetL.width=28;

const flamePyra=extend(BulletType,{});
flamePyra.damage=110;
flamePyra.hitSize=7;
flamePyra.lifetime=36;
flamePyra.length=12;
flamePyra.width=6;
flamePyra.speed=6;
flamePyra.pierce=true;
flamePyra.collidesAir=true;
flamePyra.statusDuration=360;
flamePyra.shootEffect=pyraShoot;
flamePyra.hitEffect=Fx.hitFlameSmall;
flamePyra.despawnEffect=Fx.none;
flamePyra.status=StatusEffects.burning;
flamePyra.hittable=false;
flamePyra.ammoMultiplier=15;

const artilleryFrag=extend(ArtilleryBulletType,{});
artilleryFrag.lifetime=60;
artilleryFrag.speed=1.2;
artilleryFrag.splashDamage=70;
artilleryFrag.splashDamageRadius=40;
artilleryFrag.hitEffect=Fx.blastExplosion;
artilleryFrag.width=14;
artilleryFrag.height=14;
artilleryFrag.homingPower=0.04;
artilleryFrag.backColor=Pal.missileYellowBack;
artilleryFrag.frontColor=Pal.missileYellow;

const flameArtillery=extend(ArtilleryBulletType,{});
flameArtillery.lifetime=150;
flameArtillery.speed=3.2;
flameArtillery.splashDamage=245;
flameArtillery.splashDamageRadius=96;
flameArtillery.hitEffect=shellHit;
flameArtillery.width=24;
flameArtillery.height=24;
flameArtillery.backColor=Color.valueOf("ff7568");
flameArtillery.frontColor=Color.valueOf("ff7987");
flameArtillery.fragBullet=artilleryFrag;
flameArtillery.fragBullets=10;

function createFlakWeapon(x, y, bullet, reload) {
	const trebuchetFlak = extendContent(Weapon, "large-artillery", {});
	trebuchetFlak.x=x;
	trebuchetFlak.y=y;
	trebuchetFlak.reload=reload;
	trebuchetFlak.rotate=true;
	trebuchetFlak.recoil=1;
	trebuchetFlak.mirror=true;
	trebuchetFlak.bullet=bullet;
	trebuchetFlak.shootSound=Sounds.missile;
	trebuchetFlak.inaccuracy=3;
	return trebuchetFlak
}
const trebuchetFlame = extendContent(Weapon, "name-flamethrowerair", {});
trebuchetFlame.x=8;
trebuchetFlame.y=-24;
trebuchetFlame.reload=2;
trebuchetFlame.rotate=true;
trebuchetFlame.alternate=false;
trebuchetFlame.recoil=1;
trebuchetFlame.mirror=true;
trebuchetFlame.bullet=flamePyra;
trebuchetFlame.shootSound=Sounds.flame;

const trebuchetArtillery = extendContent(Weapon, "name-artilleryairbiggest", {});

trebuchetArtillery.y=0;
trebuchetArtillery.x=0;
trebuchetArtillery.reload=110;
trebuchetArtillery.recoil=7;
trebuchetArtillery.ejectEffect=Fx.casing2;
trebuchetArtillery.shootSound=Sounds.artillery;
trebuchetArtillery.rotate=true;
trebuchetArtillery.mirror=false;
trebuchetArtillery.bullet=flameArtillery;

const trebuchetLaser = extendContent(Weapon, "name-beam-weapon", {	});

trebuchetLaser.y=-25;
trebuchetLaser.x=33;
trebuchetLaser.reload=15;
trebuchetLaser.recoil=2;
trebuchetLaser.ejectEffect=Fx.casing2;
trebuchetLaser.shootSound=Sounds.beam;
trebuchetLaser.rotate=true;
trebuchetLaser.mirror=true;
trebuchetLaser.continuous=true;
trebuchetLaser.bullet=trebuchetL;

const trebuchet = extendContent(UnitType, "trebuchet", {});
trebuchet.weapons.add(createFlakWeapon(16,20,flakL,10), createFlakWeapon(20,-24,flakL,10), createFlakWeapon(11,37,flakL,10));
trebuchet.weapons.add(trebuchetArtillery, trebuchetFlame, trebuchetLaser);
trebuchet.constructor = () => { 
	const unit = extend(UnitEntity, {});
	return unit
};
