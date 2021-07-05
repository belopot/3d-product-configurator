import * as THREE from "three"
import {SPACE_SIZE} from "../Viewer3DConstants"

function ShadowPlane() {
  const geometry = new THREE.PlaneGeometry(SPACE_SIZE, SPACE_SIZE)
  geometry.rotateX(-Math.PI / 2)
  const material = new THREE.ShadowMaterial()
  material.opacity = 0.3
  const groundMesh = new THREE.Mesh(geometry, material)
  groundMesh.name = "GroundMesh"
  groundMesh.position.y = 0
  groundMesh.receiveShadow = true
  return groundMesh
}

function FitCameraToSelection(camera, object, offset, controls) {
  offset = offset || 1.25

  const boundingBox = new THREE.Box3()

  // get bounding box of object - this will be used to setup controls and camera
  boundingBox.setFromObject(object)

  const center = new THREE.Vector3()

  boundingBox.getCenter(center)

  const size = new THREE.Vector3()
  boundingBox.getSize(size)

  // get the max side of the bounding box (fits to width OR height as needed )
  const maxDim = Math.max(size.x, size.y, size.z)

  var cameraZ = Math.abs(maxDim / 4)

  cameraZ *= offset // zoom out a little so that objects don't fill the screen

  camera.position.z = cameraZ

  const minZ = boundingBox.min.z
  const cameraToFarEdge = minZ < 0 ? -minZ + cameraZ : cameraZ - minZ

  camera.far = cameraToFarEdge * 3
  camera.updateProjectionMatrix()

  if (controls) {
    // set camera to rotate around center of loaded object
    controls.target = center
    // prevent camera from zooming out far enough to create far plane cutoff
    controls.maxDistance = cameraToFarEdge * 2
  } else {
    camera.lookAt(center)
  }
}

export {ShadowPlane, FitCameraToSelection}
