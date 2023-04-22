import React from 'react';
// 导入原始映射器
import MDXComponents from '@theme-original/MDXComponents';
import { Icon } from '@iconify/react'; // 导入整个图标化库。

export default {
    // 重用默认映射
    ...MDXComponents,
    icon: Icon, // 使图标化图标组件在 MDX 中作为<icon />可用。
};
