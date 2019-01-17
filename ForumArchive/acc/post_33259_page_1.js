[{"Owner":"pichou","Date":"2017-10-05T07:49:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tWhat is the correct image format to use your own decal texture?_lt_br /_gt__lt_br /_gt_\n\tI tried a lot of different images in my project but none have worked so far except the babylon one._lt_br /_gt__lt_br /_gt_\n\tI guess the image must be png and black on white?_lt_br /_gt__lt_br /_gt_\n\tHere is a playground with one image test _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1BAPRM%23159_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1BAPRM#159_lt_/a_gt_ \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2017-10-05T08:03:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/28433-pichou/?do_eq_hovercard_qt_ data-mentionid_eq__qt_28433_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/28433-pichou/_qt_ rel_eq__qt__qt__gt_@pichou_lt_/a_gt__co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI believe the problem you have is somewhat different_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_Access to Image at _t_https_dd_//orig00.deviantart.net/1396/f/2007/179/9/5/texture_impact_by_mini_tyson.png_t_ from origin _t_http_dd_//www.babylonjs-playground.com_t_ has been blocked by CORS policy_dd_ No _t_Access-Control-Allow-Origin_t_ header is present on the requested resource. Origin _t_http_dd_//www.babylonjs-playground.com_t_ is therefore not allowed access._lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tYou get CORS error - the image cannot be loaded. Your server should support CORS in order for you to async load images to the playground. That_t_s the reason only images from babylonjs.com work (for example - _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1BAPRM%23160_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1BAPRM#160_lt_/a_gt_ )\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"pichou","Date":"2017-10-05T08:37:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tOK sorry I should have seen that._lt_br /_gt__lt_br /_gt_\n\tHere is a better test _dd_ _lt_br /_gt__lt_br /_gt_\n\tIn this playground I can play with the color and the opacity of the decal with the baylon image _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1BAPRM%23161_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1BAPRM#161_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\tBut with my own image it doesn_t_t work anymore _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1BAPRM%23162_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1BAPRM#162_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\tPichou\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2017-10-05T08:58:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHowdy_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tnotice that the babylon image has a transparency channel. You have only black and white. Make the while transparent and give it a try.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"pichou","Date":"2017-10-05T11:48:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOk better_co_ thanks _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1BAPRM%23163_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1BAPRM#163_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf thought the downloaded image already had a transparency channel but there was an alteration when downloading it. _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]