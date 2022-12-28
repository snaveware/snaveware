import StyledPerson from "../../styled-components/styled-extra-components/Person.styled";

const Person = ({ name, role }) => {
    return (
        <StyledPerson>
            <div className="person-inner-container">
                <img
                    src="/evans-profile.png"
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
