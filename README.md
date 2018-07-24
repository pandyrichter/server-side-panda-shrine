# Server-Side-Panda-Shrine

Simple web app to show how much you love your pet, or anything. Also, accept donations on behalf of your object of worship. Donation funds can go to you, or better yet, a charity of your choice.

While the app does not discriminate against your preferred object of worship, it's named after my pet, Panda, who is actually an Old English Sheepdog.

>[Everybody worships something...](https://fs.blog/2012/04/david-foster-wallace-this-is-water/)

# Goal
The goal of this project is to show how to progressively build a simple full-stack application without relying on out-of-the-box frameworks to achieve basic tasks. As basic tasks are accomplished, though, we'll work toward implementing advanced features to "catch-up" with modern times. The end-goal is to create a React application that requires authentication and enables users to make donations toward "shrines", or create a "shrine" of their own. As mentioned above, hopefully donations to shrines will go to a charity, but you can send donations your way as well.

Here's the progression so far:
- [x] Render a basic landing page and image from a server
- [x] Link to a new page that accepts donations to your "shrine"
- [x] Create new candles that show respect paid to the shrine by writing to a Mongo database
- [x] Render a list of the candles created
- [ ] Render candles using React components
- [ ] Provide the option to create a candle that includes a donation
- [ ] Send a confirmation and/or gift in exchange for the donation
- [ ] Allow authentication so that users can see their candle/donation history
- [ ] Allow users to create their own shrines and accept donations/payments
- [ ] Allow users to make their shrines public or private
- [ ] Allow users to customize shrine with additional images and content, etc.
- [ ] Allow users to invite others to their shrine
- [ ] Create the ability for users to donate directly to a charity (rather than through the shrine creator?)
- [ ] Create notifications and emails about shrine news

# Dependencies

The goal is to keep this as simple as possible. Currently, the only true dependencies include:
- Node
- Express
- Stripe (and body-parser to support reading request data from Stripe, [per their instructions](https://stripe.com/docs/checkout/express))

Optional suggestions
- MongoDB
- Nodemon


# Installation
```
npm install
```