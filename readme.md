# Camayak Content API Shopify Integration

A Node.js app for publishing to Shopify from Camayak.

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) installed.


```sh
git clone git@github.com:pkmnct/camayak-contentapi-node-shopify.git
cd camayak-contentapi-node-shopify
```

Set the keys in `keys.js`

```
npm install
npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku
Make sure you have the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.

```
heroku create
git push heroku master
```

Set the keys in Heroku's config variables, or via the command line:

```
heroku config:set shopifyAPIkey=<yourshopifyapikey>
heroku config:set shopifyPassword=<yourshopifypassword>
heroku config:set shopifyURL=<yourshopifystoreurl>.myshopify.com
heroku config:set shopifyBlogID=<yourshopifyblogid>
heroku config:set shopifyBlogURL=https://<yourshopifystoreurl>.myshopify.com/blog/<youshopifyblogname>/
heroku config:set camayak_api_key=<yourcamayakapikey>
heroku config:set camayak_shared_secret=<yourcamayaksharedsecret>
heroku config:set debugging_mode=false
```

```
heroku open
```

Alternatively, you can deploy your own copy of the app using the web-based flow:

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Debugging
You can set the `debugging_mode` variable to `true` to enable debugging mode, which provides additional messages to the console for debugging purposes. Do not enable this mode in production.
