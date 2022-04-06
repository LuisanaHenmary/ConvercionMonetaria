const Select = ({ options, ...rest }) => {

    return (

        <select {...rest}>
            {options.map((opt,i) => <option key={i}> {opt} </option>)}
        </select>

    )
}
export default Select;