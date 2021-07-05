import React, {useEffect, useState} from "react"
import {connect} from "react-redux"
import {PropTypes} from "prop-types"
import {FormControl, InputLabel, Select} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import {setSelectedMeshData} from "../../redux/actions/MeshActions"

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }
}))

const MeshSelector = props => {
  const classes = useStyles()
  const {meshStore, nodeStore, productStore, setSelectedMeshData} = props
  let options = nodeStore.currentNodeData?.candidateMeshes.map(n => {
    return (
      <option key={n.id} value={n.id}>
        {n.label}
      </option>
    )
  })

  const [value, setValue] = useState("")

  useEffect(() => {
    if (nodeStore.currentNodeData && meshStore.selectedMeshData) {
      meshStore.selectedMeshData.forEach(data => {
        if (data.nodeId === nodeStore.currentNodeData.id) {
          setValue(data.meshId)
        }
      })
    }
  }, [nodeStore.currentNodeData, meshStore.selectedMeshData])

  return (
    nodeStore.currentNodeData && (
      <FormControl fullWidth className={classes.formControl}>
        <InputLabel shrink variant="outlined" id="mesh-selector">
          Select a mesh
        </InputLabel>
        <Select
          labelId="mesh-selector"
          native
          labelWidth={50}
          label="Select node"
          variant="outlined"
          style={{
            width: 300
          }}
          value={value}
          onChange={event => {
            if (nodeStore.currentNodeData && meshStore.selectedMeshData) {
              const newData = []
              meshStore.selectedMeshData.forEach(data => {
                if (data.nodeId === nodeStore.currentNodeData.id) {
                  data.meshId = event.target.value
                }
                newData.push(data)
              })
              setSelectedMeshData(newData)
            }
          }}
        >
          {options}
        </Select>
      </FormControl>
    )
  )
}

const mapStateToProps = state => ({
  meshStore: state.meshStore,
  nodeStore: state.nodeStore,
  productStore: state.productStore,
  setSelectedMeshData: PropTypes.func.isRequired
})

export default connect(mapStateToProps, {setSelectedMeshData})(MeshSelector)
