import Input from "./Input"
import Select from "./Select"
import "./Field.css"

const Field = ({ optionsCoin, coin, choice, labelField, ...rest }) => {

    return (
        <div className="field">
            <Input
                label={labelField}
                className="input"
                {...rest}
            >
                <Select
                    className="select"
                    options={optionsCoin}
                    value={coin}
                    onChange={choice}
                />
            </Input>
        </div>
    )

}

export default Field;