import React from 'react';
import { graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import Layout from '../components/layout';
import { css } from '@emotion/react';

const ImageBackground = styled(BackgroundImage)`
    height: 700px;
`;

export const query = graphql`
    query($slug: String!) {
    	allDatoCmsHabitacion(filter:{slug: { eq:$slug }}) {
    		nodes {
    			titulo
                contenido
                imagen{
    			fluid(maxWidth:1200){
    				...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
`;

const HabitacionTemplate = ({data: {allDatoCmsHabitacion: {nodes}}}) => {

    const {titulo, contenido, imagen} = nodes[0];

    return (
        <Layout>
            <main
                css={css`
                    margin: 0 auto;
                    max-width: 1200px;
                    width: 95%;
                `}
            >
                <h1
                    css={css`
                        text-align: center; 
                        margin-top: 4rem;
                    `}
                >{titulo}</h1>
                <p>{contenido}</p>
                <ImageBackground tag="section" fluid={image.sharp.fluid} fadeIn="soft" />
            </main>
        </Layout>
    )
}

export default HabitacionTemplate
