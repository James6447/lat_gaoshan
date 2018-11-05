//车款选项
// --------------------- //
$(document).ready(function() {
    //预设车款栏位
    $.ajax({
      url: "/lat_gaoshan/product/carselected.php",
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

    //依選擇車款顯示
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

    //依選擇車型號顯示
    document.getElementById("modelCar").addEventListener("change", function() {
        let t = document.getElementById("modelCar");
        let modelCar = t.options[t.selectedIndex].value;

        getModelData(modelCar);
    });

//輪框選項
// --------------------- //
    //预设Rim第一参数
    $.ajax({
      url: "/lat_gaoshan/product/rimselected.php",
      type: "POST",
      data: {
          pattern:'1'
      },
      dataType: "JSON",
      success: function(res) {
          //初始第一栏位
          let parameter = [res, 'typeModel', 'inch','inch'];
          clearPreviousData();
          AppendOption(parameter);
      },
      error: function() {
        console.log("getdataErr");
      }
    });

    //依選擇轮胎Diameter顯示(参数2)
    document.getElementById("typeModel").addEventListener("change", function() {
        $("#rimWitdh").empty();
        let t = document.getElementById("typeModel");
        let typeModel = t.options[t.selectedIndex].value;

        clearPreviousData();
        document.getElementById("modelCar").disabled = false;
        $.ajax({
          url: "product/rimselected.php",
          type: "POST",
          data: {
              typeModel:typeModel,
              pattern  :'2'
          },
          dataType: "JSON",
          success: function(res) {
              let parameter = [res, 'rimWitdh', 'rim_width','rim_width'];
              let sel = document.getElementById("rimWitdh");

              AppendOption(parameter);
              sel.disabled = false;
              sel.options[0].disabled = true;
          },

          error: function() {
            console.log("getdataErr");
          }
        });

    });

    //依選擇轮胎Rim Witdh顯示(参数3)
    document.getElementById("rimWitdh").addEventListener("change", function() {
        $("#offset").empty();
        let r = document.getElementById("rimWitdh");
        let t = document.getElementById("typeModel");
        let rimWitdh = r.options[r.selectedIndex].value;
        let typeModel = t.options[t.selectedIndex].value;

        $.ajax({
          url: "product/rimselected.php",
          type: "POST",
          data: {
              rimWitdh  :rimWitdh,
              typeModel :typeModel,
              pattern   :'3'
          },
          dataType: "JSON",
          success: function(res) {
              let parameter = [res, 'offset', 'offset','offset'];
              let sel = document.getElementById("offset");
              let opt = document.createElement("option");

              opt.value = 'offset';
              opt.text = 'offset';
              sel.add(opt, sel.options[1]);

              AppendOption(parameter);

              sel.disabled = false;
              sel.options[0].disabled = true;
          },

          error: function() {
            console.log("getdataErr");
          }
        });

    });

    document.getElementById("offset").addEventListener("change", function() {
        $("#CenterBore").empty();
        let r = document.getElementById("rimWitdh");
        let t = document.getElementById("typeModel");
        let o = document.getElementById("offset");
        let rimWitdh = r.options[r.selectedIndex].value;
        let typeModel = t.options[t.selectedIndex].value;
        let offset = o.options[o.selectedIndex].value;

        $.ajax({
          url: "product/rimselected.php",
          type: "POST",
          data: {
              rimWitdh  : rimWitdh,
              typeModel : typeModel,
              offset    :offset,
              pattern   :'4'
          },
          dataType: "JSON",
          success: function(res) {
              let parameter = [res, 'CenterBore', 'centre_bore','centre_bore'];
              let sel = document.getElementById("CenterBore");
              let opt = document.createElement("option");

              opt.value = 'CenterBore';
              opt.text = 'CenterBore';
              sel.add(opt, sel.options[1]);

              AppendOption(parameter);

              sel.disabled = false;
              sel.options[0].disabled = true;
          },

          error: function() {
            console.log("getdataErr");
          }
        });
    });

    document.getElementById("CenterBore").addEventListener("change", function() {
        $("#BoltPattern").empty();
        let r = document.getElementById("rimWitdh");
        let t = document.getElementById("typeModel");
        let o = document.getElementById("offset");
        let c = document.getElementById("CenterBore");
        let rimWitdh = r.options[r.selectedIndex].value;
        let typeModel = t.options[t.selectedIndex].value;
        let offset = o.options[o.selectedIndex].value;
        let CenterBore = c.options[c.selectedIndex].value;

        $.ajax({
          url: "product/rimselected.php",
          type: "POST",
          data: {
              rimWitdh  : rimWitdh,
              typeModel : typeModel,
              offset    :offset,
              CenterBore:CenterBore,
              pattern   :'5'
          },
          dataType: "JSON",
          success: function(res) {
              let parameter = [res, 'BoltPattern', 'bolt_pattern','bolt_pattern'];
              let sel = document.getElementById("BoltPattern");
              let opt = document.createElement("option");

              opt.value = 'BoltPattern';
              opt.text = 'BoltPattern';
              sel.add(opt, sel.options[1]);

              AppendOption(parameter);

              sel.disabled = false;
              sel.options[0].disabled = true;
          },

          error: function() {
            console.log("getdataErr");
          }
        });
    });
});



// 新增option
function AppendOption(parameter){
    for (var i = 0; i < parameter[0].length; i++) {
        var sel = document.getElementById(parameter[1]);
        var opt = document.createElement("option");

        opt.value = parameter[0][i][parameter[2]];
        opt.text = parameter[0][i][parameter[3]];
        sel.add(opt, sel.options[1]);
    }
}

// 清楚從選後的DATA
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

//依選擇車款顯示
function getCarType(carType){
    $("#modelCar").empty();

    $.ajax({
        url: "product/modelselected.php",
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

//依選擇車型號顯示
function getModelData(modelCar){
    $("#myTable").fadeOut(300);
    $("#myTable tbody tr").remove();
    // setTimeout(function() { $("#myTable tbody tr").remove(); }, 600);
    let col;
    $.ajax({
        url: "product/tyre_list.php",
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
