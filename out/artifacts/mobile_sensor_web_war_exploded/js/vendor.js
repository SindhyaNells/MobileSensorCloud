function vendor(){

    jQuery.ajax({
        url: "http://localhost:8181/vendors",
        type: "GET",
        contentType: 'application/json',
        dataType:"json",
        success: function(resultData) {
            $("#vendor-table tbody tr").remove();
            $.each(resultData,function (i,item) {
                var count=1;
                $("#vendor-table").append($('<tr/>').append($('<td/>').append(count)).append($('<td/>').append(item.vendorName)).append($('<td/>').append(item.vendorEmail)));
                count++;
            });
        },
    });

    jQuery.ajax({
        url: "http://localhost:8181/sensors",
        type: "GET",
        contentType: 'application/json',
        dataType:"json",
        success: function(resultData) {
            $("#vendor-sensor-table tbody tr").remove();
            $.each(resultData,function (i,item) {
                var status;
                if(item.sensorStatus)
                    status = "on";
                    else
                    status="off";

                $("#vendor-sensor-table").append($('<tr/>').append($('<td/>').append(item.sensorId)).append($('<td/>').append(item.sensorName)).append($('<td/>').append(item.sensorType)).append($('<td/>').append(status)).append($('<td/>').append(item.sensorLocation)).append($('<td>').append(item.vendorName)));
            });
        },
    });

}