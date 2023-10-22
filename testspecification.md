# Testspecification

## Test case 1.1: Successfully create a new task  
Issue: #1 (Create a task)

**Test steps:**
- Run the app (npm run dev)
- Fill out the “create new task” form:  
	-> Task name = “test”  
	-> Task description = “test”  
	-> Due by: 2023-10-30  
	-> Hour: 1  
	-> Minute: 1  
- Click on “create”

**Expected:**
- A task is shown under “your tasks” with the information that was filled in.

## Test case 1.2: Try to create task with invalid information
Issue: #1 (Create a task)  

**Test steps:**  
- Run the app (npm run dev)
- Fill out the “create new task” form:  
	-> Task name = “test”  
	-> Task description = “test”  
	-> Due by: 2023-10-30  
	-> Hour: 25  
	-> Minute: 1  
- Click on the create button  

**Expected:**
- A new task is not created
- “Value be less than or equal to 23” is shown by the hour input field  

## Test case 2.1: Open edit task menu
Issue: #2 (Edit a task)

**Test steps:**
- Test case 1.1
- Click on “edit” on the newly created task  

**Expected:**  
- “Edit the task” form shows on the middle of the screen
- The current task information is shown inside the form input fields
- The background behind the edit task form is darkened  

## Test case 2.2: Cancel edit task
Issue: #2 (Edit a task)

**Test steps:** 
- Test case 2.1
- Click on the cancel button  

**Expected:**  
- The edit task form disappears from the screen
- The darkened background disappears

## Test case 2.3: Edit task
Issue: #2 (Edit a task)

**Test steps:** 
- Test case 2.1
- Fill out the edit task form:  
	-> Task name = “test edit”  
	-> Task description = “test the edit”  
	-> Due by: 2023-10-31  
	-> Hour: 2  
	-> Minute: 2  
- Click on the edit button  

**Expected:**  
- The edit task form disappears from the screen
- The darkened background disappears
- The new task information is shown on the task

## Test case 3: Check off a task
Issue: #3 (Check off a finished task)

**Test steps:**  
- Test case 1.1
- Click on the box in the test
- Refresh the page  

**Expected:**  
- The checkbox in the task is checked

## Test case 4.1: Open delete task menu
Issue: #10 (Delete a task)

**Test steps:**  
- Test case 1.1
- Click on the delete button on the created task  

**Expected:**  
- A window saying “are you sure you want to delete this task?” with a yes and no button is shown
- The background behind the window is darkened.  

## Test case 4.2: Cancel delete task
Issue: #10 (Delete a task)

**Test steps:**  
- Test case 3.1
- Click on the no button  

**Expected:**  
- The window about deleting a task disappears
- The darkened background disappears

## Test case 4.3: Delete a task
Issue: #10 (Delete a task)  

**Test steps:**   
- Test case 3.1
- Click on the yes button  

**Expected:**  
- The window about deleting a task disappears
- The darkened background disappears
- The task disappears from under “your tasks”

## Test case 5: Random student meme  
Issue: #5 (Fun student memes)  

**Test steps:**  
- Run the app (npm run dev)
- Refresh the page

**Expected:**  
- Every time the page is refreshed, a different meme is shown next to the create a new task form
