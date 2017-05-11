// Heroku uses Config Vars to set the keys. If you aren't using Heroku, you can set the keys here.
module.exports = {
    shopifyAPIkey: process.env.shopifyAPIkey,
    shopifyPassword: process.env.shopifyPassword,
    shopifyURL: process.env.shopifyURL,

    shopifyBlogID: process.env.shopifyBlogID,
    shopifyBlogURL: process.env.shopifyBlogURL,

    camayak_api_key: process.env.camayak_api_key,
    camayak_shared_secret: process.env.camayak_shared_secret
};
