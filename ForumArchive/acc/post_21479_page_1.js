[{"Owner":"david028","Date":"2016-03-26T12:44:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI was wondering what other people do for there 3ds Max/Blender -&gt_sm_ babylon.js workflows?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI find that If I create a scene with multiple objects_co_ materials &amp_sm_ animation within 3ds max and then export to Babylon.js I will usually need to do some more work on the Babylon.js side (adjust and fine-tune material parameters_co_ add advanced material types_co_ minor repositioning to perfect things in the browser environment_co_ additional animation easing and so on..).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI will then re-export my using the SceneSerializer method so that it is saved using the standard format.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe annoyance for me is then when I decide to swap out an object or make a change to my animation on the 3ds Max side - I then have to re-work all of the post-export modifications or dive into a huge scene.js file full of mesh vertices and animation keys to merge the two versions.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCould there be a way to export from 3ds Max that will produce a folder with a main Scene.js file with references to a separate JS file for each material and each object. This would mean that the materials could be edited without hunting through a file of several megabytes_co_ objects could be changed or added without re-exporting an entire scene and scene files which are a lot more manageable.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2016-03-27T12:54:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou have to use the _t_reset xform_t_ button in 3DSMax before exporting your scene. This will bake all transformations in the object vertices_co_ and can fix some issues you have in Babylon.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]