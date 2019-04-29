$.getScript('/js/filter.js', function()
{
    //點選進入的條件搜尋
    var param = descUrl();
    getData(param.width, param.height, param.diameter, param.brand, param.page);

    //搜尋按鈕
    $('#filter_submit').click(function() {
        var width = $('.space-filter > select[name="width"] option:selected').val();
        var height = $('.space-filter > select[name="height"] option:selected').val();
        var diameter = $('.space-filter > select[name="diameter"] option:selected').val();
        var brand = $('.space-filter > select[name="brand"] option:selected').val();

        window.location.href = `/product_new.php?width=${width}&height=${height}&diameter=${diameter}&brand=${brand}`;
    });

});

/**
 * 新增option
 * @param width 搜尋條件【1】
 * @param height 搜尋條件【2】
 * @param diameter 搜尋條件【3】
 * @param brand 搜尋條件【4】
 * @param page 搜尋條件【5】
 */
function getData(width, height, diameter, brand, page){
    var render = function (template, node) {
        node.innerHTML = template;
    };

    $.ajax({
        url: "/api/tyre_filter.php",
        type: "POST",
        data: {
            search_details: 1,
            width: width,
            height: height,
            diameter: diameter,
            brand: brand,
            page: page,
            page_size: 10
        },
        dataType: "JSON",
        success: function(res) {
            var template_arr = [];
            var render_template = '';

            if(res) {
                var total_page = res[0].total_page;

                for (let index of Object.keys(res)) {
                    var item = res[index];

                    if (item === res['page']) {
                        break;
                    }
                    var template =
                        ' <div class="card col-md-5 col-10">\n' +
                        '                        <div class="card-body">\n' +
                        '                            <div class="row d-flex justify-content-around">\n' +
                        '                                <img class="card-img-top col-xl-5 col-md-4 col-12" src="/img/product_tyres.png" alt="Card image cap">\n' +
                        '                                <div class="card-text col-xl-7 col-md-8 col-12">\n' +
                        '                                    <h3>' + item.name + '</h3>\n' +
                        '                                    <p>Brand:' + item.brand + '</p>\n' +
                        '                                    <p>Tyre Size: '+ item.width +'/'+ item.height +'/'+ item.diameter +'</p>\n' +
                        '\n' +
                        '                                    <button class="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
                        '                                       More Details' +
                        '                                    </button>\n' +
                        '                                    <div class="dropdown-menu details-block" aria-labelledby="dropdownMenuButton">\n' +
                        '                                       <h3>'+item.title+'	</h3>\n' +
                        '                                       <div class="owl-carousel owl-theme">\n' +
                        '                                           <div class="item" data-merge="5"><h4>'+item.content_1+'</h4></div>\n' +
                        '                                           <div class="item" data-merge="5"><h4>'+item.content_2+'</h4></div>\n' +
                        '                                           <div class="item" data-merge="5"><h4>'+item.content_3+'</h4></div>\n' +
                        '                                       </div>\n' +
                        '                                    </div>\n' +
                        '                                </div>\n' +
                        '                            </div>\n' +
                        '                        </div>\n' +
                        '                    </div>';

                    template_arr.push(template);
                }

                for (let i = 0; i < template_arr.length; i++) {
                    render_template = render_template + template_arr[i];
                }
                render(render_template, document.querySelector('#productTab'));
                pagationMigrate(total_page);

                //setting up slide show
                $('html').append('<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.0.0-beta.2.4/owl.carousel.min.js"></script>');

                $('.owl-carousel').owlCarousel({
                    items:3,
                    loop:true,
                    margin:10,
                    merge:true,
                    responsive:{
                        678:{
                            mergeFit:true
                        },
                        1000:{
                            mergeFit:false
                        }
                    }
                });

                //close the bootstrap origin click button list event
                $('.details-block').on('click', function () {
                    return false;
                });
            }else{
                // 沒有產品的頁面
            }

        },
        error: function() {
            console.log("get init data error");
        }
    });
}

/**
 * 新增分頁選項
 * @param page_total 總共頁數
 */
function pagationMigrate(page_total){

    if(page_total > 1) {
        var ul = $('.pagination');
        var param = descUrl();
        var url = '';
        var page = param.page;
        if(!page) {
            page = 1;
        }

        for (let index of Object.keys(param)) {
            var item = param[index];

            //如果有url=加條件這裡需要加
            switch (index) {
                case 'width':
                    url = url + 'width=' + param[index];
                    break;
                case 'height':
                    url = url + '&height=' + param[index];
                    break;
                case 'diameter':
                    url = url + '&diameter=' + param[index];
                    break;
                case 'brand':
                    url = url + '&brand=' + param[index];
                    break;
            }
        }

        for (var i = 0; i <= page_total + 1; i++) {
            var disable = '';
            var content = i;
            var current = '';
            var url_page = i;

            if(i === 0){
                content = '<';
                url_page = parseInt(page)-1;
                if( ( parseInt(page)-1 ) === 0 ){
                    disable = 'disabled';
                }
            }else if( (i+1) > (page_total + 1) ){
                content = '>';
                url_page = parseInt(page)+1;
                if( ( parseInt(page)+1 ) > page_total ){
                    disable = 'disabled';
                }
            }

            if( i == page ){
                current = 'current';
            }
            ul.append(
                $('<li>').attr('class', 'page-item ' + disable + '').append(
                    $('<a>').attr('href', '/product_new.php?'+url+'&page='+url_page+'').attr('class', 'page-link content '+current+'').append(content)
                ))
        }
    }
}

/**
 * 解析URL 網址
 */
let descUrl = () => {
    var from_filter = window.location.search;
    var obj = {};
    var width = '';
    var height = '';
    var diameter = '';
    var brand = '';
    var url_page = '';

    $.each(from_filter.split('&'), function (index, value) {
        var search_condittion = ['width', 'height', 'diameter', 'page'];

        for (var i=0; i<search_condittion.length; i++){
            var re = new RegExp(search_condittion[i]);

            if(re.exec(value)) {
                switch (search_condittion[i]) {
                    case 'width':
                        width = value.split('=')[1];
                        obj["width"] = typeof width !== 'undefined' ?  width : '';
                        break;
                    case 'height':
                        height = value.split('=')[1];
                        obj["height"] = typeof height !== 'undefined' ?  height : '';
                        break;
                    case 'diameter':
                        diameter = value.split('=')[1];
                        obj["diameter"] = typeof diameter !== 'undefined' ?  diameter : '';
                        break;
                    case 'brand':
                        brand = value.split('=')[1];
                        obj["brand"] = typeof brand !== 'undefined' ?  brand : '';
                        break;
                    case 'page':
                        url_page = value.split('=')[1];
                        obj["page"] = typeof brand !== 'undefined' ?  url_page : '';
                        break;
                }
            }
        }
    });
    return obj;
};