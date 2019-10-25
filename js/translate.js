function clicktranslate() {
  var item
  if (localStorage.getItem('languagebool') != null) {
    item = localStorage.getItem('languagebool')
  } else {
    item = "en"
  }
  var index = {
    ///header///
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
    ///footer///
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
    "To Find Up Your Tire": {
      cn: "尋找您要的輪胎"
    },
    "Check the suitable tire for your car": {
      cn: "查詢您的車輛適合的輪胎"
    },
    "Learn More": {
      cn: "想了解更多"
    },
    "Design Your Rim": {
      cn: "設計您的輪胎"
    },
    "Customized and Embellish your tire rim": {
      cn: "客製化修飾您的輪胎和輪框"
    },
    "About The Tire": {
      cn: "關於輪胎"
    },
    "Understanding the basically knowledge of tire": {
      cn: "了解輪胎的基本知識"
    },
    'Service & Maintain': {
      cn: "維護服務"
    },
    "Welcome to visit our store and apply our service": {
      cn: "歡迎前來我們的店面讓我們為你提供服務"
    },
    "Enter your tyre size": {
      cn: "輸入您的輪胎大小"
    },
    "Width(mm)": {
      cn: "寬度(毫米)"
    },
    "Height(mm)": {
      cn: "高度(毫米)"
    },
    "Diameter(inch)": {
      cn: "輪圈直徑(英寸)"
    },
    'Continue': {
      cn: "繼續"
    },
    'slide1': {
      cn: "最低噪音水平和平穩舒適行駛的舒適選擇。",
      en: "The comfort choice with lowest noise level and smooth comfortable ride."
    },
    'slide2': {
      en: "Highest performance level guaranteed by German Technology. Perfect tyre-contact to control the vehicle.",
      cn: "德國技術保證最高的性能水平。完美的輪胎接觸控制車輛。"
    },
    'slide3': {
      en: "Safety on any street. Control at any speed.",
      cn: "任何街道上的安全。隨時控制。"
    },
    "slide4": {
      en: "Perfect for performance and comfort.",
      cn: "完美的性能和舒適度。"
    },
    "slide5": {
      en: "The perfect all-round tyre, matching performance with safety.",
      cn: "完美的全方位輪胎，性能與安全性相匹配。"
    },
    "slide6": {
      en: "When MAX Performance Counts",
      cn: "當最大性能計數"
    },
    "CAR BRANDS": {
      cn: "車的品牌"
    },
    "CAR MODEL": {
      cn: "車的型號"
    },
    "Brands": {
      cn: "品牌"
    },
    "Model": {
      cn: "模型"
    },
    "More Details": {
      cn: "更多資訊"
    },
    "Technical details": {
      cn: "技術資訊"
    },
    "Location": {
      cn: "地點"
    },
    "Address": {
      cn: "地址"
    },
    "Phone": {
      cn: "電話"
    },
    "Services1": {
      cn: "服務",
      en: "Services"
    },
    "Tire Maintenance": {
      cn: "輪胎保養",
    },
    "Learn More": {
      cn: "了解更多"
    },
    "Close": {
      cn: "關閉"
    },
    "Traction Friction Of Tire": {
      cn: "輪胎牽引摩擦"
    },
    "Tfot": {
      en: "Traction is the friction between wheels or tires and the ground that allows a vehicle\
          to move forward. It is the resistance to spinning when a torque is applied to axle the wheel. When a\
          surface is wet, a layer of water can act as a lubricant, greatly reducing the traction and stability of\
          the vehicle.",
      cn: "牽引力是指車輪或輪胎與允許車輛行駛的地面之間的摩擦力\
                      前進。當扭矩施加到輪軸上時，它是抗旋轉性。當一個\
                      表面是濕的，一層水可以充當潤滑劑，大大降低了牽引力和穩定性\
                      機動車。"
    },
    "ifthese": {
      en: "* If these few following step bothering you, please contact us for\
          more\
          professional services.",
      cn: "*如果以下幾個步驟困擾您，請與我們聯繫更多專業的服務。"
    },
    "TireMa": {
      en: "Sometimes a pneumatic tire gets a hole or a leak through which the air inside leaks out resulting in a flat tire, a condition which must be fixed before the car can be driven safely",
      cn: "有時充氣輪胎會漏氣或漏氣，內部的空氣會通過漏氣或漏氣而導致輪胎漏氣，在安全駕駛汽車之前必須解決這種情況"
    },
    "Amm":{
      en:"A motor vehicle service or tune-up is a series of maintenance procedures carried outat a set time interval or after the vehicle has travelled a certain distance.",
      cn:"汽車維修或保養是執行的一系列維護程序在設定的時間間隔或車輛行駛一定距離後。"
    },
    "blablabla":{
      en:"A motor vehicle service or tune-up is a series of maintenance procedures carried out at a set time\
      interval or after the vehicle has travelled a certain distance.\
      The service intervals are specified by the vehicle manufacturer in a service schedule and some\
      modern cars display the due date for the next service electronically on the instrument panel.\
      Maintenance tasks commonly carried out during a motor vehicle service include:",
      cn:"機動車維修或調試是在規定的時間執行的一系列維護程序\
            間隔或車輛行駛一定距離後。\
            保養間隔由車輛製造商在保養時間表中指定，並且某些\
            現代汽車在儀表板上以電子方式顯示下次維修的到期日。\
            在汽車維修期間通常執行的維護任務包括："
    },
    "Change the engine oil":{
      cn:"更換機油"
    },
    "Replace the oil filter":{
cn:"更換機油濾清器"
    },
    "Replace the air filter":{
      cn:"更換空氣過濾器"
    },
    "Replace the fuel filter":{
      cn:"更換燃油濾清器"
    },
    "Replace the cabin filter":{
      cn:"更換機艙濾清器"
    },
    "Replace the spark plugs":{
      cn:"更換火花塞"
    },
    "Tune the engine":{
      cn:"調整引擎"
    },
    "Check level and refill brake fluid/clutch fluid":{
      cn:"檢查液位並加註制動液/離合器油"
    },
    "Check Brake Pads/Liners, Brake Discs/Drums, and replace if worn out":{
      cn:"檢查制動襯塊/襯套，制動盤/制動鼓，如果磨損則更換"
    },
    "Check level and refill power steering fluid":{
      cn:"檢查液位並加註動力轉向液"
    },
    "Check level and refill Automatic/Manual Transmission Fluid":{
      cn:"檢查液位並加註自動/手動變速箱油"
    },
    "Grease and lubricate components":{
      cn:"潤滑和潤滑組件"
    },
    "Inspect and replace the timing belt or timing chain if needed":{
      cn:"檢查並更換正時皮帶或正時鏈條"
    },
    "Check condition of the tires":{
      cn:"檢查輪胎狀況"
    },
    "Check for proper operation of all lights, wipers etc.":{
      cn:"檢查所有照明燈，雨刮器等是否正常運行。"
    },
    "Check for any Error codes in the ECU and take corrective action.":{
      cn:"檢查ECU中是否有任何錯誤代碼，並採取糾正措施。"
    },
    "Wash the vehicle and clean the interiors.":{
      cn:"清洗車輛並清潔內部。"
    },
    "Use scan tool read trouble code.":{
      cn:"使用掃描工具讀取故障代碼。"
    },
    "Tyres":{
      cn:"輪胎"
    },
    "Rim":{
      cn:"輪圈"
    },
    "Accessories":{
      cn:"配飾"
    },
    "Filters by":{
      cn:"篩選為"
    },
    'AllBrands':{
      cn:"牌子"
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
      cn:"輪圈"
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
  };

  $('body').translate({
    lang: item,
    t: index
  });
  $('#pic').click(function () {
    if (item == "en") {
      $('body').translate({
        lang: "cn",
        t: index
      });
      item = "cn"
      localStorage.setItem('languagebool', 'cn')
    } else {
      $('body').translate({
        lang: "en",
        t: index
      });
      item = "en"
      localStorage.setItem('languagebool', 'en')
    }
    // translator.lang("cn");  
  })
}
$(document).ready(function () {
  clicktranslate();
});