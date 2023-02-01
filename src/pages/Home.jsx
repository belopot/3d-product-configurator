import {Paper} from "@material-ui/core"
import React from "react"
import styled from 'styled-components';
import DracoSelector from "../components/DracoSelector"
import MaterialSelector from "../components/MaterialSelector"
import MeshSelector from "../components/MeshSelector"
import NodeSelector from "../components/NodeSelector"
import ProductSelector from "../components/ProductSelector"
import Viewer3D from "../components/Viewer3D"
import MaterialSettings from "../components/MaterialSettings/MaterialSettings"

export default function Home() {
  return (
    <>
      <StyledPaper>
        <DracoSelector />
        <ProductSelector />
        <NodeSelector />
        <MeshSelector />
      </StyledPaper>
      <MaterialSettingHolder>
        <MaterialSettings />
      </MaterialSettingHolder>
      <MaterialSelectHolder>
        <MaterialSelector />
      </MaterialSelectHolder>
      <Viewer3D />
    </>
  )
}

const StyledPaper = styled(Paper)`
    padding: 0.5em;
    position: absolute;
    top: 1em;
    left: 1em;
    z-index: 1;
    width: min-content;
`

const MaterialSettingHolder = styled.div`
  padding: 1em;
    position: absolute;
    top: 1em;
    right: 2em;
    z-index: 1;
`

const MaterialSelectHolder = styled.div`
    padding: 0.5em;
    position: absolute;
    bottom: 1em;
    left: 1em;
    z-index: 1;
`