import "./header.css";
import Menu from "../menu/Menu";

const Header = ({id, username}) => {
    return (
        <div className="test">
        header, {username}({id})님 반갑습니다.
        <Menu />
      </div>
    );
}

export default Header;