# The README Generator
A command line app that uses inquire prompts to generate READMEs.

## Getting started

This was our first project in nodejs and it definitely took me some time to adjust after working with front-end JS and JQuery. I started by taking down the assets that were available in the GitLab repository. That gave me a fairly good base to work from.

## Immediate ASYNC issues

My unfimiliarity with node became an issue almost immediately. After installing inquirer, I figured that the cleanest way to prompt the questions was to create two arrays with information that would build the arguments taken by the prompt function. Then I would loop through them and execute the prompt function inside the loop. However, as I will elaborate on in just a sec, this was completely unnecessary. It also produced a major problem and sent me down a major rabbit hole. In my search for an answer, I proceeded to drag Elias down the rabbit hole with me. We figured out a way to work around the asyncroness nature of the prompt function. But, I ended up not using it, even though the very first thing Elias recommended was the solution I would end up using.

What I didn't realize is that if you call prompt on an array of objects, it will move through each object one-by-one. This was by far the easiest and cleanest way to execute this function. And, even though I had for some inexplicable reason resisted this idea originally, it was the solution I chose. It works great.

## Generating the Markdown

The concept here was fairly straight-forward: take the information from the prompts and set it to a README.md doc. It's essentially the same thing as dynamically creating HTML elements. However, there were a few complications with the sync vs. async nature of node.

I found the appendFileSync function was the best way to work around these issues. Because the file works syncronessly, it is much easier to use. I had to figure out how to use it in conjunction with the writeFile function, which was causing some formatting issues. My solution was to use writeFile exclusively to write and/or overwrite a file. appendFileSync doesn't have the functionality to overwrite a file. I then appended all the data with appendFileSync. If i tried to add data with writeFile, it would cause very weird formatting issues.

All in all, I think it turned out great.

## See it in action!

[![Click Through of App](https://i9.ytimg.com/vi/q-kjyTx2mgA/mq2.jpg?sqp=CIa80fYF&rs=AOn4CLA6wlBrvH6lSTysK9NC2fyceBlOzQ)](https://www.youtube.com/watch?v=q-kjyTx2mgA&feature=youtu.be)
