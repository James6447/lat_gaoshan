$(document).ready(function() {
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
                document.getElementById("imgTitle").src = '../img/'+res[0]['logo_path'];
                document.getElementById("modelTitle").innerHTML = res[0]['img_path'];
    
                $('#imgTitle').hide();
                $('#imgTitle').fadeIn(1500);
    
            },
    
            error: function() {
                console.log("getdataErr");
            }
        });
    }
    changehtml();

    //依選擇車型號顯示
    document.getElementById("modelCar").addEventListener("change", function() {
        let t = document.getElementById("modelCar");
        let modelCar = t.options[t.selectedIndex].value;
        getModelData(modelCar);
    });
});

function changehtml(){
    var getdom =document.querySelector("#btn1");
   $('#btn1').on('click', function(){
        if($(this).hasClass('notext')){
            $(this).removeClass('notext').addClass('addhtml');
            getdom.innerHTML="關閉";
        }else{
            $(this).removeClass('addhtml').addClass('notext');
            getdom.innerHTML="尋找你要的類型 &nbsp&nbsp<img src='../img/icon-search.png'>";
        }
    });  
}