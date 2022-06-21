import { useContext } from "react";
import { UserInfo } from "./context/userInfo";
import HelloLicatThree from "./HelloLicatThree";

const HelloLicatTwo = () => {
    const {name, id} = useContext(UserInfo);
    return (
        <div>
            <h2>{name}</h2>
            <strong>{id}</strong>
            <HelloLicatThree />
        </div>
    );
};

export default HelloLicatTwo;