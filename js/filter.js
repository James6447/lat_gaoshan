$(document).ready(function() {
    //初始第一栏位
    $.ajax({
        url: "/api/tyre_filter.php",
        type: "POST",
        data: {
            search_details: 0,
            current_get: 'width'
        },
        dataType: "JSON",
        success: function(res) {
            AppendOption(res, 'width');
        },
        error: function() {
            console.log("get init data error");
        }
    });


    //監聽select事件
    $('.space-filter > select').change(function() {
        var selected_section = $(this).attr('name');
        var width = $('.space-filter > select[name="width"] option:selected').val();
        var height = $('.space-filter > select[name="height"] option:selected').val();
        var diameter = $('.space-filter > select[name="diameter"] option:selected').val();
        var brand = $('.space-filter > select[name="brand"] option:selected').val();
        var next_action = '';

        switch (selected_section) {
            case 'width':
                clearPreviousData();
                next_action = 'height';
                break;
            case 'height':
                next_action = 'diameter';
                break;
            case 'diameter':
                next_action = 'brand';
                break;
            case 'brand':
                next_action = false;
                break;
        }

        if(!next_action){

        }else {
            $.ajax({
                url: "/api/tyre_filter.php",
                type: "POST",
                data: {
                    search_details: 0,
                    current_get: next_action,
                    width: width,
                    height: height,
                    diameter: diameter,
                    brand: brand
                },
                dataType: "JSON",
                success: function(res) {
                    //初始第一栏位
                    AppendOption(res, next_action);
                },
                error: function() {
                    console.log("get filter data error");
                }
            });
            $('.space-filter > select[name="'+next_action+'"]').removeClass('is-active ');
        }
    });
});



/**
 * 新增option
 * @param parameter 需要出現在option的參數
 * @param next_action 需要呈現在哪個filter
 */
function AppendOption(parameter, next_action){
    for (var i = 0; i < parameter.length; i++) {
        var o = new Option(parameter[i], parameter[i]);
        $(".space-filter > select[name='"+next_action+"']").append(o);
    }
}


/**
 * 重新在第一選項選擇後清除其他select的選項
 */
function clearPreviousData(){
    var i = 0;
    var select_tag = '';

    $('.space-filter > select').each(function(){

        if( i === 0 ) {
            i = i+1;
            return;
        }

        switch (i) {
            case 1 :
                select_tag = 'Height(mm)';
                break;
            case 2 :
                select_tag = 'Diameter(")';
                break;
            case 3 :
                select_tag = 'All Brand';
                break;
        }

        $(this).find('option')
            .remove()
            .end()
            .append('<option value="">'+select_tag+'</option>');
        $(this).addClass('is-active');
        i = i+1;
    })
}

