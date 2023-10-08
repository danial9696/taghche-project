import { KeyboardEvent } from 'react';

type KeyEventType =
  | 'Enter'
  | 'Escape'
  | 'Tab'
  | 'ArrowUp'
  | 'ArrowDown'
  | 'ArrowLeft'
  | 'ArrowRight';

/**
 * The function `handleInputKeyPress` takes in a keyboard event, a key event type, and a callback
 * function, and executes the callback function if the key event matches the specified event type.
 * @param event - The `event` parameter is of type `KeyboardEvent<HTMLElement>`, which represents a
 * keyboard event that occurs on an HTML element. It contains information about the key that was
 * pressed, such as the `key` property which represents the key value.
 * @param {KeyEventType} eventType - The `eventType` parameter is the specific key event type that you
 * want to handle. It can be any valid key value such as "Enter", "Escape", "ArrowUp", etc.
 * @param callback - The `callback` parameter is a function that will be executed when the specified
 * key event type occurs.
 */
const handleInputKeyPress = (
  event: KeyboardEvent<HTMLElement>,
  eventType: KeyEventType,
  callback: () => void,
): void => {
  if (event.key === eventType) {
    callback();
  }
};

export default handleInputKeyPress;
