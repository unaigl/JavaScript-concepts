async function thisThrows() {
  throw new Error("Thrown from thisThrows()");
}

try {
  thisThrows();
} catch (e) {
  console.error(e);
} finally {
  console.log("We do cleanup here");
}

// output:
// We do cleanup here
// UnhandledPromiseRejectionWarning: Error: Thrown from thisThrows()

/* 
Now we have the classic problem, thisThrows returns a rejecting promise, so the regular try...catch is not able to catch the error. 
As thisThrows() is async , so when we call it, it dispatches a promise, the code does not wait, so the finally block is executed first 
and then the promise executes, which then rejects. So we don’t have any code that handles this rejected promise.
 */

// Solved
async function thisThrows() {
  throw new Error("Thrown from thisThrows()");
}
async function run() {
  try {
    await thisThrows();
  } catch (e) {
    console.error(e);
  } finally {
    console.log("We do cleanup here");
  }
}
run();
