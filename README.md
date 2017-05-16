### Simple (but powerful) box with information about cookies using on the site.

Okienko z informacją o wykorzystywaniu plików cookies na stronie. 
Dzięki wykorzystaniu `localStorage` (HTML5), plugin do działania nie potrzbuje wtyczki do obsługi Cookies.
Skrypt generuje dynamiczny kod html na końcu `BODY` tylko gdy jest potrzebny komunikat.
Możesz też wskazać własny kontener w którym powinien wygenerować się kod.
Skrypt nie potrzbuje do działania jQuery.

#### Ostatnie zmiany
* [16.05.2017]
    - Dodanie nowych opcji w pozycjonowaniu
    
* [17.04.2016]
    - Uproszczenie kodu
    
* [31.01.2016]
    - Przebudowa wtyczki na  vanilla js
    - Refactoring kodu
    - Usunięcie zbędnych funkcjji
    - Dodanie opcji własnego kontenera `selfPosition`

* [22.05.2014] 
    - Nowa opcja - pozycjonowanie okienka góra/dół
    - Refactoring kodu

#### Szybki start

1. Pobierz źródło wtyczki -> [master.zip](https://github.com/r4fx/cookie-box/archive/master.zip)
2. Sprawdź działanie w katalogu `Demo`
3. Obsadź na stronie skrypt `cookiebox.js
4. Obsadź style `cookiebox.css`
5. Uruchom w stronie skrypt, np na końcu body

    ```javascript
    <script>
        var cookieBox = new cookieBox({
            privacyPolicy: true,
            selfPosition: false,
            cookiesPageURL: '/polityka-plikow-cookies/',
            position: 'bottom-right'
        });
    </script>
    ```
    
6. Jeśli trzeba przestyluj wygląd na potrzeby twojego projektu

#### Możliwości

* Łatwa możliwość zmiany tekstu informacyjnego
* Możliwość wpiecia dowolnego linku do podstrony z informacjami o polityce cookies
* RWD
* SCSS
* funkcja włącz/wyłącz
* możliwość ustawienia pozycji góra/dół/narożnik

#### Dokumentacja

##### Ustawienia

| Opcja | Opis | Typ | Domyślna wartość |
| -------- | -------- | -------- | -------- |
| privacyPolicy | włącz/wyłącz | boolean | true |
| selfPosition | Pozwala wykorzystać istniejący kontener, wstaw w dowolnym miejscu strony `<div id="cookie-box" class="cookie-box" data-cookie-box></div>`. | boolean | false |
| cookiesPageURL | link do podstrony o cookies (działa na klasie `.cookieBoxUrl`) | string | /polityka-plikow-cookies/ |
| textMessage | Treść komunikatu | string | <p>Strona używa plików cookies. <a data-cookie-box-url>Dowiedz się więcej</a> o celu ich używania i zmianie ustawień cookies w przeglądarce. Korzystając ze strony wyrażasz zgodę na używanie cookies. <a data-cookie-box-close>Rozumiem</a>.</p> |
| boxContainer| Id kontenera z komunikatem | string | #cookie-box |
| position| Pozycjonowanie boxu (dostępne opcje: bottom, bottom-right, bottom-left, top) | string | bottom-right |
