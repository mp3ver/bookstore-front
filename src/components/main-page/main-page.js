import React from "react";
import {Container} from "reactstrap";
import Header from "../header/header";
import Catalog from "../catalog/catalog";
import {BrowserRouter, Switch, Route} from "react-router-dom";

const MainPage = () => {
    return (
        <Container>
            <Header />

            <BrowserRouter>
                <Switch>
                    <Route path="/">
                       <Catalog />
                    </Route>
                    <Route path="/author/:id">
                        <Catalog />
                    </Route>
                </Switch>
            </BrowserRouter>
        </Container>
    );
}

export default MainPage;