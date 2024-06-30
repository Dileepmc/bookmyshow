import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Store from './Store/Store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import RootLayout from './routes/RootLayout';
import Errorpage from './Errorpage';
import MoviePage from './routes/MoviesPage';
import HomePage, {loader as homeLoader}from './routes/HomePage';
import Singlemoviepage, {loader as singlemovieLoader} from './routes/Singlemoviepage';
import SelectShowPage, {loader as  SelectshowLoader} from './routes/SelectShowPage';
import SelectSeats, {loader as SelectSeatsLoader} from './routes/SelectSeats';
import { Provider } from 'react-redux';
import BookingSummary from './routes/BookingSummary';



const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    errorElement: <Errorpage/>,
    children:[
      {
        path: "/",
        element: <HomePage/>,
        loader: homeLoader
      },
      {
        path: "/movies",
        element: <MoviePage/>
      },
      {
        path: "movies/:movieId",
        element: <Singlemoviepage/>,
        loader: singlemovieLoader 
      },
      {
        path: "/select-show/:movieId",
        element: <SelectShowPage/>,
        loader: SelectshowLoader
      },
      {
        path: "/select-seats/:showId",
        element: <SelectSeats/>,
        loader: SelectSeatsLoader
      },
      {
        path: "Booking-Summary",
        element: <BookingSummary/>
      }
    ]
  },
 
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={Store}>
        <RouterProvider router={router} />
        </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
