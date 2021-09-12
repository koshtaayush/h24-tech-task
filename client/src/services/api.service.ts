export const getList = () => {
    var xhr = new XMLHttpRequest()

    xhr.open('POST', '/graphql')
    xhr.setRequestHeader('Content-Type', 'application/json')

    xhr.send(
        JSON.stringify({
            query: `{
categories(ids: "156126", locale: de_DE) {
  name
  articleCount
  childrenCategories {
    name
    urlPath
  }
  categoryArticles(first: 50) {
    articles {
      name
      variantName
      prices {
        currency
        regular {
          value
        }
      }
      images(
        format: WEBP
        maxWidth: 200
        maxHeight: 200
        limit: 1
      ) {
        path
      }
    }
  }
}
}`,
        })
    )

    return xhr
}
