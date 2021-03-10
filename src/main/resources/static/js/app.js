var Module = (function () {

    var nameAuthor;
    var blueprints = [];

    const setNameAuthor = function (author) {
        nameAuthor = author;
      };

    const toObject = function(mockBlueprints){
      mockBlueprints.map(function(bp){
        blueprints.push({name: bp.name, numPoints: bp.points.length});
      });
    }

    var getBlueprintsByAuthor = function () {
      $.getScript('js/apimock.js',function(){  
        let author = $("#authorName").val();
        apimock.getBlueprintsByAuthor(author, toObject);
      });
    };
  
    const getBlueprintsByNameAndAuthor = function (name, author) {
      //_privateMethod(text);
    };

    const completeTable = function (blueprints) {
      $(document).ready(function(){
        blueprints.map(function(bp){
            var fields = "<tr><td>" + bp.name + "</td><td>" + bp.numPoints + "</td></tr>";
            $("table").append(fields);
        });
      });
    };

    return {
        getBlueprintsByAuthor: getBlueprintsByAuthor,
        getBlueprintsByNameAndAuthor: getBlueprintsByNameAndAuthor
    };
});