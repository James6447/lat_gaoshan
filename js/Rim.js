$(document).ready(function () {
  if (window.location.search) {
    var obj = descUrl()
    ifwindowlocation(obj)
  } else {
    gettyre();
  }
  getrim();
  getmodel();
  getbrand();
  getBoltpattern();
  getRim();
  gettyretab();
  checkRim();
  // getAccessoriesSelect();
  // getAccessories();
  // checkAccessories();
  gettyrewidth();
  gettyreheight();
  getTireBrands();
  getDiameter();
  getwindowheight();
  checktyre();

  let heighting = window.innerHeight
  let div = document.querySelector('#footercontainer').offsetHeight
  let div2 = document.querySelector('#navbar').offsetHeight;
  let div3 = document.querySelector('#carousel').offsetHeight
  document.querySelector('body').style.height = heighting +'px'
  document.querySelector('#test').style.minHeight =heighting-div-div2-div3 +'px'
})

var item
if (localStorage.getItem('languagebool') != null) {
  item = localStorage.getItem('languagebool')
} else {
  item = "en"
}

var index = {
  "ABOUT": {
    cn: "關於我們",
    en: "ABOUT US"
  },
  "All Products": {
    cn: "全部商品"
  },
  "Cars": {
    cn: "車輛"
  },
  "Accessories": {
    cn: "配件"
  },
  "Promotions": {
    cn: "促銷"
  },
  "News": {
    cn: "新聞"
  },
  "Technical Information": {
    cn: "技術資訊"
  },
  "Locations": {
    cn: "地點"
  },
  "Where to buy": {
    cn: "購買地點"
  },
  "Call Us": {
    cn: "致電給我們"
  },
  "Follow Us": {
    cn: "追蹤我們"
  },
  "Â© 2018 Copyright:LauSincere AutowagoServices": {
    cn: "Â© 2018 版權所有:LauSincere AutowagoServices"
  },
  "Home": {
    cn: "首頁",
    en: "HOME"
  },
  "Products": {
    cn: "產品",
    en: "PRODUCTS"
  },
  "Services": {
    cn: "服務",
    en: "SERVICES"
  },
  "Contact": {
    cn: "聯絡我們",
    en: "CONTACT US"
  },
  "Width(mm)": {
    en: "Width(mm)",
    cn: "寬度(毫米)"
  },
  "Height(mm)": {
    en: "Height(mm)",
    cn: "高度(毫米)"
  },
  "Diameter(inch)": {
    en: "Diameter(inch)",
    cn: "輪圈直徑(英寸)"
  },
  'AllBrands': {
    cn: "牌子"
  },
  "Tyres": {
    cn: "輪胎"
  },
  "Rim": {
    cn: "輪圈"
  },
  "Accessories": {
    cn: "配飾"
  },
  "Filters by": {
    cn: "篩選為"
  },
  "Brand:": {
    cn: "牌子:"
  },
  "Specification:":{
    cn:"規格："
  },
  "Description":{
    cn:"描述"
  },
  "Tyre Description":{
    cn:"輪胎描述"
  },
  "Extreme short braking distances in dry and wet road conditions":{
    cn:"在乾燥和潮濕的路麵條件下，制動距離極短"
  },
  "High grip level combined with long durability":{
    cn:"高抓地力和耐用性"
  },
  "Low noise level":{
    cn:"低噪音"
  },
  "Improved dry and wet performance":{
    cn:"改善了乾濕性能"
  },
  "Optimised handling in all situations":{
    cn:"在所有情況下均優化處理"
  },
  "Reduced noise level":{
    cn:"降低噪音水平"
  },
  "Excellent noise levels and comfort in on-road use":{
    cn:"出色的噪音水平和道路使用舒適性"
  },
  "Good protection against aquaplaning":{
    cn:"良好的防滑水保護"
  },
  "Superb traction both on- and off-road":{
    cn:"公路和越野均具有出色的牽引力"
  },
  "Outstanding handling for on-road and general off-road use":{
    cn:"出色的公路和一般越野使用性能"
  },
  "Excellent braking performance on dry and wet roads":{
    cn:"在乾燥和潮濕的路面上均具有出色的製動性能"
  },
  "Optimised rolling resistance":{
    cn:"優化的滾動阻力"
  },
  "Outstanding braking performance in both wet and dry conditions":{
    cn:"在潮濕和乾燥條件下均具有出色的製動性能"
  },
  "Excellent resistance to aquaplaning":{
    cn:"優異的抗滑水性能"
  },
  "Precise handling and unbeatable driving stability":{
    cn:"精確的處理和無與倫比的行駛穩定性"
  },
  "Black Chili for maximum grip in all directions enables supreme driving experience":{
    cn:"黑色辣椒可在所有方向上實現最大抓地力，帶來卓越的駕駛體驗"
  },
  "Vectoring for maximum control, a new era in tread pattern development":{
    cn:"矢量控制實現最大控制，這是胎面花紋開發的新時代"
  },
  "Aralon350™, the new adaptive hybrid cap ply for maximum stability at high speed up to 350km/h":{
    cn:"新型自適應混合蓋Aralon350™，可在最高時速350 km / h時提供最大的穩定性"
  },
  "Excellent safety when driving at speed":{
    cn:"高速行駛時的出色安全性"
  },
  "Shorter stopping distances on dry and wet roads":{
    cn:"在乾燥和潮濕的道路上停車距離更短"
  },
  "Excellent protection against aquaplaning":{
    cn:"出色的防滑水保護"
  },
  "Perfect steering precision and sporty handling":{
    cn:"完美的轉向精度和運動操控性"
  },
  "Outstanding grip and stability during cornering":{
    cn:"轉彎時出色的抓地力和穩定性"
  },
  "Optimised to meet the specific requirements of front and rear axle positions":{
    cn:"經過優化以滿足前後軸位置的特定要求"
  },
  "Improved dry and wet performance":{
    cn:"改善了乾濕性能"
  },
  "Optimised handling in all situations":{
    cn:"在所有情況下均優化處理"
  },
  "Reduced noise level":{
    cn:"降低噪音水平"
  },
  "Excellent Handling":{
    cn:"出色的處理"
  },
  "Superior Braking Performance":{
    cn:"出色的製動性能"
  },
  "Wet/dry performance":{
    cn:"濕/乾性能"
  },
  "Quiet Performance":{
    cn:"安靜的表現"
  },
  "Extra-large centre grooves and diagonal blading optimise water dispersion and traction in wet conditions.":{
    cn:"超大的中心凹槽和對角線葉片可在潮濕條件下優化水的分散和牽引力。"
  },
  "Mileage":{
    cn:"里程"
  },
  "Superior Braking Performance":{
    cn:"出色的製動性能"
  },
  "Comfort Performance":{
    cn:"舒適表現"
  },
  "TredLife Technology":{
    cn:"TredLife技術"
  },
  "Durability":{
    cn:"耐用性"
  },
  "Fuel Economy":{
    cn:"燃油經濟性"
  },
  "Wet performance":{
    cn:"濕性能"
  },
  "Superior Grip":{
    cn:"優越的抓地力"
  },
  "Quiet Performance":{
    cn:"安靜的表現"
  },
  "Shoulder groove width design":{
    cn:"肩溝寬度設計"
  },
  "High dispersion silica tread compound":{
    cn:"高分散性二氧化矽胎面膠"
  },
  "Super high turn up carcass":{
    cn:"超高胎體"
  },
  "Extraordinary handling and braking in wet conditions":{
    cn:"潮濕條件下的異常處理和製動"
  },
  "Driving stability even at high speed":{
    cn:"高速行駛時的行駛穩定性"
  },
  "Low wear through high dispersible silica":{
    cn:"通過高分散性二氧化矽降低磨損"
  },
  "Improved protection against aquaplaning":{
    cn:"改善了對滑水的保護"
  },
  "Excellent handling on dry roads":{
    cn:"在乾燥的路面上表現出色"
  },
  "Reduced noise level and improved driving comfort":{
    cn:"降低噪音水平並提高駕駛舒適性"
  },
  "Improve handling and braking in both wet and dry conditions.":{
    cn:"在潮濕和乾燥條件下均可改善操作和製動"
  },
  "Grooves on the tread pattern are rounded off to reduce road induced frictional noises":{
    cn:"胎面花紋上的凹槽被修圓，以減少道路感應的摩擦噪音"
  },
  "A thicker design with which to protect his precious OZ Alleggerita rims from curb rash":{
    cn:"較厚的設計可保護他的珍貴OZ Alleggerita車圈免受路邊皮疹的侵害"
  },
  "More Mileage":{
    cn:"更多里程"
  },
  "More Fuel Savings":{
    cn:"節省更多燃油"
  },
  "Maximum Safety":{
    cn:"最高安全性"
  },
  "Better Road Holding in Wet Conditions":{
    cn:"潮濕條件下更好的抓地力"
  },
  "More Driving Pleasure":{
    cn:"更多駕駛樂趣"
  },
  "Outstanding Energy Efficiency & Long Lasting":{
    cn:"傑出的能效和持久"
  },
  "Reduced Braking Distances":{
    cn:"減少制動距離"
  },
  "Better Holding on Wet Roads":{
    cn:"更好地保持濕滑的道路"
  },
  "Smooth & Comfortable Ride":{
    cn:"平穩舒適的乘坐"
  },
  "Excellent Performance in Wet or Dry Conditions":{
    cn:"在乾濕條件下均具有出色的性能"
  },
  "A Comfortable and Smoother Ride":{
    cn:"舒適順暢的騎行"
  },
  "This summer tyre delivers excellent wet and dry":{
    cn:"這款夏季輪胎具有出色的干濕性能"
  },
  "An off-road tyre with on-road capabilities":{
    cn:"具有公路行駛能力的越野輪胎"
  },
  "Comfortable & Peaceful Ride":{
    cn:"舒適和平騎"
  },
  "Greater Traction & Robustness":{
    cn:"更大的牽引力和堅固性"
  },
  "Inch":{
    cn:"英寸"
  },
  "RimWidth":{
    cn:"輪圈寬度"
  },
  "Offset":{
    cn:"偏移量"
  },
  "BoltPattern":{
    cn:"螺栓樣式"
  },
  "WHEEL SPECIFICATION:":{
    cn:"車輪規格:"
  },
  "Details":{
    cn:"詳情"
  },
  "Rim Details":{
    cn:"輪圈詳細信息"
  },
  "Inch:":{
    cn:"英寸:"
  },
  "Rim-width:":{
    cn:"輪圈寬度:"
  },
  "Offset:":{
    cn:"偏移量:"
  },
  "Bolt_pattern:":{
    cn:"螺栓樣式:"
  },
  "Centre_bore:":{
    cn:"中心孔:"
  },
  "Comming Soon!":{
    cn:"即將到來！"
  }
}

let descUrl = () => {
  var from_filter = window.location.search;
  var obj = {};
  var width = '';
  var height = '';
  var diameter = '';
  var brand = '';
  var url_page = '';

  $.each(from_filter.split('&'), function (index, value) {
    var search_condittion = ['width', 'height', 'diameter', 'page', 'brand'];

    for (var i = 0; i < search_condittion.length; i++) {
      var re = new RegExp(search_condittion[i]);

      if (re.exec(value)) {
        switch (search_condittion[i]) {
          case 'width':
            width = value.split('=')[1];
            obj["width"] = typeof width !== 'undefined' ? width : '';
            break;
          case 'height':
            height = value.split('=')[1];
            obj["height"] = typeof height !== 'undefined' ? height : '';
            break;
          case 'diameter':
            diameter = value.split('=')[1];
            obj["diameter"] = typeof diameter !== 'undefined' ? diameter : '';
            break;
          case 'brand':
            brand = value.split('=')[1];
            obj["brand"] = typeof brand !== 'undefined' ? brand : '';
            break;
          case 'page':
            url_page = value.split('=')[1];
            obj["page"] = typeof brand !== 'undefined' ? url_page : '';
            break;
        }
      }
    }
  });
  return obj;
};

function getwindowheight() {
  $('html').css("overflow", 'auto')
  $('body').css("overflow", 'auto')
}

function gettyretab() {
  document.getElementById("Tyre-tab").addEventListener("click", function () {
    $('#tyreWidth').empty();
    $("#tyreHeight").empty();
    $("#Diameter").empty();
    $("#AllBrands").empty();
    $('#tyreWidth').append($("<option></option>").attr('class', "trn").attr("data-trn-key", "Width(mm)").attr("value", '').attr('disabled', 'true').attr('selected', 'true').text('Width(mm)'));
    $('#tyreHeight').append($("<option></option>").attr('class', "trn").attr("data-trn-key", "Height(mm)").attr("value", '').attr('disabled', 'true').attr('selected', 'true').text('Height(mm)'));
    $('#Diameter').append($("<option></option>").attr('class', "trn").attr("data-trn-key", "Diameter(inch)").attr("value", '').attr('disabled', 'true').attr('selected', 'true').text('Diameter("")'));
    $('#AllBrands').append($("<option></option>").attr('class', "trn").attr("data-trn-key", "AllBrands").attr("value", '').attr('disabled', 'true').attr('selected', 'true').text('AllBrands'));
    $("#tyreWidth").prop('disabled', false);
    $("#tyreHeight").prop('disabled', true);
    $("#Diameter").prop('disabled', true);
    $("#AllBrands").prop('disabled', true);
    gettyrewidth()
    gettyre()
  })
}

function gettyrewidth() {
  var resave = ''
  $.ajax({
    url: "/api/tyre_filter.php",
    type: "POST",
    data: {
      search_details: 0,
      current_get: 'width'
    },
    dataType: "JSON",
    success: function (res) {
      if (!resave) {
        res.map((item) => {
          $('#tyreWidth').append($("<option></option>").attr("value", item).text(item));
        })
        resave = res
      } else {
        resave.map((item) => {
          $('#tyreWidth').append($("<option></option>").attr("value", item).text(item));
        })
      }
    },
    error: function () {
      console.log("get init data error");
    }
  });
}

function gettyreheight() {
  document.getElementById("tyreWidth").addEventListener("change", function () {
    let t = $("#tyreWidth").val();
    $("#tyreHeight").empty();
    $("#Diameter").empty();
    $("#AllBrands").empty();
    $('#tyreHeight').append($("<option></option>").attr('class', "trn").attr("data-trn-key", "Height(mm)").attr("value", '').attr('disabled', 'true').attr('selected', 'true').text('Height(mm)'));
    $('#Diameter').append($("<option></option>").attr('class', "trn").attr("data-trn-key", "Diameter(inch)").attr("value", '').attr('disabled', 'true').attr('selected', 'true').text('Diameter("")'));
    $('#AllBrands').append($("<option></option>").attr('class', "trn").attr("data-trn-key", "AllBrands").attr("value", '').attr('disabled', 'true').attr('selected', 'true').text('AllBrands'));
    $("#tyreHeight").prop('disabled', false);
    $("#Diameter").prop('disabled', true);
    $("#AllBrands").prop('disabled', true);
    $('body').translate({
      lang: item,
      t: index
    });
    $.ajax({
      url: "/api/tyre_filter.php",
      type: "POST",
      data: {
        search_details: 0,
        current_get: 'height',
        width: t,
      },
      dataType: "JSON",
      success: function (res) {
        res.map((item) => {
          $('#tyreHeight').append($("<option></option>").attr("value", item).text(item));
        })
      },
      error: function () {
        console.log("getdataErr");
      }
    });
  })
}

function getDiameter() {
  document.getElementById("tyreHeight").addEventListener("change", function () {
    $("#Diameter").empty();
    $("#AllBrands").empty();
    $('#Diameter').append($("<option></option>").attr('class', "trn").attr("data-trn-key", "Diameter(inch)").attr("value", '').attr('disabled', 'true').attr('selected', 'true').text('Diameter("")'));
    $('#AllBrands').append($("<option></option>").attr('class', "trn").attr("data-trn-key", "AllBrands").attr("value", '').attr('disabled', 'true').attr('selected', 'true').text('AllBrands'));
    $("#tyreHeight").prop('disabled', false);
    let t = $("#tyreWidth").val();
    let r = $('#tyreHeight').val();
    $("#Diameter").prop('disabled', false);
    $("#AllBrands").prop('disabled', true);
    $('body').translate({
      lang: item,
      t: index
    });
    $.ajax({
      url: "/api/tyre_filter.php",
      type: "POST",
      data: {
        search_details: 0,
        current_get: 'diameter',
        width: t,
        height: r
      },
      dataType: "JSON",
      success: function (res) {
        res.map((item) => {
          $('#Diameter').append($("<option></option>").attr("value", item).text(item));
        })
      },
      error: function () {
        console.log("getdataErr");
      }
    });
  });
}

function getTireBrands() {
  document.getElementById("Diameter").addEventListener("change", function () {
    $("#AllBrands").empty();
    $('#AllBrands').append($("<option></option>").attr('class', "trn").attr("data-trn-key", "AllBrands").attr("value", '').attr('disabled', 'true').attr('selected', 'true').text('AllBrands'));
    $("#tyreHeight").prop('disabled', false);
    let t = $("#tyreWidth").val();
    let r = $('#tyreHeight').val();
    let o = $('#Diameter').val();
    $("#AllBrands").prop('disabled', false);
    $('body').translate({
      lang: item,
      t: index
    });
    $.ajax({
      url: "/api/tyre_filter.php",
      type: "POST",
      data: {
        search_details: 0,
        current_get: 'brand',
        width: t,
        height: r,
        diameter: o,
      },
      dataType: "JSON",
      success: function (res) {
        res.map((item) => {
          $('#AllBrands').append($("<option></option>").attr("value", item).text(item));
        })
      },
      error: function (err) {
        console.log("getdataErr");
      }
    });

  })
}

function checktyre() {
  document.getElementById("Checktyre").addEventListener("click", function () {
    var totalpage = ''
    let t = $("#tyreWidth").val();
    let r = $('#tyreHeight').val();
    let o = $('#Diameter').val();
    let b = $('AllBrands').val();
    $("#tyreMain").empty();
    $("#tyrepagination .pagination").remove()
    $('#tyrepagination').append($("<ul></ul>").attr("class", 'pagination justify-content-center pagination-sm'));
    $("#tyreMain .pagination").empty();
    $.ajax({
      url: "/api/tyre_filter.php",
      type: "POST",
      data: {
        search_details: 1,
        width: t,
        height: r,
        diameter: o,
        brand: b,
        page: 1,
        page_size: 10
      },
      dataType: "JSON",
      success: function (res) {
        totalpage = res[0].total_page
        res.map((item) => {
          tyretemplate(item)
          popouttemplate()
        })

        setTimeout(() => {
          getpagination2('tyreClass', 'tyreMain', 'tyrepagination', 'Tyre', totalpage, 10, t, r, o, b)
        }, 300);
      },
      error: function (err) {

      }
    })
  });
}

function ifwindowlocation(obj) {
  var t, r, o;
  if (obj.width) {
    t = obj.width
  }
  if (obj.height) {
    r = obj.height
  }
  if (obj.diameter) {
    o = obj.diameter
  }
  // if(obj.)
  var totalpage = ''
  // let t = $("#tyreWidth").val();
  // let r = $('#tyreHeight').val();
  // let o = $('#Diameter').val();
  let b = $('AllBrands').val();
  $('#tyreMain').empty()
  anime("flex")
  $.ajax({
    url: "/api/tyre_filter.php",
    type: "POST",
    data: {
      search_details: 1,
      width: t,
      height: r,
      diameter: o,
      brand: b,
      page: 1,
      page_size: 10
    },
    dataType: "JSON",
    success: function (res) {
      totalpage = res[0].total_page
      res.map((item) => {
        tyretemplate(item)
        popouttemplate()
      })
      getpagination2('tyreClass', 'tyreMain', 'tyrepagination', 'Tyre', totalpage, 10, t, r, o, b)
      anime("none")
    },
    error: function (err) {
      anime("none")
    }
  })
}

function gettyre() {
  var totalpage = ''
  let t = $("#tyreWidth").val();
  let r = $('#tyreHeight').val();
  let o = $('#Diameter').val();
  let b = $('AllBrands').val();
  $('#tyreMain').empty()
  anime("flex")
  $.ajax({
    url: "/api/tyre_filter.php",
    type: "POST",
    data: {
      search_details: 1,
      width: t,
      height: r,
      diameter: o,
      brand: b,
      page: 1,
      page_size: 10
    },
    dataType: "JSON",
    success: function (res) {
      totalpage = res[0].total_page
      res.map((item) => {
        tyretemplate(item)
        popouttemplate()
      })
      getpagination2('tyreClass', 'tyreMain', 'tyrepagination', 'Tyre', totalpage, 10, t, r, o, b)
      anime("none")
    },
    error: function (err) {

    }
  })
}

function getpagination2(classname, classid, paginationclassid, tabid, totalpage, pagesize, width, height, diameter, brand) {
  var limitPerPage = pagesize;
  // Total pages rounded upwards
  var totalPages = totalpage
  // Number of buttons at the top, not counting prev/next,
  // but including the dotted buttons.
  // Must be at least 5:
  var paginationSize = 7;
  var currentPage;

  function showPage(whichPage) {
    if (whichPage < 1 || whichPage > totalPages) return false;
    currentPage = whichPage;
    $("#" + classid + " ." + classname)
      .hide()
      .slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage)
      .show();
    // Replace the navigation items (not prev/next):
    $("#" + paginationclassid + " .pagination li").slice(1, -1).remove();
    getPageList(totalPages, currentPage, paginationSize).forEach(item => {
      $("<li>")
        .addClass(
          "page-item " +
          (item ? "current-page " : "") +
          (item === currentPage ? "active " : "")
        )
        .append(
          $("<a>")
          .addClass("page-link")
          .attr({
            id: "page-link" + item
          })
          .attr({
            href: "javascript:void(0)"
          })
          .text(item || "...")
        )
        .insertBefore("#next-" + classid);
    });
    return true;
  }

  // Include the prev/next buttons:
  $("#" + paginationclassid + " .pagination").append(
    $("<li>").addClass("page-item").attr({
      id: "previous-" + classid
    }).append(
      $("<a>")
      .addClass("page-link")
      .attr({
        href: "javascript:void(0)"
      })
      .text("<<")
    ),
    $("<li>").addClass("page-item").attr({
      id: "next-" + classid
    }).append(
      $("<a>")
      .addClass("page-link")
      .attr({
        href: "javascript:void(0)"
      })
      .text(">>")
    )
  );
  // Show the page links
  $("#" + classid).show();
  showPage(1);

  // Use event delegation, as these items are recreated later

  $(
    document
  ).off("click", "#" + paginationclassid + " .pagination li.current-page:not(.active)").on("click", "#" + paginationclassid + " .pagination li.current-page:not(.active)", function (event) {
    $("#tyreMain").empty();
    $.ajax({
      url: "/api/tyre_filter.php",
      type: "POST",
      data: {
        search_details: 1,
        width: width,
        height: height,
        diameter: diameter,
        brand: brand,
        page: $(this).text(),
        page_size: 10
      },
      dataType: "JSON",
      success: function (res) {
        res.map((item) => {
          tyretemplate(item)
          popouttemplate()
        })
      },
      error: function (err) {

      }
    })
    return showPage(+$(this).text());
  });

  $("#next-" + classid).on("click", function () {
    if (currentPage + 1 > totalpage) {
      return showPage(currentPage + 1);
    } else {
      $("#tyreMain").empty();
      $.ajax({
        url: "/api/tyre_filter.php",
        type: "POST",
        data: {
          search_details: 1,
          width: width,
          height: height,
          diameter: diameter,
          brand: brand,
          page: currentPage + 1,
          page_size: 10
        },
        dataType: "JSON",
        success: function (res) {
          res.map((item) => {
            tyretemplate(item)
            popouttemplate()
          })
          $('html, body').animate({
            scrollTop: $('#' + tabid).offset().top
          }, 0);
        },
        error: function (err) {

        }
      })
      return showPage(currentPage + 1);
    }
  });

  $("#previous-" + classid).on("click", function () {
    if (currentPage - 1 == 0) {
      return showPage(currentPage - 1);
    } else {
      $("#tyreMain").empty();
      $.ajax({
        url: "/api/tyre_filter.php",
        type: "POST",
        data: {
          search_details: 1,
          width: width,
          height: height,
          diameter: diameter,
          brand: brand,
          page: currentPage - 1,
          page_size: 10
        },
        dataType: "JSON",
        success: function (res) {
          res.map((item) => {
            tyretemplate(item)
            popouttemplate()
          })
          $('html, body').animate({
            scrollTop: $('#' + tabid).offset().top
          }, 0);
        },
        error: function (err) {

        }
      })
      return showPage(currentPage - 1);
    }
  });

  $("#" + paginationclassid + " .pagination").on("click", function () {
    $('html, body').animate({
      scrollTop: $('#' + tabid).offset().top
    }, 0);
  });

}

function tyretemplate(item) {
  $('#tyreMain').append($('\
  <div id=tyreId_' + item.id + ' class="tyreClass card">\
    <div class="d-f">\
      <div class="imgtyrecontainer">\
        <img class="card-img imgtyre" data-action="zoom" src="../img/tyre/' + item.img_url + '"/>\
      </div>\
      <div class="contenttyrecontainer">\
        <div class="w-100">\
        <div class="title">' + item.name + '</div>\
        <div class="content" style="line-height:150%"><span class="trn" data-trn-key="Brand:">Brand:</span>' + item.brand + '</div>\
        <div class="content" style="line-height:150%"><span class="trn" data-trn-key="Specification:">Specification:</span>' + item.width + '/' + item.height + '/' + item.diameter + '</div>\
        <div class="tyrebutton">\
          <button class="tyreCheck trn" \
          data-trn-key="Description"\
            data-toggle="popover" \
            data-trigger="focus"\
            data-popover-content="#tyrePop' + item.id + '"\
            data-container="#tyreMain">Description\
          </button>\
        </div>\
        </div>\
      </div>\
    </div>\
  </div>\
  <div class="hidden" class="tyrePop" id="tyrePop' + item.id + '">\
    <div class="popover-heading trn" data-trn-key="Tyre Description">\
      Tyre Description\
    </div>\
    <div class="popover-body">\
        <ul>\
          <li class="trn" data-trn-key="'+item.content_1+'">' + item.content_1 + '</li>\
          <li class="trn" data-trn-key="'+item.content_2+'">' + item.content_2 + '</li>\
          <li class="trn" data-trn-key="'+item.content_3+'">' + item.content_3 + '</li>\
        </ul>\
    </div>\
  </div>'));
 
  var item
  if (localStorage.getItem('languagebool') != null) {
    item = localStorage.getItem('languagebool')
  } else {
    item = "en"
  }

  $('body').translate({
    lang: item,
    t: index
  });
}

function getrim() {
  var resave = ''
  $.ajax({
    url: "/product/rimselected.php",
    type: "POST",
    data: {
      pattern: '1'
    },
    dataType: "JSON",
    success: function (res) {
      if (!resave) {
        for (var i = 0; i < res.length; i++) {
          $('#typeModel').append($("<option></option>").attr("value", res[i].inch).text(res[i].inch));
        }
        resave = res
      } else {
        for (var i = 0; i < resave.length; i++) {
          $('#typeModel').append($("<option></option>").attr("value", resave[i].inch).text(resave[i].inch));
        }
      }
    },
    error: function () {
      console.log("getdataErr");
    }
  });
}

function getmodel() {
  document.getElementById("typeModel").addEventListener("change", function () {
    let t = $("#typeModel").val();
    $("#RimWidth").empty();
    $("#Offset").empty();
    $("#BoltPattern").empty();
    $('#RimWidth').append($("<option></option>").attr('class', "trn").attr("data-trn-key", "RimWidth").attr("value", '').attr('disabled', 'true').attr('selected', 'true').text('RimWidth'));
    $('#Offset').append($("<option></option>").attr('class', "trn").attr("data-trn-key", "Offset").attr("value", '').attr('disabled', 'true').attr('selected', 'true').text('Offset'));
    $('#BoltPattern').append($("<option></option>").attr('class', "trn").attr("data-trn-key", "BoltPattern").attr("value", '').attr('disabled', 'true').attr('selected', 'true').text('BoltPattern'));
    $("#RimWidth").prop('disabled', false);
    $("#Offset").prop('disabled', true);
    $("#BoltPattern").prop('disabled', true);
    $('body').translate({
      lang: item,
      t: index
    });
    $.ajax({
      url: "product/rimselected.php",
      type: "POST",
      data: {
        typeModel: t,
        pattern: '2'
      },
      dataType: "JSON",
      success: function (res) {
        for (var i = 0; i < res.length; i++) {
          $('#RimWidth').append($("<option></option>").attr("value", res[i].rim_width).text(res[i].rim_width));
        }
      },
      error: function () {
        console.log("getdataErr");
      }
    });
  })
}

function getbrand() {
  document.getElementById("RimWidth").addEventListener("change", function () {
    $("#Offset").empty();
    $("#BoltPattern").empty();
    $('#Offset').append($("<option></option>").attr("value", '').attr('class', "trn").attr("data-trn-key", "Offset").attr('disabled', 'true').attr('selected', 'true').text('Offset'));
    $('#BoltPattern').append($("<option></option>").attr("value", '').attr('class', "trn").attr("data-trn-key", "BoltPattern").attr('disabled', 'true').attr('selected', 'true').text('BoltPattern'));
    let t = $("#typeModel").val();
    let r = $('#RimWidth').val();
    $("#Offset").prop('disabled', false);
    $("#BoltPattern").prop('disabled', true);
    $('body').translate({
      lang: item,
      t: index
    });
    $.ajax({
      url: "product/rimselected.php",
      type: "POST",
      data: {
        rimWitdh: r,
        typeModel: t,
        pattern: '3'
      },
      dataType: "JSON",
      success: function (res) {
        for (var i = 0; i < res.length; i++) {
          $('#Offset').append($("<option></option>").attr("value", res[i].offset).text(res[i].offset));
        }
      },
      error: function () {
        console.log("getdataErr");
      }
    });
  });
}

function getBoltpattern() {
  document.getElementById("Offset").addEventListener("change", function () {
    $("#BoltPattern").empty();
    $('#BoltPattern').append($("<option></option>").attr('class', "trn").attr("data-trn-key", "BoltPattern").attr("value", '').attr('disabled', 'true').attr('selected', 'true').text('BoltPattern'));
    let t = $("#typeModel").val();
    let r = $('#RimWidth').val();
    let o = $('#Offset').val();
    $('body').translate({
      lang: item,
      t: index
    });
    $("#BoltPattern").prop('disabled', false);
    $.ajax({
      url: "product/rimselected.php",
      type: "POST",
      data: {
        rimWitdh: r,
        typeModel: t,
        offset: o,
        pattern: '5'
      },
      dataType: "JSON",
      success: function (res) {
        for (var i = 0; i < res.length; i++) {
          $('#BoltPattern').append($("<option></option>").attr("value", res[i].bolt_pattern).text(res[i].bolt_pattern));
        }
      },
      error: function (err) {
        console.log("getdataErr");
      }
    });

  })
}

function checkRim() {
  document.getElementById("CheckRim").addEventListener("click", function () {
    let t = $("#typeModel").val();
    let r = $('#RimWidth').val();
    let o = $('#Offset').val();
    let b = $('#BoltPattern').val();
    anime("flex")
    $.ajax({
      url: "/api/rimfilter.php",
      type: "POST",
      data: {
        Inch: t,
        Width: r,
        Offset: o,
        BoltPattern: b
      },
      dataType: "JSON",
      success: function (res) {
        $("#RimMain").empty();
        res.data.map((item) => {
          rimtemplate(item);
        })
        popouttemplate();
        getpagination('RimClass', 'RimMain', 'Rimpagination', 'Rim');
        anime("none")
      },
      error: function (err) {
        console.log(err)
        anime("none")
      }
    })
  })
}

function getRim() {
  var resave = ''
  document.getElementById("Rim-tab").addEventListener("click", function () {
    $("#typeModel").empty()
    $("#RimWidth").empty();
    $("#Offset").empty();
    $("#BoltPattern").empty();
    $('#typeModel').append($("<option></option>").attr('class', "trn").attr("data-trn-key", "Inch").attr("value", '').attr('disabled', 'true').attr('selected', 'true').text('Inch'));
    $('#RimWidth').append($("<option></option>").attr('class', "trn").attr("data-trn-key", "RimWidth").attr("value", '').attr('disabled', 'true').attr('selected', 'true').text('RimWidth'));
    $('#Offset').append($("<option></option>").attr('class', "trn").attr("data-trn-key", "Offset").attr("value", '').attr('disabled', 'true').attr('selected', 'true').text('Offset'));
    $('#BoltPattern').append($("<option></option>").attr('class', "trn").attr("data-trn-key", "BoltPattern").attr("value", '').attr('disabled', 'true').attr('selected', 'true').text('BoltPattern'));
    $("#typeModel").prop('disabled', false);
    $("#RimWidth").prop('disabled', true);
    $("#Offset").prop('disabled', true);
    $("#BoltPattern").prop('disabled', true);
    anime("flex")
    $.ajax({
      url: "/api/rim.php",
      type: "POST",
      dataType: "JSON",
      success: function (res) {
        $("#RimMain").empty();
        getrim();
        if (!resave) {
          res.data.map((item) => {
            rimtemplate(item);
          })
          popouttemplate();
          getpagination('RimClass', 'RimMain', 'Rimpagination', 'Rim');
          resave = res
          anime("none")
        } else {
          resave.data.map((item) => {
            rimtemplate(item)
          })
          popouttemplate();
          getpagination('RimClass', 'RimMain', 'Rimpagination', 'Rim');
          anime("none")
        }
      },
      error: function (err) {
        console.log(err);
        anime("none")
      }
    });
  })
}

function rimtemplate(item) {
  $('#RimMain').append($('\
  <div id=RimId_' + item.id + ' class="RimClass card">\
    <div class="d-f">\
      <div class="imgrimcontainer">\
        <img class="card-img imgrim" data-action="zoom" src="../img/rim/' + item.img + '.jpeg"/>\
      </div>\
      <div class="contentrimcontainer">\
        <div class="w-100">\
        <div class="title">' + item.rim_type + '</div>\
        <div style="line-height:130%" class="trn" data-trn-key="WHEEL SPECIFICATION:">WHEEL SPECIFICATION:</div>\
        <div class="content">' + item.descrip + '</div>\
        <div class="Rimbutton">\
          <button class="RimCheck trn" \
            data-toggle="popover" \
            data-trigger="focus"\
            data-popover-content="#RimPop' + item.id + '"\
            data-container="#RimMain" \
            data-trn-key="Details">Details\
          </button>\
        </div>\
        </div>\
      </div>\
    </div>\
  </div>\
  <div class="hidden" class="RimPop" id="RimPop' + item.id + '">\
    <div class="popover-heading trn" data-trn-key="Rim Details">\
      Rim Details\
    </div>\
    <div class="popover-body">\
      <div><span class="trn" data-trn-key="Inch:">Inch:</span>' + item.inch + ',' + '<span class="trn" data-trn-key="Rim-width:">Rim-width:</<span>' + item.rim_width + '</div>\
      <div><span class="trn" data-trn-key="Offset:">Offset:</span>' + item.offset + ',' + '<span class="trn" data-trn-key="Bolt_pattern:">Bolt_pattern:</span>' + item.bolt_pattern + '</div>\
      <div><span class="trn" data-trn-key="Centre_bore:">Centre_bore:</span>' + item.centre_bore + '</div>\
    </div>\
  </div>'));
  var item
  if (localStorage.getItem('languagebool') != null) {
    item = localStorage.getItem('languagebool')
  } else {
    item = "en"
  }
  $('body').translate({
    lang: item,
    t: index
  });
}

function popouttemplate() {
  $('[data-toggle="popover"]').popover({
    // trigger: 'focus',
    html: true,
    content: function () {
      var content = $(this).attr("data-popover-content");
      return $(content).children(".popover-body").html();
    },
    title: function () {
      var title = $(this).attr("data-popover-content");
      return $(title).children(".popover-heading").html();
    }
  })
}

function getPageList(totalPages, page, maxLength) {
  if (maxLength < 5) throw "maxLength must be at least 5";

  function range(start, end) {
    return Array.from(Array(end - start + 1), (_, i) => i + start);
  }

  var sideWidth = maxLength < 9 ? 1 : 2;
  var leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
  var rightWidth = (maxLength - sideWidth * 2 - 2) >> 1;
  if (totalPages <= maxLength) {
    // no breaks in list
    return range(1, totalPages);
  }
  if (page <= maxLength - sideWidth - 1 - rightWidth) {
    // no break on left of page
    return range(1, maxLength - sideWidth - 1)
      .concat([0])
      .concat(range(totalPages - sideWidth + 1, totalPages));
  }
  if (page >= totalPages - sideWidth - 1 - rightWidth) {
    // no break on right of page
    return range(1, sideWidth)
      .concat([0])
      .concat(
        range(totalPages - sideWidth - 1 - rightWidth - leftWidth, totalPages)
      );
  }
  // Breaks on both sides
  return range(1, sideWidth)
    .concat([0])
    .concat(range(page - leftWidth, page + rightWidth))
    .concat([0])
    .concat(range(totalPages - sideWidth + 1, totalPages));
}


function getpagination(classname, classid, paginationclassid, tabid) {
  // Number of items and limits the number of items per page
  var numberOfItems = $("#" + classid + " ." + classname).length;
  var limitPerPage = 10;
  // Total pages rounded upwards
  var totalPages = Math.ceil(numberOfItems / limitPerPage);
  // Number of buttons at the top, not counting prev/next,
  // but including the dotted buttons.
  // Must be at least 5:
  var paginationSize = 7;
  var currentPage;

  function showPage(whichPage) {
    if (whichPage < 1 || whichPage > totalPages) return false;
    currentPage = whichPage;
    $("#" + classid + " ." + classname)
      .hide()
      .slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage)
      .show();
    // Replace the navigation items (not prev/next):
    $("#" + paginationclassid + " .pagination li").slice(1, -1).remove();
    getPageList(totalPages, currentPage, paginationSize).forEach(item => {
      $("<li>")
        .addClass(
          "page-item " +
          (item ? "current-page " : "") +
          (item === currentPage ? "active " : "")
        )
        .append(
          $("<a>")
          .addClass("page-link")
          .attr({
            href: "javascript:void(0)"
          })
          .text(item || "...")
        )
        .insertBefore("#next-" + classid);
    });
    return true;
  }

  // Include the prev/next buttons:
  $("#" + paginationclassid + " .pagination").append(
    $("<li>").addClass("page-item").attr({
      id: "previous-" + classid
    }).append(
      $("<a>")
      .addClass("page-link")
      .attr({
        href: "javascript:void(0)"
      })
      .text("<<")
    ),
    $("<li>").addClass("page-item").attr({
      id: "next-" + classid
    }).append(
      $("<a>")
      .addClass("page-link")
      .attr({
        href: "javascript:void(0)"
      })
      .text(">>")
    )
  );
  // Show the page links
  $("#" + classid).show();
  showPage(1);

  // Use event delegation, as these items are recreated later
  $(
    document
  ).on("click", "#" + paginationclassid + " .pagination li.current-page:not(.active)", function () {
    return showPage(+$(this).text());
  });
  $("#next-" + classid).on("click", function () {
    return showPage(currentPage + 1);
  });

  $("#previous-" + classid).on("click", function () {
    return showPage(currentPage - 1);
  });
  $("#" + paginationclassid + " .pagination").on("click", function () {
    $('html, body').animate({
      scrollTop: $('#' + tabid).offset().top
    }, 0);
  });
}

function getAccessoriesSelect() {
  var resave = ''
  document.getElementById("Accessories-tab").addEventListener("click", function () {
    $("#AccessoriesName").empty();
    $('#AccessoriesName').append($("<option></option>").attr("value", '').attr('disabled', 'false').attr('selected', 'true').text('Brands'));
    $.ajax({
      url: "/api/Accessories.php",
      type: "POST",
      data: {
        select: 0
      },
      dataType: "JSON",
      success: function (res) {
        if (!resave) {
          res.data.map((item) => {
            $('#AccessoriesName').append($("<option></option>").attr("value", item.img).text(item.img));
          })
          resave = res.data
        } else {
          resave.map((item) => {
            $('#AccessoriesName').append($("<option></option>").attr("value", item.img).text(item.img));
          })
        }
      },
      error: function () {
        console.log("getdataErr");
      }
    });
  });
}

function Accessoriestemplate(item) {
  $('#AccessoriesMain').append($('\
  <div id=AccessoriesId_' + item.id + ' class="AccessoriesClass card">\
    <div class="d-flex">\
      <div class="Accessoriescontainer">\
        <img class="card-img Accessoriesrim" data-action="zoom" src="../img/accossories/' + item.category + '/' + item.img + '.jpg"/>\
      </div>\
      <div class="contentAccessoriescontainer">\
        <div class="w-100">\
        <div class="title">' + item.img + '</div>\
        </div>\
      </div>\
    </div>\
  </div>'));
}

function getAccessories() {
  var resave = ''
  document.getElementById("Accessories-tab").addEventListener("click", function () {
    $("#AccessoriesMain").empty();
    $.ajax({
      url: "/api/Accessories.php",
      data: {
        select: 0
      },
      type: "POST",
      dataType: "JSON",
      success: function (res) {
        if (!resave) {
          res.data.map((item) => {
            Accessoriestemplate(item),
              getpagination('AccessoriesClass', 'AccessoriesMain', 'Accessoriespagination', 'Accessories');
          })
          resave = res.data
        } else {
          resave.map((item) => {
            Accessoriestemplate(item)
            getpagination('AccessoriesClass', 'AccessoriesMain', 'Accessoriespagination', 'Accessories');
          })
        }
      },
      error: function () {
        console.log("getdataErr");
      }
    });
  });
}


function checkAccessories() {
  document.getElementById("CheckAccessories").addEventListener("click", function () {
    let t = $("#AccessoriesName").val();
    $.ajax({
      url: "/api/Accessoriesfilter.php",
      type: "POST",
      data: {
        Brands: t,
      },
      dataType: "JSON",
      success: function (res) {
        $("#AccessoriesMain").empty();
        res.data.map((item) => {
          Accessoriestemplate(item);
        })
        getpagination('AccessoriesClass', 'AccessoriesMain', 'Accessoriespagination', 'Accessories');
      },
      error: function (err) {
        console.log(err)
      }
    })
  })
}

function getBrand() {
  $.ajax({
    url: "/api/tyre_filter.php",
    type: "POST",
    data: {
      search_details: 0,
      current_get: 'brand',
    },
    dataType: "JSON",
    success: function (res) {
      var template_arr = [];
      var render_template = '';

      if (res) {
        for (let index of Object.keys(res)) {
          var item = res[index];
          var template = '<a class="dropdown-item" href="/product_new.php?brand=' + item + '">' + item + '</a>';
          template_arr.push(template);
        }

        for (let i = 0; i < template_arr.length; i++) {
          render_template = render_template + template_arr[i];
        }
        render(render_template, document.querySelector('#brand'));
      }

    },
    error: function () {
      console.log("get filter data error");
    }
  });
  
}
function anime(status){
  document.querySelector('#spinnnn').style.display =status
}