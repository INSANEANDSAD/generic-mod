
const standardCopperM=extend(BasicBulletType,{})
standardCopperM.damage=13;
standardCopperM.speed=2.9;
standardCopperM.lifetime=70;
standardCopperM.width=9;
standardCopperM.length=11;
standardCopperM.ammoMultiplier=2;

const standardDenseM=extend(BasicBulletType,{})
standardDenseM.damage=26;
standardDenseM.speed=3.5;
standardDenseM.lifetime=60;
standardDenseM.reloadMultiplier=0.65;
standardDenseM.width=11;
standardDenseM.length=14;
standardDenseM.ammoMultiplier=4;

const standardIncendiaryM=extend(BasicBulletType,{})
standardIncendiaryM.damage=16;
standardIncendiaryM.speed=3.5;
standardIncendiaryM.lifetime=60;
standardIncendiaryM.ammoMultiplier=4;
standardIncendiaryM.width=10;
standardIncendiaryM.length=13;
standardIncendiaryM.frontColor=Pal.lightishOrange;
standardIncendiaryM.backColor=Pal.lightishOrange;
standardIncendiaryM.status=StatusEffects.burning
standardIncendiaryM.makeFire=true;

const standardHomingM=extend(BasicBulletType,{})
standardHomingM.damage=15;
standardHomingM.speed=3.5;
standardHomingM.lifetime=60;
standardHomingM.reloadMultiplier=1.5;
standardHomingM.width=11;
standardHomingM.length=14;
standardHomingM.ammoMultiplier=4;
standardHomingM.homingPower=0.07;

const standardThoriumM=extend(BasicBulletType,{})
standardThoriumM.damage=35;
standardThoriumM.speed=4;
standardThoriumM.lifetime=55;
standardThoriumM.width=11;
standardThoriumM.length=14;
standardThoriumM.ammoMultiplier=4;
standardThoriumM.shootEffect=Fx.shootBig;
standardThoriumM.smokeEffect=Fx.shootBigSmoke;



