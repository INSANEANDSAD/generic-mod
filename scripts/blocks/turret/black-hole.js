
const lazy = require("name/lazy");


const blackHole = extendContent(ItemTurret, "black-hole", {
    init(){
		this.super$init();
		this.ammo(
		    //Items.silicon, bhT,
		    Items.surgeAlloy, bhS
		);
	}
});

const bhT=extend(BasicBulletType,{
  update(b){
        Units.nearbyEnemies(b.team, b.x - 132, b.y - 132, 132 * 2, 132 * 2, cons(unit => {
            if(unit.within(b.x, b.y, 132)){
                unit.impulse(Tmp.v1.set(b).sub(unit).limit((132 + Interp.pow3In.apply(1 - (unit.dst(b) - 132) / 132) * 2.5)));
               
            };
        }));
        if(b.timer.get(1, 5)){
        Units.nearbyEnemies(b.team, b.x - 132, b.y - 132, 132 * 2, 132 * 2, cons(unit => {
            if(unit.within(b.x, b.y, 132)){
                Damage.damage(b.team,b.x,b.y,132,50*(Math.max(1 - ((unit.dst(b) -  132)/132), 0.2)));
            };
        }));
        }      
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
                unit.impulse(Tmp.v1.set(b).sub(unit).limit((280 + Interp.pow3In.apply(1 - (unit.dst(b) - 280) / 280) * 2 * unit.hitSize)));
            };
        }));
        if(b.timer.get(0,5)){ 
            Units.nearbyEnemies(b.team, b.x - 280, b.y - 280, 280 * 2, 280 * 2, cons(unit => {
                if(unit.within(b.x, b.y, 280)){
                    Damage.damage(b.team,b.x,b.y,280,40*(Math.max(1 - ((unit.dst(b) - 280)/280), 0.05)));
                    unit.health -= 20; 
                };
         })); 
        Damage.tileDamage(b.team,World.toTile(b.x),World.toTile(b.y),224,50);
         Units.nearbyEnemies(b.team, b.x - 64, b.y - 64, 64 * 2, 64 * 2, cons(unit => {
                if(unit.within(b.x, b.y, 64)){
                    unit.health -= (unit.maxHealth * 0.40 / unit.hitSize);
                };
         })); 
    }
}});

/* Vars.world.raycastEach(Vars.World.toTile(b.LastX), Vars.World.toTile(b.lastY), b.tileX(), b.tileY(), (x, y) => {
                const tile = Vars.world.build(x, y);
                if(tile == null) return;
                if(tile.collide(b) && !tile.dead && tile.team != b.team){
                    this.hitTile(b, tile, tile.health, true);
                }
                return false;
            });
*/

/*
bhS.suckR=280;
bhS.suckD=120;
bhS.suckDscl=0.05;
bhS.suckS=8.5;
*/
bhS.damageInterval=5;
bhS.damage=120;
bhS.splashDamage=40;
bhS.splashDamageRadius=40;
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