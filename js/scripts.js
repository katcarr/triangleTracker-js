
$(document).ready(function() {

  $("form#triangle-sides").submit(function(event) {

    $("#error").hide();
    $("#result").hide();

    var side1 = parseFloat($("input#side1").val());
    var side2 = parseFloat($("input#side2").val());
    var side3 = parseFloat($("input#side3").val());
    if(side1 && side2 && side3){
      var triangle = { side1: side1, side2: side2, side3: side3,
                       type: function() {
                         if (this.side1 + this.side2 <= side3 || this.side2 + this.side3 <= this.side1 || this.side1 + this.side3 <= this.side2) {
                           return "not a triangle";
                         }
                         else if (this.side1 == this.side2 && this.side2 == this.side3) {
                           return "equilateral";
                         }
                         else if (this.side1 != this.side2 && this.side3 != this.side1 && this.side2 != this.side3) {
                           return "scalene";
                         }
                         else {
                           return "isosceles";
                         }
                       }
                      };

      var triangleType = triangle.type();
      switch(triangleType) {
        case "not a triangle":
          $("#error").show();
          break;
        case "scalene":
          $("#result p").text("You've made a scalene triangle!");
          $("#result").show();
          break;
        default:
          $("#result p").text("You've made an " + triangleType + " triangle!")
          $("#result").show();
      }
    } else{
      $("#error").show();
    }
    event.preventDefault();
  });

});
