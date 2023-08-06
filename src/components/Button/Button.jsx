//library
import PropTypes from "prop-types"

//styles
import styled from "styled-components"

const StyledButton = styled.button`
    background-color: #011765;
    width: ${props => props.width};
    border-radius: 10px;
    border: none;
    padding: ${props => props.padding || '10px'};
    text-align: ${props => props.align || 'center'};
    color: ${props => props.color};
    cursor: pointer;
    align-items: center;
    display: flex;
    justify-content: center;
    font-size: ${props => props.fontSize}
`




export const Button = (props) => {

    return (
        <StyledButton {...props} onClick={props.onSubmit}>
            <img src={props.icon} alt="" />
            <span className="text-button">
                 {props.text}
            </span> 
        </StyledButton>
    )
}





Button.propTypes = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.string,
    onSubmit: PropTypes.func
}