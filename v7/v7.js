//1. Það eru til þrjár leiðir að binda event við element, hver þeirra leiða er best og af hverju?
//Komdu með kóðasýnidæmi. (0.5%)
// a) HTML Event Handler (attribute í html)
      //  onclick="checkAnswer()"
      /* function call er html attribute í html skrá, onclick="checkAnswer()"
       * Gamalt:  Ekki hafa JS í html kóða. gömul leið 
       */

// b) DOM Event Handlers 
      //  elQuestion.onclick = checkAnswer;
      /* Galli: Þú getur bara haft eitt function við eitt event handler
       */

// c)Dom Level 2 Event
/*<html>
		<body>
			
			<h1>Click Me!</h1>
		<script>
			var Euser = document.getElementsByTagName("h1");
			function changeText(id) { 
	    		Euser.textContent = "You did it";
			}	
			Esuer.addEventListener('click',changeText, false);
		</script>
		</body>
	</html>
*/


/*2. Hvað er callback? Útskýrðu með eigin orðum, komdu með kóðadæmi. (0.5%)
Er function sem sem keyrir aðra functiona. JavaScript virkar með að keyra
		línu eftir línu. Án callback functon myndi kóðin halda áfram án þess að functonið væri buið.
		Callback bíður eftir að það er búið að hlaða og síðan keyrir hann af stað.
*/


/*3. Hvað er EventLoop? Úrskýrðu með eigin orðum. (0.5%)
*Svar:
*Event Loop er biðröð aðgerða. 
*Þegar async-aðgerð er framkvæmd er callback function 
*ýtt inn í biðröð. JavaScript byrjar ekki að vinna atburðarásina 
*fyrr en að kóð eftir async-aðgerð hefur verið framkvæmd.
*/

/*4. Leiðréttu eftirfarandi kóða þannig að hann virki (ekki syntax villa). (1%)

function checkUsername() {
var target = e.target;
}
var el = document.getElementById('username');
el.addEventListener('blur', function(){checkUsername(5);}, false);

*/

/*5. Event flow, Hvað þýðir false í Event Listener? (0.5%)
*True og false i event listener er Boolean, og það akveður hvort elementið verði capturað eða ekki.
*Vanalega er false sem default og það er bubbling event sem þýðir að það vinnur frá innst og svo yst.
*
*
*/

/*6. Hvað gera eftirfarandi aðferðir? Komdu með dæmi um notkun (1%)
*(a. stopPropagation()
*(b. preventDefault()
*Svar a: Stoppar elementið frá þvi að "bubbling" eða "capturing" áfram
Dæmi:
$("span").click(function(event){
    event.stopPropagation();
    alert("The span element was clicked.");
});

*Svar b: Cancelar default hegðuninni í eventinu ef það er hægt.
Dæmi:
$("a").click(function(event){
    event.preventDefault();
});

*
*/
