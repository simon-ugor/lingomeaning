import { useEffect, useState } from "react"
import Layout from "../../components/Layout"
import WordsData from "../../data/words"
import Link from "next/link"
import Footer from "../../components/Footer"
import Head from "next/head"

const Letter = () => {

    const [lastLetter, setLastLetter] = useState("")
    const [display, setDisplay] = useState([])

    const words = []

    useEffect(() => {

        let url = window.location.href
        let lastChar = (url.slice(-1)).toString()
        setLastLetter(lastChar.toUpperCase())

        WordsData.map(d => {
            if (d.word.charAt(0) === lastChar.toUpperCase() || d.word.charAt(0) === lastChar.toLowerCase()) {
                if (words.includes(d.word) === false) {
                    words.push(d.word)
                }
            }
        })

        setDisplay(words)

    }, [])

    return (
        <Layout>
            <Head>
                <title>{lastLetter} words</title>
            </Head>
            <div className="content-main-div">
                <div className="min-height-div">
                    <h1 className="top-lyrics-heading">{lastLetter}</h1>
                    {display.map(d => {
                    //console.log(d)
                    return(<Link href={"/word/" + d.replaceAll(" ", "-").toLowerCase() + "-meaning"}><a className="letter-artists">{d}</a></Link>)
                    })}
                </div>
                <Footer />
            </div>
        </Layout>
    )
}

export default Letter