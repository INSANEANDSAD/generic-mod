
/*
const slagPierce=extend(LiquidBulletType,{});
slagPierce.damage=25;
slagPierce.pierce=true;
slagPierce.speed=2;
slagPierce.liquid=Liquids.slag;
slagPierce.width=9;
slagPierce.height=9;
slagPierce.lifetime=50;
slagPierce.knockback=0.4;
slagPierce.pierceBuilding=true;
slagPierce.collidesTiles=true;
slagPierce.pierceCap=100;
*/


const orbSilicon=extend(BasicBulletType,{});
orbSilicon.damage=29;
orbSilicon.pierce=true;
orbSilicon.speed=4;
orbSilicon.effectColor=Pal.bulletYellow;
orbSilicon.width=15;
orbSilicon.height=15;
orbSilicon.ammoMultiplier=2;
orbSilicon.lifetime=75;
orbSilicon.knockback=1.5;
orbSilicon.hitEffect=Fx.hitBulletBig;
orbSilicon.pierceBuilding=true;
orbSilicon.collidesTiles=true;
orbSilicon.homingPower=0.03;
orbSilicon.homingRange=70;

const orbPyra=extend(BasicBulletType,{});
orbPyra.damage=36;
orbPyra.pierce=true;
orbPyra.speed=3;
orbPyra.frontColor=Pal.lightishOrange;
orbPyra.backColor=Pal.lightOrange;
orbPyra.width=15;
orbPyra.height=15;
orbPyra.ammoMultiplier=2;
orbPyra.lifetime=100;
orbPyra.knockback=1.0;
orbPyra.hitEffect=Fx.hitBulletBig;
orbPyra.incendAmount=16;
orbPyra.pierceBuilding=true;
orbPyra.collidesTiles=true;

const orbBlast=extend(BasicBulletType,{});
orbBlast.damage=16;
orbBlast.splashDamage=22;
orbBlast.splashDamageRadius=22;
orbBlast.pierce=true;
orbBlast.speed=3;
orbBlast.frontColor=Pal.missileYellow;
orbBlast.backColor=Pal.missileYellowBack;
orbBlast.width=15;
orbBlast.height=15;
orbBlast.ammoMultiplier=3;
orbBlast.lifetime=100;
orbBlast.knockback=1.0;
orbBlast.hitEffect=Fx.hitBulletBig;
orbBlast.pierceBuilding=true;
orbBlast.collidesTiles=true;

const orb = extendContent(ItemTurret, "orb", {
    init(){
		this.ammo(
		    Items.pyratite, orbPyra,
	            Items.blastCompound, orbBlast,
		    Items.silicon, orbSilicon  
		);
		this.super$init();
	}
});
