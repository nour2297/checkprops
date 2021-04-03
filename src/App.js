import logo from './logo.svg';
import './App.css';
import Profile from './profile/Profile';
const handleclick = (fullName) => alert(`${fullName}`)


function App() {

    return ( <
        div className = "App" >
        <
        Profile fullName = "Nour"
        bio = "Dev"
        profession = "student"
        handleclick = { handleclick } >
        <
        img src = "/logo192.png"
        alt = "" / >

        <
        /Profile> </div >
    );
}

export default App;