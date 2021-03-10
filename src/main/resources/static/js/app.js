var Module = (function () {
  var _blueprints;
  var author;

  const _toObject = function (author, mockdata) {
    _blueprints = [];
    mockdata.map(function (bp) {
      _blueprints.push({ name: bp.name, numPoints: bp.points.length });
    });
    _completeTable();
    _calculatePoints();
  };

  const _calculatePoints = function () {
    const points = _blueprints.map(({ numPoints }) => numPoints);
    const acumular = (acumulador, numero) => acumulador + numero;
    let totalPoints = points.length > 0 ? points.reduce(acumular, 0) : 0;
    document.getElementById("lbTotal").innerHTML =
      "Total user points: " + totalPoints;
  };

  const _completeTable = function () {
    $(document).ready(function () {
      _blueprints.map(function (bp) {
        let fields =
          "<tr><td>" + bp.name + "</td><td>" + bp.numPoints + "</td><td><input type='button' value=Open' onclick='getBlueprintsByNameAndAuthor(bp.name)'></td></tr>";
        $("table").append(fields);
      });
    });
  };

  const _clearTable = function () {
    $(document).ready(function () {
      $("table")
        .find("td")
        .each(function () {
          $(this).parents("tr").remove();
        });
    });
    document.getElementById("lbTotal").innerHTML = "Total user points: ";
  };

  const _drawInCanvas = function (name, blueprint) {
    let pointsBlue = blueprint.points;
    for (let point in pointsBlue){
      var c = document.getElementById("myCanvas");
      var ctx = c.getContext("2d");
      ctx.moveTo(0, 0);
      ctx.lineTo(300, 300);
      ctx.stroke();
    }

  };
  
  const getBlueprintsByAuthor = function () {
    _clearTable();

    $.getScript("js/apimock.js", function () {
      author = $("#authorName").val();
      document.getElementById("lbAuthor").innerHTML = author + " blueprints:";
      apimock.getBlueprintsByAuthor(author, _toObject);
    });
  };

  const getBlueprintsByNameAndAuthor= function (blueprintName) {
    $.getScript("js/apimock.js", function () {
      apimock.getBlueprintsByNameAndAuthor(blueprintName, author, _drawInCanvas);
    });
  };

  return {
    getBlueprintsByAuthor: getBlueprintsByAuthor,
    getBlueprintsByNameAndAuthor: getBlueprintsByNameAndAuthor
  };
})();
