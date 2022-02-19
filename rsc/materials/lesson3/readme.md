### Canvas Geometry



### Mouse Event

```
canvas.addEventListener('mousemove', updateMousePosition);
```
In the line above, `mousemove` is a HTML DOM event that occurs wheneven mouse moves.

HTML DOM events allow JavaScript to register different event handlers on elements in an HTML document.

The addEventListener() method attaches an event handler, usually an user defined function, to the specified element.

This statement invokes function `updateMousePosition()` when user moves mouse.

See all DOM events [here](https://www.w3schools.com/jsref/dom_obj_event.asp)


### Bouncing Ball

- Create a `lesson2/` folder in your Replit project
- Copy the files under [lesson2/src/](./src) to there
  - You probably need to create these files first in Replit then copy the content over.
- In this project, we draw a ball in the same canvas, and let it bounce around. 
- Every time the ball hits the wall/boundary, it turns around and keep moving.
- Read the comments in `script.js`, and complete the script so that it works like [this](https://kcs101.kunlu.repl.co/brick/ex2/completed.html)

### Bonus Question

Instead of a bouncing ball, can you make it a bouncing smiley face?


**Tip**: `Use Emojis`

Even better, can you make your Emoji changes face on every move?


