/**
 * Created by sindhya on 11/29/16.
 */

function user_sensor_group() {

    jQuery.ajax({
        url:"http://localhost:8181/virtualSensorGroup",
        //url:"http://localhost:8080/sensor_service/virtualsensor?user_email=archana@sjsu.edu",
        type:"GET",
        contentType:'application/json',
        dataType:"json",
        success:function(data) {
            console.log(data);
            var i=1;
            //data.sort(sortByProperty('sensorGroupId'));
            $("#user-sensorGroup-table tbody tr").remove();
            $.each(data, function (i, item) {

                //var $d=$('<button class="btn-sm btn-info btn-fill btn-danger pull-right" data-id="'+item.sensorGroupId.toString()+'" toggle="modal" onclick="deleteSensor(event)">Unsubscribe</button>');
                //var $e=$('<button class="btn-xs btn-info btn-fill btn-edit btn-pace-left " data-id="'+item.virtualSensorId.toString()+'" data-name="'+item.virtualSensorName+'"  toggle="modal" onclick="editSensor(event)" >Edit</button>');


                //$("#user-virtualsensor-table").append($('<tr/>').append($('<td/>').append(item.virtualSensorId)).append($('<td/>').append(item.sensorName)).append($('<td/>').append(item.sensorLocation)).append($('<td/>').append(item.sensorStatus)).append($('<td/>').append(item.sensorType)).append($('<td/>').append(item.vendorName)).append($('<input type=button onclick="location.href=`edit_user.html`" value= "Delete" class="btn btn-default btn-fill btn-sm" data-toggle="modal" data-target="#edit-users"></button>')));
                $("#user-sensorGroup-table").append($('<tr/>').append($('<td/>').append(item.sensorGroupId)).append($('<td/>').append(item.sensorGroupName)).append($('<td/>').append(item.sensorGroupDescription)));//.append($('<td/>').append($d)));
                i++;
            });
        },
    });

}
