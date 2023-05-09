import React, {ChangeEvent, Dispatch, KeyboardEvent, SetStateAction, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3'

type GreetingContainerPropsType = {
    users: UserType[] // fixed
    addUserCallback: (name: string) => void // fixed
}

export const pureAddUser = (name: string, setError: Dispatch<SetStateAction<string>>, setName: (name: string) => void, addUserCallback: (name: string) => void) => {
    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
    if (name.trim().length !== 0) {
        addUserCallback(name)
        setName('')
    } else {
        setError('Ошибка! Введите имя!')
    }
}

export const pureOnBlur = (name: string, setError: (name:string) => void) => { // если имя пустое - показать ошибку
    if(name.trim().length === 0) {
        setError('Ошибка! Введите имя!')
    }
}

export const pureOnEnter = (e: React.KeyboardEvent<HTMLElement>, addUser: () => void) => { // если нажата кнопка Enter - добавить
 if(e.key === 'Enter') {
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
    const [totalUsers, setTotalUsers] = useState<number>(0)
    const [lastUserName, setLastUserName] = useState<string>('')

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // fixed
        setName(e.currentTarget.value) // need to fix

        error && setError('')
    }
    const addUser = () => {
        setTotalUsers(totalUsers +1)
        setLastUserName(name)
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: React.KeyboardEvent<HTMLElement>) => {
        pureOnEnter(e, addUser)
    }


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
