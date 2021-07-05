import React, {useEffect} from "react"
import {connect} from "react-redux"
import {PropTypes} from "prop-types"
import {FormControl, InputLabel, Select} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import {
  getCurrentProductData,
  getProductDataList,
  setCurrentProductData
} from "../../redux/actions/ProductActions"
import {setCurrentNodeData} from "../../redux/actions/NodeActions"

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }
}))

const ProductSelector = props => {
  const classes = useStyles()

  const {
    productStore,
    getCurrentProductData,
    getProductDataList,
    setCurrentProductData,
    setCurrentNodeData
  } = props

  const options = productStore.productDataList.map(p => {
    return (
      <option key={p.id} value={p.id}>
        {p.label}
      </option>
    )
  })

  useEffect(() => {
    if (productStore.currentProductData) {
      getCurrentProductData(productStore.currentProductData.path)
    } else {
      getCurrentProductData(null)
    }

    //Reset node
    setCurrentNodeData(null)
  }, [productStore.currentProductData])

  useEffect(() => {
    getProductDataList()
  }, [])

  return (
    <FormControl fullWidth className={classes.formControl}>
      <InputLabel shrink variant="outlined" id="product-selector">
        Select product
      </InputLabel>
      <Select
        labelId="product-selector"
        native
        labelWidth={50}
        label="Select product"
        variant="outlined"
        style={{
          width: 300
        }}
        value={productStore.currentProductData?.id ?? ""}
        onChange={event => {
          setCurrentProductData(
            productStore.productDataList.find(p => p.id === event.target.value)
          )
        }}
      >
        <option value="">None</option>
        {options}
      </Select>
    </FormControl>
  )
}

const mapStateToProps = state => ({
  productStore: state.productStore,
  getCurrentProductData: PropTypes.func.isRequired,
  getProductDataList: PropTypes.func.isRequired,
  setCurrentProductData: PropTypes.func.isRequired,
  setCurrentNodeData: PropTypes.func.isRequired
})

export default connect(mapStateToProps, {
  getCurrentProductData,
  getProductDataList,
  setCurrentProductData,
  setCurrentNodeData
})(ProductSelector)
