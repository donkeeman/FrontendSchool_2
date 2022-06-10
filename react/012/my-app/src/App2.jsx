import styled from "styled-components";

const ContentDiv = styled.div`
  margin: 40px;
`;

const ContentH2 = styled.h2`
color: ${({name}) => (name === 'hello'? `red` : `black`)};
width: 200px;
margin: 0 auto;
text-align: center;
`;

const App = () => {
  return(
  <ContentDiv>
    <ContentH2>Hello world</ContentH2>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati reiciendis fugiat aliquid, doloribus optio accusamus consectetur dignissimos eum amet quisquam molestias dolore officiis recusandae voluptates facilis ipsa! Quos, recusandae iste.
  </ContentDiv>
  );
};

export default App;