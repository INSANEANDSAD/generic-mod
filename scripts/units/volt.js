const lazy = require("name/lazy");
const pyraShoot = new Effect(32, e => {
	Draw.color(Color.valueOf("bfceff"), Color.valueOf("7575c8"), Color.gray, e.fin());
    Angles.randLenVectors(e.id, 24, e.finpow() * 150, e.rotation, 6, new Floatc2(){get: (x, y) => {
        Fill.circle(e.x + x, e.y + y, 1.2 + e.fout() * 2.4);
    }});
});


const flamePyra=extend(BulletType,{});
flamePyra.damage=160;
flamePyra.hitSize=7;
flamePyra.lifetime=25;
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
flamePyra.healPercent=0;
flamePyra.pierceBuilding=true;

const voltFlame = extendContent(Weapon, "name-flamethrowerair", {});
voltFlame.x=8;
voltFlame.y=-1;
voltFlame.reload=30;
voltFlame.shots=2;
voltFlame.rotateSpeed=6;
voltFlame.inaccuracy=10;
voltFlame.rotate=true;
voltFlame.recoil=1;
voltFlame.mirror=true;
voltFlame.bullet=flamePyra;
voltFlame.top=true;
voltFlame.shootSound=Sounds.flame;

const vB=extend(BasicBulletType,{});
vB.width=13;
vB.height=17;
vB.lifetime=100;
vB.speed=0.65;
vB.drag=0.01;
vB.keepVelocity=false;
vB.shootEffect=Fx.shootSmall;
vB.smokeEffect=Fx.shootSmallSmoke;
vB.splashDamage=160;
vB.damage=110;
vB.splashDamageRadius=72;
vB.lightningDamage=30;
vB.lightningLength=10;
vB.lightning=4;
vB.hitEffect=Fx.massiveExplosion;
vB.homingPower=0;
vB.homingRange=80;
vB.healPercent=0;

const voltBomb = extendContent(Weapon, "clear", {});
voltBomb.reload=2;
voltBomb.shootY=-16;
voltBomb.inaccuracy=6;
voltBomb.shots=1;
voltBomb.mirror=false;
voltBomb.ignoreRotation=true;
voltBomb.rotate=true;
voltBomb.x=0;
voltBomb.y=0;
voltBomb.shootCone=360;
voltBomb.rotateSpeed=16;
voltBomb.bullet=vB;


const volt = extendContent(UnitType, "volt", {});

volt.weapons.add(voltFlame, voltBomb);
volt.constructor = () => { 
	const unit = extend(LegsUnit, {});
	return unit
};
