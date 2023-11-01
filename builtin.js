const os = require('os')
const user = os.userInfo()
console.log(user)
console.log(os.uptime())
const systeminfo = {
    name:os.type(),
    release:os.release(),
    totalmemory:os.totalmem(),
    freememory:os.freemem(),
}
console.log(systeminfo)