import React, {useEffect} from "react"
import {connect} from "react-redux"
import {PropTypes} from "prop-types"
import {Grid, IconButton, Avatar, Typography} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import {
  setCurrentMaterialData,
  setSelectedMeshMaterial
} from "../../redux/actions/MaterialActions"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}))

const useAvatarStyles = makeStyles(theme => ({
  root: {
    width: 60,
    height: 60,
    border: "3px solid"
  }
}))

const MaterialSelector = props => {
  const classes = useStyles()
  const classesAvatar = useAvatarStyles()

  const {
    materialStore,
    meshStore,
    nodeStore,
    productStore,
    setCurrentMaterialData,
    setSelectedMeshMaterial
  } = props

  useEffect(() => {
    setCurrentMaterialData(null)
  }, [nodeStore.currentNodeData])

  return (
    <>
      <Grid item className={classes.root}>
        {nodeStore.currentNodeData ? (
          <Typography variant="h4">Choose a material</Typography>
        ) : (
          <></>
        )}
      </Grid>
      <Grid item className={classes.root}>
        {nodeStore.currentNodeData?.candidateMaterials.map(materialData => {
          return (
            <IconButton
              key={materialData.name}
              size="small"
              color={
                materialStore.selectedMeshMaterial === materialData.name
                  ? "primary"
                  : "default"
              }
              onClick={() => {
                if (materialStore.selectedMeshMaterial !== materialData.name) {
                  setSelectedMeshMaterial(materialData.name)
                  setCurrentMaterialData(materialData.path)
                }
              }}
            >
              <Avatar
                alt={materialData.name}
                title={materialData.name}
                src={materialData.thumbnail}
                classes={classesAvatar}
              />
            </IconButton>
          )
        })}
      </Grid>
    </>
  )
}

const mapStateToProps = state => ({
  materialStore: state.materialStore,
  meshStore: state.meshStore,
  nodeStore: state.nodeStore,
  productStore: state.productStore,
  setCurrentMaterialData: PropTypes.func.isRequired,
  setSelectedMeshMaterial: PropTypes.func.isRequired
})

export default connect(mapStateToProps, {
  setCurrentMaterialData,
  setSelectedMeshMaterial
})(MaterialSelector)
