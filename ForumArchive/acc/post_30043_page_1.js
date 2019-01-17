[{"Owner":"mightymarcus","Date":"2017-04-26T16:17:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI have a big problem with screen tearing. Please have a look at the video. I am sorry I can_t_t provide a playground for this (yeah I could maybe)_co_ because I am using a port of babylonjs together with the haxe language/compiler. I read much information about the problem in OpenGL forums too_co_ but I did not get a solution.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo maybe some 3D WebGL / OpenGL ES Guru knows_co_ how to fix the problem.\n_lt_/p_gt_\n\n_lt_pre style_eq__qt_color_dd_#212121_sm__qt__gt_\n _lt_/pre_gt_\n\n_lt_div class_eq__qt_ipsEmbeddedVideo_qt__gt_\n\t_lt_div_gt_\n\t\t_lt_iframe allowfullscreen_eq__qt_true_qt_ frameborder_eq__qt_0_qt_ height_eq__qt_270_qt_ src_eq__qt_https_dd_//www.youtube.com/embed/CJiq0z7HteY?feature_eq_oembed_qt_ width_eq__qt_480_qt__gt__lt_/iframe_gt_\n\t_lt_/div_gt_\n_lt_/div_gt_\n\n_lt_p_gt_\n\t \n\t_lt_/p_gt_\n_lt_p_gt_\n\t\t \n\t_lt_/p_gt_\n\n\n_lt_p_gt_\n\tAs you can see in the video_co_ the mesh with the bricks and ladders is flickering and tearing like hell. The mesh is merged together from single meshes (planes) and a sprite atlas is used_co_ so that I can take one material/texture for the whole level-mesh (the foreground). To get the well known sprite art or retro effect_co_ I use\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTexture.NEAREST_SAMPLINGMODE\n_lt_/p_gt_\n\n_lt_p_gt_\n\ttexture.anisotropicFilteringLevel _eq_ 1\n_lt_/p_gt_\n\n_lt_p_gt_\n\ttexture.wrapU _eq_ texture.wrapV _eq_ Texture.CLAMP_ADDRESSMODE\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI tried to adjust the uvs (read about pixels and texels)_co_ but I don_t_t get it right.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think that the UVs are not correct and when the camera moves_co_ the drawn texture tile is snapping between two pixels all the time_co_ and that causes the bad tearing effect.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut I don_t_t know. Since I am using Babylonjs/Babylonhx_co_ I am asking here for the first place.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt_t_s strange too_co_ that it looks like the lines are jumping up and down. And maybe the uvs are right_co_ but the screen tearing is a evil_co_ that comes with the NEAREST_SAMPLINGMODE or the disabled anisotropicFiltering? Btw. I disabled mipmaps too.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHm. It would be easier to just scale the Textures up hm and use another sampling mode? Because now I get it_co_ that not using mipmaps is a bad idea_co_ because I have a little 3D stuff in there_co_ like the sides and the floor.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYeah I know_co_ there is another topic to this topic. But I didn_t_t find the answer there.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYeah_co_ that_t_s great. I think I have the right solution now. Upscaled textures. But to be honest and just to learn how to do it right_co_ is there another way how I can do this? Merging planes with different uvs together and using a very small texture (one tile _eq_ 32px) without having artefacts?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"mightymarcus","Date":"2017-04-26T19:07:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHm. Just for the record_dd_ Very small textures and anisotopicFilteringLevel _eq_ 1 generally produces screen tearing_co_ when the camera is moving very slow.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI made the (non-tiled) background a high constrast_co_ and it can be seen_co_ that it_t_s tearing the same like the tiled foreground.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Umz","Date":"2017-04-26T20:16:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tSorry_co_ know nothing about the issue _lt_img alt_eq__qt__dd_unsure_dd__qt_ data-emoticon_eq__qt__qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_unsure.png_qt_ title_eq__qt__dd_unsure_dd__qt_ /_gt__lt_br /_gt_\n\tUnrelated question_co_ But_co_ which Screen Recorder are you using?? It is absolutely awesome. Or is it just the power of the PC you_t_re on?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"mightymarcus","Date":"2017-04-27T05:59:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tIt_t_s bundled with the Radeon Drivers and is called ReLive. And yes_co_ it_t_s very good. Better as you can see here (Youtube messed the video a little bit up). Last time I recorded the desktop and then I was looking the video. I got to the toilet_co_ came back ... and wtf? Why can_t_t I click? What is wrong here? Uhhh ... it_t_s not the actual desktop. It is the video ... _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-04-27T18:09:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello this is a great video _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tIf you don_t_t mind I would love to get a playground highlighting the issue because only a video is not enough _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"mightymarcus","Date":"2017-04-28T14:48:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYes_co_ I will do. I_t_ll try to recreate the problem in the playground and show you exactly what I mean (over the weekend). Thank you.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]