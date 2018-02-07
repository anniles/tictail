import React from 'react';
import { mapLabel } from '../constants';

const Input = props => {
  const { value, type, handleChange, id } = props;

  let inputValue = value;
  if(type === 'location') {
    inputValue = !  id ? Intl.DateTimeFormat().resolvedOptions().timeZone : value;
  }

  return (
    <div>
      {type !== 'image' && type !== 'id'
        ? <label>{Object.keys(mapLabel).map(key => key === type ? mapLabel[key] : null)}
          {type === 'color' ? <div className="contact__color-placeholder" /> : null}
          <input
            className={type === 'color' ? 'contact__color-input' : null}
            maxLength={type === 'color' ? '6' : null}
            onChange={event => handleChange(event.target.value, type)}
            value={inputValue || ''}
            readOnly={type === 'location' || false}
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