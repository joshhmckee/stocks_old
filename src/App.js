import { useState } from 'react'
import axios, { Axios } from "axios";
import logo from './logo.svg';
import './App.css';
import Form from 'react-bootstrap/Form';

function App() {

  // const [profileData, setProfileData] = useState(null)

  // async function getData() {
  //   // Get data from the flask backend
  //   try {
  //     const res = await axios.get('/profile');
  //     const data = res.data;
  //     console.log(data);
  //     setProfileData(({
  //       profile_name: data.name,
  //       about_me: data.about
  //     }));
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>

  //       {/* new line start*/}
  //       <p>To get your profile details: </p><button onClick={getData}>Click me</button>
  //       {profileData && <div>
  //             <p>Profile name: {profileData.profile_name}</p>
  //             <p>About me: {profileData.about_me}</p>
  //           </div>
  //       }
  //        {/* end of new line */}
  //     </header>
  //   </div>
  // );

  return (
    <div style={{
      'background-color': ` #D9AFD9`,
      'background-image': `linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)`,
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
      }}>
        <Form>
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="enter ticker..." />
            <Form.Text className="text-muted" />
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}

export default App;