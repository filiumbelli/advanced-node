// node fileName.js

const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];


// New timers, tasks, operations are recorded from myFile running
myFile.runContents();

function shouldContinue() {
  // Check one: Any pending setTimeout, setInterval, setImmediate
  // Check two: Any pending operating system tasks (Any server listening to some port)
  // Check three: Any pending long running operations (Like fs module)
  return pendingTimers.length || pendingOSTasks.length || pendingOperations.length;

}

// Entire body executes in one 'tick'
while (shouldContinue()) {
  // 1) checks for pendingTimers and any of them
  // is ready to be called setInterval, setTimeout

  // 2) checks for pendingOSTasks and pendingOperations
  // and calls relevant callbacks

  // 3) Pause execution. Continue when..
  // - a new pendingOSTask is done
  // - a new pendingOperation is done
  // - a timer is about to complete

  // 4) check if any pendingTimers that are
  // setImmediate ready to be called
  
  // 5) clear 
}

// exit back to terminal