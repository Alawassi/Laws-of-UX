



import React from 'react';
import { Link } from 'react-router-dom';
import './Page1.css'
import "../Abgabeaufgabe.pdf";
import "../Components/Done"
import { FaFilePdf } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.css'; //Bootstrap function import 



export const Page1 = () => {


    

  return (
    <>   

<div className='Page-Aufgabe'>      
    <nav class="navbar navbar-expand navbar-light bg-faded" >
    <div class="container">
        <div class="navbar-brand" >
            
        Um einen Kurs erfolgreich zu belegen, gibt es verschiedene Anforderungen, die erfüllt werden müssen.
        <p> Die Bewertung der Aufgabe wird im LSF freigegeben. </p>
       

     <li> Geöffnet: Freitag, 28. Juni 2024, 00:00 </li>     
     <li> Fällig: Freitag, 16. August 2024, 23:59</li>
  
     <ul></ul>

     <div className="downloadButtom " 
     href={require("../Abgabeaufgabe.pdf")} download="myFile"> <FaFilePdf />
        Download file</div>
        </div>
    </div>
</nav>

            
        <div className='main'>
        <header>
          
           

        </header>
        <h1>Laws of UX – Umsetzung und Wirkung </h1>
        <ul> </ul>
        <div className='Text-Aufgabe'>  
        <h2>Aufgabe</h2>
        <ul></ul>
                   <h5>  <p> 1. Wählen Sie aus einer  Liste ein „Law of UX“ und tragen Sie sich ein. 
                        Entwerfen Sie in zweier Teams das vorgegebene Basis Layout in zwei Versionen weiter:
                        <p> a) Darstellung Ihres Laws, </p>
           <p>   b) Gegendarstellung Ihres Laws.</p>
            </p>
            </h5>

            <h5>   <p>2. Entwickeln Sie ein Frontend auf Basis Ihrer Entwürfe. Begründen Sie die Wahl der technischen Umsetzung.</p>  </h5>
            <h5> <p> 3. Entwerfen Sie ein Evaluierungskonzept hinsichtlich 
               a) Eignung / b) Nicht-Eignung Ihres Entwurfs für Ihr Law Ihres Entwurfs. 
               Führen Sie eine Evaluierung durch. Begründen Sie Sie Wahl der durchgeführten Methode. </p></h5>

               <h5><p> 4. Diskutieren Sie Ihren Entwurf, ihr Ergebnis der Evaluierung und ordnen Sie es in die
                Bedeutung der Frontend Entwicklung ein.</p></h5>
                <h5><p> 5. Fassen Sie Ihre Ergebnisse der Aufgaben zusammen und laden Sie sich hoch (Details siehe nächste Seite). </p></h5>
       
     </div>
     </div>

<div className='answerbox'>
<h2>Ihre Antwort </h2>

<textarea 
placeholder="This is an awesome comment box" rows="20" name="comment[text]" 
id="comment_text" cols="40" class="ui-autocomplete-input" autocomplete="off" role="textbox" 
aria-autocomplete="list" aria-haspopup="true">



</textarea>


<div className='buttomPage'>
<input type="file" accept="input" onchange="previewFile()"/><br/>
</div> 


<div className='buttomPage'>

<Link className='buttom' to="/">Home</Link>

<Link type="button" className='buttom' to="/"  data-bs-toggle="modal" data-bs-target="#exampleModal">
Senden
</Link>


</div>

</div>
 
       
</div>


    </>

 

  );
};