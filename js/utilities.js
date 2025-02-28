//localforage.setDriver(localforage.LOCALSTORAGE);

function guid() {
    function _p8(s) {
        var p = (Math.random().toString(16) + "000000000").substr(2, 8);
        return s ? "-" + p.substr(0, 4) + "-" + p.substr(4, 4) : p;
    }
    var guid = _p8() + _p8(true) + _p8(true) + _p8();
    return guid.toUpperCase();
}

function getJSONDoc(url) {
    var response = $.ajax({
        type: "GET",
        url: url,
        dataType: "json",
        global: false,
        async: false,
        success: function (data) {
            return data;
        }
    }).responseText;
    return $.parseJSON(response);
}

function validJSON(jsonString){
    try {
        var o = JSON.parse(jsonString);
        if (o && typeof o === "object" && o !== null) {
            return o;
        }
    }
    catch (e) { }

    return false;
};

function commafy(num){
  var parts = (''+(num<0?-num:num)).split("."), s=parts[0], L, i=L= s.length, o='';
  while(i--){ o = (i===0?'':((L-i)%3?'':',')) 
                  +s.charAt(i) +o }
  return (num<0?'-':'') + o + (parts[1] ? '.' + parts[1] : ''); 
}

document.oncontextmenu = function () {
    return false;
  };
  

document.onkeydown = function (event) {
if (event.keyCode === 123) {
    return false;
}
};

document.addEventListener('keydown', function(event) {
    if ((event.ctrlKey || event.metaKey) && (event.shiftKey) && (event.key === 'I' || event.key === 'J')) {
      event.preventDefault();
    }
});