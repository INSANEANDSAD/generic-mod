
const flamethrower = extendContent(ItemTurret, "flamethrower", {
    init(){
		this.ammo(
		    Items.pyratite, flamePyra,
		    Items.surgeAlloy, flameSurge,
		    Vars.content.getByName(ContentType.item, "name-HE"), flameExplosive
		);
		this.super$init();
	  }
});

const pyraShoot = new Effect(34, e => {
	Draw.color(Pal.lightPyraFlame, Pal.darkPyraFlame, Color.gray, e.fin());
    Angles.randLenVectors(e.id, 32, e.finpow() * 190, e.rotation, 6, new Floatc2(){get: (x, y) => {
        Fill.circle(e.x + x, e.y + y, 1.2 + e.fout() * 2.4);
    }});
});

const blastShoot = new Effect(34, e => {
	Draw.color(Pal.missileYellow, Pal.missileYellowBack, Color.gray, e.fin());
    Angles.randLenVectors(e.id, 34, e.finpow() * 190, e.rotation, 6, new Floatc2(){get: (x, y) => {
        Fill.circle(e.x + x, e.y + y, 1.55 + e.fout() * 2.5);
    }});
});

const flamePyra=extend(BulletType,{});
flamePyra.damage=57;
flamePyra.hitSize=7;
flamePyra.lifetime=32;
flamePyra.length=12;
flamePyra.width=6;
flamePyra.speed=6;
flamePyra.pierce=true;
flamePyra.collidesAir=true;
flamePyra.ammoMultiplier=9;
flamePyra.statusDuration=360;
flamePyra.shootEffect=pyraShoot;
flamePyra.hitEffect=Fx.hitFlameSmall;
flamePyra.despawnEffect=Fx.none;
flamePyra.status=StatusEffects.burning;
flamePyra.hittable=false;

const flameExplosive=extend(BulletType,{});
flameExplosive.damage=88;
flameExplosive.hitSize=7;
flameExplosive.lifetime=32;
flameExplosive.length=12;
flameExplosive.width=6;
flameExplosive.speed=6;
flameExplosive.pierce=true;
flameExplosive.ammoMultiplier=12;
flameExplosive.collidesAir=true;
flameExplosive.statusDuration=360;
flameExplosive.shootEffect=blastShoot;
flameExplosive.hitEffect=Fx.hitFlameSmall;
flameExplosive.despawnEffect=Fx.none;
flameExplosive.status=StatusEffects.burning;
flameExplosive.hittable=false;

const flameSurge=extend(BulletType,{});
flameSurge.damage=70;
flameSurge.lightning=2;
flameSurge.lightningDamage=24;
flameSurge.lightningLength=8;
flameSurge.hitSize=7;
flameSurge.lifetime=32;
flameSurge.length=12;
flameSurge.width=6;
flameSurge.speed=6;
flameSurge.pierce=true;
flameSurge.ammoMultiplier=12;
flameSurge.collidesAir=true;
flameSurge.statusDuration=360;
flameSurge.shootEffect=pyraShoot;
flameSurge.hitEffect=Fx.hitFlameSmall;
flameSurge.despawnEffect=Fx.none;
flameSurge.status=StatusEffects.burning;
flameSurge.hittable=false;



