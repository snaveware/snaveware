import StyledPerson from "../../styled-components/styled-extra-components/Person.styled";
import Image from "next/image";
import EvansProfileImage from "../../public/EvansProfile.png";

const Person = ({ name, role }) => {
    return (
        <StyledPerson>
            <div className="person-inner-container">
                <Image
                    src={EvansProfileImage}
                    alt="Evans profile picture"
                    className="profile-image"
                />
                <div className="person-content">
                    <h3>{name}</h3>
                    <p>{role}</p>
                </div>
            </div>
        </StyledPerson>
    );
};

Person.defaultProps = {
    name: "Evans Munene",
    role: "Software Developer",
};

export default Person;
