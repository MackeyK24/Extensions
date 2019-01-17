[{"Owner":"Hagop","Date":"2016-12-09T15:49:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_h3_gt_\n\tI have a door which slides open (just like a lift door) using scene.beginAnimation(skeletons_lt_em_gt__co_ 0_co_ 100_co_ false_co_ 1.0)_sm_\n_lt_/em_gt_\n_lt_/h3_gt_\n_lt_em_gt_\n\n_lt_/em_gt__lt_p_gt__lt_em_gt_\n\tWhen I try to enter the door from the empty space after the door has slided_co_ if I have collisions enabled on my camera_co_ I can_t_t_co_ because the camera collides with the door. The mesh coordinates are not updated with the skeleton movement_co_ because Scene.pick  _lt_/em_gt__lt_strong_gt__lt_em_gt_still _lt_/em_gt__lt_/strong_gt__lt_em_gt__qt_hits_qt_ the door at its position when it was closed.\n_lt_/em_gt__lt_/p_gt_\n_lt_em_gt_\n\n_lt_/em_gt__lt_h3_gt_\n_lt_em_gt_\n\t_lt_/em_gt__lt_span style_eq__qt_font-size_dd_14px_sm__qt__gt__lt_strong_gt__lt_em_gt_This question has been asked before but I think there was no fair and clear answer._lt_/em_gt__lt_/strong_gt__lt_/span_gt__lt_em_gt_\n_lt_/em_gt_\n_lt_/h3_gt_\n_lt_em_gt_\n\n_lt_/em_gt__lt_p_gt__lt_em_gt_\n\t \n_lt_/em_gt__lt_/p_gt_\n_lt_em_gt_\n_lt_/em_gt__lt_iframe data-embedcontent_eq__qt__qt_ frameborder_eq__qt_0_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/10675-applying-movement-created-in-blender-to-meshposition-in-babylonjs/?do_eq_embed_qt__gt__lt_/iframe_gt__lt_em_gt_\n\n_lt_/em_gt__lt_h3_gt__lt_em_gt_\n\tIs there a solution to this issue? If yes_co_ in Babylon or bone hierarchy in 3D software ie_dd_3DSMax ?\n_lt_/em_gt__lt_/h3_gt_\n_lt_em_gt_\n\n_lt_/em_gt__lt_h3_gt__lt_em_gt_\n\tFinally_co_ what is this skeleton property needInitialSkinMatrix?\n_lt_/em_gt__lt_/h3_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"max123","Date":"2016-12-09T15:57:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tIs there a reason you_t_re using bones for a simple sliding door? \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Hagop","Date":"2016-12-09T16:29:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOnly a skeleton/bones collection provides smooth animation. I don_t_t want to translate the mesh_co_ if that is what you implied.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJust a note here_co_ that I guess mesh coordinates are not updated since looping wouldn_t_t work_co_since looping starts from early position.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-12-09T16:32:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI agree with max.  If you are trying to move the root bone of the skeleton to move a mesh_co_ you are going to have issues like this.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"max123","Date":"2016-12-09T16:41:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_154449_qt_ data-ipsquote-contentid_eq__qt_26946_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1481300993_qt_ data-ipsquote-userid_eq__qt_15947_qt_ data-ipsquote-username_eq__qt_Hagop_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t13 minutes ago_co_ Hagop said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tOnly a skeleton/bones collection provides smooth animation. I don_t_t want to translate the mesh_co_ if that is hwat you implied.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tWhy? Have a look at Babylon_t_s Animation system - you get proper easing functions and all that. I_t_m just curious. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/Animations_qt_ rel_eq__qt_external nofollow_qt__gt_Link_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Hagop","Date":"2016-12-09T16:48:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI guess I_t_ll use your idea max thanx. But I am still curious if there is a workaround?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"max123","Date":"2016-12-09T16:58:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHmm... If I REALLY had to use the bones approach_co_ I_t_d probably disable the actual door_t_s collisions and used an _qt_impostor_qt_ - a transparent plane with door_t_s dimensions/position and moved that plane in any which way necessary (synchronised with the door) to get the job done _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]