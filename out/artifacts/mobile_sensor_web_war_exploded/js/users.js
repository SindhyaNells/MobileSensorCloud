/**
 * Created by sindhya on 11/14/16.
 */


function user() {

    jQuery.ajax({
        url:"http://localhost:8181/users",
        type:"GET",
        contentType:'application/json',
        dataType:"json",
        success:function(data) {
            console.log(data);
            $("#user-table tbody tr").remove();
                $.each(data, function (i, item) {
                    $("#user-table").append($('<tr/>').append($('<td/>').append(item.user_id)).append($('<td/>').append(item.user_name)).append($('<td/>').append(item.user_email)));
            });
        },
    });

}