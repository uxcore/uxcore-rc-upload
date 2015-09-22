---

## uxcore-rc-upload [![Dependency Status](http://img.shields.io/david/uxcore/uxcore-rc-upload.svg?style=flat-square)](https://david-dm.org/uxcore/uxcore-rc-upload) [![devDependency Status](http://img.shields.io/david/dev/uxcore/uxcore-rc-upload.svg?style=flat-square)](https://david-dm.org/uxcore/uxcore-rc-upload#info=devDependencies) [![Bower version](https://badge.fury.io/bo/uxcore-rc-upload.svg)](http://badge.fury.io/bo/uxcore-rc-upload)

## TL;DR

uxcore-rc-upload ui component for react

#### setup develop environment

```sh
$ git clone https://github.com/uxcore/uxcore-rc-upload
$ cd uxcore-rc-upload
$ npm install
$ gulp server
```

## Usage

### demo
http://uxcore.github.io/uxcore/

### API

### props

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|action|string|required|-|上传文件的地址|
|buttonSize|string|optional|medium|上传按钮的尺寸大小|
|name|string|optional|-|上传文件的名字|
|data|object|optional|-|上传附件时随附件一起出入的参数|
|onStart|function|optional|-|上传开始前出发|
|onError|function|optional|-|出错时触发|
|onSuccess|function|optional|-|上传完成时触发|
|onProgress|function|optional|-|上传中触发|
|multiple|function|optional|false|是否支持多文件上传，只支持到 IE10+|

### onStart 传入参数

1. file upload file object


### onError 传入参数

1. err: request error message
2. responce: request responce, not support on iframeUpload
3. file: upload file object


### onSuccess 传入参数

1. result: response data
2. file: upload file object

### onProgress 传入参数

1. step: XMLHttpRequestProgressEvent
2. file: upload file object

