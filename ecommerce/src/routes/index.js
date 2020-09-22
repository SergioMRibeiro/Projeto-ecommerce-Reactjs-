import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Categoria from '../pages/Categoria';
import Cliente from '../pages/Cliente';
import Funcionario from '../pages/Funcionario';
import Pedido from '../pages/Pedido';
import Produto from '../pages/Produto';

const Routes = () => (
<Switch>
    <Route path="/" component={() => <>Primeira Página</>} exact/>
    <Route path="/categoria" component={Categoria} />
    <Route path="/funcionarios" component={Funcionario} />
    <Route path="/cliente" component={Cliente} />
    <Route path="/pedido" component={Pedido} />
    <Route path="/produto" component={Produto} />
</Switch>
);

export default Routes;