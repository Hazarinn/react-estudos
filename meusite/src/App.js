import React from 'react';

const BemVindo = (props) =>{
    return(

        <div>
            <h2>Bem vindo {props.nome}</h2>
        </div>
    )

} 

function App(){
    return(
     <div>
         ola mundo
         <BemVindo nome ="Mateus"/>

         <h1>curso react</h1>
        
    </div>
    );
}

export default App;