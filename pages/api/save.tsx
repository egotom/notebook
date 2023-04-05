import fs from "fs";
const postsDir = '_posts/'

export default function async (req, res) {
    // console.log(req.body)
    const{title,content} = req.body
    const file = postsDir+title.replaceAll(" ","-")+'.md'
    const template=`---
title: '${title}'
excerpt: '${content.substring(0,30)}'
coverImage: '/assets/cover.jpg'
date: '${new Date().toISOString()}'
author:
    name: Joe Haddad
    picture: '/assets/blog/authors/joe.jpeg'
ogImage:
    url: '/assets/blog/preview/cover.jpg'
---

${content}
    `
    if(!fs.existsSync(file))
        fs.writeFileSync(file, template);
    res.status(200).json({file:file});
}
