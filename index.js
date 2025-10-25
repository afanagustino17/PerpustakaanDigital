 // DOM Elements
        const container = document.querySelector('.container');
        const loginRegisterContainer = document.getElementById('loginRegisterContainer');
        const homeContainer = document.getElementById('homeContainer');
        const loginForm = document.getElementById('loginForm');
        const registerForm = document.getElementById('registerForm');
        const loginLink = document.querySelector('.SignInLink');
        const registerLink = document.querySelector('.SignUpLink');
        const logoutBtn = document.getElementById('logoutBtn');
        const usernameDisplay = document.getElementById('usernameDisplay');

        // User data storage (in a real app, this would be on a server)
        let users = JSON.parse(localStorage.getItem('users')) || [];
        let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;

        // Check if user is already logged in
        if (currentUser) {
            showHomePage(currentUser.username);
        }

        // Toggle between Login and Register forms
        registerLink.addEventListener('click', (e) => {
            e.preventDefault();
            container.classList.add('active');
        });

        loginLink.addEventListener('click', (e) => {
            e.preventDefault();
            container.classList.remove('active');
        });

        // Handle Login Form Submission
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const username = document.getElementById('loginUsername').value;
            const password = document.getElementById('loginPassword').value;
            
            // Find user in the users array
            const user = users.find(u => u.username === username && u.password === password);
            
            if (user) {
                // Successful login
                currentUser = user;
                localStorage.setItem('currentUser', JSON.stringify(currentUser));
                showHomePage(user.username);
                showMessage('Login successful!', 'success');
                window.location.href = 'page2.html'
            } else {
                // Failed login
                showMessage('Invalid username or password!', 'error');
            }
        });

        // Handle Register Form Submission
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const username = document.getElementById('registerUsername').value;
            const email = document.getElementById('registerEmail').value;
            const password = document.getElementById('registerPassword').value;
            
            // Check if username already exists
            if (users.find(u => u.username === username)) {
                showMessage('Nama pengguna sudah ada!', 'error');
                return;
            }
            
            // Check if email already exists
            if (users.find(u => u.email === email)) {
                showMessage('Email sudah terdaftar!', 'error');
                return;
            }
            
            // Add new user
            const newUser = { username, email, password };
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));
            
            // Show success message and switch to login form
            showMessage('Berhasil daftar. Silahkan login.', 'success');
            container.classList.remove('active');
            
            // Clear form
            registerForm.reset();
        });

        // Handle Logout
        logoutBtn.addEventListener('click', () => {
            currentUser = null;
            localStorage.removeItem('currentUser');
            showLoginRegister();
            showMessage('Kamu sudah Logout.', 'success');
        });

        // Show Home Page
        function showHomePage(username) {
            loginRegisterContainer.style.display = 'none';
            homeContainer.style.display = 'flex';
            usernameDisplay.textContent = username;
        }

        // Show Login/Register Form
        function showLoginRegister() {
            homeContainer.style.display = 'none';
            loginRegisterContainer.style.display = 'block';
            loginForm.reset();
            registerForm.reset();
        }

        // Show Message
        function showMessage(text, type) {
            // Remove existing message if any
            const existingMessage = document.querySelector('.message');
            if (existingMessage) {
                existingMessage.remove();
            }
            
            // Create new message
            const message = document.createElement('div');
            message.className = `message ${type}`;
            message.textContent = text;
            document.body.appendChild(message);
            
            // Remove message after 3 seconds
            setTimeout(() => {
                message.style.opacity = '0';
                setTimeout(() => {
                    if (message.parentNode) {
                        message.parentNode.removeChild(message);
                    }
                }, 300);
            }, 3000);
        }

        // Fallback jika video tidak dapat dimuat
        document.getElementById('background-video').addEventListener('error', function() {
            // Ganti dengan video alternatif atau gambar
            this.src = "https://cdn.videvo.net/videvo_files/video/free/2013-08/large_watermarked/hd0092_preview.mp4";
        });
