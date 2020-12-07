console.log('gabahhhh')

var defKadar = "12.5";
var defSuhu = "55";
var defStatus = "stop";

function kadarSend () {
    defKadar = $('#kadar_input').val();
    if (defKadar == "0") {
        defKadar = "12.5"
    }
    updateGabah({kadar_air_objek: defKadar})
}

function suhuSend () {
    defSuhu = $('#suhu_input').val();
    if (defSuhu == "0") {
        defSuhu = "55"
    }
    updateGabah({suhu: defSuhu});
}

function startSend () {
    defStatus = "start";
    updateGabah({status_mesin: defStatus});
}

function stopSend () {
    defStatus = "stop";
    updateGabah({status_mesin: defStatus});
}

function updateGabah (payload) {
    var gabahPayload = payload;
    $.ajax({
        url: "/update",
        type: 'post',
        contentType: "application/json",
        dataType: 'json',
        data: JSON.stringify(gabahPayload),
        success: function(result){
            console.log(result);
        }
    })
}