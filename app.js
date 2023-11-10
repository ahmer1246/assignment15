//! Q NO 1 //

// Get the link element by its id
        var myLink = document.getElementById("myLink");

        // Add a click event listener to the link
        myLink.addEventListener("click", function() {
            // Display an alert when the link is clicked
            alert("You clicked the link!");
        });
        function showAlert(message) {
            alert(message);
        }
//! Q NO2 //
   // Function to show a modal with a custom message
   function showModal(message) {
    document.getElementById('modalMessage').innerHTML = message;
    document.getElementById('myModal').style.display = 'flex';
}

// Function to close the modal
function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}




//! Q NO 3 //

        const students = [
            { id: 1, name: 'John Doe', grade: 'A' },
            { id: 2, name: 'Jane Doe', grade: 'B' },
            { id: 3, name: 'Alice Smith', grade: 'C' },
            // Add more records as needed
        ];

        // Function to populate the table with student records
        function populateTable() {
            const tableBody = document.getElementById('studentTable').getElementsByTagName('tbody')[0];

            students.forEach(student => {
                const row = tableBody.insertRow();
                const cellID = row.insertCell(0);
                const cellName = row.insertCell(1);
                const cellGrade = row.insertCell(2);
                const cellAction = row.insertCell(3);

                cellID.innerHTML = student.id;
                cellName.innerHTML = student.name;
                cellGrade.innerHTML = student.grade;

                const deleteButton = document.createElement('button');
                deleteButton.innerHTML = 'Delete';
                deleteButton.addEventListener('click', function() {
                    deleteRow(row.rowIndex);
                });

                cellAction.appendChild(deleteButton);
            });
        }

           // Function to show a modal with a custom message
           function showModal(message) {
            document.getElementById('modalMessage').innerHTML = message;
            document.getElementById('myModal').style.display = 'flex';
        }

        // Function to close the modal
        function closeModal() {
            document.getElementById('myModal').style.display = 'none';
        }

        // Function to delete a row
        function deleteRow(rowIndex) {
            document.getElementById('studentTable').deleteRow(rowIndex);
        }

        // Populate the table when the page loads
        populateTable();






//! Q 4 //
             // Function to change the image source on mouseover
             function changeImage(newImage) {
                document.getElementById('changeImage').src = newImage;
            }
    
            // Function to reset the image to the original on mouseout
            function resetImage() {
                document.getElementById('changeImage').src = './New folder/a.PNG';
            }


//! Q NO 5

 // Initial counter value
 let counterValue = 0;

 // Function to increase the counter
 function increaseCounter() {
     counterValue++;
     updateCounter();
 }

 // Function to decrease the counter
 function decreaseCounter() {
     counterValue--;
     updateCounter();
 }

 // Function to update the counter value in the browser
 function updateCounter() {
     document.getElementById('counter').innerText = counterValue;
 }
