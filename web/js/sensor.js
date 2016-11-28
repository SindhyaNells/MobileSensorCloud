
function sortByProperty(property) {
    'use strict';
    return function (a, b) {
        var sortStatus = 0;
        if (a[property] < b[property]) {
            sortStatus = -1;
        } else if (a[property] > b[property]) {
            sortStatus = 1;
        }

        return sortStatus;
    };
}



function Sensor(){

    jQuery.ajax({

        url: "http://localhost:8181/sensors",
        type: "GET",
        contentType: 'application/json',
        dataType:"json",
        success: function(resultData) {
            resultData.sort(sortByProperty('sensorId'));
            $("#sensortable tbody tr").remove();
            $.each(resultData,function (i,item) {
                var status;
                var $d=$('<button class="btn-sm btn-info btn-fill btn-danger btn-right " data-id="'+item.sensorId.toString()+'" toggle="modal" onclick="deleteSensor(event)">Delete</button>');
                var $e=$('<button class="btn-sm btn-info btn-fill btn-warning btn-left " data-id="'+item.sensorId.toString()+'" data-name="'+item.sensorName+'" data-type="'+item.sensorType+'" data-status="'+item.status+'" data-location="'+item.sensorLocation+'"  toggle="modal" onclick="editSensor(event)" >Edit</button>');

                if(item.sensorStatus==1){
                    status = "on";
                }
                else{
                    status="off";
                }
                $("#sensortable").append($('<tr/>').append($('<td/>').append(item.sensorId)).append($('<td/>').append(item.sensorName)).append($('<td/>').append(item.sensorType)).append($('<td/>').append(status)).append($('<td/>').append(item.sensorLocation)).append($('<td/>').append($e).append('&nbsp;&nbsp;').append($d)));

            });
        },
    });

}

function add_sensor(){
    var formData = $('#myform').serializeArray();
    var data = {};
    $(formData ).each(function(index, obj){
        data[obj.name] = obj.value;
    });

    jQuery.ajax({
        url: "http://localhost:8181/sensors",
        type:"POST",
        contentType: 'application/json',
        data: JSON.stringify(data),
        success: function(data){
            alert("appended successfully");
        }

    });

}

function deleteSensor(event)
{
    var a =event.target.dataset.id;
    var delete_endpoint= "http://localhost:8181/sensors/"+a;
    jQuery.ajax({
        url: delete_endpoint,
        type:"DELETE",
        contentType: 'application/json',
        //data: JSON.stringify(a),
        success: function(data,textStatus,xhr){

            //alert(xhr.status);
            if(xhr.status==204){
                showDeleteDialog(1);
            }else{
                showDeleteDialog(0);
            }

            window.onload = Refresh;
            function Refresh() {
                setTimeout("refreshPage();", 1000);
            }
            function refreshPage() {
                window.location = location.href;
            }
        }
    });
}

function showDeleteDialog(del_flag){
    var delete_dialog = document.getElementById('delete-dialog');
    var dialog_ok=document.getElementById('dialog_ok');

    if(del_flag==1)
        delete_dialog.show();
    dialog_ok.addEventListener('click',function (e) {
        e.preventDefault();
        delete_dialog.close();
    })

}

function editSensor(event)
{
    $('#sensor-num').prop('readonly', true);
    var ids =event.target.dataset.id;
    var name=event.target.dataset.name;
    var type=event.target.dataset.type;
    var satus=event.target.dataset.status;
    var location=event.target.dataset.location;
    $(".modal-body #sensor-num").val(ids);
    $(".modal-body #sensor-name").val(name);
    $(".modal-body #sensor-type").val(type);
    $(".modal-body #sensor-satus").val(status);
    $(".modal-body #sensor-location").val(location);

    $("#add-sensors").modal('show');

}




