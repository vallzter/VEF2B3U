"use strict";

/*
Bættu við class eigindið með heitinu active sem hefur litinn rauðann við div element sem geymir Jón
með aðferðinni .setAttribute() í JavaScript. Ath rauði liturinn á að sjást með CSS (0.5%)
*/
// 1 velja element 2 setattribute

//Dæmi1
document.getElementsByTagName("div")[0].setAttribute("class", "active");

//Dæmi2
//2. Fjarlægðu html elementið sem geymir Karen með JavaScript (0.5%)
var re = document.getElementsByTagName("div")[2];
re.remove();

//3. Notaðu replace() aðferðina til að breyta textanum Gunnar í Jakob (1%)
var rp = document.getElementsByTagName("div")[1];
var text = rp.firstChild.nodeValue;
text = text.replace("Gunnar","Jakob");
rp.firstChild.nodeValue = text;
//*****************************************************************************
/*
.innerHTML: Gerir þér kleift að ná í elementið og updatea það sem string. Það er hraðara 
			en "Dom Manipulation" þegar þú ert að breyta miklum kóða.
			Það ætti ekki að nota innerHTML þegar 
			það er verið að vinna með upplýsingar um user þvi það getur verið brot 
			á öryggisreglum að færa upplýsingar milli síða


Dom manipulation:	Gott að nota með methods og updatea elements 
					í text nodes. Gott þegar þu ert að breyta elements frá 
					DOM tré með mikið af siblings. Gæti verið vesen ef það er verið að breyta miklu þá er 
					það svo mikill kóði og þá verður það hægara en að nota innerHTML 		 