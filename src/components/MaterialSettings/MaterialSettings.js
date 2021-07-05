import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { SET_CURRENT_MATERIAL_DATA } from '../../redux/StoreConstants'
import { Box, Divider, Paper, Switch, Typography } from '@material-ui/core'

let animationFrameReq

const MaterialSelector = () => {
  const { currentMaterialData } = useSelector(state => state['materialStore'])
  const dispatch = useDispatch()

  const [scale, setScale] = useState(1)
  const [normalScale, setNormalScale] = useState(1)

  const [values, setValues] = useState({})


  useEffect(() => {
    if (currentMaterialData) {
      if (currentMaterialData.uvScale.u !== scale) {
        setScale(currentMaterialData.uvScale.u)
      }
      if (currentMaterialData.normalScale.x !== normalScale) {
        setNormalScale(currentMaterialData.normalScale.x)
      }
      setValues({
        ...currentMaterialData
      })
    }
  }, [currentMaterialData])


  const handleScaleChange = (e) => {
    setScale(e.target.value)
    doUpdate({
      ...currentMaterialData,
      uvScale: {
        u: e.target.value,
        v: e.target.value
      }
    })
  }

  const handleNormalScaleChange = (e) => {
    setNormalScale(e.target.value)
    doUpdate({
      ...currentMaterialData,
      normalScale: {
        x: e.target.value,
        y: e.target.value
      }
    })
  }

  const handleControlChange = (e, newValue) => {
    doUpdate({
      ...currentMaterialData,
      [e.target.dataset.key]: newValue
    })
  }

  const handleInputChange = (e) => {
    handleControlChange(e, e.target.value)
  }

  const doUpdate = (newData) => {
    /*dispatch({
      type: SET_CURRENT_MATERIAL_DATA,
      payload: newData
    })*/
    cancelAnimationFrame(animationFrameReq)
    animationFrameReq = requestAnimationFrame(() => {
      dispatch({
        type: SET_CURRENT_MATERIAL_DATA,
        payload: newData
      })
    })
  }

  if (!currentMaterialData) {
    return null
  }

  let stepSize = 0.001
  if (values?.bumpScale > 0.01) {
    stepSize = 0.01
  }
  if (values?.bumpScale > 0.5) {
    stepSize = 0.1
  }

  return (
    <>
      <Paper>
        <Box p={2}>

          <Box display='flex' mt={1} mb={1} justifyContent='space-between'>
            <Typography>Textures Scale</Typography>
            <input
              value={scale}
              type="number"
              min={0}
              max={20}
              step={0.1}
              onChange={handleScaleChange} style={{ width: 50 }} />
          </Box>

          <Divider />

          <Box display='flex' mt={1} mb={1} justifyContent='space-between'>
            <Typography>Normal Map Scale</Typography>
            <input
              value={normalScale}
              disabled={values?.normalMap === ''}
              type="number"
              data-key='displacementScale'
              min={0}
              max={20}
              step={0.01}
              onChange={handleNormalScaleChange} style={{ width: 50 }} />
          </Box>

          <Divider />

          <Box display='flex' mt={1} mb={1} justifyContent='space-between'>
            <Typography>Bump map Scale</Typography>
            <input
              value={values?.bumpScale ?? 0}
              disabled={currentMaterialData.bumpMap === ''}
              type="number"
              data-key='bumpScale'
              min={0}
              max={2}
              step={stepSize}
              onChange={handleInputChange} style={{ width: 50 }} />
          </Box>

          <Box display='flex' mt={1} mb={1} justifyContent='space-between'>
            <Typography>Metalness</Typography>
            <input
              value={values?.metalness ?? 0}
              type="number"
              data-key='metalness'
              min={0}
              max={1}
              step={0.01}
              onChange={handleInputChange} style={{ width: 50 }} />
          </Box>

          <Box display='flex' mt={1} mb={1} justifyContent='space-between'>
            <Typography>Roughness</Typography>
            <input
              value={values?.roughness ?? 0}
              type="number"
              data-key='roughness'
              min={0}
              max={1}
              step={0.01}
              onChange={handleInputChange} style={{ width: 50 }} />
          </Box>

          <Divider />

          <Box display='flex' mt={1} mb={1} justifyContent='space-between'>
            <Typography>Displacement Scale</Typography>
            <input
              value={values?.displacementScale ?? 0}
              disabled={values?.displacementMap === ''}
              type="number"
              data-key='displacementScale'
              min={0}
              max={1}
              step={0.01}
              onChange={handleInputChange} style={{ width: 50 }} />
          </Box>
          <Box display='flex' mt={1} mb={1} justifyContent='space-between'>
            <Typography>Displacement Bias</Typography>
            <input
              value={values?.displacementBias ?? 0}
              disabled={values?.displacementMap === ''}
              type="number"
              data-key='displacementBias'
              min={0}
              max={1}
              step={0.01}
              onChange={handleInputChange} style={{ width: 50 }} />
          </Box>

          <Divider />

          <Box display='flex' mt={1} mb={1} justifyContent='space-between'>
            <Typography>EnvMap Intensity</Typography>
            <input
              value={values?.envMapIntensity ?? 0}
              type="number"
              data-key='envMapIntensity'
              min={0}
              max={1}
              step={0.1}
              onChange={handleInputChange} style={{ width: 50 }} />
          </Box>

          <Divider />

          <Box display='flex' mt={1} mb={1} justifyContent='space-between'>
            <Typography>Ambient occlusion intensity &nbsp;</Typography>
            <input
              value={values?.aoMapIntensity ?? 0}
              type="number"
              data-key='aoMapIntensity'
              min={0}
              max={1}
              step={0.1}
              onChange={handleInputChange} style={{ width: 50 }} />
          </Box>

          <Divider />

          <Box display='flex' mt={1} mb={1} justifyContent='space-between'>
            <Typography>Color</Typography>
            <input
              value={values?.color ?? 0}
              type="color"
              data-key='color'
              min={0}
              max={1}
              step={0.1}
              onChange={handleInputChange} style={{ width: 50 }} />
          </Box>

          <Divider />

          <Box display='flex' mt={1} mb={1} justifyContent='space-between'>
            <Typography>Emissive Intensity</Typography>
            <input
              value={values?.emissiveIntensity ?? 0}
              type="number"
              data-key='emissiveIntensity'
              min={0}
              max={1}
              step={0.1}
              onChange={handleInputChange} style={{ width: 50 }} />
          </Box>
          <Box display='flex' mt={1} mb={1} justifyContent='space-between'>
            <Typography>Emissive color</Typography>
            <input
              value={values?.emissive ?? 0}
              type="color"
              data-key='emissive'
              min={0}
              max={1}
              step={0.1}
              onChange={handleInputChange} style={{ width: 50 }} />
          </Box>

          <Divider />

          <Box display='flex' mt={1} mb={1} alignItems='center'>
            <Typography>Wireframe</Typography>
            <Switch
              inputProps={{
                'data-key': 'wireframe'
              }}
              checked={!!values?.wireframe}
              onChange={handleControlChange}
              color='primary'
            />
          </Box>

          <Divider />

          <Box display='flex' mt={1} mb={1} alignItems='center'>
            <Typography>Transparent</Typography>
            <Switch
              inputProps={{
                'data-key': 'transparent'
              }}
              checked={!!values?.transparent}
              onChange={handleControlChange}
              color='primary'
            />
          </Box>
          <Box display='flex' mt={1} mb={1} justifyContent='space-between'>
            <Typography>Opacity</Typography>
            <input
              value={values?.opacity ?? 0}
              disabled={!values?.transparent}
              type="number"
              data-key='opacity'
              min={0}
              max={1}
              step={0.05}
              onChange={handleInputChange} style={{ width: 50 }} />
          </Box>


        </Box>
      </Paper>
    </>
  )
}

export default MaterialSelector