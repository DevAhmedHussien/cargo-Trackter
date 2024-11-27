import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import CargoTable from './components/CargoTable';
import CargoForm from './components/CargoForm';
import StatusFilter from './components/StatusFilter';

function App() {
  return (
    <Provider store={store}>
      <div className="container py-4">
        <div className="row mb-4">
          <div className="col">
            <h1 className="display-4">Система отслеживания грузов</h1>
          </div>
        </div>
        
        <div className="row">
          <div className="col">
            <StatusFilter />
            <CargoTable />
            <CargoForm />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;