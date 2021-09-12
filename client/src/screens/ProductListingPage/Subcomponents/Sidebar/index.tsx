//Library
import React from 'react'
import styled from 'styled-components'

//Shared Interface
import { Category } from './../../../../typings/types'

interface Props {
    categories: Array<Category>
}

const Sidebar: React.FC<Props> = (props) => {
    
    //Props
    const { categories } = props

    return (
        <SidebarContainer>
            <h3>Kategorien</h3>
            {categories.length ? (
                <CategoryList>
                    {categories[0].childrenCategories.map(
                        ({ name, urlPath }) => {
                            return (
                                <CategoryListElement key={name} >
                                    <CategoryLink href={`/${urlPath}`}>
                                        {name}
                                    </CategoryLink>
                                </CategoryListElement>
                            )
                        }
                    )}
                </CategoryList>
            ) : (
                'Loading...'
            )}
        </SidebarContainer>
    )
}

export default Sidebar

const SidebarContainer = styled.section`
    border-right: 0.0625rem solid #eaeaec;
    margin-top: -1rem;
`

const CategoryList = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`

const CategoryListElement = styled.div`
    margin: 0 0 0 0.5rem;
    padding: 0.5rem 0;

    display: block;
    width: 95%;
    white-space: nowrap;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    min-height: 1.0625rem;
    color: #282c3f;
`

const CategoryLink = styled.a`
    display: block;
    white-space: nowrap;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    min-height: 1.0625rem;
    color: #282c3f;
    text-decoration: none;
`