// / <<<<<<SUPABASE>>>>>>

const supabaseUrl = "https://ypzjiqjrqsagqkvkczow.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlwemppcWpycXNhZ3Frdmtjem93Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcxOTk2OTQsImV4cCI6MjA1Mjc3NTY5NH0.Tmsv-ZRDHgL3bJ0leeK2Sw2CcevuJK5eJS_83RcdMuU";
const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);
// console.log(supabaseClient);

const uldoc = document.getElementById("uldoc");
const ulname = document.getElementById("ulname");
const ulnum = document.getElementById("ulnum");
const uldate = document.getElementById("uldate");
const ultime = document.getElementById("ultime");
// console.log(uldate,uldoc,ulname,ulnum,ultime);


async function fetchdata() {
  const { data, error } = await supabaseClient.from("App").select();
 

  for (i = 0; i < data.length; i++) {
    // console.log(data[i]);
    const Doc = data[i].Doctor;
    const Name = data[i].Name;
    const Num = data[i].Pnumber;
    const date = data[i].Pdate;
    const time = data[i].Ptime;
    const id = data[i].id
    
    // console.log(data[i].id);

    const lidoc = document.createElement("li");
    const liname = document.createElement("li");
    const linum = document.createElement("li");
    const lidate = document.createElement("li");
    const litime = document.createElement("li");
    uldoc.appendChild(lidoc);
    ulname.appendChild(liname);
    ulnum.appendChild(linum);
    uldate.appendChild(lidate);
    ultime.appendChild(litime);
    lidoc.innerHTML += Doc;

    liname.innerHTML += Name;
    liname.setAttribute('class','cursor-pointer hover:font-bold')

    linum.innerHTML += Num;

    lidate.innerHTML += date;

    litime.innerHTML += time;

    liname.addEventListener('dblclick',async()=>{
      console.log(id);
      confirm('Do you want to delete this Appointment')
      const response = await supabaseClient
  .from('App')
  .delete()
  .eq('id', id)
  alert('delete')
      window.location.reload()
      
    })

  }

  
}

fetchdata();

