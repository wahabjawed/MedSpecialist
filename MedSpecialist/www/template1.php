<?php

    include '../headers/connect_to_mysql.php';    
    include '../headers/_user-details.php';
    
?>



<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title><?php echo $_fname . " " . $_lname . " - Biz Social Etc"; ?></title>
<link rel="stylesheet" href="/css/style3.css" type="text/css" />
<link rel="stylesheet" href="/css/media_queries3.css" type="text/css" />



<link href="/assets/css/jquery.bxslider.css" rel="stylesheet" />

<script src="/headers/jquery-1.10.2.js"></script>
<script src="/headers/jquery-1.10.2.min.js"></script>
<script src="/headers/email-validation.js"></script>

</head>

<body>





<div class="container">
    <div class="header">
    	<div class="logo">
        	<a href="#">
            	<img src="/assets/upload/<?php echo $_logo; ?>" width="391" alt="logo" />
            </a>
        </div>
    </div>
			<div class="content_inner">
         	
            <div class="video_sec">
                <div class="video" id="youtube">
                	
                	
                    
                    <?php echo $_video; ?>
                     
                </div>
                <div class="clear"></div>
         </div>
         <div class="contact_info">
         	<ul>
            	<li><a href="tel:<?php echo $_office; ?>"><img src="/images/phone_ico_design_two.png" width="85" alt="phone" /></a></li>
                <li><a href="tel:<?php echo $_mobile; ?>"><img src="/images/mobile_ico_design_two.png" width="85" alt="phone" /></a></li>
                <li><a href="https://www.google.com/maps/place/<?php echo  "{$_address}+{$_city}+{$_country}+{$_sindh}"; ?>" target="_blank"><img src="/images/map_ico.png" width="85" alt="phone" /></a></li>
                <li><a href="mailto:<?php echo $_email; ?>"><img src="/images/mail_ico_design_two.png" width="85" alt="phone" /></a></li>
                <div class="clear"></div>
            </ul>
            <div class="clear"></div>
         </div>
                 
            
            <div class="author">
            	<div class="author_detail">
                	<h1><?php echo $_fname . " " . $_lname; ?></h1>
                    <h2><?php echo $_company; ?></h2>
                    <h3><span class="author_detail_cell"><a href="tel:<?php echo $_office; ?>"><?php echo $_office; ?></a></span></h3>
                    <h3><span class="author_detail_office"><a href="tel:<?php echo $_office; ?>"><?php echo $_mobile; ?></a></span></h3>
                    <address>
                   <p><?php echo $_address; ?>,<br />
                    <?php echo $_city; ?><br/>
                    <?php echo $_country; ?>, <?php echo $_state; ?></p>
                    
                    </address>
                    
                </div>
                <div class="author_img">
                	<img src="/assets/upload/<?php echo $_profilePic;?>" width="135" alt="author image" />
                </div>
                <div class="clear"></div>
                <p class="disc"><?php echo $_description; ?>
</p>
            </div>
            
         
         
         
         
         
         <div class="disclaimer">
            <p class="info_p">*To automatically import my information to your cell
             phone or address book, enter your email address below and press <span>add to contact</span> button.</p>
             <div class="btn_box">
             <form method="post" action="/vcard_example.php?username=<?php echo $username;?>" name="referralForm" onsubmit="return validateForm()">
             	<input type="email" id="txt" name="emailReferral" placeholder="Enter Your Email Address" />
             	<input type="submit" value="ADD TO CONTACTS" id="sbmt" />
               </form>
             </div>
         </div>
         
         
		
       <div class="banner_box">

            
                <ul class="bxslider" style="position: absolute; left:0;">
                  <li>
                    <center>
                         <a href="../register.php" target="_blank"><img src="/images/sliderimage1.jpg" /></a>
                    </center>
                  </li>
                  <<li>
                    <center>
                        <a href="http://icard1.com/" target="_blank"> <img src="/images/sliderimage2.jpg" /> </a>
                    </center>
                  </li>
                  <<li>
                    <center>
                        <a href="http://www.bizsocialetc.com" target="_blank"> <img src="/images/advertise3.jpg" /> </a>
                    </center>
                  </li>
                  <!---li>
                    <center>
                        <img src="/images/sliderimagefive.png" />
                    </center>
                  </li> -->
                </ul>

        </div> 
        
        
        
        
         
         
       	<div class="footer">
         	<a  class="main" href="http://<?php echo $_website; ?>"><?php echo $_website; ?></a>
            <ul>
            	<li><a class="facebook" href="<?php echo $_facebook; ?>" target="_blank">facebook</a></li>
                <li><a class="twitter" href="<?php echo $_twitter; ?>" target="_blank">twitter</a></li>
                <li><a class="google" href="<?php echo $_google; ?>" target="_blank">google</a></li>
                <li><a class="linkedin" href="<?php echo $_linked; ?>" target="_blank">linkedin</a></li>
                <li><a class="youtube" href="<?php echo $_youtube; ?>" target="_blank">youtube</a></li>
                <div class="clear"></div>
            </ul>
         <div class="clear"></div>
         </div>
         </div><!--content_inner-->
     <div class="clear"></div>
    </div>
    
    
    
<div align="center">
  <script>
	
	$('#youtube').html(function(i, html) {
	
		return html.replace(/(?:http:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?(.+)/g, '<iframe width="454" height="340"  style = "max-width:100%;" src="http://www.youtube.com/embed/$1" frameborder="0" allowfullscreen></iframe>');
	
	});

  </script>
  <script src="/assets/js/jquery.bxslider.min.js"></script>
  <script type="text/javascript">
    
    $('.bxslider').bxSlider({
      auto: true,
      autoControls: false,
      infiniteLoop: true
    });
  </script>
    
    
    
    
    
 Copyright Bizsocialetc 2014. All rights reserved   
</div>
</body>
</html>
