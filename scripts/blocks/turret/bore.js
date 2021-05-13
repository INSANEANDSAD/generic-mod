
const bore = extendContent(ItemTurret, "bore", {
    init(){
		this.ammo(
		    Items.graphite, boreDense,
		    Items.plastanium, borePlastic,
		    Vars.content.getByName(ContentType.item, "name-SAP"), boreSAP,
		    Vars.content.getByName(ContentType.item, "name-AP"), boreAP
		);
		this.super$init();
	  }
});


const boreAP=extend(BasicBulletType,{
	init(b) {
        if (!b) return;
        this.super$init(b);
        b.data = new Trail(12);
    },
    update(b){
        this.super$update(b);
        b.data.update(b.x, b.y);
    },
    draw(b){
        this.super$draw(b);
        b.data.draw(Pal.accent, 1.8);
    },
    hit(b){
      this.super$hit(b,b.x,b.y);
      Units.nearbyEnemies(b.team, b.x - 15, b.y - 13, 13 * 2, 15 * 2, cons(unit => {
            if(unit.within(b.x, b.y, 15)){
                unit.health -= (unit.maxHealth * 1.8 / unit.hitSize);
            };
      })); 
    }, 
    lifetime: 44,
    speed: 12,
    frontColor: Pal.sapBullet,
    backColor: Pal.sapBulletBack,
    damage: 765,
    width: 9,
    height: 13,
    hitEffect: Fx.blastExplosion,
    homingRange: 120,
    homingPower: 0.04,
    pierce: true,
    pierceBuilding: true,
    pierceCap: 4
});

const boreSAP=extend(BasicBulletType,{
	init(b) {
        if (!b) return;
        this.super$init(b);
        b.data = new Trail(14);
    },
    update(b){
        this.super$update(b);
        b.data.update(b.x, b.y);
    },
    draw(b){
        this.super$draw(b);
        b.data.draw(Pal.sapBulletBack, 1.8);
    },
    hit(b){
      this.super$hit(b,b.x,b.y);
      Units.nearbyEnemies(b.team, b.x - 15, b.y - 15, 15 * 2, 15 * 2, cons(unit => {
            if(unit.within(b.x, b.y, 15)){
                unit.health -= (unit.maxHealth * 5.5 / unit.hitSize);
            };
      })); 
    }, 
    lifetime: 44,
    speed: 12,
    frontColor: Pal.sapBullet,
    backColor: Pal.sapBulletBack,
    damage: 740,
    width: 9,
    height: 13,
    reloadMultiplier: 1.15,
    ammoMultiplier: 2,
    hitEffect: Fx.blastExplosion,
    despawnEffect: Fx.blastExplosion,
    homingRange: 120,
    homingPower: 0.04,
    pierce: true,
    pierceBuilding: true,
    pierceCap: 4
});

const boreDense=extend(BasicBulletType,{
	init(b) {
        if (!b) return;
        this.super$init(b);
        b.data = new Trail(7);
    },
    update(b){
        this.super$update(b);
        b.data.update(b.x, b.y);
    },
    draw(b){
        this.super$draw(b);
        b.data.draw(Pal.accent, 2);
    },
    hit(b){
      this.super$hit(b,b.x,b.y);
      Units.nearbyEnemies(b.team, b.x - 15, b.y - 15, 15 * 2, 15 * 2, cons(unit => {
            if(unit.within(b.x, b.y, 15)){
                unit.health -= (unit.maxHealth * 0.8 / unit.hitSize);
            };
      })); 
    }, 
    lifetime: 54,
    speed: 9,
    damage: 430,
    width: 9,
    height: 13,
    pierce: true,
    pierceCap: 2,
    pierceBuilding: true,
    hitEffect: Fx.flakExplosion,
    despawnEffect: Fx.flakExplosion,
    reloadMultiplier: 0.8
});


const borePlastic=extend(BasicBulletType,{
	init(b) {
        if (!b) return;
        this.super$init(b);
        b.data = new Trail(9);
    },
    update(b){
        this.super$update(b);
        b.data.update(b.x, b.y);
    },
    draw(b){
        this.super$draw(b);
        b.data.draw(Pal.plastaniumBack, 1.8);
    },
    hit(b){
      this.super$hit(b,b.x,b.y);
      Units.nearbyEnemies(b.team, b.x - 15, b.y - 15, 15 * 2, 15 * 2, cons(unit => {
            if(unit.within(b.x, b.y, 15)){
                unit.health -= (unit.maxHealth * 1.1 / unit.hitSize);
            };
      })); 
    }, 
    lifetime: 49,
    speed: 10.5,
    damage: 500,
    fragBullet: Bullets.fragPlasticFrag,
    fragBullets: 24,
    reloadMultiplier: 0.85,
    width: 9,
    height: 13,
    pierce: true,
    pierceCap: 3,
    homingRange: 120,
    homingPower: 0.04,
    pierceBuilding: true,
    hitEffect: Fx.plasticExplosion,
    despawnEffect: Fx.plasticExplosion
});




