[{"Owner":"Dwengo","Date":"2018-03-12T13:23:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi all_co_ so question is in topic really_co_ I_t_m toying with point and click functionality using oimo js.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can see the effects here_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_s_gt__lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#645VV4%2310_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#645VV4#10_lt_/a_gt_ _lt_/s_gt_ (old one)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#645VV4%2312_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#645VV4#12_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf i use a sphereimposter for the mesh i_t_m moving_co_ it works (kind of).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tbut if i use the boxImposter (which i kind of want to) the box just falls off the map after a while_co_ I don_t_t update the Y axis at any point.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI did try a kind of hack where i apply a little impulse to lift it off the ground... But it just kept going ._._sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAny ideas on how to prevent this?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2018-03-12T13:30:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi!\n_lt_/p_gt_\n\n_lt_p_gt_\n\ttwo things_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1) your ground is a box_co_ but defined as a sphereImpostor. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t2) your impulse is very (very) strong. Not a problem_co_ but will prevent you from really understanding what goes on.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is the ground as a sphere with a bit less impulse - _lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#645VV4%2315_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#645VV4#15_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dwengo","Date":"2018-03-12T13:34:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAhh gawd_co_ its always the simple things... Sometimes its just an extra pair of eye that helps_dd_ I_t_ve updated it to use a box_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#645VV4%2317_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#645VV4#17_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for the help _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]