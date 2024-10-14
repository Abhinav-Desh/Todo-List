document.getElementById('myForm').addEventListener('submit', submitForm);

async function submitForm(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('pwd').value;

    
        try {


            const response = await fetch('data.json');
            const users = await response.json();
 b
            
            const user = users.find(user => user.email === email);
            
     if (user) {
                const hashedPassword = CryptoJS.SHA256(password).toString();
                // console.log(hashedPassword);

                // Check if the hashed password matches
                if (hashedPassword === user.password) {
                    alert('Login successful!' + `Hi ${user.name}`);
                  
                } else {
                    alert('Invalid password.');
                }
            } else {
                alert('User not found.');
            }
     } catch (error) {
            console.error('Error fetching user data:', error);
        }
}
