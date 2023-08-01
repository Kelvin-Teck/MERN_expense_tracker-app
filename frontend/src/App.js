import {useMemo} from 'react';
import styled from 'styled-components';
import bg from './img/bg.png'
import {MainLayout} from './styles/Layouts';
import Orb from './components/Orb/Orb';
import HomeScreen from './screens/HomeScreen';
import AuthScreen from './screens/AuthScreen';


function App() {
  const loggedin = true;

  const orbMemo = useMemo(() => {
    return <Orb />
  }, []);

  return (
    <>

      <AppStyled bg={bg} className="App">
        {orbMemo}
        <MainLayout>
          {loggedin ? <HomeScreen /> : <AuthScreen />}
        </MainLayout>
      </AppStyled>
    </>
  );
}


const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${ props => props.bg});
  position: relative;
`;

export default App;
