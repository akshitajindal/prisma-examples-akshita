class MyFirstWebpackPlugin {
  constructor(options) {
    this.options = options
  }
  apply(compiler) {
    compiler.hooks.done.tap("MyFirstWebpackPlugin", stats => {
      console.log(`My first webpack plugin is running on ${this.options.env}`)
      console.log("stats", stats)
    })
  }
}

module.exports = MyFirstWebpackPlugin
