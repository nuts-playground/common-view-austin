import styled, { createGlobalStyle } from 'styled-components';
import React, { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Home } from './routes/home';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { isDarkAtom, startTextAtom } from './atoms';
import { ToDo } from './components/toDo/toDo';

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

}
a{
  text-decoration: none;
  color:inherit;
}
`;
const Container = styled.div`
    width: 100%;
`;
const StartText = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 150px;
    color: white;
    letter-spacing: 10px;
    font-weight: 700;
    transition: all 0.4s;
`;

function App() {
    const isDark = useRecoilValue(isDarkAtom);
    const startText = useRecoilValue(startTextAtom);
    const setStartText = useSetRecoilState(startTextAtom);
    useEffect(() => {
        setTimeout(() => {
            setStartText(false);
        }, 1000);
    }, []);

    return (
        <>
            <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
                <BrowserRouter>
                    <GlobalStyle />
                    <StartText style={startText ? { opacity: 1 } : { opacity: 0 }}>NOT WORKING</StartText>
                    <ToDo />

                    <Container style={startText ? { filter: 'blur(4px)' } : undefined}>
                        <Header />
                        <Routes>
                            <Route path="/" element={<Home />} />
                        </Routes>
                        <Footer />
                    </Container>
                </BrowserRouter>
            </ThemeProvider>
        </>
    );
}

export default App;
