import React from 'react'
import '../Components/Home.css'
import { Link } from 'react-router-dom';
import  { useState , useEffect } from 'react';


export const Home = () => {

	const [todos, setTodos] = useState([
		{ id: 1, text: 'Einkaufen gehen', completed: false },
		{ id: 2, text: 'Hausaufgaben machen', completed: false },
		{ id: 3, text: 'Auto waschen', completed: false },
	  ]);
	  const [newTodo, setNewTodo] = useState('');
	
	  const toggleCompletion = (id) => {
		setTodos(todos.map(todo =>
		  todo.id === id ? { ...todo, completed: !todo.completed } : todo
		));
	  };
	
	  const addTodo = () => {
		if (newTodo.trim() !== '') {
		  setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
		  setNewTodo('');
		}
	  };
	
    return (
<> 

  

  
<div className='Home'>    
  
	 <div className="Hinweise-Title">
    <h1>Hinweise : <p><h4> Um einen Kurs erfolgreich zu belegen, gibt es verschiedene Anforderungen, die erfüllt werden müssen. </h4></p></h1>
    </div>
    <body>

    
        <section class="creative-cards style-one">
		<div class="container">
			<div class="row">
			




			<div className="card-column">
				<div className="card-details">
					<div className="card-icons">
					<img className="light-icon" src="https://imgpanda.com/upload/ib/1yIWjyG41o.png" alt="icon" />
					</div>
					<h3>
					<a href="/page1">Grundlagen der nutzerorientierten Frontend-Entwicklung</a>
					</h3>
					<p>Sie müssen lediglich die Semesteraufgabe bearbeiten, um den Kurs zu belegen.</p>
					
					<Link className='buttom' to="/Page1"> Bearbeiten </Link>

				</div>
				</div>











				<div class="card-column">
					<div class="card-details">
						<div class="card-icons" >
							<img class="light-icon" src="https://imgpanda.com/upload/ib/Q4tSh2ctkH.png" alt="icon" />
						</div>
						<h3><a href="/page1">Mathematik für Informatik  </a></h3>
						<p>Lorem ipsum dolor sit amet, consectne auctor aliquet. Aenean sollicitudi bibendum auctor.</p>
						<Link className='buttom' to="/"> Bearbeiten </Link>

					</div>
				</div>

				<div class="card-column">
					<div class="card-details">
						<div class="card-icons" >
							<img class="light-icon" src="https://imgpanda.com/upload/ib/YQdOwN6IDJ.png" alt="icon" />
						</div>
						<h3><a href="/page1">Informatik </a></h3>
						<p>Lorem ipsum dolor sit amet, consectne auctor aliquet. Aenean sollicitudi bibendum auctor.</p>
						 
							<Link  className='buttom' to="/"  > Bearbeiten </Link>
						
						
					</div>
				</div>
			</div>
		</div>
	</section>
    </body>
    
	</div>


        </>
    )
}
