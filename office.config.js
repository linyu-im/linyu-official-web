// 打包运行 pm2配置
module.exports = {
    apps: [
        {
            name: 'office',
            port: '3001',
            script: './.output/server/index.mjs'
        }
    ]
}
