/*
 * @Author: your name
 * @Date: 2019-11-11 17:47:37
 * @LastEditTime: 2019-11-22 14:45:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Reptilian/static/index.js
 */
fetch("/show", {
    method: "GET"
  })
    .then(res => {
      return res.json();
    })
    .then(res => {
      res = JSON.parse(res);
      console.log(res.length);
      document.body.innerHTML = res
        .map((page, index) => {
          return page.items
            .map((item, itemIndex) => {
              return `<img src="${item.thumbSrc}" width="200" height="200"/>`;
            })
            .join("");
        })
        .join("");
    });
  