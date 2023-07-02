const Koa = require('koa');
const KoaLogger = require('koa-logger');
const { koaBody } = require('koa-body');
const router = require('./routes.js');
const path = require('path');
const serve = require('koa-static');
const orm = require('./models');

require('dotenv').config();

const app = new Koa();

app.context.orm = orm;


app.use(KoaLogger());
app.use(koaBody());

app.use(router.routes());

module.exports = app;