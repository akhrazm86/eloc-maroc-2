(function($){
    $.fn.validationEngineLanguage = function(){
    };
    $.validationEngineLanguage = {
        newLang: function(){
            $.validationEngineLanguage.allRules = {
                "required": { // Add your regex rules here, you can take telephone as an example
                    "regex": "none",
                    "alertText": "* to polje je obvezno",
                    "alertTextCheckboxMultiple": "* Please select an option",
                    "alertTextCheckboxe": "* Izberite možnost",
                    "alertTextDateRange": "* Obe polji za časovno obdobje sta obvezni"
                },
                "requiredInFunction": { 
                    "func": function(field, rules, i, options){
                        return (field.val() == "test") ? true : false;
                    },
                    "alertText": "* Polje mora biti enako testu"
                },
                "dateRange": {
                    "regex": "none",
                    "alertText": "* Neveljavno ", 
                    "alertText2": "Časovno obdobje"
                },
                "dateTimeRange": {
                    "regex": "none",
                    "alertText": "* Neveljavno ",
                    "alertText2": "Datum Časovni obseg"
                },
                "minSize": {
                    "regex": "none",
                    "alertText": "* Najmanjša ",
                    "alertText2": " zahtevanih znakov"
                },
                "maxSize": {
                    "regex": "none",
                    "alertText": "* Najmanjša ",
                    "alertText2": " dovoljenih znakov"
                },
		"groupRequired": {
                    "regex": "none",
                    "alertText": "* Izpolniti morate eno od naslednjih polj",
                    "alertTextCheckboxMultiple": "* Izberite možnost",
                    "alertTextCheckboxe": "* To potrditveno polje je obvezno"
                },
                "min": {
                    "regex": "none",
                    "alertText": "* Najmanjša vrednost je "
                },
                "max": {
                    "regex": "none",
                    "alertText": "* Največja vrednost je "
                },
                "past": {
                    "regex": "none",
                    "alertText": "* Datum pred "
                },
                "future": {
                    "regex": "none",
                    "alertText": "* Datum minuli "
                },	
                "maxCheckbox": {
                    "regex": "none",
                    "alertText": "* Največ ",
                    "alertText2": " dovoljene možnosti"
                },
                "minCheckbox": {
                    "regex": "none",
                    "alertText": "* Prosim izberite ",
                    "alertText2": " opcije"
                },
                "equals": {
                    "regex": "none",
                    "alertText": "* Polja se ne ujemajo"
                },
                "creditCard": {
                    "regex": "none",
                    "alertText": "* Neveljavna številka kreditne kartice"
                },
                "phone": {
                    // credit: jquery.h5validate.js / orefalo
                    "regex": /^([\+][0-9]{1,3}([ \.\-])?)?([\(][0-9]{1,6}[\)])?([0-9 \.\-]{1,32})(([A-Za-z \:]{1,11})?[0-9]{1,4}?)$/,
                    "alertText": "* Neveljavna telefonska številka"
                },
                "email": {
                    // HTML5 compatible email regex ( http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#    e-mail-state-%28type=email%29 )
                    "regex": /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    "alertText": "* Nepravilen e-naslov"
                },
                "fullname": {
                    "regex":/^([a-zA-Z]+[\'\,\.\-]?[a-zA-Z ]*)+[ ]([a-zA-Z]+[\'\,\.\-]?[a-zA-Z ]+)+$/,
                    "alertText":"* Mora biti ime in priimek"
                },
                "zip": {
                    "regex":/^\d{5}$|^\d{5}-\d{4}$/,
                    "alertText":"* Neveljavna oblika zip"
                },
                "integer": {
                    "regex": /^[\-\+]?\d+$/,
                    "alertText": "* Ni veljavno celo število"
                },
                "number": {
                    // Number, including positive, negative, and floating decimal. credit: orefalo
                    "regex": /^[\-\+]?((([0-9]{1,3})([,][0-9]{3})*)|([0-9]+))?([\.]([0-9]+))?$/,
                    "alertText": "* Neveljavno plavajoče decimalno število"
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
			 "alertText": "* Neveljaven datum, mora biti v obliki LLLL-MM-DD"
                },
                "ipv4": {
                    "regex": /^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))$/,
                    "alertText": "* Neveljaven naslov IP"
                },
                "url": {
                    "regex": /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
                    "alertText": "* Neveljaven URL"
                },
                "onlyNumberSp": {
                    "regex": /^[0-9\ ]+$/,
                    "alertText": "* Samo številke"
                },
                "onlyLetterSp": {
                    "regex": /^([^\x00-\x80]|[a-zA-Z\ \'])+$/,
                    "alertText": "* Samo črke"
                },
				"onlyLetterAccentSp":{
                    "regex": /^[a-z\u00C0-\u017F\ ]+$/i,
                    "alertText": "* Samo črke (dovoljeni naglasi)"
                },
                "onlyLetterNumber": {
                    //"regex": /^[0-9a-zA-Z]+$/,
                    "regex": /^[a-zA-ZčćžđšČĆŽĐŠ\ \n]+$/,
                    "alertText": "* Posebni znaki niso dovoljeni"
                },
				//Start Custom Validation
				//1)First Name,Last Name
				"onlyLetter_specialcharacter": 
                {
                    "regex": /^[a-zA-ZčćžđšČĆŽĐŠ\ \_\,\`\.\'\^\-]*$/,
                    "alertText": "* Dovoljene so samo črke in znaki ' _,`.'^-"
                },

				//2)City,State,Country
				"city_state_country_validation": 
				{
                    "regex": /^([a-zA-ZčćžđšČĆŽĐŠ\ \_\,\`\.\'\^\-\&])+$/,
                    "alertText": "* Dovoljene so samo črke in znaki ' _,`.'^-&'"
                },
				//3)PopUp Category,Medicine Name,Event Name
				"popup_category_validation": 
                {
                    "regex": /^[a-zA-Z0-9čćžđšČĆŽĐŠ\s_\-,\`\.\:\[\]\'\^\(\)]+$/,
                    "alertText": "* Dovoljene so samo črke, številke in ' _,`.'^' znaki"
                },
				//4)Address and Description
				"address_description_validation": 
				{
                    "regex": /^[a-zA-ZčćžđšČĆŽĐŠ\ \?\_\,\`\.\:\[\]\'\^\-\&\n]+$/,
                    "alertText": "* Dovoljene so samo črke, številke in ' _,`.'^-&' znaki"
                },
                "vailidation_with_question_mark": 
				{
                    "regex": /^[0-9a-zA-ZčćžđšČĆŽĐŠ\ \?\_\,\`\.\:\[\]\'\^\-\&\n]+$/,
                    "alertText": "* Samo črke, številke in ' _,`.'^-&?' Dovoljeni znaki"
                },
                "description_validation": {
                    "regex": /^[0-9a-zA-ZčćžđšČĆŽĐŠ \_\!\@\(\)\,\`\.\:\[\]\'\^\-\&\n]+$/,
                    "alertText": "* Dovoljene so samo črke, številke in ' _,`.'^-&'@!() znaki"
                },

				//5)UserName
				"username_validation": 
				{
                    "regex": /^[0-9a-zA-ZčćžđšČĆŽĐŠ\_\.\-\@]+$/,
                    "alertText": "* Dovoljene so samo črke, številke in znaki '_.-@'"
                }, 
				//6)Phone Number
				"phone_number": 
				{
                    "regex": /^[0-9\ \-\+]+$/,
                    "alertText": "* Dovoljene so samo številke in znaki '-+'"
                }, 
                //6)For Zipcode
				"zipcode": 
				{
                    "regex": /^[0-9a-zA-ZčćžđšČĆŽĐŠ\ \-\+]+$/,
                    "alertText": "* Dovoljene so samo številke in znaki '-+'"
                }, 
				// End Custom Validation
                // --- CUSTOM RULES -- Those are specific to the demos, they can be removed or changed to your likings
                "ajaxUserCall": {
                    "url": "ajaxValidateFieldUser",
                    // you may want to pass extra data on the ajax call
                    "extraData": "name=eric",
                    "alertText": "* Ta uporabnik - uporabniško ime je že registrirano",
                    "alertTextLoad": "* Poteka potrditev, počakajte"
                },
				"ajaxUserCallPhp": {
                    "url": "phpajax/ajaxValidateFieldUser.php",
                    // you may want to pass extra data on the ajax call
                    "extraData": "name=eric",
                    // if you provide an "alertTextOk", it will show as a green prompt when the field validates
                    "alertTextOk": "* To uporabniško ime je na voljo",
                    "alertText": "* Ta uporabnik je že zaseden",
                    "alertTextLoad": "* Validating, please wait"
                },
                "ajaxNameCall": {
                    // remote json service location
                    "url": "ajaxValidateFieldName",
                    // error
                    "alertText": "* Ta uporabnik - uporabniško ime je že registrirano",
                    // if you provide an "alertTextOk", it will show as a green prompt when the field validates
                    "alertTextOk": "* To ime je na voljo",
                    // speaks by itself
                    "alertTextLoad": "* Validating, please wait"
                },
				 "ajaxNameCallPhp": {
	                    // remote json service location
	                    "url": "phpajax/ajaxValidateFieldName.php",
	                    // error
	                    "alertText": "* Ta uporabnik - uporabniško ime je že registrirano",
	                    // speaks by itself
	                    "alertTextLoad": "* Validating, please wait"
	                },
                "validate2fields": {
                    "alertText": "* Please input HELLO"
                },
	            //tls warning:homegrown not fielded 
                "dateFormat":{
                    "regex": /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(?:(?:0?[1-9]|1[0-2])(\/|-)(?:0?[1-9]|1\d|2[0-8]))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(0?2(\/|-)29)(\/|-)(?:(?:0[48]00|[13579][26]00|[2468][048]00)|(?:\d\d)?(?:0[48]|[2468][048]|[13579][26]))$/,
                    "alertText": "* Invalid Date"
                },
                //tls warning:homegrown not fielded 
				"dateTimeFormat": {
	                "regex": /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1}$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^((1[012]|0?[1-9]){1}\/(0?[1-9]|[12][0-9]|3[01]){1}\/\d{2,4}\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1})$/,
                    "alertText": "* Neveljaven datum ali oblika datuma",
                    "alertText2": "Expected Format: ",
                    "alertText3": "mm/dd/yyyy hh:mm:ss AM|PM or ", 
                    "alertText4": "yyyy-mm-dd hh:mm:ss AM|PM"
	            }
            };
            
        }
    };

    $.validationEngineLanguage.newLang();
    
})(jQuery);
