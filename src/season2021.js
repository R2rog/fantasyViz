const keyframes = [
    [
         "Week 1",
        [
            {"name": "Cooper Kupp", "value": 23.8, "rank":7},
            {"name": "Josh Allen", "value": 17.2, "rank":11},
            {"name": "Justin Herbert", "value": 13.38, "rank":12},
            {"name": "Tom Brady", "value": 27.16, "rank":5},
            {"name": "Jonathan Taylor", "value": 12.55, "rank":14},
            {"name": "Patrick Mahomes", "value": 33.28, "rank":1},
            {"name": "Devante Adams", "value": 10.6, "rank":16},
            {"name": "Austin Ekeler", "value": 11.7, "rank":15},
            {"name": "Deebo Samuel", "value": 31.9, "rank":2},
            {"name": "Aaron Rodgers", "value": 1.32, "rank":19},
            {"name": "Justin Jefferson", "value": 12.54, "rank":13},
            {"name": "Matthew Stafford", "value": 24.34, "rank":6},
            {"name": "Dak Prescott", "value": 27.42, "rank":4},
            {"name": "Joe Burrow", "value": 18.64, "rank":10},
            {"name": "Jalen Hurts", "value": 28.76, "rank":3},
            {"name": "Ja'Marr Chase", "value": 20.9, "rank":9},
            {"name": "Najee Harris", "value": 5.9, "rank":17},
            {"name": "Mark Andrews", "value": 5, "rank":18},
            {"name": "Kyler Murray", "value": 33.56, "rank":0},
            {"name": "Kirk Cousins", "value": 22.04, "rank":8}
        ]
    ],
    [
        "Week 2",
        [
            {"name": "Cooper Kupp", "value": 60.6, "rank":1},
            {"name": "Josh Allen", "value": 33.86, "rank":11},
            {"name": "Justin Herbert", "value": 28.1, "rank":16},
            {"name": "Tom Brady", "value": 56.8, "rank":3},
            {"name": "Jonathan Taylor", "value": 18.8, "rank":18},
            {"name": "Patrick Mahomes", "value":57.3, "rank":2},
            {"name": "Devante Adams", "value": 30.7, "rank":13},
            {"name": "Austin Ekeler", "value": 34.2, "rank":10},
            {"name": "Deebo Samuel", "value": 48, "rank":5},
            {"name": "Aaron Rodgers", "value": 28.12, "rank":15},
            {"name": "Justin Jefferson", "value": 31.04, "rank":12},
            {"name": "Matthew Stafford", "value": 41.56, "rank":7},
            {"name": "Dak Prescott", "value": 34.9, "rank":8},
            {"name": "Joe Burrow", "value": 28.92, "rank":14},
            {"name": "Jalen Hurts", "value": 50.56, "rank":4},
            {"name": "Ja'Marr Chase", "value": 34.3, "rank":9},
            {"name": "Najee Harris", "value": 25, "rank":17},
            {"name": "Mark Andrews", "value": 15.7, "rank":19},
            {"name": "Kyler Murray", "value": 66.66, "rank":0},
            {"name": "Kirk Cousins", "value": 47.3, "rank":6}
        ]
    ],
    [
        "Week 3",
        [
            {"name": "Cooper Kupp", "value": 91.2, "rank":0},
            {"name": "Josh Allen", "value": 71.08, "rank":7},
            {"name": "Justin Herbert", "value": 58.94, "rank":9},
            {"name": "Tom Brady", "value": 85.48, "rank":1},
            {"name": "Jonathan Taylor", "value": 27, "rank":19},
            {"name": "Patrick Mahomes", "value":80.2, "rank":3},
            {"name": "Devante Adams", "value": 61.9, "rank":8},
            {"name": "Austin Ekeler", "value": 56.9, "rank":12},
            {"name": "Deebo Samuel", "value": 58.2, "rank":10},
            {"name": "Aaron Rodgers", "value": 47.16, "rank":16},
            {"name": "Justin Jefferson", "value": 57.84, "rank":11},
            {"name": "Matthew Stafford", "value": 71.08, "rank":6},
            {"name": "Dak Prescott", "value": 55.02, "rank":14},
            {"name": "Joe Burrow", "value": 46.5, "rank":17},
            {"name": "Jalen Hurts", "value": 71.1, "rank":5},
            {"name": "Ja'Marr Chase", "value": 56.8, "rank":13},
            {"name": "Najee Harris", "value": 53.2, "rank":15},
            {"name": "Mark Andrews", "value": 31.6, "rank":18},
            {"name": "Kyler Murray", "value": 85.2, "rank":2},
            {"name": "Kirk Cousins", "value": 72.42, "rank":4}
        ]
    ],
    [
        "Week 4",
        [
            {"name": "Cooper Kupp", "value": 102.6, "rank":2},
            {"name": "Josh Allen", "value": 91.1, "rank":6},
            {"name": "Justin Herbert", "value": 80.22, "rank":11},
            {"name": "Tom Brady", "value": 96.54, "rank":4},
            {"name": "Jonathan Taylor", "value": 47.4, "rank":18},
            {"name": "Patrick Mahomes", "value":111.92, "rank":0},
            {"name": "Devante Adams", "value": 74.3, "rank":13},
            {"name": "Austin Ekeler", "value": 86.4, "rank":8},
            {"name": "Deebo Samuel", "value": 93.9, "rank":5},
            {"name": "Aaron Rodgers", "value": 71.28, "rank":15},
            {"name": "Justin Jefferson", "value": 78.24, "rank":12},
            {"name": "Matthew Stafford", "value": 90.38, "rank":7},
            {"name": "Dak Prescott", "value": 82.04, "rank":10},
            {"name": "Joe Burrow", "value": 68.82, "rank":17},
            {"name": "Jalen Hurts", "value": 99.28, "rank":3},
            {"name": "Ja'Marr Chase", "value": 70.5, "rank":16},
            {"name": "Najee Harris", "value": 74.3, "rank":14},
            {"name": "Mark Andrews", "value": 43.3, "rank":19},
            {"name": "Kyler Murray", "value": 107.82, "rank":1},
            {"name": "Kirk Cousins", "value": 82.54, "rank":9}
        ]
    ],
    [
        "Week 5",
        [

            {"name": "Cooper Kupp", "value": 118.8, "rank":7},
            {"name": "Josh Allen", "value": 127.6, "rank":2},
            {"name": "Justin Herbert", "value": 123.04, "rank":3},
            {"name": "Tom Brady", "value": 134.28, "rank":0},
            {"name": "Jonathan Taylor", "value": 79.3, "rank":19},
            {"name": "Patrick Mahomes", "value":130.9, "rank":1},
            {"name": "Devante Adams", "value": 111.9, "rank":8},
            {"name": "Austin Ekeler", "value": 119.3, "rank":6},
            {"name": "Deebo Samuel", "value": 110, "rank":9},
            {"name": "Aaron Rodgers", "value": 91.04, "rank":16},
            {"name": "Justin Jefferson", "value": 97.64, "rank":13},
            {"name": "Matthew Stafford", "value": 106.88, "rank":10},
            {"name": "Dak Prescott", "value": 102.72, "rank":11},
            {"name": "Joe Burrow", "value": 87.25, "rank":17},
            {"name": "Jalen Hurts", "value": 122.2, "rank":4},
            {"name": "Ja'Marr Chase", "value": 98.4, "rank":12},
            {"name": "Najee Harris", "value": 96.5, "rank":14},
            {"name": "Mark Andrews", "value": 85, "rank":18},
            {"name": "Kyler Murray", "value": 121.48, "rank":5},
            {"name": "Kirk Cousins", "value": 95.94, "rank":15}
        ]
    ],
    [
        "Week 6",
        [

            {"name": "Cooper Kupp", "value": 152.8, "rank":2},
            {"name": "Josh Allen", "value": 156.32, "rank":0},
            {"name": "Justin Herbert", "value": 134.04, "rank":6},
            {"name": "Tom Brady", "value": 152.26, "rank":3},
            {"name": "Jonathan Taylor", "value": 108.1, "rank":18},
            {"name": "Patrick Mahomes", "value":153.88, "rank":1},
            {"name": "Devante Adams", "value": 124.8, "rank":10},
            {"name": "Austin Ekeler", "value": 128.8, "rank":9},
            {"name": "Deebo Samuel", "value": 110, "rank":17},
            {"name": "Aaron Rodgers", "value": 114.74, "rank":13},
            {"name": "Justin Jefferson", "value": 111.64, "rank":15},
            {"name": "Matthew Stafford", "value": 132.12, "rank":7},
            {"name": "Dak Prescott", "value": 129.52, "rank":8},
            {"name": "Joe Burrow", "value": 110.09, "rank":16},
            {"name": "Jalen Hurts", "value": 147.2, "rank":5},
            {"name": "Ja'Marr Chase", "value": 112.1, "rank":14},
            {"name": "Najee Harris", "value": 121.2, "rank":12},
            {"name": "Mark Andrews", "value": 102.8, "rank":19},
            {"name": "Kyler Murray", "value": 147.24, "rank":4},
            {"name": "Kirk Cousins", "value": 124.46, "rank":11}
        ]
    ],
    [
        "Week 7",
        [

            {"name": "Cooper Kupp", "value": 190.4, "rank":0},
            {"name": "Josh Allen", "value": 156.32, "rank":6},
            {"name": "Justin Herbert", "value": 134.04, "rank":11},
            {"name": "Tom Brady", "value": 176.7, "rank":1},
            {"name": "Jonathan Taylor", "value": 126.1, "rank":15},
            {"name": "Patrick Mahomes", "value":161.62, "rank":4},
            {"name": "Devante Adams", "value": 144.4, "rank":8},
            {"name": "Austin Ekeler", "value": 128.8, "rank":14},
            {"name": "Deebo Samuel", "value": 131, "rank":12},
            {"name": "Aaron Rodgers", "value": 139.4, "rank":9},
            {"name": "Justin Jefferson", "value": 111.64, "rank":18},
            {"name": "Matthew Stafford", "value": 159.28, "rank":5},
            {"name": "Dak Prescott", "value": 129.52, "rank":13},
            {"name": "Joe Burrow", "value": 136.73, "rank":10},
            {"name": "Jalen Hurts", "value": 170.74, "rank":2},
            {"name": "Ja'Marr Chase", "value": 146.2, "rank":7},
            {"name": "Najee Harris", "value": 121.2, "rank":17},
            {"name": "Mark Andrews", "value":110.6, "rank":19},
            {"name": "Kyler Murray", "value": 168.68, "rank":3},
            {"name": "Kirk Cousins", "value": 124.46, "rank":16}
        ]
    ],
    [
        "Week 8",
        [

            {"name": "Cooper Kupp", "value": 214.9, "rank":0},
            {"name": "Josh Allen", "value": 185.78, "rank":6},
            {"name": "Justin Herbert", "value": 147.86, "rank":11},
            {"name": "Tom Brady", "value": 201.9, "rank":1},
            {"name": "Jonathan Taylor", "value": 147.3, "rank":15},
            {"name": "Patrick Mahomes", "value": 175.62, "rank":4},
            {"name": "Devante Adams", "value": 144.4, "rank":8},
            {"name": "Austin Ekeler", "value": 153.2, "rank":14},
            {"name": "Deebo Samuel", "value": 154.1, "rank":12},
            {"name": "Aaron Rodgers", "value": 155.06, "rank":9},
            {"name": "Justin Jefferson", "value": 115.74, "rank":18},
            {"name": "Matthew Stafford", "value": 183.48, "rank":5},
            {"name": "Dak Prescott", "value": 129.52, "rank":13},
            {"name": "Joe Burrow", "value": 156.99, "rank":10},
            {"name": "Jalen Hurts", "value": 181.96, "rank":2},
            {"name": "Ja'Marr Chase", "value": 159.3, "rank":7},
            {"name": "Najee Harris", "value": 142.2, "rank":17},
            {"name": "Mark Andrews", "value":110.6, "rank":19},
            {"name": "Kyler Murray", "value": 177.74, "rank":3},
            {"name": "Kirk Cousins", "value": 137.62, "rank":16}
        ]
    ],
    [
        "Week 9",
        [

            {"name": "Cooper Kupp", "value": 235.4, "rank":0},
            {"name": "Josh Allen", "value": 195.34, "rank":4},
            {"name": "Justin Herbert", "value": 179.5, "rank":7},
            {"name": "Tom Brady", "value": 201.9, "rank":1},
            {"name": "Jonathan Taylor", "value": 181.3, "rank":6},
            {"name": "Patrick Mahomes", "value": 186.06, "rank":5},
            {"name": "Devante Adams", "value": 154.6, "rank":16},
            {"name": "Austin Ekeler", "value": 164.4, "rank":11},
            {"name": "Deebo Samuel", "value": 165.4, "rank":10},
            {"name": "Aaron Rodgers", "value": 155.06, "rank":15},
            {"name": "Justin Jefferson", "value": 132.74, "rank":18},
            {"name": "Matthew Stafford", "value": 196.54, "rank":3},
            {"name": "Dak Prescott", "value": 148.4, "rank":17},
            {"name": "Joe Burrow", "value": 164.37, "rank":12},
            {"name": "Jalen Hurts", "value": 198.64, "rank":2},
            {"name": "Ja'Marr Chase", "value": 168.2, "rank":9},
            {"name": "Najee Harris", "value": 162, "rank":13},
            {"name": "Mark Andrews", "value":120, "rank":19},
            {"name": "Kyler Murray", "value": 177.74, "rank":8},
            {"name": "Kirk Cousins", "value": 159.2, "rank":14}
        ]
    ],
    [
        "Week 10",
        [

            {"name": "Cooper Kupp", "value": 258.6, "rank":0},
            {"name": "Josh Allen", "value": 216.28, "rank":3},
            {"name": "Justin Herbert", "value": 191.5, "rank":8},
            {"name": "Tom Brady", "value": 214.9, "rank":4},
            {"name": "Jonathan Taylor", "value": 205.9, "rank":5},
            {"name": "Patrick Mahomes", "value": 222.3, "rank":1},
            {"name": "Devante Adams", "value": 169.4, "rank":14},
            {"name": "Austin Ekeler", "value": 179.3, "rank":9},
            {"name": "Deebo Samuel", "value": 195.7, "rank":7},
            {"name": "Aaron Rodgers", "value": 165.54, "rank":16},
            {"name": "Justin Jefferson", "value": 155.64, "rank":18},
            {"name": "Matthew Stafford", "value": 205.82, "rank":6},
            {"name": "Dak Prescott", "value": 174.74, "rank":13},
            {"name": "Joe Burrow", "value": 164.37, "rank":17},
            {"name": "Jalen Hurts", "value": 217.26, "rank":2},
            {"name": "Ja'Marr Chase", "value": 168.2, "rank":15},
            {"name": "Najee Harris", "value": 179.3, "rank":10},
            {"name": "Mark Andrews", "value":138.3, "rank":19},
            {"name": "Kyler Murray", "value": 177.74, "rank":11},
            {"name": "Kirk Cousins", "value": 176.66, "rank":12}
        ]
    ],
    [
        "Week 11",
        [

            {"name": "Cooper Kupp", "value": 258.6, "rank":1},
            {"name": "Josh Allen", "value": 232.44, "rank":4},
            {"name": "Justin Herbert", "value": 225.78, "rank":6},
            {"name": "Tom Brady", "value": 234.18, "rank":3},
            {"name": "Jonathan Taylor", "value": 259.3, "rank":0},
            {"name": "Patrick Mahomes", "value": 229.8, "rank":5},
            {"name": "Devante Adams", "value": 199.9, "rank":11},
            {"name": "Austin Ekeler", "value": 220.8, "rank":7},
            {"name": "Deebo Samuel", "value": 212.1, "rank":8},
            {"name": "Aaron Rodgers", "value": 199.04, "rank":12},
            {"name": "Justin Jefferson", "value": 192.84, "rank":14},
            {"name": "Matthew Stafford", "value": 205.82, "rank":9},
            {"name": "Dak Prescott", "value": 177.38, "rank":17},
            {"name": "Joe Burrow", "value": 173.39, "rank":18},
            {"name": "Jalen Hurts", "value": 248.04, "rank":2},
            {"name": "Ja'Marr Chase", "value": 181.2, "rank":15},
            {"name": "Najee Harris", "value": 196.2, "rank":13},
            {"name": "Mark Andrews", "value":153.6, "rank":19},
            {"name": "Kyler Murray", "value": 177.74, "rank":16},
            {"name": "Kirk Cousins", "value": 201.9, "rank":10}
        ]
    ],
    [
        "Week 12",
        [

            {"name": "Cooper Kupp", "value": 277.2, "rank":1},
            {"name": "Josh Allen", "value": 259.14, "rank":4},
            {"name": "Justin Herbert", "value": 245.5, "rank":6},
            {"name": "Tom Brady", "value": 245.42, "rank":3},
            {"name": "Jonathan Taylor", "value": 279, "rank":0},
            {"name": "Patrick Mahomes", "value": 229.8, "rank":5},
            {"name": "Devante Adams", "value": 218.3, "rank":11},
            {"name": "Austin Ekeler", "value": 242.7, "rank":7},
            {"name": "Deebo Samuel", "value": 232.9, "rank":8},
            {"name": "Aaron Rodgers", "value": 225.32, "rank":12},
            {"name": "Justin Jefferson", "value": 206.1, "rank":14},
            {"name": "Matthew Stafford", "value": 227.8, "rank":9},
            {"name": "Dak Prescott", "value": 202.68, "rank":17},
            {"name": "Joe Burrow", "value": 189.79, "rank":18},
            {"name": "Jalen Hurts", "value": 254.72, "rank":2},
            {"name": "Ja'Marr Chase", "value": 188.1, "rank":15},
            {"name": "Najee Harris", "value": 202.9, "rank":13},
            {"name": "Mark Andrews", "value":170.1, "rank":19},
            {"name": "Kyler Murray", "value": 177.74, "rank":16},
            {"name": "Kirk Cousins", "value": 217.42, "rank":10}
        ]
    ],
    [
        "Week 13",
        [

            {"name": "Cooper Kupp", "value": 304.1, "rank":0},
            {"name": "Josh Allen", "value": 270.84, "rank":4},
            {"name": "Justin Herbert", "value": 270.88, "rank":3},
            {"name": "Tom Brady", "value": 274.04, "rank":2},
            {"name": "Jonathan Taylor", "value": 303.3, "rank":1},
            {"name": "Patrick Mahomes", "value": 242.36, "rank":8},
            {"name": "Devante Adams", "value": 218.3, "rank":14},
            {"name": "Austin Ekeler", "value": 260.1, "rank":5},
            {"name": "Deebo Samuel", "value": 232.9, "rank":11},
            {"name": "Aaron Rodgers", "value": 225.32, "rank":12},
            {"name": "Justin Jefferson", "value": 241.7, "rank":9},
            {"name": "Matthew Stafford", "value": 251.8, "rank":7},
            {"name": "Dak Prescott", "value": 213.9, "rank":15},
            {"name": "Joe Burrow", "value": 206.39, "rank":17},
            {"name": "Jalen Hurts", "value": 254.72, "rank":6},
            {"name": "Ja'Marr Chase", "value": 198.3, "rank":18},
            {"name": "Najee Harris", "value": 218.6, "rank":13},
            {"name": "Mark Andrews", "value":179.1, "rank":19},
            {"name": "Kyler Murray", "value": 208.56, "rank":16},
            {"name": "Kirk Cousins", "value": 237.62, "rank":10}
        ]
    ],
    [
        "Week 14",
        [

            {"name": "Cooper Kupp", "value": 335.4, "rank":0},
            {"name": "Josh Allen", "value": 306.06, "rank":1},
            {"name": "Justin Herbert", "value": 295.78, "rank":4},
            {"name": "Tom Brady", "value": 304.16, "rank":2},
            {"name": "Jonathan Taylor", "value": 303.3, "rank":3},
            {"name": "Patrick Mahomes", "value": 262.68, "rank":7},
            {"name": "Devante Adams", "value": 252.4, "rank":11},
            {"name": "Austin Ekeler", "value": 276.5, "rank":5},
            {"name": "Deebo Samuel", "value": 245.8, "rank":13},
            {"name": "Aaron Rodgers", "value": 254.96, "rank":9},
            {"name": "Justin Jefferson", "value": 262.2, "rank":8},
            {"name": "Matthew Stafford", "value": 275.28, "rank":6},
            {"name": "Dak Prescott", "value": 223.84, "rank":17},
            {"name": "Joe Burrow", "value": 228.61, "rank":15},
            {"name": "Jalen Hurts", "value": 254.72, "rank":10},
            {"name": "Ja'Marr Chase", "value": 223.6, "rank":18},
            {"name": "Najee Harris", "value": 244, "rank":14},
            {"name": "Mark Andrews", "value": 207.6, "rank":19},
            {"name": "Kyler Murray", "value": 225.98, "rank":16},
            {"name": "Kirk Cousins", "value": 251.66, "rank":12}
        ]
    ],
    [
        "Week 15",
        [

            {"name": "Cooper Kupp", "value": 370.1, "rank":0},
            {"name": "Josh Allen", "value": 326.86, "rank":1},
            {"name": "Justin Herbert", "value": 318.82, "rank":3},
            {"name": "Tom Brady", "value": 308.92, "rank":4},
            {"name": "Jonathan Taylor", "value": 326.3, "rank":2},
            {"name": "Patrick Mahomes", "value": 292.28, "rank":6},
            {"name": "Devante Adams", "value": 268.8, "rank":11},
            {"name": "Austin Ekeler", "value": 294.7, "rank":5},
            {"name": "Deebo Samuel", "value": 264.7, "rank":12},
            {"name": "Aaron Rodgers", "value": 278.78, "rank":9},
            {"name": "Justin Jefferson", "value": 276.9, "rank":10},
            {"name": "Matthew Stafford", "value": 290.74, "rank":7},
            {"name": "Dak Prescott", "value": 234.42, "rank":18},
            {"name": "Joe Burrow", "value": 241.39, "rank":16},
            {"name": "Jalen Hurts", "value": 282.36, "rank":8},
            {"name": "Ja'Marr Chase", "value": 224.9, "rank":19},
            {"name": "Najee Harris", "value": 248.6, "rank":14},
            {"name": "Mark Andrews", "value": 243.2, "rank":15},
            {"name": "Kyler Murray", "value": 238.56, "rank":17},
            {"name": "Kirk Cousins", "value": 262.14, "rank":13}
        ]
    ],   
    [
        "Week 16",
        [
            {"name": "Cooper Kupp", "value": 391.4, "rank":0},
            {"name": "Josh Allen", "value": 357.82, "rank":1},
            {"name": "Justin Herbert", "value": 335.76, "rank":3},
            {"name": "Tom Brady", "value": 323.3, "rank":4},
            {"name": "Jonathan Taylor", "value": 337.1, "rank":2},
            {"name": "Patrick Mahomes", "value": 314.6, "rank":5},
            {"name": "Devante Adams", "value": 302.2, "rank":6},
            {"name": "Austin Ekeler", "value": 294.7, "rank":11},
            {"name": "Deebo Samuel", "value": 292.8, "rank":12},
            {"name": "Aaron Rodgers", "value": 298.76, "rank":8},
            {"name": "Justin Jefferson", "value": 296.5, "rank":10},
            {"name": "Matthew Stafford", "value": 297.42, "rank":9},
            {"name": "Dak Prescott", "value": 265.72, "rank":16},
            {"name": "Joe Burrow", "value": 277.59, "rank":14},
            {"name": "Jalen Hurts", "value": 299.02, "rank":7},
            {"name": "Ja'Marr Chase", "value": 244.4, "rank":19},
            {"name": "Najee Harris", "value": 264.6, "rank":17},
            {"name": "Mark Andrews", "value": 269.7, "rank":15},
            {"name": "Kyler Murray", "value": 260.46, "rank":18},
            {"name": "Kirk Cousins", "value": 278.44, "rank":13}
        ]
    ],
    [
        "Week 17",
        [
            {"name": "Cooper Kupp", "value": 412.9, "rank":0},
            {"name": "Josh Allen", "value": 378.72, "rank":1},
            {"name": "Justin Herbert", "value": 353.44, "rank":3},
            {"name": "Tom Brady", "value": 349.7, "rank":4},
            {"name": "Jonathan Taylor", "value": 355.5, "rank":2},
            {"name": "Patrick Mahomes", "value": 335.46, "rank":5},
            {"name": "Devante Adams", "value": 332.8, "rank":6},
            {"name": "Austin Ekeler", "value": 314.9, "rank":11},
            {"name": "Deebo Samuel", "value": 310, "rank":12},
            {"name": "Aaron Rodgers", "value": 319.08, "rank":8},
            {"name": "Justin Jefferson", "value": 308.3, "rank":10},
            {"name": "Matthew Stafford", "value": 311.68, "rank":9},
            {"name": "Dak Prescott", "value": 288.76, "rank":16},
            {"name": "Joe Burrow", "value": 312.43, "rank":14},
            {"name": "Jalen Hurts", "value": 311.98, "rank":7},
            {"name": "Ja'Marr Chase", "value": 300, "rank":19},
            {"name": "Najee Harris", "value": 294.2, "rank":17},
            {"name": "Mark Andrews", "value": 284.6, "rank":15},
            {"name": "Kyler Murray", "value": 283.38, "rank":18},
            {"name": "Kirk Cousins", "value": 278.44, "rank":13}
        ]
    ],
    [
        "Week 18",
        [
            {"name": "Cooper Kupp", "value": 439.5, "rank":0},
            {"name": "Josh Allen", "value": 402.58, "rank":1},
            {"name": "Justin Herbert", "value": 380.86, "rank":2},
            {"name": "Tom Brady", "value": 374.74, "rank":3},
            {"name": "Jonathan Taylor", "value": 368, "rank":4},
            {"name": "Patrick Mahomes", "value": 361.66, "rank":5},
            {"name": "Devante Adams", "value": 344.3, "rank":6},
            {"name": "Austin Ekeler", "value": 343.8, "rank":7},
            {"name": "Deebo Samuel", "value": 338.96, "rank":8},
            {"name": "Aaron Rodgers", "value": 333.3, "rank":9},
            {"name": "Justin Jefferson", "value": 330.4, "rank":10},
            {"name": "Matthew Stafford", "value": 329.2, "rank":11},
            {"name": "Dak Prescott", "value": 320.56, "rank":12},
            {"name": "Joe Burrow", "value": 312.43, "rank":13},
            {"name": "Jalen Hurts", "value": 311.98, "rank":14},
            {"name": "Ja'Marr Chase", "value": 304, "rank":15},
            {"name": "Najee Harris", "value": 303.7, "rank":16},
            {"name": "Mark Andrews", "value": 301.1, "rank":17},
            {"name": "Kyler Murray", "value": 300.48, "rank":18},
            {"name": "Kirk Cousins", "value": 300.34, "rank":19}
        ]
    ]
]

export {keyframes};