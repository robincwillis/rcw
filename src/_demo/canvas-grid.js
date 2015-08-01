// Function to draw the background and grid
                function drawBackground(){

                    // clear the canvas
                    objContext.clearRect(0, 0, objCanvas.width, objCanvas.height);

                    // Draw the black background
                    objContext.fillStyle = 'white';
                    objContext.fillRect(0, 0, objCanvas.width, objCanvas.height);

                    objContext.strokeStyle = "black";

                    // Draw the grid
                    // Vertical lines
                    for (var i = 1; i < objCanvas.width / intGridWidth; i++ )
                    {
                        var x = Math.floor(i*intGridWidth)+0.5;
                        objContext.moveTo(x, 0);
                        objContext.lineTo(x, objCanvas.height);
                        objContext.stroke();
                    }

                    // Horizontal lines
                    for (var i = 1; i < objCanvas.height / intGridWidth; i++)
                    {
                        var y = Math.floor(i*intGridWidth)+0.5
                        objContext.moveTo(0, y);
                        objContext.lineTo(objCanvas.width, y);
                        objContext.stroke();
                    }

                }
                drawBackground();
