import "./homepage.css"
import Header from "../../components/header/Header";
import Main from "../../components/main/Main";
import Footer from "../../components/footer/Footer";

export default function Homepage({id, username}) {
    return (
        <div>
        <Header id={id} username={username}/>
        <Main />
        <Footer />
        </div>
    );
}