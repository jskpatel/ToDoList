import React, { useState, useEffect } from 'react'
import BgColorChange from './BgColorChange'
import Datalist from './Datalist'
import Form from './Form'

function AddValue() {

    const [bgColor, setBgColor] = useState('bg_floralwhite')

    let lsData = localStorage.getItem('Form')
    let lsLatestData = JSON.parse(lsData)

    const defaultData = () => {
        if (lsData) {
            return lsLatestData
        } else {
            return []
        }
    }

    const [allData, setAllData] = useState(defaultData())

    const [id, setId] = useState('')

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [bio, setBio] = useState('')

    const submitData = (e) => {
        e.preventDefault()

        if (id !== "") {

            let temp = lsLatestData[id]
            temp.username = username
            temp.email = email
            temp.bio = bio
            lsLatestData[id] = temp
            console.log(temp)
            setAllData(lsLatestData)
            localStorage.setItem('Form', JSON.stringify(lsLatestData))
            setUsername('')
            setEmail('')
            setBio('')

        } else {
            if (username && email && bio) {
                let formData = { username, email, bio }
                setAllData([...allData, formData])
                localStorage.setItem('Form', JSON.stringify(allData))

                setUsername('')
                setEmail('')
                setBio('')
            }
        }
    }

    useEffect(() => {
        localStorage.setItem('Form', JSON.stringify(allData))
    }, [allData])

    const handleDelete = (item, index) => {
        console.log(lsLatestData,index)
        lsLatestData.splice(index, 1)
        console.log(lsLatestData,index)
        localStorage.setItem('Form', JSON.stringify(lsLatestData))
        setAllData([...lsLatestData])
    }

    const handleUpdate = (item, index) => {
        setUsername(lsLatestData[index].username)
        setEmail(lsLatestData[index].email)
        setBio(lsLatestData[index].bio)
        setId(index)
    }

    return (
        <>
            <div className="wrapper">
                <div className={`fillupform ${bgColor}`}>
                    <div className="changeBgColor fullWidth d-flex shadow">
                        <BgColorChange setBgColor={setBgColor} />
                    </div>
                    <Form bgColor={bgColor} submitData={submitData} username={username} email={email} bio={bio} setUsername={setUsername} setEmail={setEmail} setBio={setBio} />
                </div>
                <div className={`datalist ${bgColor}`}>
                    <Datalist bgColor={bgColor} submitData={allData} handleDelete={handleDelete} handleUpdate={handleUpdate} />
                </div>
            </div>
        </>
    )
}

export default AddValue
