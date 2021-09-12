//Library
import React from 'react'
import styled from 'styled-components'

//Reusable components
import Button from './../Button'

//Utils
import { currencyFormatter } from './../../utils/currencyFormatter'

//Shared interface
import { Article } from '../../typings/types'

interface Props {
    article: Article
}

const ArticleCard: React.FC<Props> = (props) => {
    
    const { article } = props

    const handleButtonClick = () => {}

    return (
        <ArticleContainer>
            <ArticleImage src={article.images[0].path} alt="articleimage" />
            <ArticleInfo>
                <ArticleName test-id="articleName">{article.name}</ArticleName>
                <ArticlePrice>
                    {currencyFormatter.format(
                        article.prices.regular.value / 100
                    )}
                </ArticlePrice>
                <Button
                    onClickProp={handleButtonClick}
                    buttonType={'S'}
                    disabled={false}
                    buttonText={'Add to cart'}
                    test-id="addToCartButton"
                />
            </ArticleInfo>
        </ArticleContainer>
    )
}

const ArticleContainer = styled.div`
    border: 0.0625rem solid lavenderblush;
    padding: 0.625rem;
    width: 15.625rem;
    text-align: left;
    position: relative;
    vertical-align: top;
    overflow: hidden;
    display: inline-block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0 0.625rem 1.875rem;

    &:hover {
        box-shadow: 0 0.125rem 1rem 0.25rem rgba(40, 44, 63, 0.07);
    }
`

const ArticleImage = styled.img`
    height: 17.5rem;
    width: 100%;
`

const ArticleInfo = styled.div`
    position: relative;
    background: #fff;
    padding: 0 0.625rem;
    height: 100%;
    margin-top: 0.75rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    overflow: hidden;
`

const ArticleName = styled.div`
    font-size: 1rem;
    font-weight: 700;
    line-height: 1;
    color: #282c3f;
    margin-bottom: 0.375rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`

const ArticlePrice = styled.div`
    font-size: 0.875rem;
    color: #282c3f;
    font-weight: 600;
    line-height: 0.9375rem;
    margin: 0.625rem 0 0.375rem;
    white-space: nowrap;
`

export default ArticleCard
