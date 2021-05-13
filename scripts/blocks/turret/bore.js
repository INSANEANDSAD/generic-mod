
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
                unit.health -= (unit.maxHealth * 2 / unit.hitSize);
            };
      })); 
    }, 
    lifetime: 44,
    speed: 12,
    frontColor: Pal.sapBullet,
    backColor: Pal.sapBulletBack,
    damage: 750,
    width: 9,
    height: 13,
    hitEffect: Fx.blastExplosion,
    homingRange: 120,
    homingPower: 0.04,
    pierce: true,
    pierceCap: 3
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
    damage: 700,
    width: 9,
    height: 13,
    reloadMultiplier: 1.1,
    ammoMultiplier: 2,
    hitEffect: Fx.blastExplosion,
    despawnEffect: Fx.blastExplosion,
    homingRange: 120,
    homingPower: 0.04,
    pierce: true,
    pierceCap: 3
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
    damage: 400,
    width: 9,
    height: 13,
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
    damage: 575,
    fragBullet: Bullets.fragPlasticFrag,
    fragBullets: 20,
    width: 9,
    height: 13,
    pierce: true,
    pierceCap: 2,
    homingRange: 120,
    homingPower: 0.04,
    hitEffect: Fx.plasticExplosion,
    despawnEffect: Fx.plasticExplosion
});




