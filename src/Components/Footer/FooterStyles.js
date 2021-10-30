import styled from 'styled-components';

export const Box = styled.div`
padding: 50px 20px;
background: #4E555F;
bottom: 0;
width: 100%;


@media (max-width: 1000px) {
	padding: 70px 30px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items : space-evenly;
	max-width: 1000px;
	margin: 0 auto;
	/* background: red; */
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 20px;
width : max-content !important;
`;

export const Para = styled.div`
height : 20px;
width : max-content;
`;

export const Row = styled.div`
display: flex;
align-content: center;
justify-content: space-around;
align-items: start;
flex-direction: row;
flex-wrap: wrap;

${'' /* @media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
} */}
`;

export const FooterLink = styled.a`
color: #fff;
margin-bottom: 20px;
font-size: 18px;
text-decoration: none;
font-size: 1rem;
&:hover {
	color: green;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 1.2rem;
color: #59EDFF;
margin-bottom: 40px;
font-weight: bold;
`;
