(function ($) {
    "use strict";

    jQuery(document).ready(function($){

      //Owl carousel Start//
            $(".slide-area").owlCarousel({
             loop: true,
             autoplay: false,
             autoplayTimeout: 3000,
             autoplayHoverPause: true,
             dots:false,
             nav: true,
             navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
             mouseDrag:true,
             touchDrag:false,
             items:1
            
            
         });


       //Gmap Start//     
      
        var center = [23.7580679,90.3844153];
       $('.map')
      .gmap3({
        center:center,
        zoom:14,
        scrollwheel: false,   
        mapTypeId: "shadeOfGrey", // to select it directly
        mapTypeControlOptions: {
          mapTypeIds: [google.maps.MapTypeId.ROADMAP, "shadeOfGrey"]
        }
      })
        //.marker({
            //position: center,
            //icon: "http://maps.google.com/mapfiles/marker_green.png"
        //})
        
       //.infowindow({
            //position: center,
            //content: "RR Foundation",
            //pixelOffset: new google.maps.Size(0,-20)
        //})
        //.then(function (infowindow) {
           //infowindow.open(this.get(0)); // this.get(0) return the map (see "get" feature)
       //})
        

      .styledmaptype(
        "shadeOfGrey",
        [
          {"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},
          {"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
          {"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#F5F3F0"},{"lightness":20}]},
          {"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#F5F3F0"},{"lightness":17},{"weight":1.2}]},
          {"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#F3F2EE"},{"lightness":20}]},
          {"featureType":"poi","elementType":"geometry","stylers":[{"color":"#CBE6A3"},{"lightness":21}]},
          {"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#FBCB87"},{"lightness":17}]},
          {"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#FBCB87"},{"lightness":29},{"weight":0.2}]},
          {"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},
          {"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#FCE49F"},{"lightness":16}]},
          {"featureType":"transit","elementType":"geometry","stylers":[{"color":"#FBCB87"},{"lightness":19}]},
          {"featureType":"water","elementType":"geometry","stylers":[{"color":"#A3CCFF"},{"lightness":17}]}
        ],
        {name: "Shades of Grey"}
      );

    });


    jQuery(window).load(function(){

        
    });


}(jQuery)); 