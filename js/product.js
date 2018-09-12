//车款选项
// --------------------- //
$(document).ready(function() {
    //预设车款栏位
    $.ajax({
      url: "product/carselected.php",
      type: "POST",
      // data: {
      //     carType:'1'
      // },
      dataType: "JSON",
      success: function(res) {
          for (var i = 0; i < res.length; i++) {
              // document.getElementById("modelCar").innerHTML = "<option>"+res[i]['img_path']+"</option>";
              var sel = document.getElementById("typeCar");
              var opt = document.createElement("option");
              opt.value = res[i]['value'];
              // opt.value = res[i]['img_path']+'/'+res[i]['inch'];
              opt.text = res[i]['type'];
              sel.add(opt, sel.options[1]);
          }
      },
      error: function() {
        console.log("getdataErr");
      }
    });

    //预设车形栏位
    $.ajax({
      url: "product/modelselected.php",
      type: "POST",
      data: {
          carType:'1'
      },
      dataType: "JSON",
      success: function(res) {
          for (var i = 0; i < res.length; i++) {
              // document.getElementById("modelCar").innerHTML = "<option>"+res[i]['img_path']+"</option>";
              var sel = document.getElementById("modelCar");
              var opt = document.createElement("option");
              opt.value = res[i]['img_path'];
              // opt.value = res[i]['img_path']+'/'+res[i]['inch'];
              opt.text = res[i]['img_path'];
              sel.add(opt, sel.options[1]);
          }
      },
      error: function() {
        console.log("getdataErr");
      }
    });

    //依選擇車型號顯示
    document.getElementById("modelCar").addEventListener("change", function() {
        let t = document.getElementById("modelCar");
        let modelCar = t.options[t.selectedIndex].value;

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

    });


});

//依選擇車款顯示
function TypeFunc(){
    //清掉之前的选择
    $("#modelCar").empty();

    let t = document.getElementById("typeCar");
    let carType = t.options[t.selectedIndex].value;
    // let m = document.getElementById("modelCar");
    // let carModel = m.options[m.selectedIndex].value;

    $.ajax({
      url: "product/modelselected.php",
      type: "POST",
      data: {
          carType:carType
      },
      dataType: "JSON",
      success: function(res) {
          this.size = res;
          for (var i = 0; i < res.length; i++) {
              // document.getElementById("modelCar").innerHTML = "<option>"+res[i]['img_path']+"</option>";
              var sel = document.getElementById("modelCar");
              var opt = document.createElement("option");
              // opt.value = res[i]['img_path']+'/'+res[i]['size'];
              opt.value = res[i]['img_path'];
              opt.text = res[i]['img_path'];
              sel.add(opt, sel.options[1]);
          }
      },

      error: function() {
        console.log("getdataErr");
      }
    });
}


//輪框選項
// --------------------- //



//顯示產品
function getProduct(pageName){
  var req=new XMLHttpRequest();
  req.open("get","http://localhost:5566/lat_gaoshan/product/"+pageName);
  req.onload=function(){
    let app = $(window).width();
    let content=document.getElementById("change");
    change.innerHTML=this.responseText;
    //remove atribute zoom in photo
    if(app <= 769){
        let cls = document.getElementsByClassName('card-img-top');
        for(var i = 0; i < cls.length; i++) {
           cls[i].removeAttribute('data-action');
        }
    }
  };
  req.send();
}


// function getProduct(pageName){
//   var req=new XMLHttpRequest();
//   req.open("get","http://www.lausincere.com/product/"+pageName);
//   req.onload=function(){
//       let app = $(window).width();
//       let content=document.getElementById("change");
//       change.innerHTML=this.responseText;
//       //remove atribute zoom in photo
//       if(app <= 769){
//           let cls = document.getElementsByClassName('card-img-top');
//           for(var i = 0; i < cls.length; i++) {
//              cls[i].removeAttribute('data-action');
//           }
//       }
//   };
//   req.send();
// }

//選擇殘品後往上滑
function reset(){
    $('html, body').animate({
        scrollTop: $("html").offset().top
    }, 250);
}
