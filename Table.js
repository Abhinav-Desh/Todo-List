



function func(first,last){
    return first+" " +last;
}
async function fetchData(){
   
        try {
            const response = await fetch('Person.json');
            const data = await response.json();
    
            const tableBody = document.getElementById('table-body');
    

            // BUT MAP IS NOT RELIABLE BECAUSE WE DIDNT RETURN ANYTHING HERE
            data.map(person => { 
                const row = document.createElement('tr');
    
                row.innerHTML = `
                    <td>${person.id}</td>
                    <td>${person.firstName}</td>
                    <td>${person.lastName}</td>
                      <td>${func(person.firstName,person.lastName)}
                    <td>${person.mobileNumber}</td>
                    <td>${person.location}</td>
                `;
    
                tableBody.appendChild(row);
            });
        } catch (error) {
            console.log("Error fetching data:", error);
        }
    }
    
    fetchData();
    
    