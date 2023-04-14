import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {pureAddUserCallback, UserType} from './HW3'
import user from "../hw08/User";

type GreetingContainerPropsType = {
    users: Array<UserType> // fixed
    addUserCallback: (name: string) => void
}


export const pureAddUser = (name: string, setError: (name: string) => void, setName: (name: string) => void, addUserCallback: (name: string) => void) => {
    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
    if (name.trim().length !== 0) {
        addUserCallback(name)
        setName('')
    } else {
        setError('Ошибка! Введите имя!')
    }

}

export const pureOnBlur = (name: string, setError: (name: string) => void) => { // если имя пустое - показать ошибку

    if (name.trim().length === 0)
        setError('Ошибка! Введите имя!')
}

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: () => void) => { // если нажата кнопка Enter - добавить

    if (e.key === "Enter") {
        addUser()
    }
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
                                                                     users,
                                                                     addUserCallback,
                                                                 }) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // fixed
    const [error, setError] = useState<string>('') // fixed
    const [lastUserName, setLastUserName] = useState<string>('') //
    const [totalUsers, setTotalUsers] = useState<number>(0)


    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // fixed
        setName(e.target.value) // fixed

        error && setError('')
    }
    const addUser = () => {

        setLastUserName(name)
        setTotalUsers(totalUsers +1)
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {

        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {

        if (name.trim()) {
            pureOnEnter(e, addUser)
        }  else setError('Ошибка! Введите имя!')

    }

    /*const totalUsers = 0 */// need to fix
    //const lastUserName = 'Some name' // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
