import React from 'react';
import { mapLabel } from '../constants';

const Input = props => {
  const { value, type, handleChange } = props;


  return (
    <div>
      {type !== 'image'
        ? <label>{Object.keys(mapLabel).map(key => key === type ? mapLabel[key] : null)}
          {type === 'color' ? <div className="contact__color-placeholder" /> : null}
          <input
            className={type === 'color' ? 'contact__color-input' : null}
            maxLength={type === 'color' ? '6' : null}
            required={type === 'first_name' || type === 'last_name'}
            onChange={event => handleChange(event.target.value, type)}
            value={value || ''}
            readOnly={type === 'id' || false}
            type="text"/>
          {type === 'color'
            ? <div
              className="contact__color"
              style={{backgroundColor: `#${value}`} || '#171b1f'} />
            : null
          }
        </label>
        : null
      }
    </div>
  );
};

export default Input;