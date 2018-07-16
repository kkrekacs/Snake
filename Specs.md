# fejlesztői leírás

## Technológia
* HTML
* CSS
* JAVASCRIPT

## Játéktér
* Egy div, ami magába foglalja a többi divet amelyek display: inline beállításúak
* Méretezést egy függvénnyel oldjuk meg, amely lefut egyszer az oldal megnyitásakor, majd
akkor is, ha átméretezik az oldalt.
* A négyzetek szélességét százalékosan adjuk meg.
* Egy legördülő menüben lehet kiválasztani a játéktér szélességét.
* A "tile" osztályhoz rendeljük az egyes csempéket.
* Az eledel csempe osztálya "food", a kígyó csempe osztálya pedig "snake". Az üres csempe osztálya pedig "empty".

## A kígyó mozgása
* A "new game" gomb hatására a kígyó középen megjelenik.
* Azonnal jobbra indul a kígyó.
* Lépésenkénti ellenőrzés: a csempe osztályát vizsgáljuk, Ha snake az osztály, legyen vége a játéknak. Ha food, akkkor nő egyet a kígyó. Ha nincs olyan csempe, ahova lépni akar a fej, akkor vége a játéknak.
* Irányítás: keydown eseményre változtatjuk az irányt.
* Óraütésre mindig elvégezzük az összes ellenörzést egy metódusban.
* A kígyó testét egy tömbben tároljuk és lépés esetén minden tömbelem az előző helyébe lép.

## Pontok és eledel
* A points változóban tároljuk az aktuális pontokat.
* Egy eledel egy pontot ér.
* Random jelenik meg egyszerre egy eledel.
* Ellenőrizni kell, hogy ne a  kígyó testére essen az eledel pozíciója.
* Ha a kígyó feje rálép az eldelre, akkor növeljük a pontokat és átállítjuk az osztályokat.
* Az eledel elfogyasztása után újat generálunk.