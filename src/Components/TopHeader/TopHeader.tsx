import { MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { useState } from 'react'

const TopHeader = () => {
  const [language, handleChange] = useState<string>("s")
  return (
    <div className='bg-black h-12 w-full flex justify-end'>
      <Select
        labelId="demo-simple-select-label"
        className='text-white mr-8 max-w-5xl'
        id="select"
        value={language}
        label="language"
        onChange={(event: SelectChangeEvent) => { handleChange(event.target.value) }}
      >
        <MenuItem value={"s"}>Español</MenuItem>
        <MenuItem value={"e"}>Ingles</MenuItem>
      </Select>
    </div>
  )
}

export default TopHeader
