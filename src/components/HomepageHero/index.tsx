// noinspection TypeScriptValidateTypes,HtmlUnknownTarget

import React from 'react'
import clsx from 'clsx';

import Translate from '@docusaurus/Translate'
import {useThemeConfig} from '@docusaurus/theme-common'
import {ThemeConfig} from '@docusaurus/preset-classic'

import HeroMain from '@site/static/svg/hero_main.svg'

import {Icon} from '@iconify/react'
import FeishuIcon from '@site/static/svg/feishu.svg'
import GiteeIcon from '@site/static/svg/gitee.svg'
import styles from './hero.module.scss'

function Hero() {
  return (<header className={clsx("section")}>
    <div className={clsx("container")}>
      <div className={styles.hero}>
        <div className={styles.bloghome__intro}>
          <div className={styles.hero_text}>
            <Translate id="homepage.hero.title1">慧科云</Translate>
            <span className={styles.intro__name}>
            <Translate id="homepage.hero.title2">内容管理</Translate>
          </span>
            <Translate id="homepage.hero.title3">框架</Translate>
            <br/>
          </div>
          <p>
            <Translate id="homepage.hero.text">
              多模块 &nbsp; 多应用 &nbsp; API接口 &nbsp; 小程序
            </Translate>
          </p>
          <p>
            <Translate id="homepage.hero.copyright">
              著作权登记号：2022SR1480776
            </Translate>
            <br/>
          </p>
          <SocialLinks/>
          <div>
            <a className={clsx('button', styles.hero_button)}
               href={'./docs'}>
              <Translate id="hompage.hero.introduce">详细介绍</Translate>
            </a>
            <a className={clsx('button', styles.hero_button)}
               href={'https://cms.13aq.com/%E6%85%A7%E7%A7%91%E4%BA%91CMS-%E5%AE%89%E8%A3%85%E5%8C%85.zip'}
            >
              <Translate id="hompage.hero.down">下载安装包</Translate>
            </a>
          </div>
        </div>
        <div className={styles.bloghome__image}>
          <HeroMain/>
        </div>
      </div>
    </div>
  </header>)
}

export function SocialLinks({...prop}) {
  const themeConfig = useThemeConfig() as ThemeConfig

  const socials = themeConfig.socials as {
    github: string
    gitee: string
    feishu: string
    twitter: string
    juejin: string
    csdn: string
    qq: string
    wx: string
    cloudmusic: string
    zhihu: string
  }

  return (<div className={styles.social__links} {...prop}>
    <a href="/blog/rss.xml" target="_blank">
      <Icon icon="ri:rss-line"/>
    </a>
    <a href={socials.github} target="_blank">
      <Icon icon="ri:github-line"/>
    </a>
    <a href={socials.gitee} target="_blank">
      <GiteeIcon/>
    </a>
    <a href={socials.feishu} target="_blank">
      <FeishuIcon/>
    </a>
    {/* <a href={socials.juejin} target="_blank">
        <JuejinIcon />
      </a>*/}
    <a href={socials.qq} target="_blank">
      <Icon icon="ri:qq-line"/>
    </a>
    {/*<a href={socials.twitter} target="_blank">
        <Icon icon="ri:twitter-line" />
      </a>*/}
    {/* <a href={socials.zhihu} target="_blank">
        <Icon icon="ri:zhihu-line" />
      </a>*/}
  </div>)
}

export default Hero

