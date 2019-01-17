[{"Owner":"fariazz","Date":"2014-03-25T01:20:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_m having trouble setting the initial direction of the camera_dd_  _lt_a href_eq__qt_http_dd_//static.pablofarias.com/plane/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//static.pablofarias.com/plane/_lt_/a_gt_  The camera always points down when loading the scene. I_t_ve changed the camera.direction property but that also changed the location of the camera. I_t_m using a free camera. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Also_co_ the camera can_t_t look up_co_ it can only look down and to the sides.. not sure how to allow it to look up._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Any help would be appreciated!!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2014-03-25T03:21:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt_The camera always points down when loading the scene. I_t_ve changed the camera.direction property_lt_p_gt_ _lt_/p_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The camera seems to be functioning properly - moves up/down right to left as you move the mouse._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Is the rest of the scene set up properly?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2014-03-25T04:14:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Looking at it again_co_  a plane is created vertically (see _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/wiki/02-Basic-elements_qt_ rel_eq__qt_external nofollow_qt__gt_picture tutorial 02 _lt_/a_gt_). Did you rotate the plane so it lies on the ground?_lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_plane.rotation _eq_ new BABYLON.Vector3(Math.PI / 2_co_ 0_co_ 0)_sm__lt_/pre_gt__lt_p_gt_ That may explain why it looks like the camera is pointing in the wrong direction._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"fariazz","Date":"2014-04-17T02:01:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_31060_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_5100_qt_ data-ipsquote-username_eq__qt_gryff_qt_ data-cite_eq__qt_gryff_qt_ data-ipsquote-timestamp_eq__qt_1395720862_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_Looking at it again_co_  a plane is created vertically (see _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/wiki/02-Basic-elements_qt_ rel_eq__qt_external nofollow_qt__gt_picture tutorial 02 _lt_/a_gt_). Did you rotate the plane so it lies on the ground?_lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_plane.rotation _eq_ new BABYLON.Vector3(Math.PI / 2_co_ 0_co_ 0)_sm__lt_/pre_gt__lt_p_gt_ That may explain why it looks like the camera is pointing in the wrong direction._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks Gryff! I hadn_t_t realized the Y axis pointed upwards. I thought x and y where on the floor and Z was the verical axis._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-04-17T03:32:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_You may use CreateGround instead if you want it horizontally_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]