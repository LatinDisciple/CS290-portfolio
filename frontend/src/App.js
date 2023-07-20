// dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// data
import products from './data/products.js';

// components and pages
import Nav from './components/Nav.js';
import HomePage from './pages/HomePage.js';
//import ContactPage from './pages/ContactPage.js';
import GalleryPage from './pages/GalleryPage.js';
import OrderPage from './pages/OrderPage.js';
import StaffPage from './pages/StaffPage.js';
import RecipebookPage from './pages/RecipebookPage.js';
import EditPage from './pages/EditPage.js';
import CreatePage from './pages/CreatePage.js';
import TopicsPage from './pages/TopicsPage.js';


// styles and images
import {GiBonsaiTree} from 'react-icons/gi';
import './App.css';

function App() {
    const [recipe, setRecipe] = useState([]);
    return (
        <BrowserRouter>
                    <header>
                        {/* <img src={logo} className="App-logo" alt="logo" /> */}
                        <h1>
                            Juan Rodriguez Gomez's Demo site
                            &nbsp;<i className="logo" alt="icon of bonsai tree"><GiBonsaiTree /></i>
                        </h1>
                    </header>
                    <Nav />
                    <main>
                        <section>
                            <Routes>
                                <Route path="/" exact element={<HomePage />} />
                                {/* <Route path="/contact" element={<ContactPage />} /> */}
                                <Route path='/topics' element={<TopicsPage />} />
                                <Route path="/gallery" element={<GalleryPage />} />
                                <Route path="/order" element={<OrderPage products={products} />} />
                                <Route path="/staff" element={<StaffPage />} />
                                <Route path="/recipes" element={<RecipebookPage setRecipe={setRecipe}/>} />
                                <Route path="/create" element={<CreatePage />} />
                                <Route path="/edit" element={<EditPage recipe={recipe} />} />
                            </Routes>
                        </section>
                    </main>

                    <footer>
                        <p>
                            &copy; 2023 Juan Rodriguez Gomez, All Rights Reserved.
                        </p>
                    </footer>
        </BrowserRouter>
    );
}

export default App;