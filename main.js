canvas= document.getElementById("myCanvas");
 ctx=canvas.getContext("2d");

 ctx.beginPath();
 ctx.strokeStle = "grey"
 ctx.lineWidth = 4;
 ctx.rect(150, 143, 143, 200);
 ctx.strokeStle();

 ctx.beginPath();
 ctx.strokeStle = "blue"
 ctx.lineWidth = 4;
 ctx.arc(250, 210, 40, 0, 2*Math.PI);
 ctx.strokeStle();

 ctx.beginPath();
 ctx.strokeStle = "black"
 ctx.lineWidth = 4;
 ctx.arc(350, 210, 40, 0, 2*Math.PI);
 ctx.strokeStle();