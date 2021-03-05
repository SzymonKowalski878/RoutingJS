import React from 'react';
import Manatee from "../Manatee/Manatee";
import Narwhall from "../Narwhall/Narwhall";
import Whale from "../Whale/Whale";
import {css,cx} from '@emotion/css';
import {
    BrowserRouter,
    Route,
    Switch,
    Link
} from 'react-router-dom';


export class App extends React.Component{
    render(){
        const WrapperStyle = css`
            padding:20px;
        `
        return(
            <div className={(css(WrapperStyle))}>
                <h1>Marine Mammals</h1>
                <BrowserRouter>
                    <nav>
                        <ul>
                            <li><Link to="/manatee">Manatee</Link></li>
                            <li><Link to="/narwhall">Narwhall</Link></li>
                            <li><Link to="/whale">Whale</Link></li>
                            {/*<li><Link to="/whale?type=beluga">Beluga Whale</Link></li>
                            <li><Link to="/whale?type=blue">Blue Whale</Link></li>*/}
                            <li><Link to="/whale/beluga">Beluga Whale</Link></li>
                            <li><Link to="/whale/blue">Blue Whale</Link></li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route path="/manatee">
                            <Manatee/>
                        </Route>
                        <Route path="/narwhall">
                            <Narwhall/>
                        </Route>
                        <Route path="/whale">
                            <Whale/>
                        </Route>
                        {/*<Route exact path="/whale">
                            <Whale/>
                        </Route>
                        <Route path="/whale/:type">
                            <Whale/>
                        </Route>*/}
                    </Switch>
                </BrowserRouter>     
            </div>

        )
    }
}

