import "./App.css";
import ChatInterface from "./component/chatInterface";
import Header from "./component/header";

function App() {
  return (
    <div className="chatApp">
      {/* // Header */}
      <Header />
      {/* // Chat Interface */}
      <ChatInterface />
      {/* // Footer */}
    </div>
  );
}

export default App;
