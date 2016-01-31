# jQuery Cookie Box

Okienko z informacją o wykorzystywaniu plików cookies na stronie. 
Dzięki wykorzystaniu `localStorage` (HTML5), plugin do działania nie potrzbuje wtyczki jQuery Cookies.
Skrypt generuje dynamiczny kod html na końcu `BODY` tylko gdy jest potrzebny komunikat.

## Ostatnie zmiany

* [22.05.2014] 
    - Nowa opcja - pozycjonowanie okienka góra/dół
    - Refactoring kodu

## Szybki start

1. Pobierz źródło wtyczki -> [cookie-box.zip](http://gitlab.thedigitals.pl/rafal.brzeski/cookie-box/repository/archive.zip?ref=master)
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
            textParagraph_1: '<p>Strona używa plików cookies.</p>',
            textParagraph_2: '<p><a>Dowiedz się więcej</a> o celu ich używania i zmianie ustawień cookies w przeglądarce. Korzystając ze strony wyrażasz zgodę na używanie cookies.</p>',
            position: 'bottom'
        });
    </script>
    ```
    
6. Jeśli trzeba przestyluj wygląd na potrzeby twojego projektu

## Features

* Łatwa możliwość zmiany tekstu informacyjnego
* Możliwość wpiecia dowolnego linku do podstrony z dodatkowymi informacjami o cookies
* RWD
* SCSS
* funkcja włącz/wyłącz
* możliwość opóźnienia wyświetlenia
* możliwość ustawienia góra/dół

## Dokumentacja

### Ustawienia

| Opcja | Opis | Typ | Domyślna wartość |
| -------- | -------- | -------- | -------- |
| `privacyPolicy` | włącz/wyłącz | boolean | `true` |
| `cookiesPageURL` | link do podstrony o cookies (działa na klasie `.cookieBoxUrl`) | string | `'/polityka-plikow-cookies/'` |
| `textParagraph_1` | Pierwszy paragraf z komunikatem | string | `'<p>Ta witryna używa <a class="cookieBoxUrl">plików cookie</a> m. in. w celach reklamowych i statystycznych oraz w celu dostosowania serwisu do indywidualnych potrzeb użytkowników. Korzystanie z naszego serwisu internetowego bez zmiany ustawień dotyczących cookie oznacza, że będą one zapisywane w pamięci urządzenia.</p>'` |
| `textParagraph_2` | Opcjonalny drugi paragraf komunikatu | string | `'<p>Jeżeli wyrażasz zgodę na zapisywanie informacji zawartej w cookies zamknij ten komunikat. Jeżeli nie wyrażasz zgody - zmień ustawienia swojej przeglądarki.</p>'` | Opcjonalny drugi paragraf komunikatu |
|`cookieBox`| Id kontenera z komunikatem | string | `'#cookieBox'` |
|`position`| Pozycjonowanie boxu (dostępne opcje: bottom, top) | string | `bottom` |