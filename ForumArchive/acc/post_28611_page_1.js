[{"Owner":"fenomas","Date":"2017-02-22T06:41:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIs billboard mode working? If so_co_ can anyone explain what it_t_s doing conceptually_co_ and how I can use it for a standard billboard effect (where the mesh is something like a hit point bar or a text label_co_ that you want to be drawn un-rotated)?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m using it in what seems like the obvious way. _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#UJEIL%230_qt_ style_eq__qt_background-color_dd_rgb(255_co_255_co_255)_sm__qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#UJEIL#0_lt_/a_gt_  But as shown_co_ meshes rotate based on the relative vertical angle between them and the camera.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs something broken_co_ or is that not how you_t_re meant to use it?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2017-02-22T08:01:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/12925-fenomas/?do_eq_hovercard_qt_ data-mentionid_eq__qt_12925_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/12925-fenomas/_qt_ rel_eq__qt__qt__gt_@fenomas_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tbillboard_all as you pointed out rotates slightly as you move the camera_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHowever_co_ if your camera doesnt rotate_co_ you can you use billboad_x or billboard_z depending on your cameras angle_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOtherwise you should look at canvas2d. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"fenomas","Date":"2017-02-22T12:28:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI_t_m not looking for a whole new mechanism like Canvas2D_co_ just a way to face an existing mesh towards the camera.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-02-22T13:48:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWell_co_ basically and whatever the mean used (billboard_co_ lookAt()_co_ rotationFromAxis() )_co_ if you want to rotate the mesh in the World space_co_ you need to describe your rotation constraints. Ex _dd_ the mesh z-axis must be the mesh-cam axis_co_ the mesh y axis must be in the plane cam_axis O Y_world_axis_co_ etc (or not). Those are your own choices according to the liberty you want to let to the camera movements. The more camera movement possibiliies_co_ the less rotation constraints possible (or the more _qt_unexpected_qt_ mesh rotations necessary).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe other way would be to quit the 3D world and to project directly your mesh in the 2D projected space_co_ what sprites and canvas2d do... but they only manage planar meshes (sprite quads or canvas quad) afaik. I_t_m afraid there_t_s no provided way to display directly a 3D mesh in the 2D space.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI personally would define my own constraints along the mesh local system _dd_ how should the mesh local x_co_y_co_z axis be set from the current camera position ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd then I would just define from the camera and mesh positions these 3 orientated axis with simple cross products (say mesh z axis is the mesh-cam vector) and use RotationFromAxis() to compute the required mesh rotation _dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Documentation/blob/master/content/overviews/Standard/How_Rotations_and_Translations_Work.md_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Documentation/blob/master/content/overviews/Standard/How_Rotations_and_Translations_Work.md_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t(if it works ...)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"fenomas","Date":"2017-02-22T14:38:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tErm_co_ I seem to be speaking greek here. _lt_img alt_eq__qt__dd_huh_dd__qt_ data-emoticon_eq__qt__qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_huh.png_qt_ title_eq__qt__dd_huh_dd__qt_ /_gt_  Let me take another stab at it.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI know that it_t_s possible to achieve many kinds of rotations_co_ according to many kinds of constraints. I_t_m asking about the specific kind of rotation where a mesh is _lt_em_gt_rotated towards the camera on all its axes_lt_/em_gt_. Like the green plane in _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#UJEIL%232_qt_ rel_eq__qt_external nofollow_qt__gt_this demo_lt_/a_gt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat I_t_m asking is_dd_\n_lt_/p_gt_\n\n_lt_ul_gt__lt_li_gt_\n\t\tIsn_t_t BILLBOARD_ALL meant to do something like this?\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tIf not_co_ what is BILLBOARD_ALL doing?\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tAlso if not_co_ is there a built-in way of getting a standard billboard effect?\n\t_lt_/li_gt_\n_lt_/ul_gt__lt_p_gt_\n\tThanks!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-02-22T16:42:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI think there is a bug _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ Let me check\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-02-22T17:52:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tBug confirmed and fixed..you pg should work now (just clear your cache)\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"fenomas","Date":"2017-02-23T04:59:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey DK_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for looking at this. The current fix is definitely not right though. I think the billboard handling is reusing _lt_strong_gt_Tmp.Quaternion[1]_lt_/strong_gt_ without zeroing it first_co_ which is leading to weird behavior where the behavior of each mesh depends on the billboard mode of previous meshes.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDemo_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#UJEIL%236_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#UJEIL#6_lt_/a_gt_ - uncomment lines 27-29 to see what I mean.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m trying to check if the behavior is right otherwise_co_ but it_t_s very hard to test in the current state.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"fenomas","Date":"2017-02-23T06:07:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis seems like a problem crying out for a test suite_co_ so I tried making one_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#UJEIL%238_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#UJEIL#8_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe red boxes have the four main billboard modes_co_ and the blue boxes are manually rotated to _lt_em_gt_what I would naively expect_lt_/em_gt_ to be the correct behavior of that billboard mode. (Also includes a temp workaround for the reused quaternion issue noted above.)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI hope this helps make clear what I_t_m asking_co_ and what I_t_d expected the behavior to be. Please note that I_t_m no expert on this_co_ my expectation could be wrong! If so_co_ somebody please jump in.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-02-23T16:03:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis is what happens when you fix a bug between meetings _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tIt should be ok now _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"fenomas","Date":"2017-02-23T17:10:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_164700_qt_ data-ipsquote-contentid_eq__qt_28611_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1487865825_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t56 minutes ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tThis is what happens when you fix a bug between meetings _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tIt should be ok now _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tDid you check the test content in my last reply? Here_t_s an updated version_co_ without the bug workaround_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#UJEIL%239_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#UJEIL#9_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWith the bug fix_co_ modes _qt_ALL_qt_ and _qt_Y_qt_ are now doing what I would have expected_co_ but _qt_X_qt_ and _qt_Z_qt_ aren_t_t. Is my expectation wrong? If so_co_ it_t_d be really helpful if someone comment on how.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-02-23T17:13:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tX is doing what it is expected to do_dd_ align around X axis_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#UJEIL%2310_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#UJEIL#10_lt_/a_gt_ (blue is false here)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tZ is correct as well (but tough to check as we cannot rotate camera on Z axis)_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#UJEIL%2311_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#UJEIL#11_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tEdit_dd_ X seems correct only on one side...Need to check more\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-02-23T18:05:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOk should be good now. I updated your test scene to add test for parenting as well_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#UJEIL%2313_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#UJEIL#13_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you very much for your help\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe BillboardZ is still a bit weird but not a priority\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"fenomas","Date":"2017-02-24T04:07:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks DK!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have to admit_co_ as this thread has gone on I_t_ve understood less and less what_t_s going on behind the scenes_co_ but I hope we_t_ve arrived at the right result.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso the testbed PG should be a good resource for any future tweaks.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-02-24T22:58:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tNo worry we did a good team here!\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]