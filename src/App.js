import { ChatEngine} from 'react-chat-engine';
// import logo from 'axios';
// import logo from 'antd';
import './App.css';
import ChatFeed from './components/ChatFeed';


const projectID = process.env.PROJECT_ID;
const userName = process.env.USER_NAME;
const userSecret = process.env.USER_SECRET;

function App() {
  return (
    <ChatEngine
    height="100vh"
    projectID="b8a98fc9-99b3-4d8d-89b6-e9c7ac82fca0"
    userName="Ugwu"
    userSecret="secret"
    renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
