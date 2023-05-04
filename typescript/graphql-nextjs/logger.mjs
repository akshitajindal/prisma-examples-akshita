// import process from "node:process"
// import { spawn } from "node:child_process"
// // import psList from "ps-list"

// const ppid = process.ppid
// // const uid = process.getuid()
// console.log(process.memoryUsage())

// function Logger() {
//   console.log("Something to Log")
//   // const process_report = process.report.getReport()
//   // console.log(process_report.javascriptHeap)
//   // console.log(process.memoryUsage())
//   // console.log(process.pid)
//   // console.log(process.ppid)
//   // setTimeout(Logger, 2000)
//   psList().then(data => {
//     data.forEach(process => {
//       if (process.ppid === ppid) {
//         console.log(process)
//       }
//     })
//   })
//   setTimeout(Logger, 2000)
// }

// Logger()

// import ps from "current-processes"

// ps.get(function (err, processes) {
//   processes.forEach(process => {
//     if (process.name === "node") {
//       console.log(process)
//     }
//   })
// })

import process from "node:process"
import { spawn } from "node:child_process"
import ps from "current-processes"
import psList from "ps-list"

const ppid = process.ppid
const pid = process.pid
let build_pid

psList().then(data => {
  data.forEach(process => {
    if (process.ppid === ppid && process.pid !== pid) {
      build_pid = process.pid
    }
  })
})

function Logger() {
  console.log("Something to Log")
  ps.get(function (err, processes) {
    processes.forEach(process => {
      if (process.pid === build_pid) {
        console.log(process)
      }
    })
  })
  setTimeout(Logger, 2000)
}

Logger()
