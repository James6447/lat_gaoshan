$(document).ready(function() {
    changehtml();
    $.ajax({
        url: "/product/carselected.php",
        type: "POST",
        dataType: "JSON",
        success: function(res) {
            let parameter = [res, 'typeCar', 'value' ,'type'];
            AppendOption(parameter);
            document.getElementById("modelCar").disabled = true;
        },
        error: function() {
            console.log("getdataErr");
        }
        });

        function clearPreviousData(){
            var col_1 = document.getElementById("rimWitdh");
            var col_2 = document.getElementById("offset");
            var col_3 = document.getElementById("CenterBore");
            col_1.disabled = true;
            col_2.disabled = true;
            col_3.disabled = true;
        
            $("#offset").empty();
            $("#centerBore").empty();
        
            let selection = ['rimWitdh','offset','CenterBore'];
            for (var i = 0; i < selection.length; i++) {
                var sel = document.getElementById(selection[i]);
                var opt = document.createElement("option");
                opt.value = selection[i];
                opt.text = selection[i];
                sel.add(opt, sel.options[1]);
            }
        
        }

        function getCarType(carType){
            $("#modelCar").empty();
        
            $.ajax({
                url: "/product/modelselected.php",
                type: "POST",
                data: {
                    carType:carType
                },
                dataType: "JSON",
                success: function(res) {
                    let parameter = [res, 'modelCar', 'img_path','img_path'];
                    AppendOption(parameter);
                    document.getElementById("modelCar").disabled = false;
                    getModelData(res[0].img_path);
                },
                error: function() {
                    console.log("getdataErr");
                }
            });
        }

        function AppendOption(parameter){
            for (var i = 0; i < parameter[0].length; i++) {
                var sel = document.getElementById(parameter[1]);
                var opt = document.createElement("option");
                opt.value = parameter[0][i][parameter[2]];
                opt.text = parameter[0][i][parameter[3]];
                sel.add(opt, sel.options[1]); //他出现error你查查看
            }
        }
    //依選擇車款顯示‘  
    document.getElementById("typeCar").addEventListener("change", function() {
        //清掉之前的选择
        let t = document.getElementById("typeCar");
        let carType = t.options[t.selectedIndex].value;

        if(carType == 0){
            document.getElementById("modelCar").disabled = true;
        }else{
            $("#modelCar").empty();
            getCarType(carType);
        }
    });

    function getModelData(modelCar){
        $("#myTable").fadeOut(300);
        $("#myTable tbody tr").remove();
        // setTimeout(function() { $("#myTable tbody tr").remove(); }, 600);
        let col;
        $.ajax({
            url: "/product/tyre_list.php",
            type: "POST",
            data: {
                modelCar:modelCar
            },
            dataType: "JSON",
            success: function(res) {
                //insert table view
                document.getElementById("myTable").style.visibility="visible";
                document.getElementById("imgTitle").style.visibility="visible";
                var table = document.getElementById("dataChange");
                for (var i = 0; i < res['size'].length; i++) {
                    let row = table.insertRow(i);
                    let cell1 = row.insertCell(0);
                    let cell2 = row.insertCell(1);
    
                    (i==0)? col=res[0]['img_path']:col='';
                    cell1.innerHTML = col;
                    cell2.innerHTML = res['size'][i];
                    $('#myTable').hide();
                    $('#myTable').fadeIn(500);
                }
                document.getElementById("imgTitle").src = 'img/'+res[0]['logo_path'];
                document.getElementById("modelTitle").innerHTML = res[0]['img_path'];
    
                $('#imgTitle').hide();
                $('#imgTitle').fadeIn(1500);
    
            },
    
            error: function() {
                console.log("getdataErr");
            }
        });
    }
    
   

    //依選擇車型號顯示
    document.getElementById("modelCar").addEventListener("change", function() {
        let t = document.getElementById("modelCar");
        let modelCar = t.options[t.selectedIndex].value;
        getModelData(modelCar);
    });

    var owl = $('.owl-carousel');

    owl.owlCarousel({
        loop:true,
        margin:10,
        // nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            },
            1440:{
                items:5
            }
        }

    })

    $(".card").hover(function() {
        if ($(`#${$(this).attr('id')} > .card-body > .active-content`).hasClass("content-text")) {
            $(`#${$(this).attr('id')} > .card-body > .active-content`).removeClass("content-text");
        } else {
            $(`#${$(this).attr('id')} > .card-body > .active-content`).addClass("content-text");
        }
    })
   
});

function changehtml(){
    var getdom =document.querySelector("#btn1");
   $('#btn1').on('click', function(){
        if($(this).hasClass('notext')){
            $(this).removeClass('notext').addClass('addhtml');
            getdom.innerHTML="Close at here"
        }else{
            $(this).removeClass('addhtml').addClass('notext');
            // getdom.innerHTML="Find type at here&nbsp&nbsp<img src='img/icon-search.png'>"
            getdom.innerHTML="More Details"
        }
    });  
}

function indexTop(){
    $("html, body").animate(
        {
            scrollTop: $("html").offset().top
        },
        250
    );
    }

function changeTabContent(button){
    var content    = [];
    var id         = [
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

    switch (button) {
        case 't-1':
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
            content.push('Harmonic Comfort Chambers are based on the "Helmoholtz resonator" principle. These specially designed noise cancelling chambers are positioned on the inner shoulder of the tyre pattern. Unpleasant noise generated between the road and tyre is effectively cancelled out as air waves migrate in and out of the chambers. This prevents noise emission towards passengers, resulting in a quieter ride.');

            //page3
            content.push('Reduced noise level');
            content.push('https://blobs.continental-tires.com/www8/servlet/image/1299160/uncropped/130/0/2/0-db-eater.png');
            content.push('"0" dB-Eaters are uniquely shaped in-groove elements designed to split and diffuse noise waves for lower road noise. To ensure a quieter ride, they break up noise waves travelling in the tread grooves to reduce the sound-level measured in decibels (dB).');

            //page4
            content.push('Comfortable relaxed ride');
            content.push('https://blobs.continental-tires.com/www8/servlet/image/1299162/uncropped/130/0/2/whisper-compound.png');
            content.push('The CC6 Whisper Compound is a smoother rolling tread compound that adapts better to the roughness of the road surface for superior comfort. The compound absorbs tyre vibrations to diffuse road noise. It dampens micro bumps on the road so the tyre rolls smoothly.');
            break;
        case 't-2':
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
                'On wet roads, the centre of the tyre is at highest risk from aquaplaning. To further reduce this risk, specially developed ' +
                '<br>' +
                'Aqua Drainage  elements are positioned to quickly push water through a tube system into the tread grooves.');

            //page3
            content.push('Extreme short braking distances in dry and wet conditions.');
            content.push('https://blobs.continental-tires.com/www8/servlet/image/1299222/uncropped/130/0/2/diamond-edge.png');
            content.push('The chamfered angle of the Diamond Edge in the pattern maximizes the contact area of the pattern to distribute the braking forces more evenly while braking.' +
                '<br>' +
                'Without this chamfer, the tread block distorts and loses some of its contact with the road. ' +
                '<br>' +
                'In wet conditions, the  acts as a wiper that clears the water film away from the tread blocks for short braking distances.');

            //page4
            content.push('Adaptive superb grip level and long mileage');
            content.push('https://blobs.continental-tires.com/www8/servlet/image/1299224/uncropped/130/0/2/diamond-blend-compound.png');
            content.push('The new adaptive  Diamond Blend Compound consists of two polymer types:' +
                '<br>' +
                'The short grip-polymers are activated when the vehicle is driving through corners or while braking. This energy is transformed into heat to enable high grip and short braking distances.' +
                '<br>' +
                'The long mileage-polymers are entangled and therefore strongly connected to each other, which ensures a high mileage performance.');
            break;
        case 't-3':
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
            content.push('The new Micro Flexibility Compound ensures an optimum interlocking between tyre and road surface. This guarantees better acceleration and shorter braking distances at high and low temperatures – in wet or dry conditions.');

            //page3
            content.push('Force Vectoring for maximum control, a new era in tread pattern development');
            content.push('https://blobs.continental-tires.com/www8/servlet/image/1299160/uncropped/130/0/2/0-db-eater.png');
            content.push('The improved inner and outer tread pattern ensures best steering precision and support for lateral forces during cornering. The advanced Macro Block Design keeps you safe and in control at any manoeuvre. Stiff centre ribs and asymmetric concave longitudinal grooves greatly support overall stability.');

            //page4
            content.push('Aralon350™, the new adaptive hybrid cap ply for maximum high speed up to 350 km/h');
            content.push('https://blobs.continental-tires.com/www8/servlet/image/1299162/uncropped/130/0/2/whisper-compound.png');
            content.push('The sophisticated Aralon350™ technology accelerates your vehicle safely up to 350 km/h. This newly designed strong Hybrid Cap Ply provides a controlled tyre growth – even at highest speeds.');
            break;
        case 't-4':
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
            content.push('Optimized contact area for stability and handling' +
                '<br>' +
                'Increased wet grip performance of the tread compound');

            //page3
            content.push('Reduced noise generation.');
            content.push('https://blobs.continental-tires.com/www8/servlet/image/629024/uncropped/130/0/2/noise-breaker.jpg');
            content.push('Lower noise inside the vehicle for enhanced driving pleasure' +
                '<br>' +
                'Noise Breakers in the tread grooves to disturb the noise waves' +
                '<br>' +
                'Comfi-Sipes positioned within the inner blocks');

            //page4
            content.push('Comfortable driving and improved rolling resistance.');
            content.push('https://blobs.continental-tires.com/www8/servlet/image/629022/uncropped/130/0/2/asymmetrical-pattern-design.jpg');
            content.push('The tyre\'s design means noticeably more comfortable driving with perfect handling and reduced rolling resistance to save you fuel.');
            break;
        case 't-5':
            //page 1
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
            content.push('The Ukrainian magazine "Avto Centr" has published in their current issue its Summer Tyre Test 2015. The tested tyre size was 195/65 R15, test vehicle was a Golf VII.' +
                '<br>' +
                'Rating for the ContiPremiumContactTM 5:"very recommended"' +
                '<br>' +
                'About our ContiPremiumContactTM 5:' +
                '<br>' +
                '+ balanced tyre' +
                '<br>' +
                '+ short  wet braking distance' +
                '<br>' +
                '-  hydroplaning longitudinal');

            //page3
            content.push(' ');
            content.push('https://blobs.continental-tires.com/www8/servlet/image/5952/uncropped/130/0/3/contipremiumcontact-5-test-01.png');
            content.push('The German magazine "Auto Zeitung" publishes in its issue (08/2015) a SUV Summer Tyre Test for the tire size 215/65 R16 H/V. Test vehicle was a VW Tiguan.The test was conducted by Auto Zeitung on Continental\'s proving ground in Uvalde/Texas' +
                '<br>' +
                'Rating for the ContiPremiumContactTM" 5: highly recommended' +
                '<br>' +
                'About our ContiPremiumContactTM 5:' +
                '<br>' +
                '+ balanced tyre' +
                '<br>' +
                '+ efficient and safe tire');

            //page4
            content.push(' ');
            content.push('https://blobs.continental-tires.com/www8/servlet/image/5964/uncropped/130/0/3/contipremiumcontact-5-test-04.png');
            content.push('The Russian magazine "Za Rulem" has published in their Summer Tyre Test 2015. The tested tyre size was 185/60 R14, test vehicle was a Lada Priora.' +
                '<br>' +
                'The test was conducted by Za Rulem on the Auto Vaz proving ground in Toliyatty.' +
                '<br>' +
                'Rating for the ContiPremiumContactTM 5:Testwinner' +
                '<br>' +
                'About our ContiPremiumContactTM 5:' +
                '<br>' +
                '+ grip on every surface' +
                '<br>' +
                '+ high speed during lane change' +
                '<br>' +
                '+ high comfort Level' +
                '<br>' +
                '- minor claims to handling and driving stability in extreme situations');
            break;
        case 't-6':
            //page 1
            content.push('MaxContact MC6');
            content.push('Perfect as a diamond!');
            content.push('https://blobs.continental-tires.com/www8/servlet/image/2361948/uncropped/0/176/2/contimaxcontact-mc6-product--1-.png');
            content.push('Reduced braking distance in wet and dry conditions');
            content.push('Superior sporty handling and direct feedback from the road');
            content.push('Perfect combination of good mileage and low noise for everyday driving');
            content.push('');

            //page2
            content.push('Multiple features guarantee the highest performance. ');
            content.push('https://blobs.continental-tires.com/www8/servlet/image/2091302/uncropped/130/0/2/contimaxcontact-mc6-multifuncitonal-tread.jpg');
            content.push('Dedicated areas on MaxContactTM MC6 tread design are responsible for the high performance of the tyre. These features cover all four directional forces that are applied to the tyre tread.' +
                '<br>' +
                'Stabiliser Bars' +
                '<br>' +
                '<br>' +
                'Fix and stabilise the outside shoulder blocks and the longitudinal rib to form one stable unit, for enhanced handling and cornering grip. Depending on the dimension, there are about 50 Stabiliser Bars positioned around the tyre\'s circumference. ' +
                '<br>' +
                'Asymmetric Rib Geometry' +
                '<br>' +
                'The supporting angles of the rib-shoulders prevent slanting of the ribs under heavy cornering manoeuvres and sharp changes of steering direction, thus ensuring an enhanced cornering response.' +
                '<br>' +
                ' Longitudinal Chamfered Edges' +
                '<br>' +
                'Prevent the rolling-in-effect of the ribs in the lateral direction for maximum contact area to achieve enhanced cornering grip and stability.' +
                '<br>' +
                'Noise Breaker 2.0' +
                '<br>' +
                'Breaks down the noise waves which flow through the grooves to ensure a comfortable low noise ride.');

            //page3
            content.push('Meets the extreme high grip requirements of the driver.');
            content.push('https://blobs.continental-tires.com/www8/servlet/image/2091304/uncropped/130/0/2/contimaxcontact-mc6-adaptive-grip-compund.jpg');
            content.push('The special adhesive polymers within the MaxContactTM 6 (MC6) compound are specifically designed to accomplish the extreme high grip requirements of the driver. ' +
                '<br>' +
                'Continental is a technology leader in compounding. For MC6 we took all levels of traction into account to reach maximum grip under all conditions. ' +
                '<br>' +
                '<strong>Mechanical Interlocking</strong>' +
                '<br>' +
                'Acts on a mm-scale (millimetre), assures primary contact to the road and interlocks the tread of the tyre to the road\'s surface on a mechanical level.' +
                '<br>' +
                '<strong>Hysteresis</strong>' +
                '<br>' +
                'Acts on a µm-scale, generated by the deformation of visco-elastic materials on a micro level due to surface roughness or stick / slip movements of the tyre while driving.  ' +
                '<br>' +
                '<strong>Adhesion</strong>' +
                '<br>' +
                '​Acts on a nanometre-scale, superior adhesion to the road surface created by molecular forces - based on the \'Van-der-Waals-Forces" - which bonds the polymers to the road surface on a nanometre level. ');

            //page4
            content.push('Reduce tyre flexing to bring handling and high-speed stability to the next level.');
            content.push('https://blobs.continental-tires.com/www8/servlet/image/1299162/uncropped/130/0/2/whisper-compound.png');
            content.push('The stiffness of the Xtreme-Force ply material of MaxContactTM 6 (MC6) reduces tyre flexing during hard cornering and at high speeds providing maximum control and better handling. ' +
                '<br>' +
                'At lower speeds or less sporty driving, less force are applied to the tyres. In such cases, the Xtreme-Force ply material is still flexible enough to ensure a comfortable ride in the comfort zone area, while a standard tyre would be less flexible.   ' +
                '<br>' +
                'In the sporty zone, the Xtreme-Force ply material causes MC6 to be more rigid, which provides a direct feedback to the driver. A conventional ply material would be flexing much more, which reduces the feedback in cornering and steering at high speeds. ');
            break;

    }

    for(let i = 0; i < id.length; i++){
        let checkImg = id[i].split('-');

        if(checkImg.indexOf('img') == 1){
            $(id[i]).attr("srcset", content[i]);
        }else {
            $(id[i]).html(content[i]);
        }

    }
}