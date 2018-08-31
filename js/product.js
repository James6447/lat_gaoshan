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
              opt.value = res[i]['img_path']+'/'+res[i]['inch'];
              opt.text = res[i]['img_path'];
              sel.add(opt, sel.options[1]);
          }
      },
      error: function() {
        console.log("getdataErr");
      }
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

function reset(){
    $('html, body').animate({
        scrollTop: $("html").offset().top
    }, 250);
}
