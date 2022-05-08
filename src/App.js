import './App.css';
import Sidebar from "./Components/Sidebar/Sidebar.js";
import Feed from "./Components/Feed/Feed.js";
import Widgets from "./Components/Widgets/Widgets.js";

function App() {
  return (
    <div className="app">
     
     
     {/*  Side Bar */}
     <Sidebar/>

     {/* Feed */}
     <Feed />


     {/* Widgets */}
     <Widgets/>

    </div>
  );
}

export default App;
