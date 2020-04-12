var canva = document.querySelector("canvas");
canva.height = window.innerHeight * 0.99;
canva.width = window.innerWidth * 0.99;
window.addEventListener("resize", function() {
  canva.height = window.innerHeight * 0.99;
  canva.width = window.innerWidth * 0.99;
  //remake();
});
var ctx = canva.getContext("2d");
function point(x, y) {
  this.x = x;
  this.y = y;
  this.dx = (Math.random() - 0.5) * 5;
  this.dy = (Math.random() - 0.5) * 5;

  this.draw = function() {
    //ctx.beginPath();
    ctx.strokeStyle = "#FFFFFF";
    ctx.lineTo(this.x, this.y);
    ctx.stroke();
  };

  this.update = function() {
    this.x += this.dx;
    this.y += this.dy;

    if (this.x >= canva.width || this.x <= 0) {
      this.dx = -this.dx;
    }
    if (this.y >= canva.height || this.y <= 0) {
      this.dy = -this.dy;
    }

    this.draw();
  };
}

var points = [];
for (var i = 0; i < 50; i++) {
  const x = Math.random() * canva.width;
  const y = Math.random() * canva.height;
  if (i < 1) {
    ctx.moveTo(x, y);
  }
  points[i] = new point(x, y);
}
//ctx.fillStyle = "#000000";
//ctx.fillRect(0, 0, canva.width, canva.height);
function animate() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.01)";
  ctx.fillRect(0, 0, canva.width, canva.height);
  ctx.beginPath();
  for (var i = 0; i < points.length; i++) {
    points[i].update();
  }
  requestAnimationFrame(animate);
}
animate();
