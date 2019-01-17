[{"Owner":"DiV","Date":"2018-03-03T19:49:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWhat should work fine with _qt_../_qt_ doesn_t_t work in my case. If I put my .ogg sound effect in a folder of higher level I can_t_t load it anymore. Trying different sound formats and styles of the relative URL didn_t_t help. How do I solve this? I don_t_t wanna copy the same file into every scene folder directly D_dd_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-03-05T17:00:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tCan you get the absolute URL instead of a relative one ?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DiV","Date":"2018-03-05T18:02:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_207085_qt_ data-ipsquote-contentid_eq__qt_36100_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1520269258_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t58 minutes ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tCan you get the absolute URL instead of a relative one ?\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI think I can_co_ but I need it to work locally_co_ and if I use the absolute URL sound will only play on my computer_co_ right? Would it be safe to load the sound from base64 string? My sound effect is really short_co_ so the code wouldn_t_t be too long.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2018-03-05T18:37:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tReferencing Textures when the url is file_dd_// does not work the same way across browsers.  Sounds are probably the same.  Edge seems to be the most permissive. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have a _lt_a href_eq__qt_https_dd_//palmer-jc.github.io/scenes/QueuedInterpolation/audio_recorder/index.html_qt_ rel_eq__qt_external nofollow_qt__gt_utility scene_lt_/a_gt_ where you can load or record sounds from mic_co_ then save to file.  If you pick .ts or .js format it will encode it as a BABYLON.Sound object (internally as a WebAudio channel buffer).  To keep the code smallest_co_ you would need to have the QI extension_co_ but I guess you could just copy the needed function.  The point is I am already do it_co_ so yes embedded works.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_17316_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_03/audio.jpg.361ece475cac509d84e3dbc417205930.jpg_qt_ alt_eq__qt_audio.jpg.361ece475cac509d84e3dbc417205930.jpg_qt_ /_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DiV","Date":"2018-03-05T19:08:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI see. Then I_t_ll stick to embedded SFX_co_ thank you!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-03-06T20:59:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tsomething like /toto/texture.jpg should work\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]