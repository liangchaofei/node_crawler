/*
 * @Author: your name
 * @Date: 2019-11-22 14:56:33
 * @LastEditTime: 2019-11-22 14:59:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node_crawler/03/index.js
 */
const superagent = require('superagent')
const cheerio = require('cheerio')
const Koa = require('koa')

const url = 'https://www.freebuf.com/';
const app = new Koa()

app.get('/index', ctx => {

})

app.listen(1234, () => {
    console.log('success in port 1234')
})