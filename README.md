# Server-Side-Panda-Shrine

Simple web app to show how much you love your pet. Also, accept donations on behalf of your pet. Funds can go to "your pet", or better yet, a charity of your choice.

While the app does not discriminate against your preferred type of pet, it's named after my pet, Panda, who is in fact an Old English Sheepdog.

# Dependencies

The goal is to keep this as simple as possible. Currently, the only dependencies include:
- Express
- Stripe (and body-parser to support reading request data from Stripe, [per their instructions](https://stripe.com/docs/checkout/express))

# Installation
```
npm install
```