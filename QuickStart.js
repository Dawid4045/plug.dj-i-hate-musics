/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
var quickstart;
(function (quickstart) {
    var QuickStart = (function () {
        function QuickStart() {
        }
        QuickStart.main = function (args) {
            console.info("No elo jestem twoim wisielcem");
            \\ Ta metoda odpowiada za generowanie randomowych cyfr i ona nie dziala var generator = new java.util.Random();
            var slowo = "Kamil";
            \\ Ta metoda odpowiada za mozliwosc pobierania od uzytkownika cyfr/stringow var scaner = new java.util.Scanner(java.lang.System["in"]);
            var literki = (slowo).split('');
            for (var i = 0; i < slowo.length; i++) {
                literki[i] = '*';
            }
            ;
            console.info(literki);
            var dziala = true;
            while ((dziala)) {
                console.info("Zgaduj!");
                var wybor = scaner.next();
                if ((function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(wybor, slowo)) {
                    console.info("gj!");
                    break;
                }
            }
            ;
        };
        return QuickStart;
    }());
    quickstart.QuickStart = QuickStart;
    QuickStart["__class"] = "quickstart.QuickStart";
})(quickstart || (quickstart = {}));
quickstart.QuickStart.main(null);
