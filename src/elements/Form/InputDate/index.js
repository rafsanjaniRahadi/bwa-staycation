import React from 'react';

import propTypes from "prop-types";;
import './index.scss';

export default function Number(props) {
    const {value, placeholder, name, min, max, prefix, suffix} = props;
    const {InputValue, setInputValue} = useState(`${prefix}${value}${suffix}`);

    const onChange = e => {
        let value = String(e.target.value);
        if (prefix) value = value.replace(prefix);
        if (suffix) value = value.replace(suffix);

        const patternNumeric = new RegExp("[0-9]*");
        const isNumeric = patternNumeric.test(value);

        if (isNumeric && +value <= max && +value >= min) {
            props.onChange({
                target: {
                    name: name,
                    value: +value
                }
            });
            setInputValue(`${prefix}${value}${suffix}`)
        }
    };

    const minus = () => {
        value > min && 
        onChange ({
            target: {
                name: name,
                value: +value - 1
            }
        })
    }

    const plus = () => {
        value < max && 
        onChange ({
            target: {
                name: name,
                value: +value + 1
            }
        })
    }

    return (
        <div>
            di
        </div>
    )
}

Number.defaultProps = {
    min: 1,
    max: 2,
    prefix: "",
    suffix: ""
}

Number.propTypes = {
    value: propTypes.oneOfType([propTypes.string, propTypes.number]),
    onchange: propTypes.func,
    placeholder: propTypes.string,
    outerClassName: propTypes.string
}