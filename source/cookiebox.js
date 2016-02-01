/**
 * Cookie Box, a simple Cookies Law information
 * https://github.com/r4fx/cookie-box
 * version: 2.0
 * release day: 16.03.2014
 * last update: 31.01.2016
 */

;(function () {

    cookieBox = function (options) {

        var defaults = {
            privacyPolicy: true,
            selfPosition: false,
            boxContainer: '#cookie-box',
            cookiesPageURL: '/polityka-plikow-cookies/',
            textParagraph_1: '<p>Ta witryna używa <a data-cookie-box-url>plików cookie</a> m. in. w celach reklamowych i statystycznych oraz w celu dostosowania serwisu do indywidualnych potrzeb użytkowników. Korzystanie z naszego serwisu internetowego bez zmiany ustawień dotyczących cookie oznacza, że będą one zapisywane w pamięci urządzenia.</p>',
            textParagraph_2: '<p>Jeżeli wyrażasz zgodę na zapisywanie informacji zawartej w cookies zamknij ten komunikat. Jeżeli nie wyrażasz zgody - zmień ustawienia swojej przeglądarki.</p>',
            position: 'bottom'
        };

        var plugin = this;
        plugin.settings = {};

        /**
         * Merge defaults with user options
         * @private
         * @param {Object} defaults Default settings
         * @param {Object} options User options
         * @returns {Object} Merged values of defaults and options
         */
        var extend = function () {
            var extended = {};

            for (key in arguments) {
                var argument = arguments[key];
                for (prop in argument) {
                    if (Object.prototype.hasOwnProperty.call(argument, prop)) {
                        extended[prop] = argument[prop];
                    }
                }
            }

            return extended;
        };

        // the "constructor" method that gets called when the object is created
        // this is a private method, it can be called only from inside the plugin
        var init = function () {

            // the plugin's final properties are the merged default and user-provided options (if any)
            plugin.settings = extend(defaults, options);

            // Get item from local storage
            var cookieInTheBox = localStorage.getItem('cookieIsInTheBox');

            /**
             *  Remove cookieBox container from source
             */
            function removeCookieBox() {
                var boxContainer = document.querySelector(plugin.settings.boxContainer);

                if (boxContainer) {
                    boxContainer.parentNode.removeChild(boxContainer);
                }
            }

            /**
             *  Generate cookie box if all conditions is met
             */
            if (plugin.settings.privacyPolicy && !(cookieInTheBox)) {

                var bodyTag = document.querySelector('body');
                var cookieBoxHashFree = plugin.settings.boxContainer.replace("#", "");
                var cookieBoxElements = {
                    container: document.createElement('div'),
                    bodyWrapper: document.createElement('div'),
                    closeBtn: document.createElement('span'),
                    body: plugin.settings.textParagraph_1 + plugin.settings.textParagraph_2
                };

                cookieBoxElements.container.id = cookieBoxHashFree;
                cookieBoxElements.container.className = cookieBoxHashFree + ' ' + cookieBoxHashFree + '--' + plugin.settings.position;
                cookieBoxElements.container.dataset.cookieBox = '';

                cookieBoxElements.closeBtn.className = cookieBoxHashFree + '__close-box';
                cookieBoxElements.closeBtn.dataset.cookieBoxClose = '';

                /**
                 *  Self mode cookie box container
                 */
                var checkContainer = document.querySelector('[data-cookie-box]');

                if (plugin.settings.selfPosition && !checkContainer) {
                    console.error('CookieBox message: "selfPosition" option is set, please add "#cookie-box" element to document or unset "selfPosition".');
                    return false;
                } else if (!plugin.settings.selfPosition && checkContainer) {
                    console.error('CookieBox message: Please set "selfPosition" option or remove "#cookie-box" element.');
                    return false;
                }

                /**
                 *  Auto generate cookie box container if self mode is not set
                 */
                if (!plugin.settings.selfPosition && !checkContainer) {
                    bodyTag.appendChild(cookieBoxElements.container);
                }

                /**
                 *  if container is ready than generate content
                 */
                var cookieBoxObject = document.querySelector(plugin.settings.boxContainer);

                if (cookieBoxObject) {
                    cookieBoxObject.appendChild(cookieBoxElements.bodyWrapper);
                    cookieBoxObject.children[0].innerHTML = cookieBoxElements.body;
                    cookieBoxObject.querySelector('[data-cookie-box-url]').href = plugin.settings.cookiesPageURL;
                    cookieBoxObject.appendChild(cookieBoxElements.closeBtn);
                    cookieBoxObject.querySelector('[data-cookie-box-close]').href = '' ? '' : '#';

                    // Hide and remove cookie box
                    var closeBtn = cookieBoxObject.querySelectorAll('[data-cookie-box-close]');
                    for (var i = 0; i < closeBtn.length; i++) {
                        closeBtn[i].addEventListener('click', function (evt) {
                            localStorage.setItem('cookieIsInTheBox', 'true');
                            cookieBoxObject.classList.add(cookieBoxHashFree + '--inactive');
                            setTimeout(removeCookieBox, 300);
                            evt.preventDefault();
                        }, false);
                    }
                }
            } else {
                removeCookieBox();
            }
        };

        init();
    };
})();