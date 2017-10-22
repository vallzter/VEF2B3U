/*
Verkefni 8 

Valgeir Ingi

19.10.2017

1.Hver er munurinn á for, forEach, for-in og for-of lykkjum?
	for loop--> Test statementið mun virkjast ef tiltekið ástand er true eða ekki. 
	Ef það er true þá mun kóðin sem er í loopuni vera framkvæmdur ef 
	hann er ekki true þá fer hann úr loopunni.
	-------------------------------------------
	forEach--> Aðferðin framkvæmir tiltekna aðferð einu sinni per array 
	element og framkvæmir callback fyrir hvern array lið og tekur einungis 
	að sér 3 arguments sem eru value, index og array.
	-------------------------------------------------
	for-in--> er notað til að skila nöfnunum og fjölda fallana
	í objectinu.
	--------------------------------------------------
	for-of--> Virkar eins og for-in en skilar array values í staðin.
-----------------------------------------------------------

2. Gerðu	eitthvað	nytsamlegt	með	eftirfarandi	kóðabút:

var	divs	=	document.getElementsByTagName('div');	
for	(var	i	=	0,	div;	div	=	divs[i];	i++)	{		
	
}
-----------------------------------------------------
3. Hvað	er	template	literals?	Komdu	með	kóðasýnidæmi	ásamt	skýringum
	--->Template literals eru strengir sem leyfa embedded expressions. Maður getur notað multi-line strengi og interpolation strengi með þeim.
	Dæmi-->

	var lengd = 50
	var breidd = 25
	console.log(`seventyfive is ${lengd + breidd} and
				not ${2 * lengd + breidd}.`);

4. Prófaðu	að	nota	Map	object
	

5. Hvað	er	Class	í	JavaScript	og	hvernig	tengist	það	prototype?
	Það eru ekki classar í javascript því allt í javascript eru objects og fá properties 
	frá prototypeinu þeirra.

6.Hvað er Closures, hvernig sérðu fyrir þér gagnsemi þess? Komdu með kóðasýnidæmi ásamt	skýringum.
	Javascript variables eru tvenn, local og global. Global variable getur verið breytt i private með aðferðinni closure. Closure er innri function sem hefur aðgang að ytri functioninu.

7. Hvað	er	Arguments	object?	Hvenær	getur	verið	nytsamlegt	að	nota	hann?	Komdu	með	
kóðasýnidæmi	með	notkun	ásamt	skýringum
	Javascript aðgerðir hafa innbyggt object sem kallast the arguments object. Það object inniheldur arrays af argumentinu sem var notað þegar aðgerðin var kölluð(invoked). Arguments Object er þegar það er geymt objectin sem eru inni parameter í functioninu.

9. Hvað	er	promise og	tilhvers	er	það	notað?
	The callback tekur tvö arguments, resolve og reject. sem eru bæði functions. Allur asynchronous kóðinn manns fer í callbackið. Ef allt gengur vel þá er promisið uppfyllt með að kalla á resolve. Ef villu er um að ræða þá er reject() kallið með error object. Það gefur til kynna að það promise sé hafnað. Notað til að komast að því hvortkóðinn uppfylli kröfur.
