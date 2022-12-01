// webpack 설정을 통하여 src/index.js 가 entry 포인트로 가장 먼저 실행됨
import React from "react";
import './index.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { RenderAfterNavermapsLoaded } from "react-naver-maps";
import { Provider } from "react-redux";
import {legacy_createStore} from "redux";
import rootReducer from "./modules";
import { composeWithDevTools } from "redux-devtools-extension";

const store = legacy_createStore(rootReducer, composeWithDevTools());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <RenderAfterNavermapsLoaded ncpClientId={"n4rdn701ap"}>
        <App />
      </RenderAfterNavermapsLoaded>
    </BrowserRouter>
  </Provider>
);
