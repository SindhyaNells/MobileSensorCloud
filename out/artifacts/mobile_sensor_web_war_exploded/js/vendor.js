function vendor(){

    jQuery.ajax({
        url: "http://localhost:8181/vendors",
        type: "GET",
        contentType: 'application/json',
        dataType:"json",
        success: function(resultData) {
            $("#vendor-table tbody tr").remove();
            $.each(resultData,function (i,item) {
                $("#vendor-table").append($('<tr/>').append($('<td/>').append(item.vendor_id)).append($('<td/>').append(item.vendor_name)).append($('<td/>').append(item.vendor_email)));
            });
        },
    });

    jQuery.ajax({
        url: "http://localhost:8181/sensor",
        type: "GET",
        contentType: 'application/json',
        dataType:"json",
        success: function(resultData) {
            $("#vendor-table tbody tr").remove();
            $.each(resultData,function (i,item) {
                var status;
                if(item.sensor_status=="true")
                    status == "on";
                    else
                    status=="off";

                $("#vendor-sensor-table").append($('<tr/>').append($('<td/>').append(item.sensor_id)).append($('<td/>').append(item.sensor_name)).append($('<td/>').append(item.sensor_type)).append($('<td/>').append(status)).append($('<td/>').append(item.sensor_location)).append($('<td>').append(item.sensor_vendor)));
            });
        },
    });

}