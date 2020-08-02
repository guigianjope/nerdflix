import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Link } from 'react-router-dom';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';


// Colocar um jogo nessa página: https://www.youtube.com/watch?v=jOAU81jdi-c :)

const Pagina404 = () => (
 <div>
   <h1>Página 404 - Está não é a página que você procura!!</h1>
   <Link to="/"> Voltar para HOME</Link>
</div>
)

// Usando Roteamento (single page application SPA)
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
