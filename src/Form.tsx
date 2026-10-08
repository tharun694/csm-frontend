import React,{useState} from 'react';
function Form(){

  
  const[name,setName]=useState('');
  const[email,setEmail]=useState('');
const[issue,setIssue]=useState('');
 
  
  async function adduser(event:React.FormEvent<HTMLFormElement>){

  event.preventDefault();
  if(name===''||email===''||issue===''){
    alert("fill the details first");
  }
  const user={
    name,
    email,
    issue
  }
  console.log(user)
const response=  await  fetch(
  'https://csm-4.onrender.com/user',{
'method':'POST',
'headers':{
  'Content-Type':'application/json'
},
'body':JSON.stringify(user)
  }
)

if(response.ok){
alert(" Thank you for your issue, It sended sucesfully wait for few seconds...! , check your email for response")
}else{
  alert(" issues sended failed")
}


}
  return (
  
<div
  id="container"
  style={{
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f6f8",
    padding: "20px",
    boxSizing: "border-box"
  }}
>
  <form
    onSubmit={adduser}
    style={{
      width: "100%",
      maxWidth: "420px",
      boxSizing: "border-box",
      padding: "32px",
      backgroundColor: "#ffffff",
      borderRadius: "12px",
      boxShadow: "0 8px 30px rgba(0, 0, 0, 0.08)",
      display: "flex",
      flexDirection: "column",
      gap: "10px"
    }}
  >
    <h2
      style={{
        margin: "0 0 5px",
        color: "#1f2937",
        fontSize: "24px"
      }}
    >
      Report an Issue
    </h2>

    <p
      style={{
        margin: "0 0 20px",
        color: "#6b7280",
        fontSize: "14px"
      }}
    >
      Tell us what went wrong and we'll look into it.
    </p>

    <label
      htmlFor="name"
      style={{
        fontSize: "14px",
        fontWeight: "600",
        color: "#374151"
      }}
    >
      Name
    </label>

    <input
      type="text"
      id="name"
      placeholder="Enter your name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      style={{
        width: "100%",
        boxSizing: "border-box",
        padding: "12px",
        border: "1px solid #d1d5db",
        borderRadius: "7px",
        fontSize: "14px",
        outline: "none",
        marginBottom: "10px"
      }}
    />

    <label
      htmlFor="email"
      style={{
        fontSize: "14px",
        fontWeight: "600",
        color: "#374151"
      }}
    >
      Email
    </label>

    <input
      type="email"
      id="email"
      placeholder="you@example.com"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      style={{
        width: "100%",
        boxSizing: "border-box",
        padding: "12px",
        border: "1px solid #d1d5db",
        borderRadius: "7px",
        fontSize: "14px",
        outline: "none",
        marginBottom: "10px"
      }}
    />

    <label
      htmlFor="issues"
      style={{
        fontSize: "14px",
        fontWeight: "600",
        color: "#374151"
      }}
    >
      Describe the issue
    </label>

    <textarea
      id="issues"
      rows={7}
      placeholder="Please describe what happened..."
      value={issue}
      onChange={(e) => setIssue(e.target.value)}
      style={{
        width: "100%",
        boxSizing: "border-box",
        padding: "12px",
        border: "1px solid #d1d5db",
        borderRadius: "7px",
        fontSize: "14px",
        resize: "vertical",
        outline: "none",
        marginBottom: "10px"
      }}
    />

    <button
      type="submit"
      style={{
        width: "100%",
        padding: "12px",
        border: "none",
        borderRadius: "7px",
        backgroundColor: "#2563eb",
        color: "white",
        fontSize: "15px",
        fontWeight: "600",
        cursor: "pointer",
        marginTop: "5px"
      }}
    >
      Submit Issue
    </button>
  </form>
</div>
  )
}
export default Form;