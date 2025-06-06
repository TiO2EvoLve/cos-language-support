"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
function activate(context) {
    // 命令补全提供者
    const commandCompletionProvider = vscode.languages.registerCompletionItemProvider('cos', {
        provideCompletionItems(document, position) {
            const completions = [
                createCompletionItem('APDU.>', 'CPU卡发送指令函数'),
                createCompletionItem('APDU0.>', 'CPU卡发送指令函数，但返回值去掉状态码'),
                createCompletionItem('EXTERNAL.>', '外部认证函数'),
                createCompletionItem('APDUMAC.>', '用"指令+校验码MAC"的方式给CPU卡发送指令'),
                createCompletionItem('APDUMAC_8.>', '用"指令+校验码MAC"的方式给CPU卡发送指令'),
                createCompletionItem('APDUMAC_AJ.>', '用"指令+校验码MAC"的方式给CPU卡发送指令'),
                createCompletionItem('APDUMAC_AJGM.>', '调试用函数'),
                createCompletionItem('APDUKEYE.>', '密文修改密钥的函数'),
                createCompletionItem('APDUKEYEMAC.>', '密文修加MAC改密钥的函数'),
                createCompletionItem('DATEMAC_AJGM.>', '调试用函数'),
                createCompletionItem('DATEMAC_AJGMR.>', '调试用函数'),
                createCompletionItem('SCP02_AUTH.>', '建立安全通道'),
                createCompletionItem('CHANGE404F_DIVK.>', '认证需要的密钥，从三个固定密钥改为其他三个值'),
                createCompletionItem('RESET.>', '射频复位、重新寻卡、复位卡片'),
                createCompletionItem('RESET_S.>', '再次复位卡片、获取复位信息，不含重新寻卡'),
                createCompletionItem('REQUEST.>', '单步寻卡功能'),
                createCompletionItem('ANTI.>', '单步寻卡（防冲突）功能，返回值是芯片号（16进制调整）'),
                createCompletionItem('SELECT.>', '单步寻卡,参数是ANTI获取的芯片号，返回值是SAK值'),
                createCompletionItem('EXTERNAL_SM4.>', '进行SM4的外部认证函数'),
                createCompletionItem('APDUMAC_SM4.>', ''),
                createCompletionItem('APDUMAC_SM4_GM.>', '调试用函数'),
                createCompletionItem('APDUMAC_SM4_AJ.>', '调试用函数'),
                createCompletionItem('APDUKEYE_SM4.>', '密文修改密钥'),
                createCompletionItem('APDUKEYEMAC_SM4.>', '密文加MAC改密钥'),
                createCompletionItem('SUB.>', '取子字符串'),
                createCompletionItem('CONVTO10.>', '16进制数转换为10进制数'),
                createCompletionItem('CONVTO10.>', '10进制数转换为16进制数'),
                createCompletionItem('CONNECT.>', '连接函数'),
                createCompletionItem('LPAD.>', '向左补全位数'),
                createCompletionItem('RPAD.>', '向右补全位数'),
                createCompletionItem('QDT.>', '琴岛通计算校验码'),
                createCompletionItem('LUHN.>', '按照LUHN算法计算校验值'),
                createCompletionItem('QLUHN.>', '青州等特殊LUHN校验码'),
                createCompletionItem('DESEN.>', '进行DES加密'),
                createCompletionItem('DESDE.>', '进行DES解密'),
                createCompletionItem('XOR.>', '进行每字节的异或运算。'),
                createCompletionItem('XOR2.>', '两个字符串按字节异或'),
                createCompletionItem('DIVK.>', '进行密钥分散'),
                createCompletionItem('ADDNUM.>', '将两个数值相加'),
                createCompletionItem('SUBNUM.>', '将两个数值相减'),
                createCompletionItem('STR2ASCII.>', '将字符串转换为ASCII码'),
                createCompletionItem('ASCII2STR.>', '将ASCII码转换为字符串'),
                createCompletionItem('RZ_PRINT.>', '日照特殊校验码LRC方法'),
                createCompletionItem('NOTNUM.>', '十六进制按位取反'),
                createCompletionItem('YUSHU.>', '取余数'),
                createCompletionItem('MD5.>', '取字符串的MD5散列值'),
                createCompletionItem('GETONEKEY.>', '用于房干M1卡的一卡一密计算'),
                createCompletionItem('SM4EN.>', '进行SM4加密'),
                createCompletionItem('SM4DE.>', '进行SM4解密'),
                createCompletionItem('SHA1.>', '计算输入数据的哈希值'),
                createCompletionItem('NEWO.>', '调整字符串的顺序'),
                createCompletionItem('SQL_EXIST.>', '执行SQL指令查询，不存在则抛出异常'),
                createCompletionItem('SQL_NOEXIST.>', '执行SQL指令查询，存在则抛出异常'),
                createCompletionItem('SQL_CHANGE.>', '保存或更新数据库'),
                createCompletionItem('SQL_MEXIST.>', '查询存在的记录，如果不存在则抛出异常'),
                createCompletionItem('SQL_EXIST.>', '查询记录并暂时锁定记录'),
                createCompletionItem('LOCKPARAM.>', '锁定某个值，暂时不允许其他进程调用'),
                createCompletionItem('UNLOCKPARAM.>', '解锁某个值，允许调用'),
                createCompletionItem('LOCKNUM.>', '获取当前锁定认证码的个数'),
                createCompletionItem('SETUNLOCKPARAM.>:', '预设解锁值发生异常时，则解锁该值'),
                createCompletionItem('SECTINIT.>', '连接加密机'),
                createCompletionItem('SECTSEND.>', '给加密机发送指令'),
                createCompletionItem('PSECTSEND.>', '给加密机发送指令（徐州）'),
                createCompletionItem('ZBSOCKETSEND.>', '针对山东城联给加密机发送指令'),
                createCompletionItem('SMSET.>', '设置SAM卡座'),
                createCompletionItem('SMRESET.>', 'SAM卡复位'),
                createCompletionItem('SMAPDU.>', '向SAM卡发送指令'),
                createCompletionItem('M1LOADKEY.>', 'M1卡下载密钥'),
                createCompletionItem('M1AUTHEN.>', 'M1卡认证密钥'),
                createCompletionItem('M1WRITE.>', 'M1卡写扇区'),
                createCompletionItem('M1READ.>', 'M1卡读扇区'),
                createCompletionItem('M1AUTHENNO.>', 'M1卡认证密钥'),
                createCompletionItem('DEC_FILE.>', '解析制卡文件'),
                createCompletionItem('SAVEJPARAM.>', '将解析结果保存'),
                createCompletionItem('CHECKSN.>', '尾数跳过函数'),
                createCompletionItem('GETDATE.>', '获取系统当前的日期和时间'),
                createCompletionItem('DEF.>', '定义变量'),
                createCompletionItem('PURCHASE1.>', '山西大学返回坏卡的多次反复扣费模拟'),
                createCompletionItem('SLEEP1.>', '程序线程休眠'),
                createCompletionItem('GETNEWCAPE.>', '获取CPU卡制卡数据'),
                createCompletionItem('GETNEWM1.>', '获取M1卡制卡数据'),
                createCompletionItem('SUBMITNWECAPE.>', '提交洗卡记录'),
                createCompletionItem('CREATPIN.>', '根据芯片号和NEW_ASN后16位，计算PIN'),
                createCompletionItem('CREATWATER.>', '根据芯片号和NEW_ASN后16位，计算ENC'),
                createCompletionItem('@@', '变量'),
                createCompletionItem('@@SN', '卡号'),
                createCompletionItem('@@UID', '16进制调整芯片号'),
                createCompletionItem('@@BUID', '16进制不调整芯片号'),
                createCompletionItem('@@DUID', '10进制调整芯片号'),
                createCompletionItem('@@DBUID', '10进制不调整芯片号'),
                createCompletionItem('@@ATS', 'CPU卡的复位信息'),
                createCompletionItem('@@SLPRINT', '打码值'),
                createCompletionItem('@@CITYCODE', '城市代码'),
                createCompletionItem('@@VENDER', '订单号'),
                createCompletionItem('@@CARDTYPE', '卡片类型'),
                createCompletionItem('@@CARDLOGO', '卡片标志'),
                createCompletionItem('@@SLNUM', '特殊算法号码'),
                createCompletionItem('@@APDURT', '指令返回值'),
                createCompletionItem('@@RZMA', '认证码'),
                createCompletionItem('@@SMATS', 'SM卡复位信息'),
                createCompletionItem('@@ERRUNLOCKPARAM', '解锁密钥'),
                createCompletionItem('@@CURRDATETIME', '当前日期时间，格式为yyyyMMddHHmmss'),
                createCompletionItem('@@CURRDATE', '当前日期 格式为yyyyMMdd'),
                createCompletionItem('@@CURRDATETIMES', '当前时间日期 格式为yyyy-MM-dd HH:mm:ss'),
                createCompletionItem('@@CURRDATES', '前日期 格式为yyyy-MM-dd'),
                createCompletionItem('CHECK.>', '检查'),
                createCompletionItem('END', '结束语')
            ];
            return completions;
        }
    }, '.' // 命令触发字符
    );
    // 变量补全提供者
    const variableCompletionProvider = vscode.languages.registerCompletionItemProvider('cos', {
        provideCompletionItems(document, position) {
            const completions = [
                createCompletionItem('@@SN', '卡号'),
                createCompletionItem('@@UID', '16进制调整芯片号'),
                createCompletionItem('@@BUID', '16进制不调整芯片号'),
                createCompletionItem('@@DUID', '10进制调整芯片号'),
                createCompletionItem('@@DBUID', '10进制不调整芯片号'),
                createCompletionItem('@@ATS', 'CPU卡的复位信息'),
                createCompletionItem('@@SLPRINT', '打码值'),
                createCompletionItem('@@CITYCODE', '城市代码'),
                createCompletionItem('@@VENDER', '订单号'),
                createCompletionItem('@@CARDTYPE', '卡片类型'),
                createCompletionItem('@@CARDLOGO', '卡片标志'),
                createCompletionItem('@@SLNUM', '特殊算法号码'),
                createCompletionItem('@@APDURT', '指令返回值'),
                createCompletionItem('@@RZMA', '认证码'),
                createCompletionItem('@@SMATS', 'SM卡复位信息'),
                createCompletionItem('@@ERRUNLOCKPARAM', '解锁密钥'),
                createCompletionItem('@@CURRDATETIME', '当前日期时间，格式为yyyyMMddHHmmss'),
                createCompletionItem('@@CURRDATE', '当前日期 格式为yyyyMMdd'),
                createCompletionItem('@@CURRDATETIMES', '当前时间日期 格式为yyyy-MM-dd HH:mm:ss'),
                createCompletionItem('@@CURRDATES', '前日期 格式为yyyy-MM-dd')
            ];
            return completions;
        }
    }, '@' // 变量触发字符
    );
    context.subscriptions.push(commandCompletionProvider, variableCompletionProvider);
}
exports.activate = activate;
function createCompletionItem(label, detail) {
    const item = new vscode.CompletionItem(label, vscode.CompletionItemKind.Keyword);
    item.detail = detail;
    item.documentation = new vscode.MarkdownString(`**${label}**\n\n${detail}`);
    return item;
}
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map