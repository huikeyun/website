---
slug: ubuntu-commands-install-chinese-language-packs
title: Ubuntu 命令方式安装中文语言包
date: 2023-4-19 22:05:21
authors: MineLSG
tags: [ubuntu]
keywords: [ubuntu]
---
     
##  查看语言环境
安装之前执行 `$LANG` 

中文语言包:
* language-pack-zh-hans 简体中文
* language-pack-zh-hans-base
* language-pack-zh-hant 繁体中文
* language-pack-zh-hant-base

<!-- truncate -->

## 安装中文语言包

```bash
sudo apt-get install language-pack-zh-han*
```

## 运行语言支持检查

```bash
sudo apt install $(check-language-support)
```

## 修改配置文件

```bash
vim /etc/default/locale
```

```bash title='将原始内容注释掉或删掉，替换为如下内容'
LANG="zh_CN.UTF-8"
LANGUAGE="zh_CN:zh"
LC_NUMERIC="zh_CN"
LC_TIME="zh_CN"
LC_MONETARY="zh_CN"
LC_PAPER="zh_CN"
LC_NAME="zh_CN"
LC_ADDRESS="zh_CN"
LC_TELEPHONE="zh_CN"
LC_MEASUREMENT="zh_CN"
LC_IDENTIFICATION="zh_CN"
LC_ALL="zh_CN.UTF-8"
```
 
## 修改当前用户环境文件
```bash
vim /etc/environment
```
```bash title='不修改原有内容，直接在原内容下面新开一行加入下列内容'
LANG="zh_CN.UTF-8"
LANGUAGE="zh_CN:zh"
LC_NUMERIC="zh_CN"
LC_TIME="zh_CN"
LC_MONETARY="zh_CN"
LC_PAPER="zh_CN"
LC_NAME="zh_CN"
LC_ADDRESS="zh_CN"
LC_TELEPHONE="zh_CN"
LC_MEASUREMENT="zh_CN"
LC_IDENTIFICATION="zh_CN"
LC_ALL="zh_CN.UTF-8"
```

## 修改所有用户环境文件
```bash
vim /etc/profile
```
```bash title='不修改原有内容，直接在原内容下面新开一行加入下列内容'
LANG="zh_CN.UTF-8"
```

## 重启

```bash
reboot
```

<br/>
<hr/>

> 源地址：https://www.cnblogs.com/MineLSG/p/12663378.html   
> © 版权声明：本文为博主原创文章，转载请附上博文链接！
