
//Dæmi 2 Prototypes
/*a) Búðu til þrjár geimflauga objecta með objectsmið og prototype sem hafa sömu
*gildin. Geimflaug hefur property: name með gildinu “SpaceRacer”, life með
*gildinu 10. Geimflaug hefur einnig method showName() sem birtir nafn hennar. 
*/
let Geymskip = {
	name: 'SpaceRacer',
	life: 10,
	showname: function(){
		alert(this.name);
	}	
}

let geymskip1 = Object.create(Geymskip);
let geymskip2 = Object.create(Geymskip);
let geymskip3 = Object.create(Geymskip);

//b) Uppfærðu nafn á einni geimflauginni í eitthvað annað og birtu nafn hennar.
geymskip1.name = "SpeedRacer";
geymskip1.showname()

//c) Notað svo Prototype til að bæta við nýrri method fly sem hækkar gildi um 1 við
//speed og property speed með gildinu 5. Þetta fá allar flaugarnar.
Geymskip.prototype.speed = 5;
Geymskip.prototype.fly = function(){
	return 1 + this.speed;
}

//d) Búðu til fjórðu flaugina útfrá objectsmið en með aðferð sem hinar hafa ekki,
//shoot() sem lækkar life um 1. 
let geymskip4 = Object.create(Geymskip);
geymskip4.prototype.shoot = function() {
    return this.life - 1;
};


}