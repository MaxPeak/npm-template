const run = () => {
  const [, , name] = process.argv
  const { readFile } = require('fs')
  readFile(`./lib/${name}.js`, (err, data) => {
    if (err) return
    eval(data.toString())
  })
}
run()
