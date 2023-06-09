import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperButton.module.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    xType?: string
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        xType= 'default',
        className,
        disabled,
        ...restProps // все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {

    const finalClassName = `${s.button}  ${xType==='red' ? s.red + ' ' : xType === 'secondary' ? s.secondary + ' ' : s.default } ${disabled ? s.disabled + ' ' : ''} `
        // s.button + ' ' + s[xType] // (xType === 'red' ? s.red + ' ' + s.button : '') + (xType === 'gray' ? s.gray + ' ' + s.button : '')

        // + (disabled
        //         ? ...
        //         : xType === 'red'
        //             ? ...
        //+ (className ? ' ' + className : '') // задачка на смешивание классов
    // const finalClassName = s.button + (xType ? ` ${s[xType]}` : '')


    return (
        <button
            disabled={disabled}
            className={finalClassName}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    )
}

export default SuperButton
