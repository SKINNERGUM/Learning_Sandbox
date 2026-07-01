/**
 * Attaches a structural event listener to any target element.
 * @param {EventTarget} target - The DOM element or window object to watch.
 * @param {string} eventType - The browser event to listen for (e.g., 'load', 'click').
 * @param {Function} callback - The execution logic to trigger when the event fires.
 */
export function attachEventTracker(target, eventType, callback) {
  let fireCount = 0;

  target.addEventListener(eventType, () => {
    fireCount += 1;

    // Pass the current state/counter back to the calling function
    callback(fireCount);
  });
}