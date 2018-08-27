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
  <META HTTP-EQUIV="Description" CONTENT="http://www.lausincere.com, Automotive Repair Shop, tyres, engine oil, vihicle services,Johor Bahru.">

  <noscript><iframe src=*.html></iframe></noscript>
  <link rel="icon" type="image/png" href="img/logo-1.png" />
  <link src="http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
  <link href="css/bootstrap.min.css" rel="stylesheet">
  <link href="css/footer.css" rel="stylesheet">
  <link href="css/head.css" rel="stylesheet">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/brands.css" integrity="sha384-VGCZwiSnlHXYDojsRqeMn3IVvdzTx5JEuHgqZ3bYLCLUBV8rvihHApoA1Aso2TZA" crossorigin="anonymous">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">
  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
  <link href="css/service.css" rel="stylesheet">
  <link href="css/header.css" rel="stylesheet">
  <script src="js/jquery.js"></script>
  <script src="js/header.js"></script>
  <script src="js/win.js"></script>
  <script src="js/main.js"></script>
</head>
<body  onscroll="backTop()">
  <?php
  include('header.html');
  ?>
<h1 class="breadcrumb-title"><span class="brand-title"><img src='img/Service.png'></span>&nbsp;&nbsp;&nbsp;Services</h1>
<div id="containersevices">
    <div class="videoyou">
      <iframe class="youtubeclass" width="100%" height="100%"
        src="https://youtube.com/embed/uTqkQutK_nc">
      </iframe>
    </div>
</div>



<div class="containeralbum">
  <div class="row grid ">

    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 card grid-item">
      <div class="card box-shadow">
        <img class="card-img-top" style="height: 100%; width: 100%; display: block;"
          src="img/Tire Maintenance.jpg">
        <div class="card-body ">
          <h4 class ="card-title">Tire Maintenance</h4>
          <p class="card-text">Sometimes a pneumatic tire gets a hole or a leak through which the air inside leaks out resulting in a flat tire, a condition which must be fixed before the car can be driven safely</p>
          <!-- Button trigger modal -->
          <button type="button" class="btn align-self-end effect " data-toggle="modal" data-target="#myModal0">
            <div class="txtbtn">Learn More</div> <i class="fa fa-arrow-right"></i>
          </button>
              <!-- Modal -->
          <div id="myModal0" class="modal fade" data-easein="bounceIn"  tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
           <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Tire Maintenance</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="videoyou">
              <iframe class="youtubeclass" width="100%" height="100%"src="https://youtube.com/embed/uTqkQutK_nc">
              </iframe>
              </div>
              <div class="modal-body"><br>
              Tire maintenance for motor vehicles is based on several factors.
              The chief reason for tire replacement is friction from moving contact with road surfaces,causing the tread on the outer perimeter of tires to eventually wear away. When the tread depth becomes too shallow (less than 0.125in./3.2mm), the tire is worn out and should be replaced.
              The same wheels can usually be used throughout the lifetime of the car.<br><br>
              <span class="message-notice">* If these few following step bothering you, please contact us for more professional services.<br></span>
              <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
              </div>


    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 card grid-item">
      <div class="card box-shadow">
        <img class="card-img-top" style="height: 100%; width: 100%; display: block;"
          src="img/Battery Service.jpg">
        <div class="card-body ">
          <h4 class ="card-title">Battery Service</h4>
          <p class="card-text">Assuming your car’s charging system is in working order, avoiding a dead battery in the dawn before cars and coffee or at sunset after a long and winding drive is simple. Maintain and clean the battery terminals and posts. </p>
          <!-- Button trigger modal -->
          <button type="button" class="btn align-self-end effect " data-toggle="modal" data-target="#myModal1">
            <div class="txtbtn">Learn More</div> <i class="fa fa-arrow-right"></i>
          </button>
              <!-- Modal -->
          <div id="myModal1" class="modal fade" data-easein="bounceIn"  tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
           <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Battery Service</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <img class="modal-img-top" style="height: 100%; width: 100%; display: block;"
              src="img/Battery Service.jpg">
              <div class="modal-body"><br>
              Assuming your car’s charging system is in working order, avoiding a dead battery in the dawn before cars and coffee or at sunset after a long and winding drive is simple.
              Maintain and clean the battery terminals and posts.<br>
              Here is the few step to easily change your battery:<br><br>
              Step 1: Clean the cables<br>
              Step 2: Check the level of the electrolyte<br>
              Step 3: Check the condition and charge of the battery<br>
              Step 4: To drop in the new battery first remove the cables<br>
              Step 5: Replace the battery<br>
              Step 6: Reinstall the clamp and cables<br><br>
              <span class="message-notice">* If these few following step bothering you, please contact us for more professional services.<br></span></div>
              <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 card grid-item">
      <div class="card box-shadow">
        <img class="card-img-top" style="height: 100%; width: 100%; display: block;"
          src="img/Service.jpg">
        <div class="card-body ">
          <h4 class ="card-title">Service</h4>
          <p class="card-text">A motor vehicle service or tune-up is a series of maintenance procedures carried out at a set time interval or after the vehicle has travelled a certain distance.</p>
          <!-- Button trigger modal -->
          <button type="button" class="btn align-self-end effect " data-toggle="modal" data-target="#myModal2">
            <div class="txtbtn">Learn More</div> <i class="fa fa-arrow-right"></i>
          </button>
              <!-- Modal -->
          <div id="myModal2" class="modal fade" data-easein="bounceIn"  tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
           <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Service</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <img class="modal-img-top" style="height: 100%; width: 100%; display: block;"
              src="img/Service.jpg">
              <div class="modal-body"><br>
              A motor vehicle service or tune-up is a series of maintenance procedures carried out at a set time interval or after the vehicle has travelled a certain distance.
              The service intervals are specified by the vehicle manufacturer in a service schedule and some modern cars display the due date for the next service electronically on the instrument panel.</br>
              Maintenance tasks commonly carried out during a motor vehicle service include:<br><br>
              <li>Change the engine oil</li>
              <li>Replace the oil filter</li>
              <li>Replace the air filter</li>
              <li>Replace the fuel filter</li>
              <li>Replace the cabin filter</li>
              <li>Replace the spark plugs</li>
              <li>Tune the engine</li>
              <li>Check level and refill brake fluid/clutch fluid</li>
              <li>Check Brake Pads/Liners, Brake Discs/Drums, and replace if worn out.</li>
              <li>Check level and refill power steering fluid</li>
              <li>Check level and refill Automatic/Manual Transmission Fluid</li>
              <li>Grease and lubricate components</li>
              <li>Inspect and replace the timing belt or timing chain if needed</li>
              <li>Check condition of the tires</li>
              <li>Check for proper operation of all lights, wipers etc.</li>
              <li>Check for any Error codes in the ECU and take corrective action.</li>
              <li>Wash the vehicle and clean the interiors.</li>
              <li>Use scan tool read trouble code.</li>
              <br><br>
              <span class="message-notice">* If these few following step bothering you, please contact us for more professional services.<br></span></div>
              <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 card grid-item">
      <div class="card box-shadow">
        <img class="card-img-top" style="height: 100%; width: 100%; display: block;"
          src="img/point.jpg">
        <div class="card-body ">
          <h4 class ="card-title">Maintain Your Own Car</h4>
          <p class="card-text">Amidst all the benefits of owning an automobile, it is imperative to maintain your car if you wish to enjoy it for a long time. Frequent automobile care extends the lifespan of the vehicle and keeps it running smoothly without any safety concerns. By keeping your vehicle in its prime condition through regular maintenance, you can also retain the optimal value for when you wish to sell your car.
          Therefore, we have compiled a list of comprehensive maintenance tips to keep the operational performance and aesthetic integrity of your car intact:</p>
          <!-- Button trigger modal -->
          <button type="button" class="btn align-self-end effect " data-toggle="modal" data-target="#myModal3">
            <div class="txtbtn">  Learn More</div> <i class="fa fa-arrow-right"></i>
          </button>
              <!-- Modal -->
          <div id="myModal3" class="modal fade" data-easein="bounceIn"  tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
           <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Maintain Your Own Car</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <img class="modal-img-top" style="height: 100%; width: 100%; display: block;"
              src="img/point1.jpg">
              <div class="modal-body"><br>
              Amidst all the benefits of owning an automobile, it is imperative to maintain your car if you wish to enjoy it for a long time. Frequent automobile care extends the lifespan of the vehicle and keeps it running smoothly without any safety concerns. By keeping your vehicle in its prime condition through regular maintenance, you can also retain the optimal value for when you wish to sell your car.
              Therefore, we have compiled a list of comprehensive maintenance tips to keep the operational performance and aesthetic integrity of your car intact.
              <br><br>
              X Things To Do To Maintain Your Own Car
              <br>
              <li>Check the tires</li>
              <li>Change the oil</li>
              <li>Clean and fix the windshield, mirrors, and lights</li>
              <li>Change the air filter</li>
              <li>Keep the interiors clean</li>
              <li>Check the fluids</li>
              <li>Keep emissions under control</li>
              <li>Check the battery</li>
              <br>
              <span class="message-notice">* If these few following step bothering you, please contact us for more professional services.<br></span></div>
              <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 card grid-item">
      <div class="card box-shadow">
        <img class="card-img-top" style="height: 100%; width: 100%; display: block;"
          src="img/checktyre.jpg">
        <div class="card-body ">
          <h4 class ="card-title">Check the tires</h4>
          <p class="card-text">You should regularly check the tire pressure as it not only affects the comfort, safety, and handling of the car but also influences the fuel efficiency. Improper inflation of tires can hinder the ability of the wheels to stop correctly and increase the probability of a flat tire.You can check the tire pressure every week, but experts recommend doing it every time you fill up the gas. Frequent monitoring will allow you to catch any issues immediately, as tire pressure undergoes constant changes due to temperature fluctuation and mileage accumulation. Manufacturer’s manual specifies the recommended tire pressure.In addition, you should rotate the tires every 5,000 to 10,000 miles. Regularly rotation of the wheels ensures that all the tires have an equal wear pattern, extending the lifespan of the wheels.Finally, r﻿﻿eplace your﻿﻿ ﻿﻿﻿﻿tires when they become worn beyond the reasonable limits to avoid any accidents.</p>
          <!-- Button trigger modal -->
          <button type="button" class="btn align-self-end effect " data-toggle="modal" data-target="#myModal4">
            <div class="txtbtn">Learn More</div> <i class="fa fa-arrow-right"></i>
          </button>
              <!-- Modal -->
          <div id="myModal4" class="modal fade" data-easein="bounceIn"  tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
           <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Check the tires</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <img class="modal-img-top" style="height: 100%; width: 100%; display: block;"
              src="img/checktyre1.jpg">
              <div class="modal-body"><br>
              You should regularly check the tire pressure as it not only affects the comfort, safety, and handling of the car but also influences the fuel efficiency. Improper inflation of tires can hinder the ability of the wheels to stop correctly and increase the probability of a flat tire.<br><br>
              You can check the tire pressure every week, but experts recommend doing it every time you fill up the gas. Frequent monitoring will allow you to catch any issues immediately, as tire pressure undergoes constant changes due to temperature fluctuation and mileage accumulation. Manufacturer’s manual specifies the recommended tire pressure.<br><br>
              In addition, you should rotate the tires every 5,000 to 10,000 miles. Regularly rotation of the wheels ensures that all the tires have an equal wear pattern, extending the lifespan of the wheels.<br><br>
              Finally, replace you tires when they become worn beyond the reasonable limits to avoid any accidents.<br><br>
              <span class="message-notice">* If these few following step bothering you, please contact us for more professional services.<br></span></div>
              <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 card grid-item">
      <div class="card box-shadow">
        <img class="card-img-top" style="height: 100%; width: 100%; display: block;"
          src="img/wind.jpg">
        <div class="card-body ">
          <h4 class ="card-title">Clean and fix</h4>
          <p class="card-text">Clean and fix the windshield, mirrors, and lights,a dirty windshield is a safety hazard as it can obscure your view while driving, and it looks unpleasant as well. Therefore, wipe your windshields clean with a sponge and cleaning fluid regularly, depending on how many miles you log in the day, what is your daily route, and where did you park the car.
          The windshield wipers need replacement once a year, as they become worn out with use. Torn wipers are unable to perform adequately during the rainy season and can pose a safety threat, especially if you are driving in a downpour. You can replace only the wiper blades or the entire assembly depending on its condition.
          In addition, you need to keep your front, and rear view mirrors clean since they provide an essential all-encompassing view of the road necessary for safe driving. Fix any mirrors, broken in an accident, immediately and give them a regularly wipe for an unobscured sight.
          Finally, the light fixtures on your car have important jobs and should not be overlooked during regular maintenance. To ensure that they are all in perfect working condition, ask a friend to go around the car while you switch on each light. Replace any broken or faulty bulbs immediately, especially the headlights. You can do it yourself in a few simple steps.</p>
          <!-- Button trigger modal -->
          <button type="button" class="btn align-self-end effect " data-toggle="modal" data-target="#myModal5">
            <div class="txtbtn">  Learn More</div> <i class="fa fa-arrow-right"></i>
          </button>
              <!-- Modal -->
          <div id="myModal5" class="modal fade" data-easein="bounceIn"  tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
           <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Clean and fix</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <img class="modal-img-top" style="height: 100%; width: 100%; display: block;"
              src="img/wind1.jpg">
              <div class="modal-body"><br>
              Clean and fix the windshield, mirrors, and lights,a dirty windshield is a safety hazard as it can obscure your view while driving, and it looks unpleasant as well. Therefore, wipe your windshields clean with a sponge and cleaning fluid regularly, depending on how many miles you log in the day, what is your daily route, and where did you park the car.<br><br>
              The windshield wipers need replacement once a year, as they become worn out with use. Torn wipers are unable to perform adequately during the rainy season and can pose a safety threat, especially if you are driving in a downpour. You can replace only the wiper blades or the entire assembly depending on its condition.<br><br>
              In addition, you need to keep your front, and rear view mirrors clean since they provide an essential all-encompassing view of the road necessary for safe driving. Fix any mirrors, broken in an accident, immediately and give them a regularly wipe for an unobscured sight.<br><br>
              Finally, the light fixtures on your car have important jobs and should not be overlooked during regular maintenance. To ensure that they are all in perfect working condition, ask a friend to go around the car while you switch on each light. Replace any broken or faulty bulbs immediately, especially the headlights. You can do it yourself in a few simple steps.<br><br>
              <span class="message-notice">* If these few following step bothering you, please contact us for more professional services.<br></span></div>

              <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>
<!-- linked main.css-->
<a id="fb" class="link-facebook animated infinite bounce" href="https://web.facebook.com/Lausincereautowagon/" target="_blank" onmousemove="stop()" onmouseout="start()"><img src="img/button fb.png"></a>
<span class="link-menu" id="head" ><img src="img/button up.png"></span>

<!-- Footer -->
<?php
include('footer.html');
?>


<script src="js/jquery.min.js"></script>
<script src="js/bootstrap.bundle.min.js"></script>
<script src="https://unpkg.com/masonry-layout@4.2.1/dist/masonry.pkgd.min.js"></script>
<script src="js/main.js"></script>
<script src="js/services.js"></script>
</body>


</html>
