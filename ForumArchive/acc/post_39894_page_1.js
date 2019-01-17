[{"Owner":"tham_kathy","Date":"2018-09-08T11:41:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI need to apply a texture to the customMesh. But it_t_s showing me an error message saying _qt__lt_strong_gt_Vertex buffer is not big enough for the draw call_qt__lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe code I wrote is below.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var wall_color _eq_ new BABYLON.StandardMaterial(_qt_wall_color_qt__co_ scene)_sm_\nwall_color.diffuseTexture _eq_ new BABYLON.Texture(_qt_http_dd_//i.imgur.com/Vw4fzwq.jpg_qt__co_ scene)_sm_\nbuild.material _eq_ wall_color_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tThe code I apply the above lines is_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#4GBWI5_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#4GBWI5_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNeed help to solve this problem. Appreciate your help. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Gijs","Date":"2018-09-08T15:03:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou need to provide the uv data_co_ it_t_s empty in your code\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"tham_kathy","Date":"2018-09-08T15:27:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI tried with different uv values but the texture is not appearing as it is.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe way I calculated uv values is_sm_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var uvs _eq_ []_sm_\nfor(var p _eq_ 0_sm_ p &lt_sm_ positions.length / 3_sm_ p++) \n{\n\tuvs.push((positions[3 * p] - (-4)) / 6_co_ (positions[3 * p + 1] - (-4)) / 8)_sm_\n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tCan you please suggest me a way to apply the texture as it is for both outer walls and inner walls separately? \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2018-09-08T16:34:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis is one way _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#4GBWI5%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#4GBWI5#2_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]