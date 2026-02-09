import {useState} from "react";

export default function ContactForm(){
 const [msg,set]=useState("");

 return(
 <form onSubmit={e=>{e.preventDefault();set("Sent!")}}>
  <input required placeholder="Name"/>
  <input required placeholder="Email"/>
  <button>Send</button>
  {msg}
 </form>
 )
}