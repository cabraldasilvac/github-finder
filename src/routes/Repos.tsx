import React, { useEffect, useState } from 'react'

const Repos: React.FC = () => {
    const [repos, setRepos] = useState([])

    useEffect(() => {
        getApiGitHub()
    }, [])

    async function getApiGitHub() {
        try {
            const res = await fetch(`https://api.github.com/users/${userName}`)
            if (!res.ok) {
                throw new Error(res.status.toString())
            }

            const data = await res.json()
            setRepos(data)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <ul>
            {repos.map((item) => (
                <li key={item.id}>
                    <strong>Name: {item.name.toUpperCase()} </strong>
                    <span> URL: {item.url}</span>
                    <span>
                        Data Criação:{' '}
                        {new Intl.DateTimeFormat('pt-BR').format(new Date(item.created_at))}
                    </span>
                </li>
            ))}
        </ul>
    )
}

export default Repos
