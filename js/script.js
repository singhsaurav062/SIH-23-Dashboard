// Function to handle button clicks for all tasks
function handleButtonClick(button, isComplete) {
    const taskId = button.getAttribute('id'); // Get the button's ID
    const taskItem = document.querySelector(`#${taskId}`).closest('.task-item'); // Find the parent task item

    if (isComplete) {
        // Remove completed class from other complete buttons in the same task item
        taskItem.querySelectorAll('.complete-button').forEach(completeButton => {
            if (completeButton !== button) {
                completeButton.classList.remove('completed');
            }
        });

        // Remove not-completed class from all not complete buttons
        document.querySelectorAll('.not-complete-button').forEach(notCompleteButton => {
            notCompleteButton.classList.remove('not-completed');
        });
    } else {
        // Remove not-completed class from other not complete buttons in the same task item
        taskItem.querySelectorAll('.not-complete-button').forEach(notCompleteButton => {
            if (notCompleteButton !== button) {
                notCompleteButton.classList.remove('not-completed');
            }
        });

        // Remove completed class from all complete buttons
        document.querySelectorAll('.complete-button').forEach(completeButton => {
            completeButton.classList.remove('completed');
        });
    }

    button.classList.toggle(isComplete ? 'completed' : 'not-completed');
}

// Add click event listeners for all Complete buttons
document.querySelectorAll('.complete-button').forEach(completeButton => {
    completeButton.addEventListener('click', () => {
        handleButtonClick(completeButton, true);
    });
});

// Add click event listeners for all Not Completed buttons
document.querySelectorAll('.not-complete-button').forEach(notCompleteButton => {
    notCompleteButton.addEventListener('click', () => {
        handleButtonClick(notCompleteButton, false);
    });
});
