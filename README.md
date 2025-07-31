Rock, Paper and Scissors game from the Foundations Course of The Odin Project.

Documentation given by Copilot :

Certainly! Here’s a summary of the issues, help, and fixes discussed for your "Rock, Paper, Scissors" code:

---

### **Problems Identified**

1. **Function vs. Function Call Confusion**
   - Sometimes you passed the function itself (e.g., `humanSelection`) instead of calling it (e.g., `humanSelection()`), causing errors and unexpected behavior.

2. **Case Sensitivity**
   - User input was not always handled in a case-insensitive way, which could cause valid answers like "Rock" or "ROCK" to be ignored.

3. **Prompt Called Multiple Times**
   - The prompt appeared more than once per round because `getHumanChoice()` was called in multiple places.

4. **Score Not Incrementing**
   - The score variables (`humanScore`, `computerScore`) were not being updated because the function responsible for updating them was not always called correctly.

5. **TypeError: .toLowerCase is not a function**
   - This error happened because a function (not a string) was passed to `playRound`, so `.toLowerCase()` could not be called.

6. **Score Variables Not Defined**
   - If `humanScore` and `computerScore` are not in the correct scope (e.g., if `playRound` is moved outside `playGame`), you get a "not defined" error because those variables are not accessible where you try to use them.

---

### **Help and Explanations Provided**

- Explained the difference between passing a function and calling a function.
- Clarified how to make user input case-insensitive.
- Pointed out why the prompt was being called multiple times.
- Explained why the score was not incrementing.
- Diagnosed the `.toLowerCase is not a function` error and its cause.
- Explained JavaScript variable scope and why `humanScore`/`computerScore` might be "not defined" if not in the right place.

---

### **Fixes Suggested**

1. **Always Call Functions to Get Values**
   ```javascript
   playRound(humanSelection(), computerSelection());
   ```
   Instead of:
   ```javascript
   playRound(humanSelection, computerSelection);
   ```

2. **Make Input Case-Insensitive**
   ```javascript
   humanChoice = humanChoice.toLowerCase();
   ```

3. **Prompt Only Once Per Round**
   - Only call `getHumanChoice()` inside the loop, not outside or inside `playRound`.

4. **Ensure Score Updates**
   - Make sure `playRound` is called with the correct arguments so the score logic runs.

5. **Avoid Passing Functions Instead of Strings**
   - Always pass the result of the function call, not the function itself.

6. **Keep Score Variables in the Correct Scope**
   - Define `humanScore` and `computerScore` in a scope accessible to where you increment them (ideally at the top level of your script).

---

**Summary:**  
You learned to call your input functions correctly, handle case sensitivity, avoid double prompts, ensure your score logic works by passing the right values, and keep your score variables in the correct scope so they can be updated and accessed as needed.


RPS-UI BRANCH :

Help given by Copilot when i was stuck :

Certainly! Here’s a summary of the modifications and what was wrong:

### What Was Wrong
- You tried to use `buttons.addEventListener`, but `buttons` is a NodeList, not a single button element. NodeLists don’t have an `addEventListener` method.
- Your code may not have worked if the script was loaded before the DOM was ready, causing `querySelectorAll` and `querySelector` to return `null` or empty results.

### Modifications Made
1. **Event Listener Fix:**  
   You replaced `buttons.addEventListener` with a `forEach` loop:
   ```javascript
   buttons.forEach(button => {
       button.addEventListener("click", function() {
           const playerSelection = button.value;
           playRound(playerSelection, computerSelection());
       });
   });
   ```
   This attaches a click event to each button individually.

2. **Script Placement:**  
   You moved your `<script src="rock-paper-scissors.js"></script>` to the end of the `<body>` in your HTML file.  
   This ensures the DOM is fully loaded before your script runs.

### What You Must Do to Fix
- Always use a loop (like `forEach`) to add event listeners to multiple elements selected with `querySelectorAll`.
- Place your script tag at the end of the `<body>` or use a `DOMContentLoaded` event to ensure DOM elements are available when your script runs.

These changes ensure your game works as expected: clicking a button plays a round and updates the result in the `.results` div.