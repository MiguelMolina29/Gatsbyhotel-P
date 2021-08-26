import React from 'react';
import Header from './header';
import { Global, css } from '@emotion/react';
import { Helmet } from 'react-helmet';

const Layout = (props) => {
    return (
        <>
        <Global 
            styles={css`
                html {
                    font-size: 62.5%;
                    box-sizing: border-box;
                }
                *,*:before, *:after{ 
                    box-sizing: inherit;
                }
                body {
                    font-size: 18px;
                    font-size: 1.8rem;
                    line-height: 1.5;
                    font-family: Arial, Helvetica, sans-serif;
                }
                h1, h2, h3 {
                    margin: 0;
                    line-height: 1.5;
                }
                h1, h2 {
                    font-family: 'Rubik', sans-serif;
                }
                h3 {
                    font-family: Arial, Helvetica, sans-serif;
                }
                ul {
                    list-style: none;
                    margin: 0;
                    padding: 0;
                }
            `}
        />
            <Helmet>
                <title>Gatsby Hotel</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap" rel="stylesheet"/>
            </Helmet>

            <Header />
                {props.children}
        </>
    )
}

export default Layout
