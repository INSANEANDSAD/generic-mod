module.exports = {
 splashL(x, y, col, thick, dist, len, count, seed){
    Draw.color(col);
    Lines.stroke(thick);
    Angles.randLenVectors(seed, count, dist, new Floatc2(){get: (a, b) => {
      Lines.lineAngle(x + a, y + b, Mathf.angle(a, b), len);
    }});
    Draw.color();
    Lines.stroke(1);
 },
 fillC(x, y, col, transparency, radius){
    Draw.color(col);
    Draw.alpha(transparency);
    Fill.circle(x, y, radius);
    Draw.color();
  },
};