## @essappstate/canopy-react-buttongroup

A Bootstrap button group for AppStateESS/Canopy using React.
Expects Bootstrap 4.

### Install

```
npm install --save-dev @essappstate/canopy-react-buttongroup
```

### Example

```javascript

import ButtonGroup from '@essappstate/canopy-react-buttongroup'

const buttons = [
  {
    value: '1',
    label: <span><i className="fas fa-user"></i>&nbsp; Person</span>
  }, {
    value: '2',
    label: <span>
        <i className="fas fa-users"></i>&nbsp; People</span>
  }
]

const matchingValue = '1' // Person

const setPersonAmount(val) {
  this.setState({persons : val})
}

const activeColor = 'success' // Color of active (matching) button. Bootstrap primary colors only
const color = 'primary' // Color of the inactive buttons and outlines.

return (
<ButtonGroup
  name="input_name"
  buttons={buttons}
  match={matchingValue}
  handle={setPersonAmount}
  vertical={false}
  color={color}
  activeColor={activeColor}/>
)
```
