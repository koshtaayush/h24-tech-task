//Library
import React from 'react'
import styled from 'styled-components'

//Shared interface
import { Category } from '../../../../typings/types'

//API service
import { getList } from './../../../../services/api.service'

interface Props {
    categories: Array<Category>
}

const Count: React.FC<Props> = (props) => {
    //Props
    const { categories } = props

    //Local state to store sorting option
    const [selectedSortingOption, setSelectedSortingOption] = React.useState<
        string
    >('Recommended')

    /**
     * Function to changing sorting option
     */
    const handleSelectedSortingOption = (e: any) => {
        setSelectedSortingOption(e.target.innerText)
        handleFetchList()
    }

    /**
     * Function to fetch list from API
     */
    const handleFetchList = () => {
        const xhr = getList()
        xhr.onload = () => {
            if (xhr.status === 200) {
                var response = JSON.parse(xhr.response)
                var articles = response.data.categories.map(
                    (category: Category) => {
                        return category.categoryArticles.articles
                    }
                )
            } else {
                //error cases
            }
        }
    }

    return (
        <CountContainer>
            <CountDetails>
                {categories.length ? (
                    <>
                        <TitleHeading>
                            <h3>{categories[0].name}</h3>
                        </TitleHeading>
                        <small>
                            <TitleCount>
                                {' '}
                                ({categories[0].articleCount})
                            </TitleCount>
                        </small>
                    </>
                ) : (
                    'Loading...'
                )}
            </CountDetails>

            <SortByFilter>
                SortBy: <SelectedOption>{selectedSortingOption}</SelectedOption>
                <SortingOptions
                    onClick={(event) => handleSelectedSortingOption(event)}>
                    <Option>Recommended</Option>
                    <Option>What's new</Option>
                    <Option>Popularity</Option>
                    <Option>Price Low to high</Option>
                    <Option>Price High to low</Option>
                </SortingOptions>
            </SortByFilter>
        </CountContainer>
    )
}

export default Count

const CountContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const TitleHeading = styled.div`
    font-weight: 500;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    color: #282c3f;
    max-width: 25rem;
    text-transform: capitalize;
`

const TitleCount = styled.div`
    color: #878b94;
    white-space: pre-wrap;
    display: inline-block;
    font-size: 1rem;
    margin: 0;
`

const SortingOptions = styled.ul`
    width: 15.9375rem;
    background-color: #fff;
    position: absolute;
    top: 2.0625rem;
    left: -0.0625rem;
    margin: 0;
    padding: 1rem 0;
    padding-left: 0rem;
    z-index: 2;
    display: none;
    border: 0.0625rem solid #d4d5d9;
    border-top-color: rgb(212, 213, 217);
    border-top-style: solid;
    border-top-width: 0.0625rem;
    border-top: none;
    -webkit-box-shadow: 0 0.5rem 0.625rem 0 rgba(0, 0, 0, 0.08);
    box-shadow: 0 0.5rem 0.625rem 0 rgba(0, 0, 0, 0.08);
    list-style: none;
`

const Option = styled.li`
    font-size: 0.875rem;
    color: #282c3f;
    cursor: pointer;
    display: block;
    font-size: 0.875rem;
    color: #282c3f;
    cursor: pointer;
    padding: 0.625rem 1.25rem;

    &:hover {
        background-color: #d4d5d9;
    }
`

const SortByFilter = styled.div`
    padding: 0.5625rem 0.875rem;
    font-size: 0.875rem;
    color: #282c3f;
    cursor: pointer;
    position: relative;
    width: 15.9375rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-radius: 0.125rem;
    background-color: #fff;
    border: 0.0625rem solid #d4d5d9;
    &:hover {
    }

    &:hover ${SortingOptions} {
        display: block;
    }
`

const SelectedOption = styled.span`
    font-weight: 700;
`

const CountDetails = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`
