const pyraShoot = new Effect(32, e => {
	Draw.color(Pal.lightPyraFlame, Pal.darkPyraFlame, Color.gray, e.fin());
    Angles.randLenVectors(e.id, 24, e.finpow() * 220, e.rotation, 6, new Floatc2(){get: (x, y) => {
        Fill.circle(e.x + x, e.y + y, 1.2 + e.fout() * 2.4);
    }});
});

const flakL=extend(FlakBulletType,{});
flakL.lifetime=70;
flakL.speed=6;
flakL.splashDamage=60;
flakL.splashDamageRadius=40;
flakL.hitEffect=Fx.flakExplosion;
flakL.status=StatusEffects.blasted;
flakL.length=21;
flakL.width=10;
flakL.collidesGround=true;
flakL.shootEffect=Fx.shootBig;
flakL.fragBullet=Bullets.standardThorium;
flakL.explodeRange=24;
flakL.fragBullets=3;

const trebuchetL=extend(LaserBulletType,{});
trebuchetL.damage=200;
trebuchetL.splashDamage=100;
trebuchetL.splashDamageRadius=36;
trebuchetL.hitEffect=Fx.flakExplosion;
trebuchetL.status=StatusEffects.shocked;
trebuchetL.length=310;
trebuchetL.width=16;

const flamePyra=extend(BulletType,{});
flamePyra.damage=80;
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
flameArtillery.speed=3.5;
flameArtillery.splashDamage=140;
flameArtillery.splashDamageRadius=88;
flameArtillery.hitEffect=Fx.massiveExplosion;
flameArtillery.width=27;
flameArtillery.height=27;
flameArtillery.backColor=Color.valueOf("ff7568");
flameArtillery.frontColor=Color.valueOf("ff7987");
flameArtillery.fragBullet=artilleryFrag;
flameArtillery.fragBullets=11;

function createFlakWeapon(x, y, bullet) {
	const trebuchetFlak = extendContent(Weapon, "large-artillery", {});
	trebuchetFlak.x=x;
	trebuchetFlak.y=y;
	trebuchetFlak.reload=8;
	trebuchetFlak.rotate=true;
	trebuchetFlak.recoil=1;
	trebuchetFlak.mirror=true;
	trebuchetFlak.bullet=bullet;
	trebuchetFlak.shootSound=Sounds.missile;
	return trebuchetFlak
}
const trebuchetFlame = extendContent(Weapon, "name-flamethrowerair", {});
trebuchetFlame.x=8;
trebuchetFlame.y=-24;
trebuchetFlame.reload=7;
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
trebuchetLaser.reload=80;
trebuchetLaser.recoil=2;
trebuchetLaser.ejectEffect=Fx.casing2;
trebuchetLaser.shootSound=Sounds.beam;
trebuchetLaser.rotate=true;
trebuchetLaser.mirror=true;
trebuchetLaser.continuous=true;
trebuchetLaser.bullet=trebuchetL;

const trebuchet = extendContent(UnitType, "trebuchet", {});
trebuchet.weapons.add(createFlakWeapon(16,20,flakL), createFlakWeapon(20,-24,flakL), createFlakWeapon(11,35,flakL));
trebuchet.weapons.add(trebuchetArtillery, trebuchetFlame, trebuchetLaser);
trebuchet.constructor = () => { 
	const unit = extend(UnitEntity, {});
	return unit
};
