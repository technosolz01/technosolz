
import { createTheme, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import './App.css';
import HomePage from './Components/HomePage';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { pdfjs } from 'react-pdf';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Contact from './Components/Contact';
import SolutionType from './Components/SolutionType';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Experience from './Components/Experience';
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();


function App() {
  useEffect(()=>{
    AOS.init();
  }, []);
  const theme = createTheme({
    breakpoints: {
      'xs':'320px',
      'sm':'476px',
      'md':'640px',
      'bs':'768px',
      'lg':'900px',
      'xl':'1024px',
      '2xl':'1280px'
    }
  })
  return (
    <BrowserRouter>
    <MantineProvider theme={theme}>
     <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/services' element={<SolutionType/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/skills' element={<Skills/>}></Route>
      <Route path='/work' element={<Projects/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/experience' element={<Experience/>}></Route>
     </Routes>
    </MantineProvider>
    </BrowserRouter>
  );
}

export default App;
