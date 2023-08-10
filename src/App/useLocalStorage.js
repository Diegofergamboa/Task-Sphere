import React, { useState } from 'react'

const useLocalStorage = (itemName, initialValue) => {
    
const useLocalStorage = (itemName, initialValue) => {
    const [item, setItem] = React.useState(initialValue)
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(false)

    React.useEffect(() => {
        const localStorageItem = localStorage.getItem(itemName)
        let parsedItem
        if (!parsedItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue))
            parsedItem = initialValue
        } else (
            parsedItem = JSON.parse(localStorageItem)
        )
    })

    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem))
        setItem(newItem)
    }

    return [item, saveItem]
}

export { useLocalStorage }