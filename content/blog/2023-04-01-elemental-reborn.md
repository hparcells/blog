---
title: The Story of Elemental Reborn
description: The story of Elemental Reborn and how it was made.
date: 2023-04-01
unlisted: false
---

> Yet another Elemental 3 clone. Combine elements to make more elements.

Elemental Reborn was a web game I had created in the summer of 2020, inspired by two things:
1. [carykh](https://www.youtube.com/user/carykh)'s third installment of his Elemental games, [Elemental 3](https://www.youtube.com/watch?v=J10KDPg_Im0) after it was shut down due to scaling issues.
2. [paperdave](https://paperdave.net/)'s take on Elemental 3: [Elemental 4](https://github.com/paperdave/elemental4), *which has also been shutdown*.

![](/images/2023-04-01-elemental-reborn/elements.png)

It quickly became one of my most popular projects after the hype within the [Elemental Discord](https://discord.gg/X9VyN42) following the release of Elemental 4. I originally took up the project as a challenge to see how hard it would be to make an Elemental-type game.

Turns out? Pretty easy.

## Elemental?

Elemental type games all share one core gameplay loop. Everyone starts with four core elements, typically **Air, Earth, Fire, and Water**. Combinations of these elements create new elements, such as Air and Earth creating Dust, or Earth and Earth creating a Hill.

Community interaction peaked, as players asked each other how to attain certain elements. More complex elements got neat "tree recipes" which describe how to attain the element.

![](/images/2023-04-01-elemental-reborn/tree.png)

## The History of Elemental

Elemental was a web experiment created back in 2011 hosted on [https://htwins.net/](https://htwins.net/). With 65 predefined elements, it was quite small. Elemental 2 was released later during 2016, ending up 219 elements, before Adobe Flash Player was declared dead.

There was one problem though. The elements in these games had to be created by the developer, that is Cary Huang. In Elemental 3, also released in 2016, elements were able to be created by anyone.

{% youtube url="https://www.youtube-nocookie.com/embed/J10KDPg_Im0" label="carykh's Elemental 3 Release Video" /%}


Elements went through a suggestion and **voting process**. Users, when encountering an element combination that doesn't exist yet, can suggest a new element. When other users encounter the same combination, they can either suggest their own, or vote on a number of existing suggestions. If a suggestion gets enough votes, it gets added to the game for everyone else to find. You even get credit with a so called "Pioneer's Note."

On September 13th, 2020, Elemental 3 was shut down after scaling issues and poorly written code. In the end, 27,221 unique elements were created.

## How It Was Made

Like many projects of mine, I suspected this to take around two *weeks* to make, but actually largely thrown together over the course of two *days*, to get the core functionality down.

The game used [React](https://react.dev/) using a [MongoDB](https://www.mongodb.com/) database hosted on [MongoDB Atlas](https://www.mongodb.com/atlas/database) (no ORM) with an [Express](https://expressjs.com/) backend. Though it has moved servers multiple times, it is currently hosted on a server of my own.

Instead of anyone logging on and creating elements, I opted to use a **Google login** for players to create and suggest elements. Otherwise, a "Guest" could play, and only find existing elements. Since I was relatively new to backend development, I didn't have experience with user authentication, and thought this would be a convenient method for both myself and the players.

Though I am not sure how other Elemental games by the community worked, and how Elemental 3 worked, my voting system required a "vote threshold" where the difference between the number of upvotes and downvotes on an element must be greater than that threshold for it to be added. When the playerbase was small, I kept this number around 4-5. When popularity picked up I had to raise this number to 7. I believe now it's been 5 for a while.

There were a number of features that I did want to add or fix, but had never gotten around to doing:
- I wanted to add **Pioneer Notes**, the properties on the elements were already there, but I never implemented a input for the pioneer to enter a note. Of course, this content would need to be somewhat moderated, which was also something I didn't really want to deal with.
- The **autoscrolling** in the game when you created a new element was really janky, and would scroll you to the top of the element type group instead of the newly created element. You could see how this could be bad when a user has hundreds or thousands of elements in their possession.
- I wanted a way to **sync a user's game progress to their Google login**. This would require me storing the game state of each player in the database, which would become quite sizable, and possibly costly because of using a SaaS database.
- Changing elements was quite hard. For example if an element had a faulty character that needed to be removed, it would not be updated on the game clients, as **game state was stored in local storage**.
  - If I rename an element, the name would not be consistent across clients.
  - If I wanted to remove an element, it required my hand-modifying elements within the database and their links/references.

Many lessons were learned with input validation, as players loved submitting blank characters, really wide characters, emojis, etc... onto elements. I ended up removing many of these elements, but much of the damage was already done before I could roll an update out, and changing elements was hard for reasons listed above. A few elements of this kind can still be found.

Surprisingly, I totally forgot to `.trim()` element names, which ended up in a few elements looking identical or even elements appearing blank, but instead having one, two, or  three spaces in them. I really hated this but it would have been too much work to fix and it had been abused multiple times already.

## The End?

Throughout development, I had never created a backup of the database that stored all of the elements and all of the recipes and suggestions.

With the way I used my database, elements had their own collection, so did suggestions and recipes. Recipes were nothing but a small object with element IDs as two keys with a result key. When a request was made to check if a recipe exists, it checks if the combination of "parent" IDs have an entry in the recipes collection. So you can see how detrimental it would be if someone (I) had accidentally deleted this collection... oops.

During development, I had accidentally deleted a collection on MongoDB Atlas. I had two databases setup actually, one named `ElementalReborn` and one named `ElementalRebornDev`. Due to me being lazy with my database operations, I believe I had copied and pasted the confirmation text they make you type in when you delete these sorts of things.

I had sent an email to MongoDB is desperation but to no avail.

> Hello, thanks for contacting MongoDB Atlas. Unfortunately if this collection was not saved somewhere it is likely lost. In the future you can try and get the data off of the secondary members of the replica set before replication removes the data. 

This means elements still existed in the database, though there was no way for players to play the game and create elements, since no recipes exist.

The game at the time was the most popular it had ever been, containing about 340 elements (I know small, keep reading) and growing quickly. There was roughly a two week downtime before I reset the entire database, and started over, with just four elements.

## "Season 2"

With a clean slate and growing community, even more players were able to get involved. The database grew to the size it was before the incident in a single day.

Today, at the time of writing, the game contains 4,482 elements, 5,910 recipes, and 4,407 combinations that still needs votes.

Though traffic has slowed from its glory days, a handful of elements get added every day (at least every other day).

Overall, Elemental Reborn saw itself over 1,500 users, though there is a year long gap where users and other analytics could not be accounted for.

## The End?

Google announced in 2021, that on March 31st, 2023, they would be deprecating the Google Sign-In JavaScript platform library. Somehow this announcement never came by me, and it took me by surprise when I received an email a month ago. I'm not sure exactly what will happen. Will the login completely break? Will it work just fine but not be available to new projects? I'm not sure.

If the login breaks, users will no longer be able to log in and suggest elements and vote on elements. The game would be locked to a sort of "read only" mode where only existing elements can be found.

If this is the case, farewell, it's been fun. Be sure to checkout the enthusiastic [Elemental Discord](https://discord.gg/X9VyN42) community, where new Elemental games seem to pop up every so often. There's also some other Elemental games there that have been running for years now.

Elemental Reborn has been one of the most fun projects I have worked on, and has introduced me to so many new technologies that I will continue to use in plenty of more projects. Plenty of lessons were learned along the way, and has produced one of the most successful/popular projects I've made.

Support has stopped, but watching the element count trickle up, and coming back to the game every so often to play has been entertaining. It's been interesting seeing the hobbies and interests of the playerbase coming together to create many different elements based around various games, books, and movies.

If the deprecation does indeed break the game for players to play, I will include a data dump of all the existing elements and their recipes into a CSV file or a big spreadsheet.
