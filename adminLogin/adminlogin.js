// <<<<<<SUPABASE>>>>>>

const supabaseUrl = "https://ypzjiqjrqsagqkvkczow.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlwemppcWpycXNhZ3Frdmtjem93Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcxOTk2OTQsImV4cCI6MjA1Mjc3NTY5NH0.Tmsv-ZRDHgL3bJ0leeK2Sw2CcevuJK5eJS_83RcdMuU";
const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);
console.log(supabaseClient);



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

    if (email=='syedsuhaibali@gmail.com' && password==='suhaib123') {
        Swal.fire("Login successful!");
        setInterval(()=>{window.location.href = '../Admin/admin.html';},2000)        
            
    } else {
        Swal.fire("Wrong Email and Password!"); 
        console.log(error);
    }
}
)
