/*
 * @Author: your name
 * @Date: 2019-11-22 14:19:08
 * @LastEditTime: 2019-11-22 14:27:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node_crawler/02/demo.js
 */
const superagent = require('superagent')
const charset = require('superagent-charset')
charset(superagent)
const express = require('express')
const baseurl = 'https://www.qqtn.com/'
const cheerio = require('cheerio')
const fs = require('fs')
const path = require('path')

const app = express();

app.use(express.static('static'))
app.get('/index',(req, res) => {
    res.header('Access-Control-Allow-Origin')
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
})

