import React, {useState} from 'react'
import Affairs from './affairs/Affairs'
import s2 from '../../s1-main/App.module.css'
import affair from "./affairs/affair/Affair";

/*
* 1 - описать типы AffairPriorityType, AffairType +
* 2 - указать нужный тип для defaultAffairs +
* 3 - дописать типы и логику функции filterAffairs и проверить её тестами +
* 4 - выполнить пункт 3 для функции deleteAffair +
* 5 - указать нужный тип в useState с affairs +
* 6 - дописать тип и логику функции deleteAffairCallback +
* 7 - в файле Affairs.tsx дописать типизацию пропсов
* 8 - в файле Affairs.tsx дописать логику функций setAll, setHigh, setMiddle, setLow
* 9 - в файле Affair.tsx дописать типизацию пропсов +
* 10 - в файле Affair.tsx дописать функции deleteCallback и использовать +
* 11 - в файле Affair.tsx отобразить приходящие данные + -
* */

// types
export type AffairPriorityType = 'low' | 'high' | 'middle' // меняла
export type AffairType = {
    _id: number // меняла
    name: string // меняла
    priority: AffairPriorityType
}
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: Array<AffairType> = [ // меняла
    {_id: 1, name: 'React', priority: 'high'}, // студенты могут изменить содержимое name и количество элементов в массиве, ...priority не менять!
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => { // Возвращаемый тип функции
    if (filter === 'all') return affairs
    return affairs.filter((affair) => affair.priority === filter) // need to fix
}


export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => { // меняла

    return affairs.filter((affairs) => affairs._id !== _id)
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs) // меняла
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter) // здесь хранятся отфильтрованные такси


    const deleteAffairCallback = (_id: number) => { // меняла
        setAffairs(deleteAffair(affairs, _id));
        // менять
    }

    return (
        <div id={'hw2'}>
            <div className={s2.hwTitle}>Homework #2</div>
            <div className={s2.hw}>
                <Affairs
                    data={filteredAffairs}
                    setFilter={setFilter}
                    deleteAffairCallback={deleteAffairCallback}
                    filter={filter}
                />
            </div>
        </div>
    )
}

export default HW2
