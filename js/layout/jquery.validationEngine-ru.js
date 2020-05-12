(function($){
    $.fn.validationEngineLanguage = function(){
    };
    $.validationEngineLanguage = {
        newLang: function(){
            $.validationEngineLanguage.allRules = {
                "required": { // Add your regex rules here, you can take telephone as an example
                    "regex": "none",
                    "alertText": "* РќРµРѕР±С…РѕРґРёРјРѕ Р·Р°РїРѕР»РЅРёС‚СЊ",
                    "alertTextCheckboxMultiple": "* Р’С‹ РґРѕР»Р¶РЅС‹ РІС‹Р±СЂР°С‚СЊ РІР°СЂРёР°РЅС‚",
                    "alertTextCheckboxe": "* РќРµРѕР±С…РѕРґРёРјРѕ РѕС‚РјРµС‚РёС‚СЊ"
                },
                "requiredInFunction": {
                    "func": function(field, rules, i, options){
                        return (field.val() == "test") ? true : false;
                    },
                    "alertText": "* Field must equal test"
                },
                "digit": {
                    "regex": /^[0-9]{1,}$/,
                    "alertText": " РўРѕР»СЊРєРѕ С†РёС„СЂС‹"
                },
                "minSize": {
                    "regex": "none",
                    "alertText": "* РњРёРЅРёРјСѓРј ",
                    "alertText2": " СЃРёРјРІРѕР»Р°(РѕРІ)"
                },
                "maxSize": {
                    "regex": "none",
                    "alertText": "* РњР°РєСЃРёРјСѓРј ",
                    "alertText2": " СЃРёРјРІРѕР»Р°(РѕРІ)"
                },
                "groupRequired": {
                    "regex": "none",
                    "alertText": "* Р’С‹ РґРѕР»Р¶РЅС‹ Р·Р°РїРѕР»РЅРёС‚СЊ РѕРґРЅРѕ РёР· РїРѕР»РµР№ "
                },
                "min": {
                    "regex": "none",
                    "alertText": "* РњРёРЅРёРјР°Р»СЊРЅРѕРµ Р·РЅР°С‡РµРЅРёРµ "
                },
                "max": {
                    "regex": "none",
                    "alertText": "* РњР°РєСЃРёРјР°Р»СЊРЅРѕРµ Р·РЅР°С‡РµРЅРёРµ "
                },
                "past": {
                    "regex": "none",
                    "alertText": "* Р”Р°С‚Р° РґРѕ "
                },
                "future": {
                    "regex": "none",
                    //"regex": /^(0?[1-9]|[12][0-9]|3[01])[\.\/\-](0?[1-9]|1[012])[\.\/\-]\d{4}$/,
                    "alertText": "* Р”Р°С‚Р° РѕС‚ "
                },
                "maxCheckbox": {
                    "regex": "none",
                    "alertText": "* РќРµР»СЊР·СЏ РІС‹Р±СЂР°С‚СЊ СЃС‚РѕР»СЊРєРѕ РІР°СЂРёР°РЅС‚РѕРІ"
                },
                "minCheckbox": {
                    "regex": "none",
                    "alertText": "* РџРѕР¶Р°Р»СѓР№СЃС‚Р°, РІС‹Р±РµСЂРёС‚Рµ ",
                    "alertText2": " РѕРїС†РёСЋ(РёРё)"
                },
                "equals": {
                    "regex": "none",
                    "alertText": "* РџРѕР»СЏ РЅРµ СЃРѕРІРїР°РґР°СЋС‚"
                },
                "creditCard": {
                    "regex": "none",
                    "alertText": "* РќРµРІРµСЂРЅС‹Р№ РЅРѕРјРµСЂ РєСЂРµРґРёС‚РЅРѕР№ РєР°СЂС‚С‹"
                },
                "phone": {
                    // credit: jquery.h5validate.js / orefalo
                    "regex": /^([\+][0-9]{1,3}[ \.\-])?([\(]{1}[0-9]{2,6}[\)])?([0-9 \.\-\/]{3,20})((x|ext|extension)[ ]?[0-9]{1,4})?$/,
                    "alertText": "* РќРµРїСЂР°РІРёР»СЊРЅС‹Р№ С„РѕСЂРјР°С‚ С‚РµР»РµС„РѕРЅР°"
                },
                "email": {
                    // Shamelessly lifted from Scott Gonzalez via the Bassistance Validation plugin http://projects.scottsplayground.com/email_address_validation/
                    "regex": /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i,
                    "alertText": "* РќРµРІРµСЂРЅС‹Р№ С„РѕСЂРјР°С‚ email"
                },
                "integer": {
                    "regex": /^[\-\+]?\d+$/,
                    "alertText": "* РќРµ С†РµР»РѕРµ С‡РёСЃР»Рѕ"
                },
                "number": {
                    // Number, including positive, negative, and floating decimal. credit: orefalo
                    "regex": /^[\-\+]?((([0-9]{1,3})([,][0-9]{3})*)|([0-9]+))?([\.]([0-9]+))?$/,
                    "alertText": "* РќРµРїСЂР°РІРёР»СЊРЅРѕРµ С‡РёСЃР»Рѕ СЃ РїР»Р°РІР°СЋС‰РµР№ С‚РѕС‡РєРѕР№"
                },
                "date": {
//                    "regex": /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/,
                    "regex": /^(0?[1-9]|[12][0-9]|3[01])[\.\/\-](0?[1-9]|1[012])[\.\/\-]\d{4}$/,
                    "alertText": "* РќРµРїСЂР°РІРёР»СЊРЅР°СЏ РґР°С‚Р° (РґРѕР»Р¶РЅРѕ Р±С‹С‚СЊ РІ Р”Р”.MM.Р“Р“Р“Р“ С„РѕСЂРјР°С‚Рµ)"
                },
                "ipv4": {
                    "regex": /^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))$/,
                    "alertText": "* РќРµРїСЂР°РІРёР»СЊРЅС‹Р№ IP-Р°РґСЂРµСЃ"
                },
                "url": {
                    "regex": /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
                    "alertText": "* РќРµРїСЂР°РІРёР»СЊРЅС‹Р№ URL"
                },
                "onlyNumberSp": {
                    "regex": /^[0-9\ ]+$/,
                    "alertText": "* РўРѕР»СЊРєРѕ С‡РёСЃР»Р°"
                },
                "onlyLetterSp": {
                    "regex": /^[a-zA-Z\u0400-\u04FF\ \']+$/,
                    "alertText": "* РўРѕР»СЊРєРѕ Р±СѓРєРІС‹"
                },
                "onlyLetterNumber": {
                    "regex": /^[0-9a-zA-Z\u0400-\u04FF]+$/,
                    "alertText": "* Р—Р°РїСЂРµС‰РµРЅС‹ СЃРїРµС†РёР°Р»СЊРЅС‹Рµ СЃРёРјРІРѕР»С‹"
                },
                "onlyPhoneLetterNumber": {
                    "regex": /^[0-9a-zA-Z\u0400-\u04FF\(\)\-\+ ]+$/,
                    "alertText": "* Р—Р°РїСЂРµС‰РµРЅС‹ СЃРїРµС†РёР°Р»СЊРЅС‹Рµ СЃРёРјРІРѕР»С‹"
                },
                "onlyPhoneNumber": {
                    "regex": /^[0-9\(\)\-\+ ]+$/,
                    "alertText": "* Р—Р°РїСЂРµС‰РµРЅС‹ СЃРёРјРІРѕР»С‹ РєСЂРѕРјРµ С†РёС„СЂ Рё ( ) + -"
                },
                // --- CUSTOM RULES -- Those are specific to the demos, they can be removed or changed to your likings
                "fio": {
                    "regex": /^[Рђ-РЇР°-СЏРЃС‘\-]{2,}\s[Рђ-РЇР°-СЏРЃС‘\-]{2,}\s[Рђ-РЇР°-СЏРЃС‘\-]{2,}$/,
                    "alertText": " Р¤Р°РјРёР»РёСЏ РРјСЏ РћС‚С‡РµСЃС‚РІРѕ РїРѕР»РЅРѕСЃС‚СЊСЋ РєРёСЂРёР»Р»РёС†Р°"
                },
                "onlyCyrillic": {
                    "regex": /^[Рђ-РЇР°-СЏ\- ]{2,}$/,
                    "alertText": " Р¤Р°РјРёР»РёСЏ РРјСЏ РћС‚С‡РµСЃС‚РІРѕ РїРѕР»РЅРѕСЃС‚СЊСЋ РєРёСЂРёР»Р»РёС†Р°"
                },
                "ajaxUserCall": {
                    "url": "ajaxValidateFieldUser",
                    // you may want to pass extra data on the ajax call
                    "extraData": "name=eric",
                    "alertText": "* Р­С‚РѕС‚ РїРѕР»СЊР·РѕРІР°С‚РµР»СЊ СѓР¶Рµ Р·Р°РЅСЏС‚",
                    //"alertTextLoad": "* РџСЂРѕРІРµСЂРєР°, РїРѕРґРѕР¶РґРёС‚Рµ..."
                },
                "ajaxNameCall": {
                    // remote json service location
                    "url": "ajaxValidateFieldName",
                    // error
                    "alertText": "* Р­С‚Рѕ РёРјСЏ СѓР¶Рµ Р·Р°РЅСЏС‚Рѕ",
                    // if you provide an "alertTextOk", it will show as a green prompt when the field validates
                    "alertTextOk": "* Р­С‚Рѕ РёРјСЏ РґРѕСЃС‚СѓРїРЅРѕ",
                    // speaks by itself
                    "alertTextLoad": "* РџСЂРѕРІРµСЂРєР°, РїРѕРґРѕР¶РґРёС‚Рµ..."
                },
                "validate2fields": {
                    "alertText": "* РџРѕР¶Р°Р»СѓР№СЃС‚Р°, РІРІРµРґРёС‚Рµ HELLO"
                },
                "ajaxCheckNamePhp": {
                    // remote json service location
                    "url": "/jx/check.php",
                    // error text
                    "alertText": "* Р­С‚Рѕ РёРјСЏ СѓР¶Рµ Р·Р°РЅСЏС‚Рѕ",
                    // success text
                    "alertTextOk": "* Р­С‚Рѕ РёРјСЏ СЃРІРѕР±РѕРґРЅРѕ!",
                    // speaks by itself
                    "alertTextLoad": "* РџСЂРѕРІРµСЂРєР°, РїРѕРґРѕР¶РґРёС‚Рµ РїРѕР¶Р°Р»СѓР№СЃС‚Р°."
                },
                "ajaxCheckPhonePhp": {
                    "url": "/jx/validate_check.php",
                    "extraData": "act=checkPhoneNoExist",
                    "alertText": "* Р­С‚РѕС‚ С‚РµР»РµС„РѕРЅ СѓР¶Рµ Р·Р°СЂРµРіРёСЃС‚СЂРёСЂРѕРІР°РЅ РІ СЃРёСЃС‚РµРјРµ",
                    "alertTextOk": "* Р­С‚РѕС‚ С‚РµР»РµС„РѕРЅ СЃРІРѕР±РѕРґРµРЅ!",
                    //"alertTextLoad": "* РџСЂРѕРІРµСЂРєР°, РїРѕРґРѕР¶РґРёС‚Рµ РїРѕР¶Р°Р»СѓР№СЃС‚Р°."
                },
                "ajaxCheckPhone2Php": {
                    "url": "/jx/validate_check.php",
                    "extraData": '',
                    "extraDataFunction": function(elem){
                        var data = {act : "checkPhoneNoExist"};
                        data['fieldValue'] = elem.intlTelInput('getNumber');
                        return data;
                    },
                    "alertText": "* Р­С‚РѕС‚ С‚РµР»РµС„РѕРЅ СѓР¶Рµ Р·Р°СЂРµРіРёСЃС‚СЂРёСЂРѕРІР°РЅ РІ СЃРёСЃС‚РµРјРµ",
                    "alertTextOk": "* Р­С‚РѕС‚ С‚РµР»РµС„РѕРЅ СЃРІРѕР±РѕРґРµРЅ!",
                    //"alertTextLoad": "* РџСЂРѕРІРµСЂРєР°, РїРѕРґРѕР¶РґРёС‚Рµ РїРѕР¶Р°Р»СѓР№СЃС‚Р°."
                },
                "ajaxCheckEmailPhp": {
                    "url": "/jx/validate_check.php",
                    "extraData": "act=checkEmailNoExist",
                    "alertText": "* Р­С‚РѕС‚ Email СѓР¶Рµ Р·Р°СЂРµРіРёСЃС‚СЂРёСЂРѕРІР°РЅ РІ СЃРёСЃС‚РµРјРµ",
                    "alertTextOk": "* Р­С‚РѕС‚ Email СЃРІРѕР±РѕРґРµРЅ!",
//                    "alertTextLoad": "* РџСЂРѕРІРµСЂРєР°, РїРѕРґРѕР¶РґРёС‚Рµ РїРѕР¶Р°Р»СѓР№СЃС‚Р°."
                },
                "ajaxGeoCity": {
                    "url": "/jx/validate_check.php",
                    "extraData": "act=checkGeoCity",
                    "alertText": "* Р’С‹Р±РµСЂРёС‚Рµ РіРѕСЂРѕРґ РёР· СЃРїРёСЃРєР°",
                },
                "qiwi": {
                    //+352(960)
                    "regex": /^([0-9 \.\-\/\(\)\+]{10,20})$/,
                    "alertText": "* РќРµРїСЂР°РІРёР»СЊРЅС‹Р№ С„РѕСЂРјР°С‚ QIWI-РєРѕС€РµР»СЊРєР°"
                },
                "ajaxCheckQIWIPhp": {
                    "url": "/jx/validate_check.php",
                    "extraData": "act=checkQIWINoExist",
                    "alertText": "* Р­С‚РѕС‚ QIWI-РєРѕС€РµР»РµРє СѓР¶Рµ Р·Р°СЂРµРіРёСЃС‚СЂРёСЂРѕРІР°РЅ РІ СЃРёСЃС‚РµРјРµ",
                    "alertTextOk": "* Р­С‚РѕС‚ QIWI-РєРѕС€РµР»РµРє СЃРІРѕР±РѕРґРµРЅ",
                    //"alertTextLoad": "* РџСЂРѕРІРµСЂРєР°, РїРѕРґРѕР¶РґРёС‚Рµ РїРѕР¶Р°Р»СѓР№СЃС‚Р°."
                },
                "webmoney": {
                    //+352(960)
                    "regex": /^(Z|P)([0-9]{12})$/,
                    "alertText": "* РќРµРїСЂР°РІРёР»СЊРЅС‹Р№ С„РѕСЂРјР°С‚ Webmoney-РєРѕС€РµР»СЊРєР°"
                },
                "ajaxCheckWebmoneyPhp": {
                    "url": "/jx/validate_check.php",
                    "extraData": "act=checkWebmoneyNoExist",
                    "alertText": "* Р­С‚РѕС‚ Webmoney-РєРѕС€РµР»РµРє СѓР¶Рµ Р·Р°СЂРµРіРёСЃС‚СЂРёСЂРѕРІР°РЅ РІ СЃРёСЃС‚РµРјРµ",
                    "alertTextOk": "* Р­С‚РѕС‚ Webmoney-РєРѕС€РµР»РµРє СЃРІРѕР±РѕРґРµРЅ",
                    //"alertTextLoad": "* РџСЂРѕРІРµСЂРєР°, РїРѕРґРѕР¶РґРёС‚Рµ РїРѕР¶Р°Р»СѓР№СЃС‚Р°."
                }
//                ,
//                "dateFormat":{
//                    "regex": /^(0?[1-9]|[12][0-9]|3[01])[\.\/\-](0?[1-9]|1[012])[\.\/\-]\d{4}$/,
//                    "alertText": "* Invalid Date"
//                },
//                "dateTimeFormat": {
//                    "regex": /^(0?[1-9]|[12][0-9]|3[01])[\.\/\-](0?[1-9]|1[012])[\.\/\-]\d{4}\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1}$/,
//                    "alertText": "* Invalid Date or Date Format",
//                    "alertText2": "Expected Format: ",
//                    "alertText3": "mm/dd/yyyy hh:mm:ss AM|PM or ",
//                    "alertText4": "yyyy-mm-dd hh:mm:ss AM|PM"
//                }

            };

        }
    };
    $.validationEngineLanguage.newLang();
})(jQuery);

function ShowInfoMsg(info_element, msg, type_msg){
    var position;
    var show_arrow;
    var text;
    var type; // pass | load | error
    if (typeof info_element == 'undefined'){
        info_element = $('.info_msg');
    }
    if(info_element.length > 0){
        text = msg;
        type = type_msg;
        position = 'topLeft';
        show_arrow = false;
        info_element.validationEngine('showPrompt', text, type, position, show_arrow);
    }
}
