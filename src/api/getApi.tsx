import axios from 'axios';

export async function getMenuCategories(): Promise<any> {
	let data = JSON.stringify({
		query: `query MENU_ITEMS {
		  menuItems(first: 100, where: {location: PRIMARY}) {
		    nodes {
		      title: label
		    }
		  }
		}`,
		variables: {},
	});

	let config: object = {
		method: 'post',
		url: 'https://a1-environews.kinshasadigital.academy/index.php?graphql',
		headers: {
			'Content-Type': 'application/json',
		},
		data: data,
	};

	const response = await axios(config);
	const dataFetch: any = await response.data;
	return dataFetch.data.menuItems;
}

export async function getCategories(): Promise<any> {
	let data = JSON.stringify({
		query: ` query MyQuery {
    categories(first: 40) {
      edges {
        node {
          name
          uri
          categoryId
        }
      }
    }
  }`,
		variables: {},
	});

	let config: object = {
		method: 'post',
		url: 'https://a1-environews.kinshasadigital.academy/index.php?graphql',
		headers: {
			'Content-Type': 'application/json',
		},
		data: data,
	};

	const response = await axios(config);
	const dataFetch: any = await response.data;
	return dataFetch.data.categories.edges;
}

export async function getArticles(numberReturn: Number = 30): Promise<any> {
	let data = JSON.stringify({
		query: `query MyQuery {
    posts(first: ${numberReturn}) {
      edges {
        node {
          title
          uri
          date
          seo {
            metaKeywords
            metaDesc
            metaRobotsNofollow
          }
          content
          author {
            node {
              firstName
              name
            }
          }
          categories {
            nodes {
              name
            }
          }
        }
      }
    }
  }`,
		variables: {},
	});

	let config: object = {
		method: 'post',
		url: 'https://a1-environews.kinshasadigital.academy/index.php?graphql',
		headers: {
			'Content-Type': 'application/json',
		},
		data: data,
	};

	const response = await axios(config);
	const dataFetch: any = await response.data;
	return dataFetch.data.posts.edges;
}

export async function getArticlesByCategory(
	numberReturn: Number = 30,
	IdCategorie: Number
): Promise<any> {
	let data = JSON.stringify({
		query: `query MyQuery {
    posts(first: ${numberReturn}, where: {categoryId: ${IdCategorie}}) {
      edges {
        node {
          title
          uri
          date
          seo {
            metaKeywords
            metaDesc
            metaRobotsNofollow
          }
          content
          author {
            node {
              firstName
              name
            }
          }
          categories {
            nodes {
              name
              categoryId
            }
          }
        }
      }
    }
  }`,
		variables: {},
	});

	let config: object = {
		method: 'post',
		url: 'https://a1-environews.kinshasadigital.academy/index.php?graphql',
		headers: {
			'Content-Type': 'application/json',
		},
		data: data,
	};

	const response = await axios(config);
	const dataFetch: any = await response.data;
	return dataFetch.data.posts.edges;
}

export async function getOneArticles(titleArticle: string): Promise<any> {
	let data = JSON.stringify({
		query: `query MyQuery {
    posts(where: {categoryId: ${titleArticle}}) {
      edges {
        node {
          title
          uri
          date
          seo {
            metaKeywords
            metaDesc
            metaRobotsNofollow
          }
          content
          author {
            node {
              firstName
              name
            }
          }
          categories {
            nodes {
              name
              categoryId
            }
          }
        }
      }
    }
  }`,
		variables: {},
	});

	let config: object = {
		method: 'post',
		url: 'https://a1-environews.kinshasadigital.academy/index.php?graphql',
		headers: {
			'Content-Type': 'application/json',
		},
		data: data,
	};

	const response = await axios(config);
	const dataFetch: any = await response.data;
	return dataFetch.data.posts.edges;
}