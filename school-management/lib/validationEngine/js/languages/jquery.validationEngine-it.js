(function($){
    $.fn.validationEngineLanguage = function(){
    };
    $.validationEngineLanguage = {
        newLang: function(){
            $.validationEngineLanguage.allRules = {
                "required": { // Add your regex rules here, you can take telephone as an example
                    "regex": "none",
                    "alertText": "* Campo richiesto",
                    "alertTextCheckboxMultiple": "* Per favore selezionare un'opzione",
                    "alertTextCheckboxe": "* E' richiesta la selezione della casella",
                    "alertTextDateRange": "* Sono richiesti entrambi gli intervalli temporali"
                },
                "requiredInFunction": {
                    "func": function(field, rules, i, options){
                        return (field.val() == "test") ? true : false;
                    },
                    "alertText": "* Il campo deve avere valore 'test'"
                },
				"zipcode": 
				{
                    "regex": /^[0-9a-zA-Z\ \-\+]+$/,
                    "alertText": "* Only Numbers And ' -+' Characters Allowed"
                }, 
                "dateRange": {
                    "regex": "none",
                    "alertText": "* Intervallo ",
                    "alertText2": "non valido"
                },
                "dateTimeRange": {
                    "regex": "none",
                    "alertText": "* Intervallo ",
                    "alertText2": "non valido"
                },
                "minSize": {
                    "regex": "none",
                    "alertText": "* E' richiesto un minimo di ",
                    "alertText2": " caratteri"
                },
                "maxSize": {
                    "regex": "none",
                    "alertText": "* E' richiesto un massimo di ",
                    "alertText2": " caratteri"
                },
                "groupRequired": {
                    "regex": "none",
                    "alertText": "* Uno dei seguenti campi deve essere selezionato",
                    "alertTextCheckboxMultiple": "* Selezionare una opzione",
                    "alertTextCheckboxe": "* Segno di spunta richiesto"
                },
                "min": {
                    "regex": "none",
                    "alertText": "* Il valore minimo accettato è "
                },
                "max": {
                    "regex": "none",
                    "alertText": "* Il valore massimo accettato è "
                },
                "past": {
                    "regex": "none",
                    "alertText": "* Data antecedente al "
                },
                "future": {
                    "regex": "none",
                    "alertText": "* Data successiva al "
                },
                "maxCheckbox": {
                    "regex": "none",
                    "alertText": "* Massimo ",
                    "alertText2": " opzioni consentite"
                },
                "minCheckbox": {
                    "regex": "none",
                    "alertText": "* Selezionare almeno ",
                    "alertText2": " opzioni"
                },
                "equals": {
                    "regex": "none",
                    "alertText": "* I campi non corrispondono"
                },
                "creditCard": {
                    "regex": "none",
                    "alertText": "* Numero di carta di credito non valido"
                },
                "phone": {
                    // credit: jquery.h5validate.js / orefalo
                    "regex": /^([\+][0-9]{1,3}([ \.\-])?)?([\(][0-9]{1,6}[\)])?([0-9 \.\-]{1,32})(([A-Za-z \:]{1,11})?[0-9]{1,4}?)$/,
                    "alertText": "* Numero di telefono non corretto"
                },
                "email": {
                    // HTML5 compatible email regex ( http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#    e-mail-state-%28type=email%29 )
                    "regex": /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    "alertText": "* Indirizzo non corretto"
                },
                "fullname": {
                    "regex":/^([a-zA-Z]+[\'\,\.\-]?[a-zA-Z ]*)+[ ]([a-zA-Z]+[\'\,\.\-]?[a-zA-Z ]+)+$/,
                    "alertText":"* Nome e cognome richiesti"
                },
                "zip": {
                    "regex":/^\d{5}$|^\d{5}-\d{4}$/,
                    "alertText":"* Formato zip non valido"
                },
                "integer": {
                    "regex": /^[\-\+]?\d+$/,
                    "alertText": "* Richiesto un numero intero"
                },
                "number": {
                    // Number, including positive, negative, and floating decimal. credit: orefalo
                    "regex": /^[\-\+]?((([0-9]{1,3})([,][0-9]{3})*)|([0-9]+))?([\.]([0-9]+))?$/,
                    "alertText": "* Richiesto un numero decimale"
                },
                "date": {
                    //	Check if date is valid by leap year
                    "func": function (field) {
                        var pattern = new RegExp(/^(\d{4})[\/\-\.](0?[1-9]|1[012])[\/\-\.](0?[1-9]|[12][0-9]|3[01])$/);
                        var match = pattern.exec(field.val());
                        if (match == null)
                            return false;

                        var year = match[1];
                        var month = match[2]*1;
                        var day = match[3]*1;
                        var date = new Date(year, month - 1, day); // because months starts from 0.

                        return (date.getFullYear() == year && date.getMonth() == (month - 1) && date.getDate() == day);
                    },
                    "alertText": "* Data non corretta, è richeisto il formato AAAA-MM-GG"
                },
                "ipv4": {
                    "regex": /^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))$/,
                    "alertText": "* IP non corretto"
                },
                "url": {
                    "regex": /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
                    "alertText": "* URL non corretta"
                },
                "onlyNumberSp": {
                    "regex": /^[0-9\ ]+$/,
                    "alertText": "* Solo numeri"
                },
                "onlyLetterSp": {
                    "regex": /^[a-zA-Z\ \']+$/,
                    "alertText": "* Solo lettere"
                },
                "onlyLetterAccentSp":{
                    "regex": /^[a-z\u00C0-\u017F\ ]+$/i,
                    "alertText": "* Solo lettere (è possibile inserire lettere accentate)"
                },
                "onlyLetterNumber": {
                    "regex": /^[0-9a-zA-Z]+$/,
                    "alertText": "* Non è possibile inserire caratteri speciali"
                },
				//Start Custom Validation
				//1)First Name,Last Name
				"onlyLetter_specialcharacter": 
				{
                     "regex": /^[a-zA-Zu00C0-\u017F\ \_\,\`\.\'\^\-]+$/,
                    "alertText": "* Solo lettere e ' _,`.'^-' Caratteri ammessi"
                },
				//2)City,State,Country
				"city_state_country_validation": 
				{
                    "regex": /^[a-zA-Zu00C0-\u017F\ \_\,\`\.\'\^\-\&]+$/,
                    "alertText": "* Solo lettere e ' _,`.'^-&' Caratteri ammessi"
                },
				//3)PopUp Category,Medicine Name,Event Name
				"popup_category_validation": 
				{
                    "regex": /^[0-9a-zA-Zu00C0-\u017F\ \_\,\`\.\'\^]+$/,
                    "alertText": "* Solo lettere, numeri e ' _,`.'^' Caratteri ammessi"
                },
				//4)Address and Description
				"address_description_validation": 
				{
                    "regex": /^[0-9a-zA-Zu00C0-\u017F\ \_\,\`\.\'\^\-\&\n]+$/,
                    "alertText": "* Solo lettere, numeri e ' _,`.'^-&' Caratteri ammessi"
                },
                "description_validation":
                {
                    "regex": /^[0-9a-zA-Zu00C0-\u017F\ \_\!\@\(\)\,\`\.\:\[\]\'\^\-\&\n]+$/,
                    "alertText": "* Solo lettere, numeri e ' _,`.'^-&'@!() Caratteri ammessi"
                },
				//5)UserName
				"username_validation": 
				{
                    "regex": /^[0-9a-zA-Zu00C0-\u017F\_\.\-\@]+$/,
                    "alertText": "* Solo lettere, numeri e '_.-@' Caratteri ammessi"
                }, 
				//6)Phone Number
				"phone_number": 
				{
                    "regex": /^[0-9\ \-\+]+$/,
                    "alertText": "* Solo numeri e ' -+' Caratteri ammessi"
                }, 
				// End Custom Validation
                // --- CUSTOM RULES -- Those are specific to the demos, they can be removed or changed to your likings
                "ajaxUserCall": {
                    "url": "ajaxValidateFieldUser",
                    // you may want to pass extra data on the ajax call
                    "extraData": "name=eric",
                    "alertText": "* Questo utente - nome utente è già registrato",
                    "alertTextLoad": "* Caricamento in corso, attendere prego"
                },
                "ajaxUserCallPhp": {
                    "url": "phpajax/ajaxValidateFieldUser.php",
                    // you may want to pass extra data on the ajax call
                    "extraData": "name=eric",
                    // if you provide an "alertTextOk", it will show as a green prompt when the field validates
                    "alertTextOk": "* Questo nome utente è disponibile",
                    "alertText": "* Questo nome utente è già stato registrato",
                    "alertTextLoad": "* Caricamento in corso, attendere prego"
                },
                "ajaxNameCall": {
                    // remote json service location
                    "url": "ajaxValidateFieldName",
                    // error
                    "alertText": "* Questo nome utente è già stato registrato",
                    // if you provide an "alertTextOk", it will show as a green prompt when the field validates
                    "alertTextOk": "* Questo nome utente è disponibile",
                    // speaks by itself
                    "alertTextLoad": "* Caricamento in corso, attendere prego"
                },
                "ajaxNameCallPhp": {
                    // remote json service location
                    "url": "phpajax/ajaxValidateFieldName.php",
                    // error
                    "alertText": "* Questo nome utente è già stato registrato",
                    // speaks by itself
                    "alertTextLoad": "* Caricamento in corso, attendere prego"
                },
                "validate2fields": {
                    "alertText": "* Prego inserire 'HELLO'"
                },
                //tls warning:homegrown not fielded
                "dateFormat":{
                    "regex": /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(?:(?:0?[1-9]|1[0-2])(\/|-)(?:0?[1-9]|1\d|2[0-8]))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(0?2(\/|-)29)(\/|-)(?:(?:0[48]00|[13579][26]00|[2468][048]00)|(?:\d\d)?(?:0[48]|[2468][048]|[13579][26]))$/,
                    "alertText": "* Data non valida"
                },
                //tls warning:homegrown not fielded
                "dateTimeFormat": {
                    "regex": /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1}$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^((1[012]|0?[1-9]){1}\/(0?[1-9]|[12][0-9]|3[01]){1}\/\d{2,4}\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1})$/,
                    "alertText": "* Data o formato non validi",
                    "alertText2": "Formato richiesto: ",
                    "alertText3": "mm/gg/aaaa oo:mm:ss AM|PM oppure ",
                    "alertText4": "aaaa-mm-gg oo:mm:ss AM|PM"
                }
            };

        }
    };

    $.validationEngineLanguage.newLang();

})(jQuery);