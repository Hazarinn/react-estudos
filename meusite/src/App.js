import React, {Component} from 'react';
import Feed from './components/Feed';

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            nome:'',
            email: '',
            senha: '',
            error:''
           
        }

        this.cadastrar = this.cadastrar.bind(this)
        
    }

    cadastrar(event) {
        const {nome, email,senha} = this.state;

        if(nome !== '' && email!== '' && senha !== '' ){
            alert(`Nome ${nome} \nEmail: ${email} \nSenha: ${senha}`)
        }else{

            this.setState({error:'ops, parece que está faltando algo'})

        }
        

        event.preventDefault();
    }

    
    
    
     render() {
        return (
            <div> 

                    <h1>Novo Usuário</h1>
                    {this.state.error && <p>{this.state.error}</p>}

                    <form onSubmit={this.cadastrar}>
                        <label>Nome:</label>
                        <input type="text" value={this.state.nome} 
                        onChange={(evento)=> this.setState({nome: evento.target.value})}/>
                        <br/>

                        <label>Email: </label>

                        <input type="email" value={this.state.email}
                        onChange={(evento) => this.setState({email: evento.target.value})}/>
                        <br/>

                        <label>Senha:</label>

                          <input type="password" value={this.state.senha}
                          onChange={(evento) => this.setState({senha: evento.target.value})}/>
                          <br/>

                          <button type="submit">Cadastrar</button>
                   </form>

            </div>
        );
    }
}

export default App;
