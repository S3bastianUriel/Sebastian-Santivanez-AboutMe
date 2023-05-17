import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import Projects from '../pages/Projects';
import Layout from '../containers/Layout';
import AboutMe from '../pages/AboutMe';
// import Home from '../pages/Home';
// import '../styles/global.scss';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    {/* <Route exact path="/" element={<Home />} />                 */}
				    <Route exact path="/" element={<AboutMe />} />
                    {/* <Route exact path="/projects" element={<Projects />} /> */}

                    {/* <Route path="*" element={<NotFound />} /> */}
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
