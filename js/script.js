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


//pop-box
// Get all project details elements by class name
const projectDetailsList = document.querySelectorAll('.extreme');

// Loop through each project details element
projectDetailsList.forEach((projectDetails, index) => {
  // Generate unique IDs for each popup and popup close element
  const popup = document.getElementById(`popup-${index + 1}`);
  const popupClose = document.getElementById(`popup-close-${index + 1}`);

  // Add a click event listener to open the popup
  projectDetails.addEventListener('click', () => {
    console.log(`Clicked project details ${index + 1}`);
    popup.style.display = 'block';
  });

  // Add a click event listener to close the popup
  popupClose.addEventListener('click', () => {
    popup.style.display = 'none';
  });
});

