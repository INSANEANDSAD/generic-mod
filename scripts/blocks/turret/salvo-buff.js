
const bullets = require("name/bullets");


const salvo = extendContent(ItemTurret, "salvo", {
    init(){
		this.super$init();
		this.ammo(
		    Items.pyratite, bullets.standardIncendiaryM,
	        Items.thorium, bullets.standardThoriumM,
	        Items.copper, bullets.standardCopperM,
	        Items.graphite, bullets.standardDenseM,
		    Items.silicon, bullets.standardHomingM  
		);
	}
});

