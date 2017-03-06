/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function load_character_plot() {
    var selected_value = document.getElementById('drop_down_menu').value;
    var placeholder = document.getElementById('placeholder');

    placeholder.style.transition = "color 2s";
    placeholder.style.color = "white";

    setTimeout(function () {
        placeholder.style.display = 'none';
        document.getElementById("graph_div").style.display = 'block';
    }, 2000);

    if (selected_value == "annie_hall") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1272.embed?show_link=false");
    } else if (selected_value == "30_minutes_or_less") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1206.embed?show_link=false");
    } else if (selected_value == "44_inch_chest") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1208.embed?show_link=false");
    } else if (selected_value == "48_hrs") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1210.embed?show_link=false");
    } else if (selected_value == "8mm") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1214.embed?show_link=false");
    } else if (selected_value == "a_few_good_men") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1216.embed?show_link=false");
    } else if (selected_value == "adaptation") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1220.embed?show_link=false");
    } else if (selected_value == "agnes_of_god") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1226.embed?show_link=false");
    } else if (selected_value == "air_force_one") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1228.embed?show_link=false");
    } else if (selected_value == "alien_nation") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1230.embed?show_link=false");
    } else if (selected_value == "aliens") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1232.embed?show_link=false");
    } else if (selected_value == "almost_famous") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1240.embed?show_link=false");
    } else if (selected_value == "amelia") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1244.embed?show_link=false");
    } else if (selected_value == "american_beauty") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1246.embed?show_link=false");
    } else if (selected_value == "american_graffiti") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1248.embed?show_link=false");
    } else if (selected_value == "american_history_x") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1250.embed?show_link=false");
    } else if (selected_value == "american_pie") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1252.embed?show_link=false");
    } else if (selected_value == "american_psycho") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1256.embed?show_link=false");
    } else if (selected_value == "an_education") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1262.embed?show_link=false");
    } else if (selected_value == "analyze_this") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1266.embed?show_link=false");
    } else if (selected_value == "anastasia") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1268.embed?show_link=false");
    } else if (selected_value == "antitrust") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1278.embed?show_link=false");
    } else if (selected_value == "apocalypse_now") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1284.embed?show_link=false");
    } else if (selected_value == "apt_pupil") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1286.embed?show_link=false");
    } else if (selected_value == "arthur") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1288.embed?show_link=false");
    } else if (selected_value == "assassins") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1292.embed?show_link=false");
    } else if (selected_value == "austin_powers_international_man_of_mystery") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1296.embed?show_link=false");
    } else if (selected_value == "austin_powers_the_spy_who_shagged_me") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1298.embed?show_link=false");
    } else if (selected_value == "bad_teacher") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1312.embed?show_link=false");
    } else if (selected_value == "barry_lyndon") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1316.embed?show_link=false");
    } else if (selected_value == "barton_fink") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1318.embed?show_link=false");
    } else if (selected_value == "basic_instinct") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1322.embed?show_link=false");
    } else if (selected_value == "basquiat") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1324.embed?show_link=false");
    } else if (selected_value == "batman") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1326.embed?show_link=false");
    } else if (selected_value == "beginners") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1330.embed?show_link=false");
    } else if (selected_value == "being_there") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1336.embed?show_link=false");
    } else if (selected_value == "beloved") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1338.embed?show_link=false");
    } else if (selected_value == "black_swan") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1356.embed?show_link=false");
    } else if (selected_value == "blade") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1358.embed?show_link=false");
    } else if (selected_value == "blade_ii") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1360.embed?show_link=false");
    } else if (selected_value == "blade_runner") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1362.embed?show_link=false");
    } else if (selected_value == "blood_simple") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1368.embed?show_link=false");
    } else if (selected_value == "blow") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1370.embed?show_link=false");
    } else if (selected_value == "blue_valentine") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1372.embed?show_link=false");
    } else if (selected_value == "blue_velvet") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1374.embed?show_link=false");
    } else if (selected_value == "body_of_evidence") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1380.embed?show_link=false");
    } else if (selected_value == "boogie_nights") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1388.embed?show_link=false");
    } else if (selected_value == "bound") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1394.embed?show_link=false");
    } else if (selected_value == "braveheart") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1398.embed?show_link=false");
    } else if (selected_value == "bridesmaids") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1404.embed?show_link=false");
    } else if (selected_value == "buried") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1416.embed?show_link=false");
    } else if (selected_value == "burlesque") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1418.embed?show_link=false");
    } else if (selected_value == "burn_after_reading") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1420.embed?show_link=false");
    } else if (selected_value == "cars_2") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1430.embed?show_link=false");
    } else if (selected_value == "cast_away") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1432.embed?show_link=false");
    } else if (selected_value == "cedar_rapids") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1434.embed?show_link=false");
    } else if (selected_value == "charade") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1442.embed?show_link=false");
    } else if (selected_value == "chinatown") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1448.embed?show_link=false");
    } else if (selected_value == "citizen_kane") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1456.embed?show_link=false");
    } else if (selected_value == "clerks") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1458.embed?show_link=false");
    } else if (selected_value == "colombiana") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1466.embed?show_link=false");
    } else if (selected_value == "confessions_of_a_dangerous_mind") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1468.embed?show_link=false");
    } else if (selected_value == "copycat") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1474.embed?show_link=false");
    } else if (selected_value == "cradle_2_the_grave") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1478.embed?show_link=false");
    } else if (selected_value == "crazy_stupid_love") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1482.embed?show_link=false");
    } else if (selected_value == "dark_city") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1500.embed?show_link=false");
    } else if (selected_value == "dead_poets_society") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1510.embed?show_link=false");
    } else if (selected_value == "death_to_smoochy") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1514.embed?show_link=false");
    } else if (selected_value == "defiance") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1522.embed?show_link=false");
    } else if (selected_value == "devil_in_a_blue_dress") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1528.embed?show_link=false");
    } else if (selected_value == "do_the_right_thing") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1538.embed?show_link=false");
    } else if (selected_value == "drag_me_to_hell") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1548.embed?show_link=false");
    } else if (selected_value == "dragonslayer") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1550.embed?show_link=false");
    } else if (selected_value == "drop_dead_gorgeous") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1556.embed?show_link=false");
    } else if (selected_value == "duck_soup") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1560.embed?show_link=false");
    } else if (selected_value == "elizabeth_the_golden_age") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1574.embed?show_link=false");
    } else if (selected_value == "enemy_of_the_state") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1576.embed?show_link=false");
    } else if (selected_value == "erin_brockovich") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1582.embed?show_link=false");
    } else if (selected_value == "eternal_sunshine_of_the_spotless_mind") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1584.embed?show_link=false");
    } else if (selected_value == "existenz") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1592.embed?show_link=false");
    } else if (selected_value == "fantastic_four") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1602.embed?show_link=false");
    } else if (selected_value == "fast_times_at_ridgemont_high") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1606.embed?show_link=false");
    } else if (selected_value == "fight_club") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1616.embed?show_link=false");
    } else if (selected_value == "forrest_gump") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1622.embed?show_link=false");
    } else if (selected_value == "four_rooms") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1624.embed?show_link=false");
    } else if (selected_value == "fracture") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1626.embed?show_link=false");
    } else if (selected_value == "from_dusk_till_dawn") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1636.embed?show_link=false");
    } else if (selected_value == "frozen_river") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1638.embed?show_link=false");
    } else if (selected_value == "gattaca") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1650.embed?show_link=false");
    } else if (selected_value == "get_low") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1654.embed?show_link=false");
    } else if (selected_value == "ghost_world") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1662.embed?show_link=false");
    } else if (selected_value == "ginger_snaps") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1666.embed?show_link=false");
    } else if (selected_value == "gladiator") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1670.embed?show_link=false");
    } else if (selected_value == "godzilla") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1680.embed?show_link=false");
    } else if (selected_value == "good_will_hunting") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1684.embed?show_link=false");
    } else if (selected_value == "gothika") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1686.embed?show_link=false");
    } else if (selected_value == "groundhog_day") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1700.embed?show_link=false");
    } else if (selected_value == "hackers") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1702.embed?show_link=false");
    } else if (selected_value == "hall_pass") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1704.embed?show_link=false");
    } else if (selected_value == "hanna") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1708.embed?show_link=false");
    } else if (selected_value == "heat") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1722.embed?show_link=false");
    } else if (selected_value == "heathers") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1724.embed?show_link=false");
    } else if (selected_value == "hellboy") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1730.embed?show_link=false");
    } else if (selected_value == "hesher") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1740.embed?show_link=false");
    } else if (selected_value == "his_girl_friday") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1744.embed?show_link=false");
    } else if (selected_value == "hot_tub_time_machine") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1760.embed?show_link=false");
    } else if (selected_value == "human_nature") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1770.embed?show_link=false");
    } else if (selected_value == "i_am_number_four") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1772.embed?show_link=false");
    } else if (selected_value == "i_am_sam") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1774.embed?show_link=false");
    } else if (selected_value == "i_love_you_phillip_morris") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1778.embed?show_link=false");
    } else if (selected_value == "i_still_know_what_you_did_last_summer") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1780.embed?show_link=false");
    } else if (selected_value == "indiana_jones_and_the_last_crusade") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1792.embed?show_link=false");
    } else if (selected_value == "indiana_jones_and_the_temple_of_doom") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1796.embed?show_link=false");
    } else if (selected_value == "interview_with_the_vampire") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1808.embed?show_link=false");
    } else if (selected_value == "into_the_wild") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1810.embed?show_link=false");
    } else if (selected_value == "intolerable_cruelty") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1812.embed?show_link=false");
    } else if (selected_value == "jurassic_park_iii") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1838.embed?show_link=false");
    } else if (selected_value == "law_abiding_citizen") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1876.embed?show_link=false");
    } else if (selected_value == "legally_blonde") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1878.embed?show_link=false");
    } else if (selected_value == "liar_liar") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1884.embed?show_link=false");
    } else if (selected_value == "little_nicky") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1896.embed?show_link=false");
    } else if (selected_value == "lord_of_war") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1906.embed?show_link=false");
    } else if (selected_value == "lost_highway") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1908.embed?show_link=false");
    } else if (selected_value == "lost_in_space") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1910.embed?show_link=false");
    } else if (selected_value == "magnolia") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1918.embed?show_link=false");
    } else if (selected_value == "major_league") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1922.embed?show_link=false");
    } else if (selected_value == "man_on_the_moon") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1930.embed?show_link=false");
    } else if (selected_value == "manhunter") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1940.embed?show_link=false");
    } else if (selected_value == "margin_call") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1942.embed?show_link=false");
    } else if (selected_value == "martha_marcy_may_marlene") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1948.embed?show_link=false");
    } else if (selected_value == "men_in_black") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1954.embed?show_link=false");
    } else if (selected_value == "midnight_cowboy") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1960.embed?show_link=false");
    } else if (selected_value == "midnight_express") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1962.embed?show_link=false");
    } else if (selected_value == "milk") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1964.embed?show_link=false");
    } else if (selected_value == "misery") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1968.embed?show_link=false");
    } else if (selected_value == "mission_impossible") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1970.embed?show_link=false");
    } else if (selected_value == "mission_impossible_ii") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1972.embed?show_link=false");
    } else if (selected_value == "mission_to_mars") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1974.embed?show_link=false");
    } else if (selected_value == "moneyball") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1976.embed?show_link=false");
    } else if (selected_value == "monkeybone") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1978.embed?show_link=false");
    } else if (selected_value == "moonstruck") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1980.embed?show_link=false");
    } else if (selected_value == "my_girl") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1994.embed?show_link=false");
    } else if (selected_value == "mystery_men") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/1998.embed?show_link=false");
    } else if (selected_value == "newsies") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/2004.embed?show_link=false");
    } else if (selected_value == "ninotchka") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/2016.embed?show_link=false");
    } else if (selected_value == "o_brother_where_art_thou") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/2022.embed?show_link=false");
    } else if (selected_value == "out_of_sight") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/2028.embed?show_link=false");
    } else if (selected_value == "pariah") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/2030.embed?show_link=false");
    } else if (selected_value == "paul") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/2034.embed?show_link=false");
    } else if (selected_value == "pearl_harbor") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/2036.embed?show_link=false");
    } else if (selected_value == "peeping_tom") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/2038.embed?show_link=false");
    } else if (selected_value == "philadelphia") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/2046.embed?show_link=false");
    } else if (selected_value == "phone_booth") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/2048.embed?show_link=false");
    } else if (selected_value == "pleasantville") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/2060.embed?show_link=false");
    } else if (selected_value == "point_break") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/2062.embed?show_link=false");
    } else if (selected_value == "psycho") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/2080.embed?show_link=false");
    } else if (selected_value == "rebel_without_a_cause") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/2096.embed?show_link=false");
    } else if (selected_value == "reservoir_dogs") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/2102.embed?show_link=false");
    } else if (selected_value == "rocky") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/2110.embed?show_link=false");
    } else if (selected_value == "ronin") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/2114.embed?show_link=false");
    } else if (selected_value == "save_the_last_dance") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/2124.embed?show_link=false");
    } else if (selected_value == "saving_private_ryan") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/2126.embed?show_link=false");
    } else if (selected_value == "scott_pilgrim_vs_the_world") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/2130.embed?show_link=false");
    } else if (selected_value == "sense_and_sensibility") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/2142.embed?show_link=false");
    } else if (selected_value == "serial_mom") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/2146.embed?show_link=false");
    } else if (selected_value == "sex_and_the_city") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/2150.embed?show_link=false");
    } else if (selected_value == "shame") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/2154.embed?show_link=false");
    } else if (selected_value == "signs") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/2166.embed?show_link=false");
    } else if (selected_value == "snatch") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/2178.embed?show_link=false");
    } else if (selected_value == "solaris") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/2184.embed?show_link=false");
    } else if (selected_value == "source_code") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/2192.embed?show_link=false");
    } else if (selected_value == "spanglish") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/2196.embed?show_link=false");
    } else if (selected_value == "sphere") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/2202.embed?show_link=false");
    } else if (selected_value == "star_trek_nemesis") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/2214.embed?show_link=false");
    } else if (selected_value == "starman") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/2222.embed?show_link=false");
    } else if (selected_value == "stepmom") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/2228.embed?show_link=false");
    } else if (selected_value == "strangers_on_a_train") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/2236.embed?show_link=false");
    } else if (selected_value == "sunset_blvd") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/2242.embed?show_link=false");
    } else if (selected_value == "sunshine_cleaning") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/2244.embed?show_link=false");
    } else if (selected_value == "superbad") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/2246.embed?show_link=false");
    } else if (selected_value == "sweet_smell_of_success") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/2254.embed?show_link=false");
    } else if (selected_value == "swingers") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/2256.embed?show_link=false");
    } else if (selected_value == "synecdoche_new_york") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/2258.embed?show_link=false");
    } else if (selected_value == "taxi_driver") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/2268.embed?show_link=false");
    } else if (selected_value == "thirteen_days") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/2280.embed?show_link=false");
    } else if (selected_value == "tombstone") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/2304.embed?show_link=false");
    } else if (selected_value == "total_recall") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/2308.embed?show_link=false");
    } else if (selected_value == "toy_story") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/2310.embed?show_link=false");
    } else if (selected_value == "tron") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/2316.embed?show_link=false");
    } else if (selected_value == "true_lies") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/2318.embed?show_link=false");
    } else if (selected_value == "unbreakable") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/2326.embed?show_link=false");
    } else if (selected_value == "vanilla_sky") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/2332.embed?show_link=false");
    } else if (selected_value == "war_horse") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/2344.embed?show_link=false");
    } else if (selected_value == "warrior") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/2346.embed?show_link=false");
    } else if (selected_value == "water_for_elephants") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/2348.embed?show_link=false");
    } else if (selected_value == "what_about_bob") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/2350.embed?show_link=false");
    } else if (selected_value == "what_lies_beneath") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/2352.embed?show_link=false");
    } else if (selected_value == "who_framed_roger_rabbit") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/2362.embed?show_link=false");
    } else if (selected_value == "wild_at_heart") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/2364.embed?show_link=false");
    } else if (selected_value == "xxx") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/2386.embed?show_link=false");
    } else if (selected_value == "youth_in_revolt") {
        document.getElementById("graph").setAttribute("src", "https://plot.ly/~anilkram/2394.embed?show_link=false");
    }

}