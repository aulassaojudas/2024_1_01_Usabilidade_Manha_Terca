import React, { Suspense, lazy } from "react";
import "./App.css";

import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import Aside from "./componentes/Aside";

import { Routes, Route } from "react-router-dom";

// Importação do JSON de configuração das rotas
import routesConfig from "./jsondata/menuLinks.json";

// Função para carregar componentes dinamicamente com base no nome
const lazyLoadComponent = (componentName) => lazy(() => import(`./paginas/${componentName}`));

function App() {
  return (
    <div>
      <div className="displayFlex">
        <Header />
        <main>
          <Aside />
          <article>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                {routesConfig.map((route) => (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={React.createElement(lazyLoadComponent(route.component))}
                  />
                ))}
              </Routes>
            </Suspense>
          </article>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;