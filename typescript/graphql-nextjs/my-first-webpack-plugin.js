function logVitals(prevMemoryUsage) {
  const os = require("os")

  console.log("Machine Vitals:")
  console.table(os.cpus())
  console.log("Total RAM", formatBytes(os.totalmem()))
  console.log("Free RAM", formatBytes(os.freemem()))

  console.log("Build Process Memory Usage:")
  if (prevMemoryUsage) {
    console.log("Resident Set Size", formatBytes(prevMemoryUsage.rss))
    console.log(
      "Total Heap Size Allocated",
      formatBytes(prevMemoryUsage.heapTotal)
    )
    console.log("Size of Heap Used", formatBytes(prevMemoryUsage.heapUsed))
    console.log("External Memory Used", formatBytes(prevMemoryUsage.external))
    console.log("Array Buffer Size", formatBytes(prevMemoryUsage.arrayBuffers))
  }
  const memoryUsage = process.memoryUsage()
  console.log("Resident Set Size", formatBytes(memoryUsage.rss))
  console.log("Total Heap Size Allocated", formatBytes(memoryUsage.heapTotal))
  console.log("Size of Heap Used", formatBytes(memoryUsage.heapUsed))
  console.log("External Memory Used", formatBytes(memoryUsage.external))
  console.log("Array Buffer Size", formatBytes(memoryUsage.arrayBuffers))
  return memoryUsage
}

function formatBytes(bytes) {
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"]
  if (bytes === 0) return "0 Byte"
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10)

  return `${bytes / 1024 ** i} ${sizes[i]}`
}

class MyCustomPlugin {
  apply(compiler) {
    let intervalId

    compiler.hooks.beforeCompile.tap("MyCustomPlugin", () => {
      console.log("Starting build...")
      console.log(process.pid)
      // console.log(process.report.getReport().javascriptHeap);
      let prevMemoryUsage
      intervalId = setInterval(() => {
        prevMemoryUsage = logVitals(prevMemoryUsage)
      }, 100)
    })

    compiler.hooks.done.tap("MyCustomPlugin", stats => {
      console.log("Finishing build...")
      console.log(process.pid)
      clearInterval(intervalId)
    })
  }
}

module.exports = MyCustomPlugin
