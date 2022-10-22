const canvas = document.getElementById('target_color')

const radius = 196 / 2

if (canvas.getContext) {
  const ctx = canvas.getContext('2d')
  // ctx.arc(radius, radius, radius, 0, Math.PI * 2)
  const seven = Math.round(radius / 7)
  for (let i = 1; i < 8; i++) {
    ctx.beginPath()
    ctx.arc(radius, radius, seven * i, 0, Math.PI * 2)
    ctx.stroke()
    
  }
}
