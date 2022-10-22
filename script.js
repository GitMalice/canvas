const canvas = document.getElementById('target_color')

const radius = 196 / 2

if (canvas.getContext) {
  const ctx = canvas.getContext('2d')
  ctx.beginPath()
  ctx.arc(radius, radius, radius, 0, Math.PI * 2)
  const seven = radius / 7
  for (let i = 1; i < 6; i++) {
    ctx.arc(radius, radius, seven * i, Math.PI * 2)
  }
  ctx.stroke()
}
