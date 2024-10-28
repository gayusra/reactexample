import logo from './logo.svg';
import './App.css';
import Propss from './components/Propss';
import StateDemo from './components/StateDemo';
import EffectDemo from './components/EffectDemo';
import Userefdemo from './components/Userefdemo';
import Jsxdemo from './components/Jsxdemo';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Events from './components/Events';
import Todo from './components/Todo';
import Useref2 from './components/Useref2';
import Forms from './components/Forms';


function App() {
  const userData = {
    name:"Aksra",
    age:25,
    phone:1234456789,
    email:"example@gmail.com"
  }
  return (
    <div>
      {/*<StateDemo/>*/}
      {/* <EffectDemo/> */}
     {/* <Userefdemo/> */}
    {/*  <Useref2/> */}
      {/*  <Jsxdemo/> */}
     {/*  <Header/>
      
      <Footer/> */}

    {/*   <Events/> */}
    {/* <Content/> */}

    <Forms/>
    

     
     {/*<Propss {...userData}/>
      <Propss myname='gayathri'/>*/}
      {/*<Propss propname={userData.name} propage={userData.age} propphone={userData.phone} propemail={userData.email}/>*/}
    </div>
  );
}

export default App;
