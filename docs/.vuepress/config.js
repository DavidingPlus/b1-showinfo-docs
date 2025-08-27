const sidebar = {
    items: [
        [
            '/guide/',
            '/guide/install',
            '/guide/release'
        ]
    ],
    guide: function () { return this.items[0]; }
}

const pageOrder = sidebar.items.flat();
pageOrder.unshift('/');
pageOrder.forEach((item, index, arr) => { arr[index] = item.concat(item.endsWith('/') ? 'README.md' : '.md'); });

function pageSorter(lhs, rhs) {
    const leftIndex = pageOrder.indexOf('/' + lhs.relativePath);
    const rightIndex = pageOrder.indexOf('/' + rhs.relativePath);
    if (leftIndex < rightIndex) {
        return -1;
    }
    else if (leftIndex > rightIndex) {
        return 1;
    }
    else {
        return 0;
    }
}


module.exports = {
    title: '黑神话悟空 实时关键数据显示 MOD 手册',
    description: '黑神话悟空 实时关键数据显示 MOD 手册',
    dest: 'public',
    base: '/',
    patterns: ['**/*.md', '**/*.vue', '!*.unused/**', '!**/*.staging.md'],
    themeConfig: {
        nav: [
            { text: '新榜链接', link: 'https://docs.qq.com/sheet/DTUhETnNCQ0RoRm9v' },
            { text: '旧榜链接', link: 'https://docs.qq.com/sheet/DTXNnc09DRGZWVGxt' }
        ],
        sidebarDepth: 3, // VuePress 自带的菜单栏最多显示到几级标题的字段。
        sidebar: [
            {
                title: '快速入门',
                path: '/guide/',
                collapsable: false,
                children: sidebar.guide()
            }
        ]
    },
    plugins: [
        [
            '@snowdog/vuepress-plugin-pdf-export', {
                outputFileName: 'larksdk-manual.pdf',
                sorter: pageSorter,
                puppeteerLaunchOptions: {
                    args: ['--no-sandbox', '--disable-setuid-sandbox']
                }
            }
        ]
    ],
    host: 'localhost'
}
