//Library
import React, { useEffect } from 'react'
import styled from 'styled-components'

//Shared interface
import { Category } from '../../typings/types'

//Reusable components
import Header from './../../components/Header'
import Footer from './../../components/Footer'
import ArticleCard from './../../components/ArticleCard'
import Sidebar from './../../screens/ProductListingPage/Subcomponents/Sidebar'
import Count from './../../screens/ProductListingPage/Subcomponents/Count'
import Loader from './../../components/Loader'

//API servive
import { getList } from './../../services/api.service'

interface Props {}

const ArticleList: React.FC<Props> = () => {

    //Local state to store categories
    const [categories, setCategories] = React.useState<Array<Category>>([])

    //Local state to store loading state
    const [isLoading, setIsLoading] = React.useState<boolean>(false)

    //Local state to store error state
    const [isError, setIsError] = React.useState<boolean>(false)

    /**
     * Hook to be called first time to fetch list
     */
    useEffect(() => {
        handleFetchList()
    }, [])

    /**
     * Function to fetch list
     */
    const handleFetchList = () => {
        setIsLoading(true)
        const xhr = getList()
        xhr.onload = () => {
            if (xhr.status === 200) {
                setIsLoading(false)
                var response = JSON.parse(xhr.response)
                setCategories(response.data.categories)
                setIsError(false)
            } else {
                setIsLoading(false)
                setIsError(true)
            }
        }
    }

    var articles = categories.map((category) => {
        return category.categoryArticles.articles.map((article, index) => {
            return <ArticleCard article={article} key={index} />
        })
    })

    return (
        <div className={'page'}>
            <Header />
            <PageApartFromHeader>
                <SelectedArea>
                    <Area>
                        <h4>Welcome to Home24 </h4>
                    </Area>
                </SelectedArea>

                {!isLoading && (
                    <>
                        <Count categories={categories} />
                        <MainContainer>
                            <Sidebar categories={categories} />

                            <Items>
                                <div>{articles}</div>
                            </Items>
                        </MainContainer>
                        <Footer />
                    </>
                )}

                {
                    isLoading && (
                        <Loader />
                    )
                }

                {isError && 
                    <ErrorContainer>
                        Unexpected Error Occured. Please refresh the page
                    </ErrorContainer>}

            </PageApartFromHeader>
        </div>
    )
}

var PLP = () => {
    return <ArticleList />
}

export default PLP

const SelectedArea = styled.div`
    margin-top: 1rem;
    display: flex;
    align-items: center;
`

const Area = styled.div`
    font-weight: 500;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    color: #282c3f;
    max-width: 25rem;
    text-transform: capitalize;
`

const MainContainer = styled.div`
    display: flex;
    border-top: 0.0625rem solid #eaeaec;
    padding: 1rem 0;
`

const Items = styled.div`
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    -ms-flex-line-pack: stretch;
    align-content: stretch;
    margin: 0 -0.625rem 0 0.1875rem;
    width: 100%;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
`

const PageApartFromHeader = styled.div`
    margin-top: 3.125rem;
`

const ErrorContainer = styled.div`

`