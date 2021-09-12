//Library
import React from 'react'
import styled from 'styled-components'

//Shared Interface
import { Article } from '../../../typings/types'

interface Props {
    articleList: Array<Article>
}

export const AutoSuggest: React.FC<Props> = (props) => {
    const { articleList } = props
    
    return (
        <Container>
            <SuggestionList>
                {articleList.map((article, index) => {
                    return (
                        <SuggestionListItem key={index}>{article.name}</SuggestionListItem>
                    )
                })}
            </SuggestionList>
        </Container>
    )
}

export default AutoSuggest

const Container = styled.div`
    width: 31.375rem;
    z-index: 9;
    position: absolute;
    display: block;
    -webkit-box-shadow: 0 0.0625rem 0.375rem transparent;
    box-shadow: 0 0.0625rem 0.375rem transparent;
    font-size: 0.8125rem;
    color: #696e79;
    background-color: #fff;
    -webkit-font-smoothing: antialiased;
    -webkit-box-shadow: 0 0.25rem 0.75rem 0 rgba(0, 0, 0, 0.05);
    box-shadow: 0 0.25rem 0.75rem 0 rgba(0, 0, 0, 0.05);
`

const SuggestionList = styled.ul`
    margin: 0 0 0.625rem;
    padding: 0;
`

const SuggestionListItem = styled.li`
    list-style: none;
    padding: 0.9375rem 0.25rem 0.9375rem 0.75rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`
