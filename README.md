#Zealot
###A Resume Website using HTML(5), SCSS, CSS, (some) Photoshop, Javascript, JQuery, and Raphael
#####To come: Media Queries! 

The idea for this came after I heard about [Raphael.js](http://raphaeljs.com/)

####HTML
Pretty straightforward. There's divs for the header image and my name, and sections for About Me, Skills, Contact, and one other section that contains Experience and Leadership Experience. All the different sections are broken down into various divs that will be modified when I put in my Javascript/Jquery. 

####SCSS/CSS
I learned SCSS this summer, and I love it! I wrote all of my styling on the page using SCSS (located in css/resume.scss, and this is what I'll modify later when I add in my media queries so it looks good on other screen sizes. I tried to keep it fairly well organized. 

####Raphael
I was so excited to learn this! It's located in js/resume.js. 
It starts with a window.onload function, so that when the page loads for the first time, the bouncing animation starts. 

**var p**: creates a "paper" object that will contain all of the Raphael objects

I created the paper where all of the skills would go, and then added all of the bars to show my skills. They are all rectangle objects with four parameters: x coordinate, y coordinate, width, and height. They all received the same initial attributes: a light grey fill with no stroke and an initial width of 5. They also received the same animations: a width, depending on the amount of skill I believe I have, text (which I may actually delete later becuase I don't think it's doing anything), and a final minty green fill. These animations will last for 3000 milliseconds, or 3 seconds, meaning it will take 3 seconds to complete. The animation type is "bounce". They then recieved a descriptive text, with parameters of x coordinate, y coordinate, and text.

####Javascript/JQuery
This part is pretty straightforward, and I'll find a better way to implement it in the future. The remainder of js/resume.js will contain the functionality of the left and right click actions in the Work, Leadership, and Additional Skills/Currently Learning sections. 

When you click on the right arrow, given a class of '.right', we run e.preventDefault(), which stops the default functionality of the a tag (going to a new page.)

The one I would like showing initially was given a display of block in my SCSS file, and the ones I would like to be hidden were given a display of none initially. This allows me to run the next check, $('.script div:visible').addClass('show'), where I add a class of show to the initially displayed div. I then set var complete = false, which ensures that the functions will run properly. The way the functions essentially work is that it runs a series of if statements depending on which display is currently showing. Within each if statement, the class of show is removed and a class of hide is added to the display that is currently showing, and the cooresponding button changes color from green to black to demonstrate that it is no longer selected. It then removes the class of hide and adds a class of show to the display that has just been selected and changes the color of the cooresponding button to demonstrate that it is now selected. It then sets complete to true, allowing the subsequent if statements to fail. 

Thanks for looking at this and let me know if there's anything that I should fix that I haven't mentioned yet!