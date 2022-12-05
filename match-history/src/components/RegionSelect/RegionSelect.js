import React from 'react'
import { REGIONS } from "./regions"
import './RegionSelect.scss'

export const RegionSelect = (props) => {
    const regionIds = Object.keys(REGIONS)
    const regions = regionIds.map(id => { return (<option value={id} key={id}>{id}</option>)})
    return (
        <select className="region-select" onChange={props.onChange} value={props.value}>
         		{regions}
        </select>
    )
}