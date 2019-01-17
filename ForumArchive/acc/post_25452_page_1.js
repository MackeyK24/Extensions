[{"Owner":"swat0284","Date":"2016-09-27T02:05:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHello_co_ i try to move mesh along 2 points using_dd__lt_br /_gt_\n\tBezierCurveEase(.6_co_.11_co_1_co_.53) and animationBezierTorus.setEasingFunction(bezierEase)_sm_ but my app work like this_dd__lt_br /_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#F9Z7K%230_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#F9Z7K#0_lt_/a_gt__lt_br /_gt_\n\ti try to make that mesh move along this curve_dd_ _lt_br /_gt__lt_a href_eq__qt_http_dd_//cubic-bezier.com/#.6_co_.11_co_1_co_.53_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//cubic-bezier.com/#.6_co_.11_co_1_co_.53_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2016-09-27T14:13:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you comment and uncomment the line #29_co_ you can see the animation is correctly updated according to the beziers curve. _lt_br /_gt_\n\tEasing function won_t_t change your animation_co_ but its speed only.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MasterK","Date":"2016-09-28T01:51:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5218-temechon/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5218_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5218-temechon/_qt_ rel_eq__qt__qt__gt_@Temechon_lt_/a_gt_ he said his bezierCurve not behavior as normal.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/16263-swat0284/?do_eq_hovercard_qt_ data-mentionid_eq__qt_16263_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/16263-swat0284/_qt_ rel_eq__qt__qt__gt_@swat0284_lt_/a_gt_ Maybe BABYLON.BezierCurveEase is not same as cubic-bezier?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"fenomas","Date":"2016-09-28T05:29:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/17014-masterk/?do_eq_hovercard_qt_ data-mentionid_eq__qt_17014_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/17014-masterk/_qt_ rel_eq__qt__qt__gt_@MasterK_lt_/a_gt_ There isn_t_t any (spatial) bezier curve here. ANIMATIONTYPE_VECTOR3 animates along a straight line from one point to another. Adding an easing function doesn_t_t change the shape_co_ just the timing.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor a bezier-like path_co_ I_t_d do something like_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_// in render loop\nvar amt _eq_ // float value that animates from 0 .. 1\nvar dest _eq_ BABYLON.Vector3.lerp(controlPoint1_co_ controlPoint2_co_ amt)\nmyMesh.position _eq_ BABYLON.Vector3.lerp(startPoint_co_ dest_co_ amt)_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MasterK","Date":"2016-09-28T05:37:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/12925-fenomas/?do_eq_hovercard_qt_ data-mentionid_eq__qt_12925_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/12925-fenomas/_qt_ rel_eq__qt__qt__gt_@fenomas_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI know that.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tok. i won_t_t look into this. but he can use self ease function to achieve his purpose.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]