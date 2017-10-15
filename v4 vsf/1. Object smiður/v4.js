//1) 0.5% Object Smiður
//Notaðu Object.create() til að búa til object út frá öðru objecti,f rjáls útfærsla.



let PersonAge = {
	year: 0,
	bornYear: 0,
	age: function(){
		return this.year - this.bornYear;
	}
}
//synir hvað hann er gamall með að gera árið í dag mínus árið sem hann fæddist


let dagsetning = new Date();
let person1 = Object.create(PersonAge);
person1.year = dagsetning.getFullYear();
person1.bornYear = 1998;
alert(person1.age());