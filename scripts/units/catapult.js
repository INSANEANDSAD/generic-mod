const pyraShoot = new Effect(22, e => {
	Draw.color(Pal.lightPyraFlame, Pal.darkPyraFlame, Color.gray, e.fin());
    Angles.randLenVectors(e.id, 24, e.finpow() * 122, e.rotation, 6, new Floatc2(){get: (x, y) => {
        Fill.circle(e.x + x, e.y + y, 1.2 + e.fout() * 2.4);
    }});
});

const flamePyra=extend(BulletType,{});
flamePyra.damage=45;
flamePyra.hitSize=7;
flamePyra.lifetime=20;
flamePyra.length=12;
flamePyra.width=6;
flamePyra.speed=6;
flamePyra.pierce=true;
flamePyra.pierceBuilding=true;
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
artilleryFrag.splashDamage=52;
artilleryFrag.splashDamageRadius=36;
artilleryFrag.hitEffect=Fx.blastExplosion;
artilleryFrag.width=9;
artilleryFrag.height=9;
artilleryFrag.homingPower=0.04;
artilleryFrag.backColor=Pal.missileYellowBack;
artilleryFrag.frontColor=Pal.missileYellow;

const flameArtillery=extend(ArtilleryBulletType,{});
flameArtillery.lifetime=160;
flameArtillery.speed=2.5;
flameArtillery.splashDamage=150;
flameArtillery.splashDamageRadius=72;
flameArtillery.hitEffect=Fx.massiveExplosion;
flameArtillery.shootEffect=Fx.shootBig;
flameArtillery.width=16;
flameArtillery.height=16;
flameArtillery.backColor=Color.valueOf("ff7568");
flameArtillery.frontColor=Color.valueOf("ff7987");
flameArtillery.fragBullet=artilleryFrag;
flameArtillery.fragBullets=7;



const catapultFlam = extendContent(Weapon, "name-flamethrowerair", {});
catapultFlam.x=5;
catapultFlam.y=13;
catapultFlam.reload=9;
catapultFlam.rotate=true;
catapultFlam.recoil=1;
catapultFlam.mirror=true;
catapultFlam.bullet=flamePyra;
catapultFlam.shootSound=Sounds.flame;

const catapultFlamB = extendContent(Weapon, "name-flamethrowerair", {});
catapultFlamB.x=9;
catapultFlamB.y=-12;
catapultFlamB.reload=9;
catapultFlamB.rotate=true;
catapultFlamB.recoil=1;
catapultFlamB.mirror=true;
catapultFlamB.bullet=flamePyra;
catapultFlamB.shootSound=Sounds.flame;

const catapultArtillery = extendContent(Weapon, "name-artilleryairbigger", {	});

catapultArtillery.y=0;
catapultArtillery.x=0;
catapultArtillery.shootY=10;
catapultArtillery.reload=150;
catapultArtillery.recoil=2;
catapultArtillery.ejectEffect=Fx.casing2;
catapultArtillery.shootSound=Sounds.artillery;
catapultArtillery.rotate=true;
catapultArtillery.mirror=false;
catapultArtillery.bullet=flameArtillery;

const catapult = extendContent(UnitType, "catapult", {});
catapult.weapons.add(catapultFlam, catapultArtillery, catapultFlamB);

catapult.constructor = () => { 
	const unit = extend(UnitEntity, {});
	return unit
};
