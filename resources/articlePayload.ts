export const articlePayload = () => ({
  article: {
    title: `Test Article ${Date.now()}`,
    description: 'Testabc',
    body: 'Testabc',
    tagList: []
  }
});

export const taggedArticlePayload = () => ({
  article: {
    title: `Playwright Article ${Date.now()}`,
    description: 'An article created using Playwright API testing',
    body: 'This article verifies article creation with multiple tags.',
    tagList: ['Playwright', 'API', 'Automation']
  }
});

export const longFormArticlePayload = () => ({
  article: {
    title: `Automation Guide ${Date.now()}`,
    description: 'A detailed guide to API test automation',
    body: 'API automation helps validate status codes, response bodies, headers, and authentication flows.',
    tagList: ['Testing', 'Guide']
  }
});

export const minimalArticlePayload = () => ({
  article: {
    title: `Minimal Article ${Date.now()}`,
    description: 'Minimal test article',
    body: 'Minimal body',
    tagList: []
  }
});
