var apimock = (function () {

    var mockdata = [];

    mockdata["JhonConnor"] = [
        {
            author: "JhonConnor",
            name: "house",
            points: [
                {
                    x: 10,
                    y: 20
                },
                {
                    x: 15,
                    y: 25
                },
                {
                    x: 45,
                    y: 25
                },
                {
                    x: 50,
                    y: 60
                }
            ]
        },
        {
            author: "JhonConnor",
            name: "bike",
            points: [
                {
                    x: 30,
                    y: 35
                },
                {
                    x: 40,
                    y: 45
                },
                {
                    x: 15,
                    y: 15
                }
            ]
        },
        {
            author: "JhonConnor",
            name: "car",
            points: [
                {
                    x: 60,
                    y: 15
                },
                {
                    x: 20,
                    y: 15
                }
            ]
        }
    ]

    mockdata['LexLuthor'] = [
        {
            author: 'LexLuthor',
            name: 'kryptonite',
            points: [
                {
                    x: 60,
                    y: 65
                },
                {
                    x: 70,
                    y: 75
                }
            ]
        },
        {
            author: 'LexLuthor',
            name: 'salt',
            points: [
                {
                    x: 20,
                    y: 25
                },
                {
                    x: 30,
                    y: 15
                },
                {
                    x: 40,
                    y: 45
                }
            ]
        }
    ]

    return {
        getBlueprintsByAuthor: function(author, callback) {
            callback(null, mockdata[author]);
        },

        getBlueprintsByNameAndAuthor: function(name, author, callback) {
            blueprint = mockdata[author].find(function(blueprint) {
                return blueprint.name == name
            });
            callback(null, blueprint)
        }
    }

})();