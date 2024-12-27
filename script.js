// Fetch the JSON file and populate the table
fetch('participants.json')
  .then(response => response.json())
  .then(participants => {
    const tableBody = document.getElementById('participants-table-body');
    
    participants.forEach(participant => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${participant.name}</td>
        <td>${participant.motto}</td>
      `;
      tableBody.appendChild(row);
    });
  })
  .catch(error => console.error('Error loading participants:', error));
