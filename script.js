// JavaScript code to fetch data from the API
fetch('http://127.0.0.1:5000/userdata')
  .then(response => response.json())
  .then(data => {
    // Call the function to create links from the API data
    createLinkList(data);
  })
  .catch(error => console.error('Error:', error));

// Function to create a list of links from the API data
function createLinkList(data) {
    const listContainer = document.getElementById('link-list'); // Assuming you have an element with id 'link-list' in your HTML
    const ul = document.createElement('ul');
  
    data.forEach(item => {
      const li = document.createElement('li');
      const link = document.createElement('a');
      link.href = item.title; // Assuming your API data has a property called 'linkUrl'
      link.textContent = item.user_data; // Assuming your API data has a property called 'linkText'
      li.appendChild(link);
      ul.appendChild(li);
    });
  
    listContainer.appendChild(ul);
  }


