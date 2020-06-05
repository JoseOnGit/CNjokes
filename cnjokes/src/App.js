import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import './App.css';

import Routes from "./routes";
import Layout from './components/layout/Layout';

const App = () => (
  <Layout>
    <Router>
      <Routes />
    </Router>
  </Layout>
);

export default App;
