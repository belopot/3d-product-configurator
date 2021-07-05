import React from "react"
import {connect} from "react-redux"
import {PropTypes} from "prop-types"
import {FormControl, InputLabel, Select} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import {setCurrentDracoVersion} from "../../redux/actions/ProductActions"
import {DRACO_VERSION_LIST} from "../../constants"

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }
}))

const DracoSelector = props => {
  const classes = useStyles()
  const {productStore, setCurrentDracoVersion} = props
  const options = DRACO_VERSION_LIST.map(p => {
    return (
      <option key={p.id} value={p.id}>
        {p.label}
      </option>
    )
  })

  return (
    <FormControl fullWidth className={classes.formControl}>
      <InputLabel shrink variant="outlined" id="draco-selector">
        Select a compression version
      </InputLabel>
      <Select
        labelId="draco-selector"
        native
        labelWidth={50}
        label=""
        variant="outlined"
        style={{
          width: 300
        }}
        value={productStore.currentDracoVersion}
        onChange={event => {
          setCurrentDracoVersion(event.target.value)
        }}
      >
        {options}
      </Select>
    </FormControl>
  )
}

const mapStateToProps = state => ({
  productStore: state.productStore,
  setCurrentDracoVersion: PropTypes.func.isRequired
})

export default connect(mapStateToProps, {
  setCurrentDracoVersion
})(DracoSelector)
