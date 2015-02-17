describe('triangle', function() {

  it("returns not a triangle if the sides do not form a triangle", function() {
    expect(triangle(2, 2, 8)).to.equal("not a triangle");
  });

  it('returns equilateral when all sides are equal', function() {
    expect(triangle(4, 4, 4)).to.equal("equilateral");
  });

  it('returns scalene when no sides are equal', function() {
    expect(triangle(3, 5, 4)).to.equal("scalene");
  });

  it('returns isosceles when only two sides are equal', function() {
    expect(triangle(5, 5, 4)).to.equal("isosceles");
  });

});
