import Layout from "../components/Layout"
import Head from "next/head"
import { useEffect, useState } from "react"
import WordContainer from "../components/WordContainer"
import Footer from "../components/Footer"
import Link from "next/link"
import WordsData from "../data/words"

const Index = () => {

    useEffect(() => {

    }, [])

    const data = WordsData.map(d => {
        if (d.favorite === true) {
            return <WordContainer key={d.word} word={d.word} link={d.link} />
        }
    })

    const newData = WordsData.map(d => {
        if (d.new === true) {
            return <WordContainer key={d.word} word={d.word} link={d.link} />
        }
    })

    const [search, setSearch] = useState("")
    const [searchDiv, setSearchDiv] = useState("none")

    const handleSearch = (e) => {
        let searchedArtists = []

        let uniqueArtists = []

        let value = e.target.value

        if (!value) {
            setSearchDiv("none")
        } else if (value) {
            setSearchDiv("")
        }

        searchedArtists = WordsData.filter(item => {
            return item.word.toLocaleLowerCase().includes(value.toLocaleLowerCase())
        })
        
        searchedArtists.map(a => {
            if (uniqueArtists.includes(a.word) === false) {
                uniqueArtists.push(a.word)
            }
        })

        setSearch(uniqueArtists)
    }

    return (
        <Layout>
            <Head>
                <title>LingoMeaning</title>
                <meta name="description" content="Find meaning of words or phrases. Have you heard a word in song you don't know meaning of? Well this is the right place for you. Welcome to lingomeaning.com" />
            </Head>
            <div className="content-main-div">
                <input className="lyrics-search" onChange={handleSearch} placeholder="Search words" type="text"></input>
                <div style={{display: searchDiv}} className="search-lyrics-div">
                    {search.length > 0 && search.map(a => {
                        return <WordContainer key={a} word={a} link={"/word/" + a.replaceAll(" ", "-").toLowerCase() + "-meaning"} />
                    })}
                </div>
                <h1 className="top-lyrics-heading" >Favorite Meanings</h1>
                <div className="top-lyrics-div">
                    
                    {data}

                </div>
                <h1 className="top-lyrics-heading" >Newest Meanings</h1>
                <div className="top-lyrics-div">
                    
                    {newData}

                </div>
                <Link href="all-words"><a className="all-artists">All meanings</a></Link>
                <a target="_blank" href="https://coldenlyrics.com/" className="colden-lyrics">ColdenLyrics</a>
                <Footer />
            </div>
        </Layout>
    )
}

export default Index