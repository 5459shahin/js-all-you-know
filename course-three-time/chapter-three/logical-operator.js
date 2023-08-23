/* 
logicalOperator is 3
1. && And operator
2. || or operator
    jokhon 2ta condition ke mach kora hoy . orthat 2ta condition ar upor vitti kore 
    apner result ki hobe. othoba apni ki dessition niben ba kon code ta run korte 
     hobe. tokhon amra && operator abong // operator use kore thaki.

     *jemon:  A && B
     true && true = true (A abong B 2tai jodi true hoy tahole 2tai true asbe)
     true && false = false (jodi A true hoy Abong B false hoy tahole false return 
     korbe. orthat 2ta condition ai sotti hote hobe)

      A || B
     jodi A true hoy othoba B true hoy tahole true return korbe. orthat jekonko akta 
    value true holei hobe.

      A || B
      true // false = true
    jodi A value true hoy abong B value false hoy tahole true return korbe. orthat 
     jekono akta true holei hobobe.

     A || B
     false || true = true
     jodi A value false hoy abong B value true hoy tahole true return korbe. orthat 
     jekono akta true holei hobe.

     A || B
     false || false = false
     jodi A value false hoy abong B value false hoy tahole false return korbe. orthat 
     akhane 2tar aktao true hoy nai.

3. ! Not operator
 */

var a = 10
var b = 20
var c = 20
var d = 40

if (a > b && c > d) {  // jodi A theke B choto hoy Abong  C theke jodi D choto hoy. akhane jodi 2ta condition ai sotti hoy tahole true return korbe r jodi jekono akta false hoy tahole false return korbe
    console.log('A is greater then B and C is greater than D')
    
} else {
    console.log('At least one condition is false')
}

if (a > b || c > d) {
  // jodi A theke B choto hoy Abong  C theke jodi D choto hoy. akhane 2tar jekono akta sotti holei hobetaholei true return korbe. r jodi 2tai false hoy tahole false return korbe
  console.log("A is greater then B or C is greater than D");
} else {
  console.log("At least one condition is false");
}

var check = !(a > b) // ! jekono false result ar samne ! not operator bosiye dew hoy seta true return korbe.
                     // abong jodi true result ar age ! (scelomiter sing) dewa hoy tahole false return korbe
console.log(check)