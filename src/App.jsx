import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/navbar';
import Counter from './components/Counter';
import Panier from './components/Panier';

const Hello = React.lazy(() => import('./components/hello'));
const Products = React.lazy(() => import('./components/Products'));
const NotFound = React.lazy(() => import('./components/NotFound'));
const Events = React.lazy(() => import('./components/Events'));
const AddEvent = React.lazy(() => import('./components/addEvents'));
const EventList = React.lazy(() => import('./components/EventList'));

function App() {
  return (
    <div className="app-container">
      <NavigationBar />
      
      <main className="main-content">
        <Suspense fallback={<div className="loading-spinner">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Hello />} />

            <Route path="/hello" element={<Hello />} />
            <Route path="/products" element={<Products />} />
            <Route path="/events" element={<Events />} />
            <Route path="/AddEvent" element={<AddEvent />} />
            <Route path="/event-list" element={<EventList />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Counter/>
        <Panier/>
      </main>
    </div>
    
  );
}

export default App;