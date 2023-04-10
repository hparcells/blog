---
title: "Rising Swag: The Most Laborious Project I've Made"
description: All about Rising Swag, it's idea, creation, and progress. A labor of love, dedicated to the Red Rising community.
date: 2023-04-10
unlisted: false
---

Spoiler free!

Red Rising, written by Pierce Brown, is a dystopian science fiction series that has been one of my favorite books/book series for the greater part of the last 4-5 years. While some may call it young adult, the themes, action, and length throughout the series can be anything but.

I can't find the right words to describe how well crafted this series is. Every character is so beautifully written, complex, adding value to the story. As more books are released, we find both the characters evolving in their own ways and the writing of Pierce evolve.

Everything is just so... beautifully written. The plot is not drawn out, it carries momentum, always leaving you wanting to read the next chapter. Twists and turns when you least expect it. Darrow, the protagonist, always being one step ahead of the game, changing the paradigm in clever ways. So many of the quotes used throughout the series are memorable. From love to wisdom, [a whole website was made to keep track of them](https://www.redrisingquotes.com/quotes/).

The books can be talked about so much that cannot be fit into the context of this blog post, and which is why many [podcasts have been created](https://docs.risingswag.com/docs/community/#podcasts) to discuss themes, characters, and more.

Much of Pierce's writing style and the Red Rising saga can be described in [Pierce's own description of his books](https://www.goodreads.com/book/show/38596186-light-bringer):

> In my books you'll find stories of men and women finding their inner strength when all seems lost. You'll also find me exploring themes of love, violence, hope, and power--what it means, why people seek it, and how they hold onto it.

Fans, so passionate about the books, have gone to the internet creating online forums, creating art, and the source for this project... selling things. Being a huge fan myself, I have accumulated a number of Red Rising items. From stickers, to patches, to pins and more, I have put too much money into this fandom that I would like to admit.

![](/images/2023-04-10-rising-swag/red-rising-shelf.png)

With the sixth book, Light Bringer, being released in the summer of this year, the community has been more active than ever. Events such as [Hazard Bedlam](https://www.lit-escalates.com/pages/operation-hazard-bedlam) and [Sprint to the Citadel](https://howlerproject.com/the-mad-violet/f/reapers-sprint-to-the-citadel), both taking place soon, attempt to get the community together. Many [Discord servers](https://docs.risingswag.com/docs/community#discord) have been created for discussion, re-reads, Red Rising tabletop RPGs, and more.

I had the opportunity at one point to build elements of a Minecraft recreation of the Institute. Progress was promising from a team of around 7-10 people, though it eventually faded out before it was complete as members had school resume.

Though the number of die-hard fans are small in comparison to the fan base as a whole, stores have come and gone selling Red Rising related items, and keeping track of the stores can be hard. Too many for a list. Bookmarks are alright, but what if everything was in one place?

[People on the subreddit](https://www.reddit.com/r/redrising/) have even discussed merch options and I was surprised to see many people haven't even heard of the *official* items being sold on [Lit Escalates](https://www.lit-escalates.com/) and [Badali Jewelry](https://badalijewelry.com/collections/red-rising/).

## "Weekend Project"

A Figma design was thrown together in an afternoon, and with solid confidence I thought this could have been done in a weekend. A weekend and maybe a couple of extra days I thought. A number of Etsy stores I already knew about, *this is easy*, I thought.

Obviously I used [Next.js](https://nextjs.org/) but this time I wanted to use a good UI Toolkit in preparation for a larger summer project. I chose [Mantine](https://mantine.dev/). It didn't overwrite all of my global styles, and it provided a lot of UI components with [good examples](https://ui.mantine.dev/category/authentication). It also provided neat hooks that simplified development such as the [useForm hook](https://mantine.dev/form/use-form/).

I could have used a database, such as [MongoDB](https://www.mongodb.com/). I actually had considered it at a point, attempting to use [Prisma](https://www.prisma.io/), though it would have required even more work to get a basic implementation, needed authentication, a UI to add items, and more.

Pagination wasn't always a feature. I almost was required to add it, since filtering was delayed due to the large number of items displayed. Images attached to items would show up on the wrong item. Loading took a long time, and more importantly...

{% tweet url="https://twitter.com/hunterparcells/status/1639284784139468806" /%}

...it got big.

### Ctrl + C → Ctrl + V

Like many projects, the base website was largely thrown together in the span of a couple days. The rest of the time after was quality of life changes and addition of new items. And let me tell you, adding these items is so grindy. It's a loop of copying the image to the item (which many times was longer than it should have been due to image optimizations), copying the description or making my own if there wasn't any, and copying the link to the item. Currently there are over 400 items complete so far, and many times I would just throw on music or a podcast or sit in a Discord VC while I would grind away at adding all the items.

At around 100 items I realized this project would be much bigger than I expected. And at around 250 items the end was in sight, and the proof of concept was largely complete.

Creating a Chrome extension to extract this information had come across my mind at one point, and I truly was trying to analyze the effort to time save ratio to see if it was worth it or not, like that one [xkcd](https://xkcd.com/1205/). I decided against it because I already had a tool up my sleeve that I was already using: **GitHub Copilot**.

Enough items were already added it at time it would auto-complete the date and shop name and URL for me, so all that I really needed to do was copy the image and link, while optionally typing a description. If I had not been using Copilot for this project, I surely would have been demotivated enough by now to quit.

## The Curse of Redbubble

I knew I had to add Redbubble items eventually, I just didn't realize at the time just how many items on Redbubble existed. Just when I completed all the Etsy items, it seemed nearly double the amount showed up on Redbubble. With how dirt simple it is to create designs and products, and production being outsourced, the number of items on Redbubble was very... demotivating.

Shops like Redbubble and TeeSpring allow you to upload a single design and apply it to a number of products. This created sort of a challenge for the way Rising Swag worked. Initially the plan was one entry per item, and I most definitely was not creating 54 different entries for each type of item for one design. So I opted to create a "redbubble" tag and just create entries for the designs themselves.

### "This looks familiar..."

I had mentioned how easy it is to create designs and products on Redbubble due to the drag-and-drop nature of shops and production being outsourced. Because it's so easy, I had noticed a number of products using the same design but from different shops/authors. I'm not exactly sure if something nefarious is happening, such as art and designs being stolen, or if someone saw a design and tried to adapt it (doubtful, some designs are 1:1).

![](/images/2023-04-10-rising-swag/similar-1.png)

![](/images/2023-04-10-rising-swag/similar-2.png)

I have not reached out to shop owners yet about this issue, though I might if I see any more occurrences.

## Conclusion

And that is where I stand currently. The entire base website is complete and now it is just the job of adding new items. I believe I had found every Red Rising Etsy item, and most of the ones found on smaller websites, and now just the endless items on Redbubble exist.

I'm not sure how I will keep up with any new items. I am following a number of Red Rising accounts on Twitter and Instagram, so I'll definitely hear about any official merch and any merch from those accounts, though smaller stores can just pop up any time they want. I'll probably browse Etsy and Redbubble occasionally, but ideally I would love the contributions from others in the community to at least make me aware of something new that isn't on the website currently.

### The Future

I'll be glad once I finish adding all these Redbubble, as it's been grueling three weeks of copy and pasting from Inspect Element.

The `v1` [API is very simple in nature](https://docs.risingswag.com/docs/api), though I would love to work on a `v2` API where you can filter results by providing a filter object in the header of the request.

I really do want to try and distribute this once I believe a majority of the items are added. A Reddit post will probably be made. I'll drop a couple messages in Discord. A similar "all-in-one" idea was behind the creation of [The Howler Archives](https://www.thehowlerarchives.com/) so it would be cool if I could get a link there too. A link on the [wiki](https://red-rising.fandom.com/wiki/Red_Rising_Wiki) would be cool, though I would have to discuss it in the Discord before I go on and self-promo. It would be cool if it could get mentioned on a Podcast or two, but the occasion would have to be right.

Hail Reaper!
