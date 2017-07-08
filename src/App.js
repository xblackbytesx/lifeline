// import React, { Component } from 'react';
// import {Switch, Route, Link} from 'react-router-dom';
//
// // import AppHeader from './components/header';
// import HomePage from './pages/home';
// import AboutPage from './pages/about';
// import NotFound from './pages/404'
//
// // Static assets
// import './styles/lifeline.css';
//
// // const history = useRouterHistory(createBrowserHistory)({
// //     basename: '/'
// // });
//
// class App extends Component {
//
//   render() {
//     return <Switch>
//         <Route exact path='/' component={HomePage}/>
//         <Route path='/about' component={AboutPage}/>
//         <Route path='/404' component={NotFound}/>
//     </Switch>
//   }
// }
//
// export default App;


import React, { Component } from 'react';
import HomePage from './pages/home'

// Static assets
import './styles/lifeline.css';

class App extends Component {
    render() {
        return (
            <div className="app">
                <HomePage />
            </div>
        );
    }
}

export default App;
