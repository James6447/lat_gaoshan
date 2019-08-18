$(document).ready(function () {
  if(window.location.search){
    var obj = descUrl()
    ifwindowlocation(obj)    
  }else{
    gettyre();
  }
  getrim();
  getmodel();
  getbrand();
  getBoltpattern();
  getRim();
  gettyretab();
  checkRim();
  getAccessoriesSelect();
  getAccessories();
  checkAccessories();
  gettyrewidth();
  gettyreheight();
  getTireBrands();
  getDiameter();
  getwindowheight();
  checktyre();
})

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

function getwindowheight() {
  $('html').css("overflow", 'auto')
  $('body').css("overflow", 'auto')
}
function gettyretab(){
  document.getElementById("Tyre-tab").addEventListener("click", function () {
    $('#tyreWidth').empty();
    $("#tyreHeight").empty();
    $("#Diameter").empty();
    $("#AllBrands").empty();
    $('#tyreWidth').append($("<option></option>").attr("value", '').attr('disabled', 'true').attr('selected', 'true').text('Width(mm)'));
    $('#tyreHeight').append($("<option></option>").attr("value", '').attr('disabled', 'true').attr('selected', 'true').text('Height(mm)'));
    $('#Diameter').append($("<option></option>").attr("value", '').attr('disabled', 'true').attr('selected', 'true').text('Diameter("")'));
    $('#AllBrands').append($("<option></option>").attr("value", '').attr('disabled', 'true').attr('selected', 'true').text('AllBrands'));
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
    $('#tyreHeight').append($("<option></option>").attr("value", '').attr('disabled', 'true').attr('selected', 'true').text('Height(mm)'));
    $('#Diameter').append($("<option></option>").attr("value", '').attr('disabled', 'true').attr('selected', 'true').text('Diameter("")'));
    $('#AllBrands').append($("<option></option>").attr("value", '').attr('disabled', 'true').attr('selected', 'true').text('AllBrands'));
    $("#tyreHeight").prop('disabled', false);
    $("#Diameter").prop('disabled', true);
    $("#AllBrands").prop('disabled', true);
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
    $('#Diameter').append($("<option></option>").attr("value", '').attr('disabled', 'true').attr('selected', 'true').text('Diameter("")'));
    $('#AllBrands').append($("<option></option>").attr("value", '').attr('disabled', 'true').attr('selected', 'true').text('AllBrands'));
    let t = $("#tyreWidth").val();
    let r = $('#tyreHeight').val();
    $("#Diameter").prop('disabled', false);
    $("#AllBrands").prop('disabled', true);
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
    $('#AllBrands').append($("<option></option>").attr("value", '').attr('disabled', 'true').attr('selected', 'true').text('AllBrands'));
    let t = $("#tyreWidth").val();
    let r = $('#tyreHeight').val();
    let o = $('#Diameter').val();
    $("#AllBrands").prop('disabled', false);
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
function ifwindowlocation(obj){
  var t,r,o;
  if(obj.width){
    t =obj.width
  }
  if(obj.height){
    r = obj.height
  }
  if(obj.diameter){
    o = obj.diameter
  }
  // if(obj.)
  var totalpage = ''
  // let t = $("#tyreWidth").val();
  // let r = $('#tyreHeight').val();
  // let o = $('#Diameter').val();
  let b = $('AllBrands').val();
  $('#tyreMain').empty()
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
      console.log(res)
      totalpage = res[0].total_page
      res.map((item) => {
        tyretemplate(item)
        popouttemplate()
      })
      getpagination2('tyreClass', 'tyreMain', 'tyrepagination', 'Tyre', totalpage, 10, t, r, o, b)
    },
    error: function (err) {

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
        <div class="content" style="line-height:150%"><span>Brand:</span>' + item.brand + '</div>\
        <div class="content" style="line-height:150%"><span>Specification:</span>' + item.width + '/' + item.height + '/' + item.diameter + '</div>\
        <div class="tyrebutton">\
          <button class="tyreCheck" \
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
    <div class="popover-heading">\
      Tyre Description\
    </div>\
    <div class="popover-body">\
        <ul>\
          <li>' + item.content_1 + '</li>\
          <li>' + item.content_2 + '</li>\
          <li>' + item.content_3 + '</li>\
        </ul>\
    </div>\
  </div>'));
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
    $('#RimWidth').append($("<option></option>").attr("value", '').attr('disabled', 'true').attr('selected', 'true').text('RimWidth'));
    $('#Offset').append($("<option></option>").attr("value", '').attr('disabled', 'true').attr('selected', 'true').text('Offset'));
    $('#BoltPattern').append($("<option></option>").attr("value", '').attr('disabled', 'true').attr('selected', 'true').text('BoltPattern'));
    $("#RimWidth").prop('disabled', false);
    $("#Offset").prop('disabled', true);
    $("#BoltPattern").prop('disabled', true);
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
    $('#Offset').append($("<option></option>").attr("value", '').attr('disabled', 'true').attr('selected', 'true').text('Offset'));
    $('#BoltPattern').append($("<option></option>").attr("value", '').attr('disabled', 'true').attr('selected', 'true').text('BoltPattern'));
    let t = $("#typeModel").val();
    let r = $('#RimWidth').val();
    $("#Offset").prop('disabled', false);
    $("#BoltPattern").prop('disabled', true);
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
    $('#BoltPattern').append($("<option></option>").attr("value", '').attr('disabled', 'true').attr('selected', 'true').text('BoltPattern'));
    let t = $("#typeModel").val();
    let r = $('#RimWidth').val();
    let o = $('#Offset').val();
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
      },
      error: function (err) {
        console.log(err)
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
    $('#typeModel').append($("<option></option>").attr("value", '').attr('disabled', 'true').attr('selected', 'true').text('RimWidth'));
    $('#RimWidth').append($("<option></option>").attr("value", '').attr('disabled', 'true').attr('selected', 'true').text('RimWidth'));
    $('#Offset').append($("<option></option>").attr("value", '').attr('disabled', 'true').attr('selected', 'true').text('Offset'));
    $('#BoltPattern').append($("<option></option>").attr("value", '').attr('disabled', 'true').attr('selected', 'true').text('BoltPattern'));
    $("#typeModel").prop('disabled', false);
    $("#RimWidth").prop('disabled', true);
    $("#Offset").prop('disabled', true);
    $("#BoltPattern").prop('disabled', true);
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
        } else {
          resave.data.map((item) => {
            rimtemplate(item)
          })
          popouttemplate();
          getpagination('RimClass', 'RimMain', 'Rimpagination', 'Rim');
        }
      },
      error: function (err) {
        console.log(err);
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
        <div style="line-height:130%">WHEEL SPECIFICATION:</div>\
        <div class="content">' + item.descrip + '</div>\
        <div class="Rimbutton">\
          <button class="RimCheck" \
            data-toggle="popover" \
            data-trigger="focus"\
            data-popover-content="#RimPop' + item.id + '"\
            data-container="#RimMain">Details\
          </button>\
        </div>\
        </div>\
      </div>\
    </div>\
  </div>\
  <div class="hidden" class="RimPop" id="RimPop' + item.id + '">\
    <div class="popover-heading">\
      Rim Details\
    </div>\
    <div class="popover-body">\
      <div>Inch:' + item.inch + ',' + 'Rim-width:' + item.rim_width + '</div>\
      <div>Offset:' + item.offset + ',' + 'Bolt_pattern:' + item.bolt_pattern + '</div>\
      <div>Centre_bore:' + item.centre_bore + '</div>\
    </div>\
  </div>'));
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