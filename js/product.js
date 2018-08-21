$(document).ready(function() {
    $.ajax({
      url: "product/carselected.php",
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
              opt.value = res[i]['img_path']+'/'+res[i]['size'];
              opt.text = res[i]['img_path'];
              sel.add(opt, sel.options[1]);
          }
      },
      error: function() {
        console.log("getdataErr");
      }
    });

    $("#test1").click(function() {
        $('html, body').animate({
            scrollTop: $("html").offset().top
        }, 250);
    });
});


function TypeFunc(){
    //清掉之前的选择
    $("#modelCar").empty();

    let t = document.getElementById("typeCar");
    let carType = t.options[t.selectedIndex].value;
    // let m = document.getElementById("modelCar");
    // let carModel = m.options[m.selectedIndex].value;

    $.ajax({
      url: "product/carselected.php",
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
              opt.value = res[i]['img_path']+'/'+res[i]['size'];
              opt.text = res[i]['img_path'];
              sel.add(opt, sel.options[1]);
          }
      },

      error: function() {
        console.log("getdataErr");
      }
    });
}

function getProduct(pageName){
  var req=new XMLHttpRequest();
  req.open("get","http://localhost:5566/lat_gaoshan/product/"+pageName);
  req.onload=function(){
    var content=document.getElementById("change");
    change.innerHTML=this.responseText;
  };
  req.send();
}
// function getProduct(pageName){
//   var req=new XMLHttpRequest();
//   req.open("get","http://lausincere.com/product/"+pageName);
//   req.onload=function(){
//     var content=document.getElementById("change");
//     change.innerHTML=this.responseText;
//   };
//   req.send();
// }


function getData(pageName){
  var req=new XMLHttpRequest();
  req.open("get","http://localhost:5566/lat_gaoshan/product/"+pageName);
  req.onload=function(){
    var content=document.getElementById("change");
    change.innerHTML=this.responseText;
    // console.log(document.getElementById("test").textContent);
  };
  req.send();
}
// function getData(pageName){
//   var req=new XMLHttpRequest();
//   req.open("get","http://lausincere.com/product/"+pageName);
//   req.onload=function(){
//     var content=document.getElementById("change");
//     change.innerHTML=this.responseText;
//   };
//   req.send();
// }

function reset(){
    alert('hi');

    console.log(document.getElementById("test").textContent);
}
