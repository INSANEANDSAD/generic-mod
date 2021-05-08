
const lazy = require("name/lazy");


const blackhole = extendContent(ItemTurret, "black-hole", {
    init(){
		this.super$init();
		this.ammo(
		    Items.silicon, bhT,
		    Items.surgeAlloy, bhS
		);
	}
});

const bhT=extend(BasicBulletType,{
  update(b){
        Units.nearbyEnemies(b.team, b.x - 132, b.y - 132, 132 * 2, 132 * 2, cons(unit => {
            if(unit.within(b.x, b.y, 132)){
                unit.impulse(Tmp.v1.set(b).sub(unit).limit((132 + Interp.pow3In.apply(1 - (unit.dst(b) - 132) / 132) * 1.5)));
                if(b.timer.get(1, 6)){
                Damage.damage(b.team,b.x,b.y,132,50*(Math.max(1 - ((unit.dst(b) -  132)/132), 0.2)));
                }
            };
        }));
    }
});

/*
bhT.suckR=132;
bhT.suckD=50;
bhT.suckDscl=0.2;
bhT.suckS=1.5;
*/
bhT.damage=90;
bhT.trailEffect=Fx.massiveExplosion;
bhT.pierce=true;
bhT.speed=2;
bhT.frontColor=Color.valueOf("222222");
bhT.backColor=Color.valueOf("222222");
bhT.width=20;
bhT.height=20;
bhT.lifetime=310;
bhT.hitEffect=Fx.massiveExplosion;
bhT.pierceBuilding=true;
bhT.collidesTiles=true;

const bhS=extend(BasicBulletType,{
  update(b){
        Units.nearbyEnemies(b.team, b.x - 280, b.y - 280, 280 * 2, 280 * 2, cons(unit => {
            if(unit.within(b.x, b.y, 280)){
                unit.impulse(Tmp.v1.set(b).sub(unit).limit((280 + Interp.pow3In.apply(1 - (unit.dst(b) - 280) / 280) * 8.5)));
                if(b.timer.get(0,6)){ 
                Damage.damage(b.team,b.x,b.y,280,120*(Math.max(1 - ((unit.dst(b) -  280)/280), 0.05)));
                }
            };
        }));
    }
});

/*
bhS.suckR=280;
bhS.suckD=120;
bhS.suckDscl=0.05;
bhS.suckS=8.5;
*/
bhS.damageInterval=5;
bhS.damage=132;
bhS.trailEffect=Fx.massiveExplosion;
bhS.pierce=true;
bhS.speed=2;
bhS.frontColor=Color.valueOf("222222");
bhS.backColor=Color.valueOf("222222");
bhS.width=20;
bhS.height=20;
bhS.lifetime=310;
bhS.hitEffect=Fx.massiveExplosion;
bhS.pierceBuilding=true;
bhS.collidesTiles=true;