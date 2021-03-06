

### Create a course page.

In last lesson, you created the following three files for the `Draw on Canvas` excercise.
 - index.html
 - style.css
 - script.js
 
This lesson we'll have a new exercise. You'll need to create another set of html/js/css files. 

Before you start, we want to make a course page that contains links to all your files in every lesson. 

With that, we can keep all your class work in one project.


- Create a folder `lesson1` in your Replit project
- Move all three files you added last lesson into the new folder.
- Create a `index.html` in project root folder and add the following content
```

<!DOCTYPE html>
<html>

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width">
	<title>repl.it</title>
	<link href="style.css" rel="stylesheet" type="text/css" />
</head>

<body>
<h1>Programming 101</h1>
<ol>
    <li><a href="./lesson1/index.html">Lesson One - Draw On Canval</a></li>
</ol> 
</body>
</html>
```

Run your project, you should see a page with one link to your lesson1 project. Clicking on the link should take you to your previously finished exercise.


Ok, now let's move on!

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


