$(document).ready(function () {
    getModelData('308');
    changehtml();
    $.ajax({
        url: "/product/carselected.php",
        type: "POST",
        dataType: "JSON",
        success: function (res) {
            let parameter = [res, 'typeCar', 'value', 'type'];
            AppendOption(parameter);
            document.getElementById("modelCar").disabled = true;
        },
        error: function () {
            console.log("getdataErr");
        }
    });

    function clearPreviousData() {
        var col_1 = document.getElementById("rimWitdh");
        var col_2 = document.getElementById("offset");
        var col_3 = document.getElementById("CenterBore");
        col_1.disabled = true;
        col_2.disabled = true;
        col_3.disabled = true;

        $("#offset").empty();
        $("#centerBore").empty();

        let selection = ['rimWitdh', 'offset', 'CenterBore'];
        for (var i = 0; i < selection.length; i++) {
            var sel = document.getElementById(selection[i]);
            var opt = document.createElement("option");
            opt.value = selection[i];
            opt.text = selection[i];
            sel.add(opt, sel.options[1]);
        }

    }

    function getCarType(carType) {
        $("#modelCar").empty();

        $.ajax({
            url: "/product/modelselected.php",
            type: "POST",
            data: {
                carType: carType
            },
            dataType: "JSON",
            success: function (res) {
                let parameter = [res, 'modelCar', 'img_path', 'img_path'];
                AppendOption(parameter);
                document.getElementById("modelCar").disabled = false;
                getModelData(res[0].img_path);
            },
            error: function () {
                console.log("getdataErr");
            }
        });
    }

    function AppendOption(parameter) {
        for (var i = 0; i < parameter[0].length; i++) {
            var sel = document.getElementById(parameter[1]);
            var opt = document.createElement("option");
            opt.value = parameter[0][i][parameter[2]];
            opt.text = parameter[0][i][parameter[3]];
            sel.add(opt, sel.options[1]); //他出现error你查查看
        }
    }
    //依選擇車款顯示‘  
    document.getElementById("typeCar").addEventListener("change", function () {
        //清掉之前的选择
        let t = document.getElementById("typeCar");
        let carType = t.options[t.selectedIndex].value;

        if (carType == 0) {
            document.getElementById("modelCar").disabled = true;
        } else {
            $("#modelCar").empty();
            getCarType(carType);
        }
    });

    function getModelData(modelCar) {
        $("#myTable").fadeOut(300);
        $("#myTable tbody tr").remove();
        // setTimeout(function() { $("#myTable tbody tr").remove(); }, 600);
        let col;
        $.ajax({
            url: "/product/tyre_list.php",
            type: "POST",
            data: {
                modelCar: modelCar
            },
            dataType: "JSON",
            success: function (res) {
                //insert table view
                document.getElementById("myTable").style.visibility = "visible";
                document.getElementById("imgTitle").style.visibility = "visible";
                var table = document.getElementById("dataChange");
                for (var i = 0; i < res['size'].length; i++) {
                    let row = table.insertRow(i);
                    let cell1 = row.insertCell(0);
                    let cell2 = row.insertCell(1);

                    (i == 0) ? col = res[0]['img_path']: col = '';
                    cell1.innerHTML = col;
                    cell2.innerHTML = res['size'][i];
                    $('#myTable').hide();
                    $('#myTable').fadeIn(500);
                }
                document.getElementById("imgTitle").src = 'img/' + res[0]['logo_path'];
                document.getElementById("modelTitle").innerHTML = res[0]['img_path'];

                $('#imgTitle').hide();
                $('#imgTitle').fadeIn(1500);

            },

            error: function () {
                console.log("getdataErr");
            }
        });
    }



    //依選擇車型號顯示
    document.getElementById("modelCar").addEventListener("change", function () {
        let t = document.getElementById("modelCar");
        let modelCar = t.options[t.selectedIndex].value;
        getModelData(modelCar);
    });

    var owl = $('.owl-carousel');

    owl.owlCarousel({
        loop: true,
        margin: 10,
        // nav:true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            },
            1440: {
                items: 5
            }
        }

    })

    $(".card").hover(function () {
        if ($(`#${$(this).attr('id')} > .card-body > .active-content`).hasClass("content-text")) {
            $(`#${$(this).attr('id')} > .card-body > .active-content`).removeClass("content-text");
        } else {
            $(`#${$(this).attr('id')} > .card-body > .active-content`).addClass("content-text");
        }
    })

});

function changehtml() {
    var getdom = document.querySelector("#btn1");
    $('#btn1').on('click', function () {
        if ($(this).hasClass('notext')) {
            $(this).removeClass('notext').addClass('addhtml');
            getdom.innerHTML = "Close at here"
        } else {
            $(this).removeClass('addhtml').addClass('notext');
            // getdom.innerHTML="Find type at here&nbsp&nbsp<img src='img/icon-search.png'>"
            getdom.innerHTML = "More Details"
        }
    });
}

function indexTop() {
    $("html, body").animate({
            scrollTop: $("html").offset().top
        },
        250
    );
}

function changeTabContent(button) {
    var content = [];
    var id = [
        '#slide-top-title',
        '#slide-top-content',
        '#slide-top-img',
        '#slide-top-li-1',
        '#slide-top-li-2',
        '#slide-top-li-3',
        '#slide-top-li-4',
        '#p2-top-subTitle',
        '#p2-img',
        '#p2-content',
        '#p3-top-subTitle',
        '#p3-img',
        '#p3-content',
        '#p4-top-subTitle',
        '#p4-img',
        '#p4-content',
    ];
    var item
    if (localStorage.getItem('languagebool') != null) {
        item = localStorage.getItem('languagebool')
    } else {
        item = "en"
    }
    switch (button) {
        case 't-1':
            if (item == 'en') {
                //page 1
                content.push('ComfortContact CC6');
                content.push('Relax in a world of your own!');
                content.push('https://blobs.continental-tires.com/www8/servlet/image/1299144/uncropped/0/395/2/cc6.png');
                content.push('Superior low noise level');
                content.push('Excellent comfortable ride');
                content.push('High mileage performance');
                content.push('Good fuel efficiency');

                //page2
                content.push('Less noise and comfortable frequencies.');
                content.push('https://blobs.continental-tires.com/www8/servlet/image/1299158/uncropped/130/0/2/harmonic-comfort-chambers.png');
                content.push('> Harmonic Comfort Chambers are based on the "Helmoholtz resonator" principle. These specially designed noise cancelling chambers are positioned on the inner shoulder of the tyre pattern. Unpleasant noise generated between the road and tyre is effectively cancelled out as air waves migrate in and out of the chambers. This prevents noise emission towards passengers, resulting in a quieter ride.');

                //page3
                content.push('Reduced noise level');
                content.push('https://blobs.continental-tires.com/www8/servlet/image/1299160/uncropped/130/0/2/0-db-eater.png');
                content.push('> "0" dB-Eaters are uniquely shaped in-groove elements designed to split and diffuse noise waves for lower road noise. To ensure a quieter ride, they break up noise waves travelling in the tread grooves to reduce the sound-level measured in decibels (dB).');

                //page4
                content.push('Comfortable relaxed ride');
                content.push('https://blobs.continental-tires.com/www8/servlet/image/1299162/uncropped/130/0/2/whisper-compound.png');
                content.push('> The CC6 Whisper Compound is a smoother rolling tread compound that adapts better to the roughness of the road surface for superior comfort. The compound absorbs tyre vibrations to diffuse road noise. It dampens micro bumps on the road so the tyre rolls smoothly.');
            } else {
                //page 1
                content.push('ComfortContact CC6');
                content.push('在自己的世界中放鬆!');
                content.push('https://blobs.continental-tires.com/www8/servlet/image/1299144/uncropped/0/395/2/cc6.png');
                content.push('卓越的低噪音水平!');
                content.push('出色的舒適騎行!');
                content.push('高里程表現!');
                content.push('燃油效率高!');

                //page2
                content.push('噪音小，頻率舒適。');
                content.push('https://blobs.continental-tires.com/www8/servlet/image/1299158/uncropped/130/0/2/harmonic-comfort-chambers.png');
                content.push('> 諧波舒適室基於“ Helmoholtz諧振器”原理。這些專門設計的消音室位於輪胎花紋的內胎肩上。隨著空氣波進出腔室，空氣和輪胎之間產生的不愉快噪音會被有效消除。這樣可以防止向乘客發出噪音，從而使行駛更安靜。');

                //page3
                content.push('降低噪音水平');
                content.push('https://blobs.continental-tires.com/www8/servlet/image/1299160/uncropped/130/0/2/0-db-eater.png');
                content.push('> "0" dB-Eaters是形狀獨特的槽形元件，旨在分離和擴散噪聲波以降低道路噪聲。為了確保更安靜的行駛，它們會消除在胎面凹槽中傳播的噪音波，從而降低以分貝為單位的聲級.');

                //page4
                content.push('舒適輕鬆的旅程');
                content.push('https://blobs.continental-tires.com/www8/servlet/image/1299162/uncropped/130/0/2/whisper-compound.png');
                content.push('> CC6 Whisper Compound是一種更光滑的滾動胎面膠，可更好地適應路面的粗糙度，從而提供出色的舒適性。該化合物吸收輪胎振動，以分散道路噪音。它可以緩解路面上的微小顛簸，從而使輪胎平穩滾動。');

            }
            break;
        case 't-2':
            if (item == 'en') {
                //page 1
                content.push('UltraContact UC6');
                content.push('Perfect as a diamond!');
                content.push('https://blobs.continental-tires.com/www8/servlet/image/1299208/uncropped/0/395/2/uc6.png');
                content.push('Full control on wet roads');
                content.push('Extreme short braking distances in dry and wet road conditions');
                content.push('High grip level combined with long durability');
                content.push('Low noise level');

                //page2
                content.push('Higher safety on wet roads.');
                content.push('https://blobs.continental-tires.com/www8/servlet/image/1299218/uncropped/130/0/2/aqua-channel.png');
                content.push('For added safety, Aqua Channel surface sipes quickly directs the water film from the tread pattern as they contact the road. This gives the tyre enhanced water evacuation ability.' +
                    '<br>' +
                    '> On wet roads, the centre of the tyre is at highest risk from aquaplaning. To further reduce this risk, specially developed ' +
                    '<br>' +
                    '> Aqua Drainage  elements are positioned to quickly push water through a tube system into the tread grooves.');

                //page3
                content.push('Extreme short braking distances in dry and wet conditions.');
                content.push('https://blobs.continental-tires.com/www8/servlet/image/1299222/uncropped/130/0/2/diamond-edge.png');
                content.push('> The chamfered angle of the Diamond Edge in the pattern maximizes the contact area of the pattern to distribute the braking forces more evenly while braking.' +
                    '<br>' +
                    '> Without this chamfer, the tread block distorts and loses some of its contact with the road. ' +
                    '<br>' +
                    '> In wet conditions, the  acts as a wiper that clears the water film away from the tread blocks for short braking distances.');

                //page4
                content.push('Adaptive superb grip level and long mileage');
                content.push('https://blobs.continental-tires.com/www8/servlet/image/1299224/uncropped/130/0/2/diamond-blend-compound.png');
                content.push('The new adaptive  Diamond Blend Compound consists of two polymer types:' +
                    '<br>' +
                    '> The short grip-polymers are activated when the vehicle is driving through corners or while braking. This energy is transformed into heat to enable high grip and short braking distances.' +
                    '<br>' +
                    '> The long mileage-polymers are entangled and therefore strongly connected to each other, which ensures a high mileage performance.');
            } else {
                content.push('UltraContact UC6');
                content.push('完美如鑽石！');
                content.push('https://blobs.continental-tires.com/www8/servlet/image/1299208/uncropped/0/395/2/uc6.png');
                content.push('完全控制潮濕的道路');
                content.push('在乾燥和潮濕的路麵條件下，制動距離極短');
                content.push('高抓地力和耐用性');
                content.push('低噪音');

                //page2
                content.push('在潮濕路面上的安全性更高。');
                content.push('https://blobs.continental-tires.com/www8/servlet/image/1299218/uncropped/130/0/2/aqua-channel.png');
                content.push('> 為了增加安全性，Aqua Channel表面刀槽花紋在接觸路面時迅速將水膜從胎面花紋中引出。這使輪胎具有更高的排水能力。' +
                    '<br>' +
                    '> 在潮濕的道路上，輪胎中心受滑水的風險最高。為了進一步降低這種風險，專門開發了' +
                    '<br>' +
                    '> 排水元件的位置可以迅速將水通過管道系統推入胎面凹槽。');

                //page3
                content.push('在乾燥和潮濕的條件下，制動距離極短。');
                content.push('https://blobs.continental-tires.com/www8/servlet/image/1299222/uncropped/130/0/2/diamond-edge.png');
                content.push('> 花紋中菱形邊緣的倒角使花紋的接觸面積最大化，從而在製動時更均勻地分配製動力。' +
                    '<br>' +
                    '> 如果沒有該倒角，則胎面花紋塊會變形並失去與路面的部分接觸。' +
                    '<br>' +
                    '> 在潮濕的條件下，它起著刮水器的作用，可以將水膜從踏板上清除掉，從而縮短制動距離。');

                //page4
                content.push('適應性極佳的抓地力水平和長續航里程');
                content.push('https://blobs.continental-tires.com/www8/servlet/image/1299224/uncropped/130/0/2/diamond-blend-compound.png');
                content.push('> 新的自適應金剛石混合料包括兩種聚合物類型：' +
                    '<br>' +
                    '> 短抓地聚合物在車輛駛過彎道或製動時被激活。該能量轉化為熱量，可以實現較高的抓地力和較短的製動距離。' +
                    '<br>' +
                    '> 長里程聚合物糾纏在一起，因此彼此牢固連接，從而確保了高里程性能。');

            }
            case 't-3':
                if (item == 'en') {
                    //page 1
                    content.push('SportContact™ 6');
                    content.push('Thrilling safety.');
                    content.push('https://blobs.continental-tires.com/www8/servlet/image/264720/uncropped/0/395/3/sportcontact-6-tire-image.png');
                    content.push('Designed for sports and high-performance vehicles.');
                    content.push('Black Chili for maximum grip in all directions enables supreme driving experience');
                    content.push('Vectoring for maximum control, a new era in tread pattern development');
                    content.push('Aralon350™, the new adaptive hybrid cap ply for maximum stability at high speed up to 350km/h');

                    //page2
                    content.push('Shorter braking distances in all weather conditions.');
                    content.push('https://blobs.continental-tires.com/www8/servlet/image/1299158/uncropped/130/0/2/harmonic-comfort-chambers.png');
                    content.push('> The new Micro Flexibility Compound ensures an optimum interlocking between tyre and road surface. This guarantees better acceleration and shorter braking distances at high and low temperatures – in wet or dry conditions.');

                    //page3
                    content.push('Force Vectoring for maximum control, a new era in tread pattern development');
                    content.push('https://blobs.continental-tires.com/www8/servlet/image/1299160/uncropped/130/0/2/0-db-eater.png');
                    content.push('> The improved inner and outer tread pattern ensures best steering precision and support for lateral forces during cornering. The advanced Macro Block Design keeps you safe and in control at any manoeuvre. Stiff centre ribs and asymmetric concave longitudinal grooves greatly support overall stability.');

                    //page4
                    content.push('Aralon350™, the new adaptive hybrid cap ply for maximum high speed up to 350 km/h');
                    content.push('https://blobs.continental-tires.com/www8/servlet/image/1299162/uncropped/130/0/2/whisper-compound.png');
                    content.push('> The sophisticated Aralon350™ technology accelerates your vehicle safely up to 350 km/h. This newly designed strong Hybrid Cap Ply provides a controlled tyre growth – even at highest speeds.');
                } else {
                    //page 1
                    content.push('SportContact™ 6');
                    content.push('驚險的安全性。');
                    content.push('https://blobs.continental-tires.com/www8/servlet/image/264720/uncropped/0/395/3/sportcontact-6-tire-image.png');
                    content.push('專為運動和高性能車輛而設計。');
                    content.push('黑色辣椒可在所有方向上實現最大抓地力，帶來卓越的駕駛體驗');
                    content.push('矢量控制實現最大控制，這是胎面花紋開發的新時代');
                    content.push('新型自適應混合蓋Aralon350™，可在最高時速350 km / h時提供最大的穩定性');

                    //page2
                    content.push('在所有天氣條件下的製動距離更短。');
                    content.push('https://blobs.continental-tires.com/www8/servlet/image/1299158/uncropped/130/0/2/harmonic-comfort-chambers.png');
                    content.push('> 新型的Micro Flexibility複合物可確保輪胎與路面之間的最佳聯鎖。在濕熱或乾燥條件下，這保證了高溫和低溫下更好的加速和較短的製動距離。');

                    //page3
                    content.push('力矢量實現最大控制，這是胎面花紋開發的新時代');
                    content.push('https://blobs.continental-tires.com/www8/servlet/image/1299160/uncropped/130/0/2/0-db-eater.png');
                    content.push('> 改進的內胎面花紋和外胎面花紋可確保最佳的轉向精度，並在轉彎時為橫向力提供支撐。先進的宏塊設計可讓您在任何操作中均保持安全和掌控。剛性的中央肋骨和不對稱的凹入縱向凹槽極大地支持了整體穩定性。');

                    //page4
                    content.push('新型自適應混合蓋Aralon350™，最高時速可達350 km / h');
                    content.push('https://blobs.continental-tires.com/www8/servlet/image/1299162/uncropped/130/0/2/whisper-compound.png');
                    content.push('> 先進的Aralon350™技術可將您的車輛安全加速至350 km / h。這種新設計的強力混合動力胎冠層即使在最高速度下也能控制輪胎的增長。');

                }
                break;
            case 't-4':
                if (item == 'en') {
                    //page 1
                    content.push('MaxContact MC5');
                    content.push('The best balanced performance tire in dry handling, wet handling and low noise');
                    content.push('https://blobs.continental-tires.com/www8/servlet/image/629014/uncropped/0/395/2/mc5.png');
                    content.push('Improved dry and wet performance');
                    content.push('Optimized handling in all situations');
                    content.push('Reduced noise level');
                    content.push('Low noise level');

                    //page2
                    content.push('Superb high speed stability and dry handling.');
                    content.push('https://blobs.continental-tires.com/www8/servlet/image/629022/uncropped/130/0/2/asymmetrical-pattern-design.jpg');
                    content.push('> Optimized contact area for stability and handling' +
                        '<br>' +
                        '> Increased wet grip performance of the tread compound');

                    //page3
                    content.push('Reduced noise generation.');
                    content.push('https://blobs.continental-tires.com/www8/servlet/image/629024/uncropped/130/0/2/noise-breaker.jpg');
                    content.push('> Lower noise inside the vehicle for enhanced driving pleasure' +
                        '<br>' +
                        '> Noise Breakers in the tread grooves to disturb the noise waves' +
                        '<br>' +
                        '> Comfi-Sipes positioned within the inner blocks');

                    //page4
                    content.push('Comfortable driving and improved rolling resistance.');
                    content.push('https://blobs.continental-tires.com/www8/servlet/image/629022/uncropped/130/0/2/asymmetrical-pattern-design.jpg');
                    content.push('> The tyre\'s design means noticeably more comfortable driving with perfect handling and reduced rolling resistance to save you fuel.');
                } else {
                    //page 1
                    content.push('MaxContact MC5');
                    content.push('在乾式處理，濕式處理和低噪音下性能最佳的平衡輪胎');
                    content.push('https://blobs.continental-tires.com/www8/servlet/image/629014/uncropped/0/395/2/mc5.png');
                    content.push('改善了乾濕性能');
                    content.push('在所有情況下均優化處理');
                    content.push('降低噪音水平');
                    content.push('低噪音');

                    //page2
                    content.push('極好的高速穩定性和乾燥處理。');
                    content.push('https://blobs.continental-tires.com/www8/servlet/image/629022/uncropped/130/0/2/asymmetrical-pattern-design.jpg');
                    content.push('> 優化的接觸面積，確保穩定性和操作性' +
                        '<br>' +
                        '> 增強胎面膠的濕抓地性能');

                    //page3
                    content.push('減少噪音的產生。');
                    content.push('https://blobs.continental-tires.com/www8/servlet/image/629024/uncropped/130/0/2/noise-breaker.jpg');
                    content.push('> 降低車內噪音，提高駕駛樂趣' +
                        '<br>' +
                        '> 胎面花紋溝中的防噪音開關可干擾噪音波' +
                        '<br>' +
                        '> Comfi Sipes位於內部塊內');

                    //page4
                    content.push('舒適的行駛和改善的滾動阻力。');
                    content.push('https://blobs.continental-tires.com/www8/servlet/image/629022/uncropped/130/0/2/asymmetrical-pattern-design.jpg');
                    content.push('> 輪胎的設計使駕駛更加舒適，完美的操控性和降低的滾動阻力來節省燃油。');

                }
                break;
            case 't-5':
                //page 1
                if (item == 'en') {
                    content.push('ContiPremiumContact™ 5');
                    content.push('Puts a stop to risks. In all conditions.');
                    content.push('https://blobs.continental-tires.com/www8/servlet/image/5918/uncropped/0/395/7/contipremiumcontact-5-tire-image.png');
                    content.push('For mid-sized and executive class vehicles.');
                    content.push('Perfect grip and optimal handling in every driving situation');
                    content.push('Short braking distances on dry and wet surfaces');
                    content.push('Comfortable driving and improved rolling resistance');

                    //page2
                    content.push('');
                    content.push('https://blobs.continental-tires.com/www8/servlet/image/5956/uncropped/130/0/3/contipremiumcontact-5-test-02.png');
                    content.push('> The Ukrainian magazine "Avto Centr" has published in their current issue its Summer Tyre Test 2015. The tested tyre size was 195/65 R15, test vehicle was a Golf VII.' +
                        '<br>' +
                        '> Rating for the ContiPremiumContactTM 5:"very recommended"' +
                        '<br>' +
                        '> About our ContiPremiumContactTM 5:' +
                        '<br>' +
                        '> + balanced tyre' +
                        '<br>' +
                        '> + short  wet braking distance' +
                        '<br>' +
                        '> -  hydroplaning longitudinal');

                    //page3
                    content.push(' ');
                    content.push('https://blobs.continental-tires.com/www8/servlet/image/5952/uncropped/130/0/3/contipremiumcontact-5-test-01.png');
                    content.push('The German magazine "Auto Zeitung" publishes in its issue (08/2015) a SUV Summer Tyre Test for the tire size 215/65 R16 H/V. Test vehicle was a VW Tiguan.The test was conducted by Auto Zeitung on Continental\'s proving ground in Uvalde/Texas' +
                        '<br>' +
                        '> Rating for the ContiPremiumContactTM" 5: highly recommended' +
                        '<br>' +
                        '> About our ContiPremiumContactTM 5:' +
                        '<br>' +
                        '> + balanced tyre' +
                        '<br>' +
                        '> + efficient and safe tire');

                    //page4
                    content.push(' ');
                    content.push('https://blobs.continental-tires.com/www8/servlet/image/5964/uncropped/130/0/3/contipremiumcontact-5-test-04.png');
                    content.push('The Russian magazine "Za Rulem" has published in their Summer Tyre Test 2015. The tested tyre size was 185/60 R14, test vehicle was a Lada Priora.' +
                        '<br>' +
                        '> The test was conducted by Za Rulem on the Auto Vaz proving ground in Toliyatty.' +
                        '<br>' +
                        '> Rating for the ContiPremiumContactTM 5:Testwinner' +
                        '<br>' +
                        '> About our ContiPremiumContactTM 5:' +
                        '<br>' +
                        '> + grip on every surface' +
                        '<br>' +
                        '> + high speed during lane change' +
                        '<br>' +
                        '> + high comfort Level' +
                        '<br>' +
                        '> - minor claims to handling and driving stability in extreme situations');
                } else {
                    content.push('ContiPremiumContact™ 5');
                    content.push('在所有情況下,阻止風險。');
                    content.push('https://blobs.continental-tires.com/www8/servlet/image/5918/uncropped/0/395/7/contipremiumcontact-5-tire-image.png');
                    content.push('適用於中型和行政級車輛。');
                    content.push('在每種駕駛情況下均具有完美的抓地力和最佳的操控性。');
                    content.push('在乾燥和潮濕的表面上製動距離短。');
                    content.push('舒適的行駛和改善的滾動阻力。');

                    //page2
                    content.push('');
                    content.push('https://blobs.continental-tires.com/www8/servlet/image/5956/uncropped/130/0/3/contipremiumcontact-5-test-02.png');
                    content.push('> 烏克蘭雜誌“ Avto Centr”在其最新一期中發布了2015年夏季輪胎測試。測試的輪胎尺寸為195/65 R15，測試車為Golf VII。' +
                        '<br>' +
                        '> ContiPremiumContactTM 5的等級：“非常推薦”' +
                        '<br>' +
                        '> 關於我們的ContiPremiumContactTM 5：' +
                        '<br>' +
                        '> + 平衡輪胎' +
                        '<br>' +
                        '> + 短濕制動距離' +
                        '<br>' +
                        '> - 滑水縱向');

                    //page3
                    content.push(' ');
                    content.push('https://blobs.continental-tires.com/www8/servlet/image/5952/uncropped/130/0/3/contipremiumcontact-5-test-01.png');
                    content.push('> 德國雜誌《汽車日報》（Auto Zeitung）在發行（08/2015）中針對輪胎尺寸215/65 R16 H / V進行了SUV夏季輪胎測試。測試車輛為大眾Tiguan。該測試由Auto Zeitung在美國大陸航空在德克薩斯州烏瓦爾德的試驗場進行' +
                        '<br>' +
                        '> ContiPremiumContactTM等級5：強烈推薦' +
                        '<br>' +
                        '> 關於我們的ContiPremiumContactTM 5：' +
                        '<br>' +
                        '> +平衡輪胎' +
                        '<br>' +
                        '> +高效安全的輪胎');

                    //page4
                    content.push(' ');
                    content.push('https://blobs.continental-tires.com/www8/servlet/image/5964/uncropped/130/0/3/contipremiumcontact-5-test-04.png');
                    content.push('> 俄羅斯雜誌《 Za Rulem》已在其2015年夏季輪胎測試中發布。測試的輪胎尺寸為185/60 R14，測試車為Lada Priora。' +
                        '<br>' +
                        '> 該測試由Za Rulem在Toliyatty的Auto Vaz試驗場進行。' +
                        '<br>' +
                        '> ContiPremiumContactTM 5的評分：測試獲勝者' +
                        '<br>' +
                        '> 關於我們的ContiPremiumContactTM 5：' +
                        '<br>' +
                        '> + 抓緊每個表面' +
                        '<br>' +
                        '> + 換道時的高速' +
                        '<br>' +
                        '> + 高舒適度' +
                        '<br>' +
                        '> - 在極端情況下對操縱和駕駛穩定性的較小要求');
                }
                break;
            case 't-6':
                if (item == 'en') {
                    //page 1
                    content.push('MaxContact MC6');
                    content.push('Perfect as a diamond!');
                    content.push('https://blobs.continental-tires.com/www8/servlet/image/2361948/uncropped/0/176/2/contimaxcontact-mc6-product--1-.png');
                    content.push('Reduced braking distance in wet and dry conditions');
                    content.push('Superior sporty handling and direct feedback from the road');
                    content.push('Perfect combination of good mileage ');
                    content.push('low noise for everyday driving');

                    //page2
                    content.push('Multiple features guarantee the highest performance. ');
                    content.push('https://blobs.continental-tires.com/www8/servlet/image/2091302/uncropped/130/0/2/contimaxcontact-mc6-multifuncitonal-tread.jpg');
                    content.push('> Dedicated areas on MaxContactTM MC6 tread design are responsible for the high performance of the tyre. These features cover all four directional forces that are applied to the tyre tread.' +
                        '<br>' +
                        '> Stabiliser Bars' +
                        '<br>' +
                        '> Fix and stabilise the outside shoulder blocks and the longitudinal rib to form one stable unit, for enhanced handling and cornering grip. Depending on the dimension, there are about 50 Stabiliser Bars positioned around the tyre\'s circumference. ' +
                        '<br>' +
                        '> Asymmetric Rib Geometry' +
                        '<br>' +
                        '> The supporting angles of the rib-shoulders prevent slanting of the ribs under heavy cornering manoeuvres and sharp changes of steering direction, thus ensuring an enhanced cornering response.' +
                        '<br>' +
                        '> Longitudinal Chamfered Edges' +
                        '<br>' +
                        '> Prevent the rolling-in-effect of the ribs in the lateral direction for maximum contact area to achieve enhanced cornering grip and stability.' +
                        '<br>' +
                        '> Noise Breaker 2.0' +
                        '<br>' +
                        '> Breaks down the noise waves which flow through the grooves to ensure a comfortable low noise ride.');

                    //page3
                    content.push('Meets the extreme high grip requirements of the driver.');
                    content.push('https://blobs.continental-tires.com/www8/servlet/image/2091304/uncropped/130/0/2/contimaxcontact-mc6-adaptive-grip-compund.jpg');
                    content.push('> The special adhesive polymers within the MaxContactTM 6 (MC6) compound are specifically designed to accomplish the extreme high grip requirements of the driver. ' +
                        '<br>' +
                        '> Continental is a technology leader in compounding. For MC6 we took all levels of traction into account to reach maximum grip under all conditions. ' +
                        '<br>' +
                        '<strong>Mechanical Interlocking</strong>' +
                        '<br>' +
                        '> Acts on a mm-scale (millimetre), assures primary contact to the road and interlocks the tread of the tyre to the road\'s surface on a mechanical level.' +
                        '<br>' +
                        '<strong>Hysteresis</strong>' +
                        '<br>' +
                        '> Acts on a µm-scale, generated by the deformation of visco-elastic materials on a micro level due to surface roughness or stick / slip movements of the tyre while driving.  ' +
                        '<br>' +
                        '<strong>Adhesion</strong>' +
                        '<br>' +
                        '​> Acts on a nanometre-scale, superior adhesion to the road surface created by molecular forces - based on the \'Van-der-Waals-Forces" - which bonds the polymers to the road surface on a nanometre level. ');

                    //page4
                    content.push('Reduce tyre flexing to bring handling and high-speed stability to the next level.');
                    content.push('https://blobs.continental-tires.com/www8/servlet/image/1299162/uncropped/130/0/2/whisper-compound.png');
                    content.push('> The stiffness of the Xtreme-Force ply material of MaxContactTM 6 (MC6) reduces tyre flexing during hard cornering and at high speeds providing maximum control and better handling. ' +
                        '<br>' +
                        '> At lower speeds or less sporty driving, less force are applied to the tyres. In such cases, the Xtreme-Force ply material is still flexible enough to ensure a comfortable ride in the comfort zone area, while a standard tyre would be less flexible.   ' +
                        '<br>' +
                        '> In the sporty zone, the Xtreme-Force ply material causes MC6 to be more rigid, which provides a direct feedback to the driver. A conventional ply material would be flexing much more, which reduces the feedback in cornering and steering at high speeds. ');
                    break;
                } else {
 //page 1
 content.push('MaxContact MC6');
 content.push('完美如鑽石！');
 content.push('https://blobs.continental-tires.com/www8/servlet/image/2361948/uncropped/0/176/2/contimaxcontact-mc6-product--1-.png');
 content.push('縮短了在潮濕和乾燥條件下的製動距離');
 content.push('出色的運動操控性和來自道路的直接反饋');
 content.push('良好的行駛里程');
 content.push('低噪音');

 //page2
 content.push('多種功能確保最高的性能。 ');
 content.push('https://blobs.continental-tires.com/www8/servlet/image/2091302/uncropped/130/0/2/contimaxcontact-mc6-multifuncitonal-tread.jpg');
 content.push('> MaxContactTM MC6胎面設計上的專用區域負責輪胎的高性能。這些功能涵蓋了施加到輪胎胎面的所有四個方向力。' +
     '<br>' +
     '> 穩定桿' +
     '<br>' +
     '> 固定並穩定外側肩塊和縱向肋骨，以形成一個穩定的單元，從而提高操縱性和轉彎抓地力。根據尺寸，大約有50個穩定杆位於輪胎的圓周上。' +
     '<br>' +
     '> 不對稱肋骨幾何' +
     '<br>' +
     '> 肋骨肩部的支撐角度可防止在嚴重的轉彎操作和轉向方向急劇變化的情況下肋骨傾斜，從而確保增強的轉彎響應。' +
     '<br>' +
     '> 縱向倒角' +
     '<br>' +
     '> 防止肋在橫向方向上滾動，以實現最大的接觸面積，從而提高轉彎抓地力和穩定性。' +
     '<br>' +
     '> 降噪器2.0' +
     '<br>' +
     '> 分解流過凹槽的噪音波，以確保舒適的低噪音行駛。');

 //page3
 content.push('滿足駕駛員的極高抓地力要求。');
 content.push('https://blobs.continental-tires.com/www8/servlet/image/2091304/uncropped/130/0/2/contimaxcontact-mc6-adaptive-grip-compund.jpg');
 content.push('> MaxContactTM 6（MC6）複合物中的特殊粘合劑聚合物經過專門設計，可滿足駕駛員極高的抓地力要求。 ' +
     '<br>' +
     '> 大陸集團是複合技術的領導者。對於MC6，我們考慮了所有級別的牽引力，以在所有條件下均達到最大抓地力。' +
     '<br>' +
     '<strong>機械聯鎖</strong>' +
     '<br>' +
     '> 以毫米為單位作用（毫米），確保與道路的主要接觸，並在機械水平上將輪胎的胎面與道路表面互鎖。' +
     '<br>' +
     '<strong>磁滯現象</strong>' +
     '<br>' +
     '> 由於微米級的粘彈性材料在行駛過程中由於表面粗糙度或輪胎的粘著/滑移運動而發生微觀變形，因此產生的微米級作用。 ' +
     '<br>' +
     '<strong>附著力</strong>' +
     '<br>' +
     '​> 基於納米級的“范德瓦爾斯力”（Van-der-Waals-Forces），以納米級的力對分子力產生的路面產生優異的附著力。');

 //page4
 content.push('減少輪胎彎曲，將操控性和高速穩定性提升到一個新水平。');
 content.push('https://blobs.continental-tires.com/www8/servlet/image/1299162/uncropped/130/0/2/whisper-compound.png');
 content.push('> MaxContactTM 6（MC6）的Xtreme-Force簾布層材料的剛度可減少硬拐彎和高速行駛期間的輪胎彎曲，從而提供最大程度的控制和更好的操控性。 ' +
     '<br>' +
     '> 在較低的速度或較少的運動駕駛時，將較少的力施加到輪胎上。在這種情況下，Xtreme-Force簾布層材料仍具有足夠的柔韌性，以確保在舒適區騎行舒適，而標準輪胎則柔韌性較差。  ' +
     '<br>' +
     '> 在運動區，Xtreme-Force簾布層材料使MC6更具剛性，從而為駕駛員提供直接反饋。常規的簾布層材料會彎曲得多，從而減少了高速轉彎和轉向時的反饋。');
 break;
                }
    }

    for (let i = 0; i < id.length; i++) {
        let checkImg = id[i].split('-');

        if (checkImg.indexOf('img') == 1) {
            $(id[i]).attr("srcset", content[i]);
        } else {
            $(id[i]).html(content[i]);
        }

    }
}