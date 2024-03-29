import React from 'react'
import s from '../../HW15.module.css'
import iconDown from './iconDown.svg'
import sortIcon from './sortIcon.svg'
import iconUp from './iconUp.svg'

// добавить в проект иконки и импортировать
const downIcon = iconDown
const upIcon = iconUp
const noneIcon = sortIcon

export type SuperSortPropsType = {
	id?: string
	sort: string
	value: string
	onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
	// пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
	return sort === '' ? down : sort === down ? up : sort === up ? '' : down
}

const SuperSort: React.FC<SuperSortPropsType> = (
	{
		sort, value, onChange, id = 'hw15',
	}
) => {
	const up = '0' + value
	const down = '1' + value

	const onChangeCallback = () => {
		onChange(pureChange(sort, down, up))
	}

	const icon = sort === down
		? downIcon
		: sort === up
			? upIcon
			: noneIcon

	return (
		<span
			id={id + '-sort-' + value}
			className={s.imgSpan}
			onClick={onChangeCallback}
		>
			<img
				id={id + '-icon-' + sort}
				src={icon}
				className={s.img}
			/>

        </span>
	)
}

export default SuperSort
