import * as THREE from "three"
import {SPACE_SIZE} from "../Viewer3DConstants"

function Lights() {
  const lightGroup = new THREE.Group()
  lightGroup.name = "LightGroup"

  const skyColor = "#bfe5f9"
  const groundColor = "#ddbba0"
  const hemisphereLight = new THREE.HemisphereLight(skyColor, groundColor, 1.5)
  lightGroup.add(hemisphereLight)

  const dirLight = new THREE.DirectionalLight(0xffffff, 1.5)
  dirLight.position.set(SPACE_SIZE * 0.05, SPACE_SIZE, SPACE_SIZE * 0.1)
  dirLight.target.position.set(0, 0, 0)
  dirLight.castShadow = true
  dirLight.shadow.mapSize.width = 1024
  dirLight.shadow.mapSize.height = 1024
  dirLight.shadow.camera.near = 0.01
  dirLight.shadow.camera.far = SPACE_SIZE * 2
  lightGroup.add(dirLight)

  // const cameraHelper = new THREE.CameraHelper(dirLight.shadow.camera)
  // lightGroup.add(cameraHelper)

  // const lightHelper = new THREE.DirectionalLightHelper(dirLight)
  // lightGroup.add(lightHelper)

  const spotLight = new THREE.SpotLight(0xd2fcc0, 1)
  spotLight.position.set(-SPACE_SIZE, SPACE_SIZE, -SPACE_SIZE)
  spotLight.target.position.set(0, 0, 0)
  spotLight.penumbra = 0.1
  spotLight.decay = 2
  spotLight.distance = SPACE_SIZE * 2
  lightGroup.add(spotLight)

  return lightGroup
}

export default Lights
