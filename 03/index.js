/*
 * @Author: your name
 * @Date: 2019-11-22 14:56:33
 * @LastEditTime: 2019-11-22 17:26:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node_crawler/03/index.js
 */
const superagent = require('superagent')
const cheerio = require('cheerio')
const Koa = require('koa')
const Router = require('koa-router')
const fs = require('fs');
const route = new Router();
const path = require('path');

const url = 'https://www.freebuf.com/';
const app = new Koa()
var data = [];
route.get('/index', async  ctx => {

    superagent.get(url).end((err, res) => {

        let $ = cheerio.load(res.text)
        $('div .news-list .news-info dl dt a').each((index, ele) => {
            data.push({
                title: $(ele).attr('title'),
                href: $(ele).attr('href')
            })
        })
        fs.access(path.join(__dirname, 'data.json'), err => {
            if (err) {
                fs.writeFile(path.join(__dirname, 'data.json'), JSON.stringify([
                    {
                        data
                    }
                ]), err => {
                    if (err) {
                        return;
                    }
                })
            } else {
                fs.readFile(path.join(__dirname, 'data.json'), (err, res) => {
                    data = res.toString()
                    if (err) {
                        return;
                    }
                })
            }
        })
        console.log('123', data) // 爬取的数据
    })
  
    ctx.body = '123'
})
app.use(route.routes())
app.use(route.allowedMethods())
app.listen(1234, () => {
    console.log('success in port 1234')
})