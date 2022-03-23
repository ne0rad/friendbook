import { useEffect, useState, lazy, Suspense } from "react";
import { Container } from "@mui/material";
import { Routes, Route, useNavigate } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import { API_URL, THEME } from './config/config';
import { UserContext, CacheContext } from "./config/context";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import Loading from "./pages/Loading";
import axios from "axios";


const Main = lazy(() => import("./pages/Main"));
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const Logout = lazy(() => import("./pages/Logout"));
const Chat = lazy(() => import("./pages/Chat"));
const Messages = lazy(() => import("./pages/Messages"));
const Settings = lazy(() => import("./pages/Settings"));
const Me = lazy(() => import("./pages/Me"));

function App() {

  const [user, setUser] = useState(null);

  // Cache
  const [unreadChats, setUnreadChats] = useState(0);
  const [unreadNotifications, setUnreadNotifications] = useState(0);
  const [chatList, setChatList] = useState([]);
  const [chats, setChats] = useState({});
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();


  // Login with local storage token
  useEffect(() => {
    const storageToken = localStorage.getItem('token');
    axios.defaults.baseURL = API_URL;

    if (storageToken) {
      axios.post("/auth/token_login", { token: storageToken })
        .then((res) => {
          if (res.status === 200) {
            setUser({ username: res.data.username, token: res.data.token, _id: res.data._id });
            console.log(res.data)
            setChatList(res.data.chatList);
            setUnreadChats(res.data.unreadChats);

            axios.defaults.headers.common['Authorization'] = res.data.token;
          }
        })
        .catch((err) => {
          setUser(null);
          localStorage.removeItem('token');
        })
        .then(() => {
          setLoading(false);
        })

    } else {
      setLoading(false);
      setUser(null);
    }
  }, []);

  function login(token) {
    localStorage.setItem('token', token);
    window.location.reload();
  }

  function logout() {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/');
  }

  return (
    <ThemeProvider theme={THEME}>
      <UserContext.Provider value={user}>
        <CacheContext.Provider value={{
          chatList: chatList,
          unreadChats: unreadChats,
          unreadNotifications: unreadNotifications,
          chats: chats,

          updateUnreadChats: () => {
            const unread = chatList.filter(chat => chat.readBy.indexOf(user._id) === -1);
            if (unread) {
              setUnreadChats(unread.length);
            } else {
              setUnreadChats(0);
            }

          },

          updateUnreadNotifications: () => {
            // TODO update unread notifications
            setUnreadNotifications(unreadNotifications + 1);
          },

          updateChatList: (chatList) => {
            setChatList(chatList);
          },

          updateChats: (chatID, chat) => {
            let tempChats = { ...chats };
            tempChats[chatID] = chat;
            setChats(tempChats);
          },

          addMessage: (chatID, message) => {
            if (chats[chatID]) {
              let tempChats = { ...chats };
              tempChats[chatID].messages.push(message);
              setChats(tempChats);
            }
          }
        }}>
          <Navbar loading={loading} />
          <Container maxWidth="lg" sx={{ mt: 8, mb: 2, p: 1 }} align="center">
            {loading ? <Loading /> : (
              <>
                <Routes>

                  {user ?
                    // LOGGED IN
                    (<>
                      <Route path="/" element={<Suspense fallback={<Loading />}>
                        <Main />
                      </Suspense>} />
                      <Route path="/me" element={<Suspense fallback={<Loading />}>
                        <Me />
                      </Suspense>} />
                      <Route path="/settings" element={<Suspense fallback={<Loading />}>
                        <Settings />
                      </Suspense>} />
                      <Route path="/messages" element={
                        <Suspense fallback={<Loading />}>
                          <Messages />
                        </Suspense>} />
                      <Route path="/chat/:chatID" element={
                        <Suspense fallback={<Loading />}>
                          <Chat />
                        </Suspense>
                      } />
                      <Route path="/logout" element={<Suspense fallback={<Loading />}>
                        <Logout logout={logout} />
                      </Suspense>} />

                      {
                        // Not found is the main page
                      }
                      <Route path="*" element={<Suspense fallback={<Loading />}>
                        <Main />
                      </Suspense>} />

                    </>
                    ) :
                    // NOT LOGGED IN
                    (
                      <>
                        <Route path="/" element={<Suspense fallback={<Loading />}>
                          <Home />
                        </Suspense>} />

                        <Route path="/login" element={<Suspense fallback={<Loading />}>
                          <Login login={login} />
                        </Suspense>} />

                        <Route path="/signup" element={<Suspense fallback={<Loading />}>
                          <Signup login={login} />
                        </Suspense>} />
                        <Route path="*" element={<NotFound />} />
                      </>
                    )}
                </Routes>
              </>
            )}
          </Container>
        </CacheContext.Provider>
      </UserContext.Provider>
    </ThemeProvider>
  );
}

export default App;
