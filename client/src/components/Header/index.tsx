//Library
import React, { useRef } from 'react'
import styled from 'styled-components'

//Reusable Components
import Search from './../Search'
import AutoSuggest from './../Search/Subcomponents/AutoSuggest'
import Loader from './../Loader'

//Shared Interface
import { Article, Category } from '../../typings/types'

//Services
import { getList } from './../../services/api.service'

//Utils
import useOutsideAlerter from './../../utils/useOutsideAlerter'
import { debounce } from './../../utils/debounce'

interface Props {}

const Header: React.FC<Props> = (props) => {
    
    //Local state to store value to search input
    const [searchValue, setSearchValue] = React.useState<string>('')
    
    //Local state to store search results from API response
    const [searchSuggestions, setSearchSuggestions] = React.useState<
        Array<Article>
    >([])

    //Ref for dropdown to check if any click event has been made outside to it
    const wrapperRef = useRef<HTMLDivElement>(null)

    //Loader for API call
    const [
        isSuggestionLoading,
        setIsSuggestionLoading,
    ] = React.useState<boolean>(false)

    //Reusable hook to check if click is made outside element
    useOutsideAlerter(wrapperRef, () => {
        setSearchValue('')
    })

    /**
     * Function to change the value of search input
     */
    const handleSearchValueChange = (value: string) => {
        setSearchValue(value)
        setIsSuggestionLoading(true)
        debouncedFetchList()
    }

    /**
     * Function to fetch search result
     */
    const handleFetchList = () => {
        setIsSuggestionLoading(true)
        const xhr = getList()
        xhr.onload = () => {
            if (xhr.status === 200) {
                setIsSuggestionLoading(false)
                var response = JSON.parse(xhr.response)
                var articles = response.data.categories.map(
                    (category: Category) => {
                        return category.categoryArticles.articles
                    }
                )
                console.log('after resp', articles[0])
                setSearchSuggestions(articles[0])
            } else {
                setIsSuggestionLoading(false)
            }
        }
    }

    /**
     * Debouncing the actual function to optimize the performance
     */
    const [debouncedFetchList] = React.useState(() =>
        debounce(handleFetchList, 1000)
    )

    return (
        <Container>
            <Organisation>Home24</Organisation>
            <SearchContainer>
                <Search
                    placeholder="Search"
                    value={searchValue}
                    onChangeProp={handleSearchValueChange}
                    test-id="searchComponent"
                />
                {searchValue !== '' && (
                    <AutosuggestContainer 
                        ref={wrapperRef}
                        test-id="autoSuggestContainer">
                        {!isSuggestionLoading && (
                            <AutoSuggest articleList={searchSuggestions} />
                        )}

                        {isSuggestionLoading && (
                            <AutoSuggestLoader>
                                <Loader />
                            </AutoSuggestLoader>
                        )}
                    </AutosuggestContainer>
                )}
            </SearchContainer>
        </Container>
    )
}

export default Header

const Container = styled.div`
    color: #000;
    top: 0;
    position: fixed;
    right: 0;
    left: 0;
    z-index: 10;
    -webkit-box-shadow: 0 0.25rem 0.75rem 0 rgba(0, 0, 0, 0.05);
    box-shadow: 0 0.25rem 0.75rem 0 rgba(0, 0, 0, 0.05);
    background-color: #fff;
    margin-bottom: 0.625rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`

const Organisation = styled.h4``

const SearchContainer = styled.div`
    margin-left: 1rem;
    width: 40%;
    position: relative;
`
const AutosuggestContainer = styled.div``

const AutoSuggestLoader = styled.div`
    z-index: 9;
    position: absolute;
    background: #fff;
    height: 20rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30rem;
`
