import "@/assets/styles/global.css";
import styles from "./App.module.css";

import { useApp } from "./context/AppContext";
// import { Routes, Route } from "react-router-dom";

import texts from "./constants/texts-langs/texts";

import Navigation from "./components/screens/navigation/Navigation";

import Welcome from "./components/screens/welcome/Welcome";
import Header from "./components/pages/home-header/Header";
import Home from "./components/pages/Home";

function App() {
  const { language, upButton, isOpenInvite } = useApp();

  return (
    <>
      <div
        className={`${styles.app} relative w-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center min-h-screen`}
      >
        <div
          className={`${styles.appContainer} mx-auto w-full bg-white relative overflow-hidden border border-gray-200 shadow-lg max-w-screen-md`}
          style={{ opacity: 1 }}
        >
          <Header texts={texts[language]} />

          {/* <main className="relative h-full w-full pb-[100px]"> */}
          {isOpenInvite ? (
            <>
              <Home texts={texts[language]} />
              <Navigation texts={texts[language]} />
            </>
          ) : (
            <>
              <Welcome texts={texts[language]} />
            </>
          )}
          {/* </main> */}

          {/* <hr className={styles.line}></hr>
          <div className={styles.footer}>
            <div onClick={upButton}>{texts[language].author}</div>
          </div> */}

          {/*  */}
        </div>
      </div>
    </>
  );
}

export default App;
