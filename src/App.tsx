import styled, { createGlobalStyle } from 'styled-components';
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { useRecoilValue } from 'recoil';
import { isDarkAtom } from './atoms';

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');
  html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
}
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
*[hidden] {
    display: none;
    
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
*{
  box-sizing:border-box;
}
body{
  font-family: "Source Sans 3", sans-serif;
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.bgColor};
  transition: all 0.2s
}
a{
  text-decoration: none;
  color:inherit;
}
`;

function App() {
    const isDark = useRecoilValue(isDarkAtom);
    return (
        <>
            <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
                <BrowserRouter>
                    <GlobalStyle />
                    <Header />
                    <Routes>
                        <Route path="/" element={<h1 style={{ marginTop: '100px', height: '700px' }}>Main</h1>} />
                        <Route path="/sub" element={<h1 style={{ marginTop: '100px', height: '700px' }}>Sub</h1>} />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </ThemeProvider>
        </>
    );
}

export default App;
