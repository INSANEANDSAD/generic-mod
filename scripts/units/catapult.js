const pyraShoot = new Effect(32, e => {
	Draw.color(Pal.lightPyraFlame, Pal.darkPyraFlame, Color.gray, e.fin());
    Angles.randLenVectors(e.id, 24, e.finpow() * 144, e.rotation, 6, new Floatc2(){get: (x, y) => {
        Fill.circle(e.x + x, e.y + y, 1.2 + e.fout() * 2.4);
    }});
});

const flamePyra=extend(BulletType,{});
flamePyra.damage=35;
flamePyra.hitSize=7;
flamePyra.lifetime=24;
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
artilleryFrag.splashDamage=65;
artilleryFrag.splashDamageRadius=40;
artilleryFrag.hitEffect=Fx.blastExplosion;
artilleryFrag.width=14;
artilleryFrag.height=14;
artilleryFrag.homingPower=0.04;
artilleryFrag.backColor=Pal.missileYellowBack;
artilleryFrag.frontColor=Pal.missileYellow;

const flameArtillery=extend(ArtilleryBulletType,{});
flameArtillery.lifetime=170;
flameArtillery.speed=2.5;
flameArtillery.splashDamage=90;
flameArtillery.splashDamageRadius=90;
flameArtillery.hitEffect=Fx.massiveExplosion;
flameArtillery.width=27;
flameArtillery.height=27;
flameArtillery.backColor=Color.valueOf("ff7568");
flameArtillery.frontColor=Color.valueOf("ff7987");
flameArtillery.fragBullet=artilleryFrag;
flameArtillery.fragBullets=8;



const catapultFlam = extendContent(Weapon, "name-flamethrowerair", {});
catapultFlam.x=4;
catapultFlam.y=12;
catapultFlam.reload=6;
catapultFlam.rotate=true;
catapultFlam.alternate=false;
catapultFlam.recoil=1;
catapultFlam.mirror=true;
catapultFlam.bullet=flamePyra;
catapultFlam.shootSound=Sounds.flame;

const catapultFlamB = extendContent(Weapon, "name-flamethrowerair", {});
catapultFlamB.x=8;
catapultFlamB.y=-12;
catapultFlamB.reload=6;
catapultFlamB.rotate=true;
catapultFlamB.alternate=false;
catapultFlamB.recoil=1;
catapultFlamB.mirror=true;
catapultFlamB.bullet=flamePyra;
catapultFlamB.shootSound=Sounds.flame;

const catapultArtillery = extendContent(Weapon, "name-artilleryairbigger", {	});

catapultArtillery.y=2.5;
catapultArtillery.x=0;
catapultArtillery.reload=110;
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
