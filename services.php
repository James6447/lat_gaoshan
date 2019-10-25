<?php
require 'CombainKeywords.class.php';
$arr = array('tyres maintenance','LauSincere','LauSincere Autowagon Services', 'Services', 'engine oil maintenance','Trading Of Tyres And Batteries Of Motor Vehicles','johor bahru','高山輪胎有限公司');
$sort_handle = new CombainKeywords();
$sort = $sort_handle->sortKeywords($arr, 2);
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <title>LauSincere Autowagon Services-SERVICES,高山輪胎有限公司,Johor Bahru</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <META NAME="Author" CONTENT="LauSincere Autowagon Services - 高山輪胎有限公司">
  <!-- <META HTTP-EQUIV="Keywords" CONTENT="tyres maintenance,LauSincere,LauSincere Autowagon Services, Services, engine oil maintenance,Trading Of Tyres And Batteries Of Motor Vehicles,johor bahru,高山輪胎有限公司"> -->
  <?php
    echo '<META HTTP-EQUIV="Keywords" CONTENT="';
    foreach ($sort as $value) {
        echo $value.',';
    }
    echo '">';
   ?>

  <META HTTP-EQUIV="Description"
    CONTENT="http://www.lausincere.com, Automotive Repair Shop, tyres, engine oil, vihicle services,Johor Bahru.">

  <noscript><iframe src=*.html></iframe></noscript>
  <link rel="icon" type="image/png" href="img/logo-1.png" />
  <link src="http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
  <link href="css/bootstrap.min.css" rel="stylesheet">
  <link href="css/footer.css" rel="stylesheet">
  <link href="css/head.css" rel="stylesheet">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/brands.css"
    integrity="sha384-VGCZwiSnlHXYDojsRqeMn3IVvdzTx5JEuHgqZ3bYLCLUBV8rvihHApoA1Aso2TZA" crossorigin="anonymous">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css"
    integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">
  <link rel="stylesheet" type="text/css"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
  <link href="css/service.css" rel="stylesheet">
  <link href="css/header.css" rel="stylesheet">
  <script src="js/jquery.js"></script>
  <script src="js/header.js"></script>
</head>

<body onscroll="backTop()">
  <?php
  include('header.html');
  ?>
  <h1 class="servicetitle"><span class="brand-title"><img src='img/Service.png'></span>&nbsp;&nbsp;&nbsp;<span class="trn" data-trn-key="Services1">Services</span></h1>
  <div class="top-wrapper w-100">
    <div class="video-content" id="containersevices">
      <video width="100%" height="100%" autoplay muted loop>
        <source src="img/video/introduce.mp4" type="video/mp4">
      </video>
    </div>
    <div class="fb-page">
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FLausincereautowagon%2F&tabs=timeline&width=500&height=700&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        width="500" height="700" style="border:none;overflow:hidden" scrolling="no" frameborder="0"
        allowTransparency="true" allow="encrypted-media"></iframe>
    </div>

    <!-- <div class="w-100 cardpadding">
    
    </div> -->
  </div>



  <div class="containeralbum">
    <div class="grid-item">
      <div class="card box-shadow">
        <img class="card-img-top" style="height: 100%; width: 100%; display: block;" src="img/Tire Maintenance.jpg">
        <div class="card-body ">
          <h4 class="card-title trn" data-trn-key="Tire Maintenance">Tire Maintenance</h4>
          <p class="card-text trn" data-trn-key="TireMa">Sometimes a pneumatic tire gets a hole or a leak through which the air inside leaks
            out
            resulting in a flat tire, a condition which must be fixed before the car can be driven safely</p>
          <div class="felxend">
            <button type="button" class="btn align-self-end effect " data-toggle="modal" data-target="#myModal0">
              <div class="txtbtn trn" data-trn-key="Learn More">Learn More</div> <i class="fa fa-arrow-right"></i>
            </button>
          </div>
          <div id="myModal0" class="modal fade" data-easein="bounceIn" tabindex="-1" role="dialog"
            aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title trn" id="exampleModalLongTitle" data-trn-key="Tire Maintenance">Tire Maintenance</h5>
                  <button type="button" class="close0 close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <video id="video0" width="100%" height="100%" controls>
                  <source src="img/video/Tyre%20Age%20Best%20Used.mp4" type="video/mp4">
                </video>
                <div class="modal-body"><br>

                  <span class="message-notice trn" data-trn-key="ifthese">* If these few following step bothering you, please contact us for
                    more
                    professional services.<br></span>
                  <div class="modal-footer">
                    <div class="felxend">
                      <button type="button" class="close0 btn btn-secondary trn" data-trn-key="Close" data-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="grid-item ">
      <div class="card box-shadow">
        <img class="card-img-top" style="height: 100%; width: 100%; display: block;" src="img/Battery Service.jpg">
        <div class="card-body ">
          <h4 class="card-title trn" data-trn-key="Traction Friction Of Tire">Traction Friction Of Tire</h4>
          <p class="card-text trn" data-trn-key="Tfot" >Traction is the friction between wheels or tires and the ground that allows a vehicle
            to move forward. It is the resistance to spinning when a torque is applied to axle the wheel. When a
            surface is wet, a layer of water can act as a lubricant, greatly reducing the traction and stability of
            the vehicle. </p>
          <!-- Button trigger modal -->
          <div class="felxend">
            <button type="button" class="btn align-self-end effect " data-toggle="modal" data-target="#myModal1">
              <div class="txtbtn trn" data-trn-key="Learn More">Learn More</div> <i class="fa fa-arrow-right"></i>
            </button>
          </div>
          <!-- Modal -->
          <div id="myModal1" class="modal fade" data-easein="bounceIn" tabindex="-1" role="dialog"
            aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLongTitle">Battery Service</h5>
                  <button type="button" class="close close1" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <video id="video1" width="100%" height="100%" controls>
                  <source src="img/video/Runflat.mp4" type="video/mp4">
                </video>
                <div class="modal-body"><br>
                  <!--              Assuming your car’s charging system is in working order, avoiding a dead battery in the dawn before cars and coffee or at sunset after a long and winding drive is simple.-->
                  <!--              Maintain and clean the battery terminals and posts.<br>-->
                  <!--              Here is the few step to easily change your battery:<br><br>-->
                  <!--              Step 1: Clean the cables<br>-->
                  <!--              Step 2: Check the level of the electrolyte<br>-->
                  <!--              Step 3: Check the condition and charge of the battery<br>-->
                  <!--              Step 4: To drop in the new battery first remove the cables<br>-->
                  <!--              Step 5: Replace the battery<br>-->
                  <!--              Step 6: Reinstall the clamp and cables<br><br>-->
                  <span class="message-notice trn" data-trn-key="ifthese">* If these few following step bothering you, please contact us for
                    more
                    professional services.<br></span>
                </div>
                <div class="modal-footer">
                  <button type="button" class="close1 btn btn-secondary trn"  data-trn-key="Close" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="grid-item">
      <div class="card box-shadow">
        <img class="card-img-top" style="height: 100%; width: 100%; display: block;" src="img/Service.jpg">
        <div class="card-body ">
          <h4 class="card-title trn" data-trn-key="Services1">Services</h4>
          <p class="card-text trn" data-trn-key="Amm">A motor vehicle service or tune-up is a series of maintenance procedures carried out
            at
            a set time interval or after the vehicle has travelled a certain distance.</p>
          <!-- Button trigger modal -->
          <div class="felxend">
            <button type="button" class="btn align-self-end effect " data-toggle="modal" data-target="#myModal2">
              <div class="txtbtn trn" data-trn-key="Learn More">Learn More</div> <i class="fa fa-arrow-right"></i>
            </button>
          </div>
          <!-- Modal -->
          <div id="myModal2" class="modal fade" data-easein="bounceIn" tabindex="-1" role="dialog"
            aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title trn" data-trn-key="Services1" id="exampleModalLongTitle">Service</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <img class="modal-img-top" style="height: 100%; width: 100%; display: block;" src="img/Service.jpg">
                <div class="modal-body"><br><span class="trn" data-trn-key="blablabla" >
                  A motor vehicle service or tune-up is a series of maintenance procedures carried out at a set time
                  interval or after the vehicle has travelled a certain distance.
                  The service intervals are specified by the vehicle manufacturer in a service schedule and some
                  modern cars display the due date for the next service electronically on the instrument panel.
                  Maintenance tasks commonly carried out during a motor vehicle service include:</span><br><br>
                  <li class="trn" data-trn-key="Change the engine oil">Change the engine oil</li>
                  <li class="trn" data-trn-key="Replace the oil filter">Replace the oil filter</li>
                  <li class="trn" data-trn-key="Replace the air filter">Replace the air filter</li>
                  <li class="trn" data-trn-key="Replace the fuel filter">Replace the fuel filter</li>
                  <li class="trn" data-trn-key="Replace the cabin filter">Replace the cabin filter</li>
                  <li class="trn" data-trn-key="Replace the spark plugs">Replace the spark plugs</li>
                  <li class="trn" data-trn-key="Tune the engine">Tune the engine</li>
                  <li class="trn" data-trn-key="Check level and refill brake fluid/clutch fluid">Check level and refill brake fluid/clutch fluid</li>
                  <li class="trn" data-trn-key="Check Brake Pads/Liners, Brake Discs/Drums, and replace if worn out">Check Brake Pads/Liners, Brake Discs/Drums, and replace if worn out.</li>
                  <li class="trn" data-trn-key="Check level and refill power steering fluid">Check level and refill power steering fluid</li>
                  <li class="trn" data-trn-key="Check level and refill Automatic/Manual Transmission Fluid">Check level and refill Automatic/Manual Transmission Fluid</li>
                  <li class="trn" data-trn-key="Grease and lubricate components">Grease and lubricate components</li>
                  <li class="trn" data-trn-key="Inspect and replace the timing belt or timing chain if needed">Inspect and replace the timing belt or timing chain if needed</li>
                  <li class="trn" data-trn-key="Check condition of the tires">Check condition of the tires</li>
                  <li class="trn" data-trn-key="Check for proper operation of all lights, wipers etc.">Check for proper operation of all lights, wipers etc.</li>
                  <li class="trn" data-trn-key="Check for any Error codes in the ECU and take corrective action.">Check for any Error codes in the ECU and take corrective action.</li>
                  <li class="trn" data-trn-key="Wash the vehicle and clean the interiors.">Wash the vehicle and clean the interiors.</li>
                  <li class="trn" data-trn-key="Use scan tool read trouble code.">Use scan tool read trouble code.</li>
                  <br><br>
                  <span class="message-notice trn" data-trn-key="ifthese">* If these few following step bothering you, please contact us for
                    more
                    professional services.<br></span>
                </div>
                <div class="modal-footer">
                  <button type="button"  data-trn-key="Close" class="trn btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- linked main.css-->
  <a id="fb" class="link-facebook animated infinite bounce" href="https://web.facebook.com/Lausincereautowagon/"
    target="_blank" onmousemove="stop()" onmouseout="start()"><img src="img/button fb.png"></a>
  <span class="link-menu" id="head"><img src="img/button up.png"></span>

  <!-- Footer -->
  <?php
include('footer.html');
?>


  <script src="js/jquery.min.js"></script>
  <script src="js/bootstrap.bundle.min.js"></script>
  <script src="https://unpkg.com/masonry-layout@4.2.1/dist/masonry.pkgd.min.js"></script>
  <script src="js/Rwd-fb-plugin.js"></script>
  <script src="js/services.js"></script>
  <script src="js/header.js"></script>
  <script src="js/jquery.translate.js"></script>
   <script src="js/translate.js"></script>
</body>


</html>