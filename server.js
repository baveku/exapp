require('isomorphic-fetch');
const dotenv = require('dotenv');
const Koa = require('koa');
const KoaRouter = require('koa-router');
const next = require('next');
const { default: createShopifyAuth } = require('@shopify/koa-shopify-auth');
const { verifyRequest } = require('@shopify/koa-shopify-auth');
const session = require('koa-session');
const Router = require('koa-router');

dotenv.config();

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const { SHOPIFY_API_SECRET_KEY, SHOPIFY_API_KEY } = process.env;

app.prepare().then(() => {
    const server = new Koa();
    server.keys = [SHOPIFY_API_SECRET_KEY];

    const router = new Router();

    router.use(session({ secure: true, sameSite: 'none' }, server));
    server.use(
        createShopifyAuth({
            apiKey: SHOPIFY_API_KEY,
            secret: SHOPIFY_API_SECRET_KEY,
            scopes: ['read_products'],
            afterAuth(ctx) {
                const { shop, accessToken } = ctx.session;
                ctx.redirect('/shopify/anotated-layout');
            },
        })
    );

    router.prefix('/shopify').use(verifyRequest());
    router.get('*', async (ctx) => {
        await handler(ctx.req, ctx.res);
        ctx.respond = false;
    });
    server.use(router.routes()).use(router.allowedMethods());
    server.listen(port, () => {
        console.log(`> Ready on http://localhost:${port}`);
    });
});
