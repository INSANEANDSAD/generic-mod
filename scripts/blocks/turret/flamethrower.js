
const flamethrower = extendContent(ItemTurret, "flamethrower", {
    init(){
		this.ammo(
		    Items.pyratite, flamePyra 
		);
		this.super$init();
	  }
});

const pyraShoot = new Effect(34, e => {
	Draw.color(Pal.lightPyraFlame, Pal.darkPyraFlame, Color.gray, e.fin());
    Angles.randLenVectors(e.id, 32, e.finpow() * 190, e.rotation, 6, new Floatc2(){get: (x, y) => {
        Fill.circle(e.x + x, e.y + y, 1.2 + e.fout() * 2.6);
    }});
});

const flamePyra=extend(BulletType,{});
flamePyra.damage=55;
flamePyra.hitSize=7;
flamePyra.lifetime=32;
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

