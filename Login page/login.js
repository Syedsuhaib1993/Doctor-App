// <<<<<<SUPABASE>>>>>>

const supabaseUrl = "https://ypzjiqjrqsagqkvkczow.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlwemppcWpycXNhZ3Frdmtjem93Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcxOTk2OTQsImV4cCI6MjA1Mjc3NTY5NH0.Tmsv-ZRDHgL3bJ0leeK2Sw2CcevuJK5eJS_83RcdMuU";
const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);
console.log(supabaseClient);



// Form Elements
const signupForm = document.getElementById('signup-form');
const loginForm = document.getElementById('login-form');
const switchSignup = document.getElementById('switchSignUp');
const switchLogin = document.getElementById('switchLogin');

// Functions to switch between forms
switchSignup.addEventListener("click", () => {
    loginForm.classList.add("hidden");
    signupForm.classList.remove("hidden");
});

switchLogin.addEventListener('click', () => {
    loginForm.classList.remove('hidden');
    signupForm.classList.add('hidden');
});

// Signup Form Elements
const signup_user_name = document.getElementById("signup-name")
const signupEmail = document.getElementById('signup-email');
const signupPassword = document.getElementById('signup-password');
const signupBtn = document.getElementById('signup-btn');

// Signup Function
signupBtn.addEventListener('click', async () => {
    const user_name =signup_user_name.value
    const email = signupEmail.value;
    const password = signupPassword.value;
    

    if (!email || !password || !user_name ) {
        Swal.fire({
            title: "Oops...",
            text: "Please fill the required fields!",
            footer: 'First create an Account'
          });
        return;
    }

    const { data, error } = await supabaseClient.auth.signUp({ email, password , user_name });
    if (error) {
        alert(`Error: ${error.message}`);
    } else {
        Swal.fire("Signup successful!");
        console.log(data);
        signupEmail.value= ""
        signupPassword.value= ""
        signup_user_name.value= ""
        loginForm.classList.remove("hidden");
        signupForm.classList.add("hidden");

    }


    const { error: tableError, data: tableData } = await supabaseClient
    .from("users")
    .insert(
      [
        {
          user_name,
          uid: data.user.id
        }
      ]
    ).select()

    console.log(tableData)
});

// Login Form Elements
const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");
const loginBtn = document.getElementById("login-button");

// Login Function
loginBtn.addEventListener("click", async () => {
    const email = loginEmail.value;
    const password = loginPassword.value;

    if (!email || !password) {
        Swal.fire({
            icon: "error",
            text: "Enter Correct Email and Passwords!",
          });
        // alert("Please fill in both email and password");
        return;
    }

    const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });

    if (error) {
        alert(`Login Error: ${error.message}`);
        console.log(error);
    } else {
        Swal.fire("Login successful!");        
        window.location.href = '../homepage/home.html';
    }
}
);
