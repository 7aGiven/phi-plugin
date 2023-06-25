import plugin from '../../../lib/plugins/plugin.js'
import get from '../model/getdata.js'

await get.init()

export class phirks extends plugin {
    constructor() {
        super({
            name: '屁股肉帮助',
            dsc: '屁股肉帮助',
            event: 'message',
            priority: 1000,
            rule: [
                {
                    reg: '^(#|/)(pgr|PGR|屁股肉|phi|Phi)(\s*)(命令|帮助|菜单|help|说明|功能|指令|使用说明)$',
                    fnc: 'help'
                }
                
            ]
        })

    }

    /**暂行帮助 */
    async help(e) {
        await e.reply(`⌈phi-plugin 帮助⌋(所有#均可用/代替)\n#phi曲xx  获取曲目图鉴\n#phi bind xxx #phi绑定xxx 绑定sessionToken\n#phi updata #phi更新存档 更新数据\n#phi b19 获取b19图`)
        return true
    }
}