import TechnologiesData from "../../data/TechnologiesData";
import StyledTechnologies from "../../styled-components/styled-extra-components/Technologies.styled";

const Technologies = () => {
    return (
        <StyledTechnologies>
            <h3 className="heading">Technologies</h3>
            <div className="technologies-container">
                {TechnologiesData.map((technology, index) => {
                    return (
                        <div key={index} className="technologies-item">
                            <img
                                alt={technology.name}
                                src={`/technologies${technology.logo}`}
                            />
                            <h3> {technology.name} </h3>
                        </div>
                    );
                })}
            </div>
        </StyledTechnologies>
    );
};

export default Technologies;
