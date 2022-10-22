const canvas = document.getElementById("target_color");

const radius = 196 / 2;

if (canvas.getContext) {
  const ctx = canvas.getContext("2d");
  // ctx.arc(radius, radius, radius, 0, Math.PI * 2)
  const seven = Math.round(radius / 7);
  for (let i = 0; i < 8; i++) {
    ctx.beginPath();
    ctx.arc(radius, radius, seven * (7 - i), 0, Math.PI * 2);
    ctx.stroke();
    switch (i) {
      case 5:
        ctx.fillStyle = "yellow";
        ctx.fill();
        break;
      case 3:
        ctx.fillStyle = "red";
        ctx.fill();
        break;
      case 1:
        ctx.fillStyle = "blue";
        ctx.fill();
        break;
    }
  }
}
