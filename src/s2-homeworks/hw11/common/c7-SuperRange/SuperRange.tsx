import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {

    return (
        <Slider
            sx={{
                width: 150,
                color: 'green',
                '& .MuiSlider-rail': {
                    backgroundColor: 'black',
                },
            }}
            size="medium"
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
