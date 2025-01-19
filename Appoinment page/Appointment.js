// <<<<<<SUPABASE>>>>>>

const supabaseUrl = "https://ypzjiqjrqsagqkvkczow.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlwemppcWpycXNhZ3Frdmtjem93Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcxOTk2OTQsImV4cCI6MjA1Mjc3NTY5NH0.Tmsv-ZRDHgL3bJ0leeK2Sw2CcevuJK5eJS_83RcdMuU";
const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);
console.log(supabaseClient);

const specialty = document.getElementById("expert");
const doctor = document.getElementById("doctor");
const pname = document.getElementById("PatientName");
const fname = document.getElementById("Fathername");
const page = document.getElementById("age");
const pgender = document.getElementById("gender");
const pemail = document.getElementById("email");
const pnumber = document.getElementById("number");
const paddress = document.getElementById("Address");
const pdate = document.getElementById("date");
const pcomment = document.getElementById("Comments");
const ptime = document.getElementById("time");

async function submitform() {
  const Ptime = ptime.value;
  const Specialty = specialty.value;
  const Doctor = doctor.value;
  const Name = pname.value;
  const Fname = fname.value;
  const Page = page.value;
  const Pgender = pgender.value;
  const Pemail = pemail.value;
  const Pnumber = pnumber.value;
  const Paddress = paddress.value;
  const Pdate = pdate.value;
  const Pcomment = pcomment.value;


  if (Ptime == "" || Specialty == "" || Doctor== "" || Name == "" || Fname == "" || Page == "" || Pgender == "" || Pemail == "" || Pnumber == "" || Paddress == "" || Pdate == ""
  ) {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Some Fields are missing!",
        footer: 'Kindly fill all fields'
      });
  } 

  const { error } = await supabaseClient
    .from("App")
    .insert({
      Name: Name,
      Fname: Fname,
      Page: Page,
      Pgender: Pgender,
      Pemail: Pemail,
      Pnumber: Pnumber,
      Paddress: Paddress,
      Pdate: Pdate,
      Pcomment: Pcomment,
      Ptime:Ptime,
      Specialty:Specialty,
      Doctor:Doctor
    });
    Swal.fire({
        title: "Your Appointment has been confirmed!",
        icon: "success",
        draggable: true
      });
      setInterval(()=>{
        window.location.href = '../homepage/home.html'
      },2000)
            
}

