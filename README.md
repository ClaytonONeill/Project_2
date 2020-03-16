# The Beer Cellar

#Link to the website: https://morning-journey-64624.herokuapp.com/

### An application for users to upload and describe new beers that they have tried.

 Users can log in and see what new brews their friends have been drinking,
and information about the beers, giving them insight to if they would want
to try the beers for themselves.

 Users have the ability to upload, edit, and delete posts, with the option to attach 
 an image and add a rating to their entries.


## The appraoch taken.

I wanted to try and mimick the style of Untapped, probably close to my most used
application. I started with setting up routes that I could use to test functionality
and see if it offered a straight forward easily understandable interface. Once the 
logic was sound I went to styling, adding in (hopefully) tasteful color schemes with 
a few animations to break a bit of the stagnant flat look of the site.

## Technologies used

I mongo DB atlas as my database, and am hosting the site on Heroku. I used 
a combonation of .EJS files, controllers, and relevant middleware to get the routes 
up and running and communicating with one another. Each .EJS was connected to 
appropriate .css files accesible from the public folder. 


## Wins

I like the overall look of my home page, I think that the accesability of the site 
is good, pretty straight forward and well labled so that new users can find their
way around.

### Struggles

Making sure that the routes were communicating well, that each variable and key value
was named consistantly throgh out my file structure was a bit rocky at times.
I would have loved to have added a bit more capability to the site, the pictures
look a little weird as they are resized and squashed/stretched. 
Incorporating more information about the place of purchase or a link to each brewery 
would be really cool. Also adding the ability to have tags for your entries that can be searched for later. Basically I feel that this was pretty barebones for what it could be but I like the ability to continue to grow this project.
