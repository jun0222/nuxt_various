import axios from 'axios'

const BASE_URL = 'http://localhost:3001'

describe('JSON Server', () => {
  // Users
  test('GET /users', async () => {
    const response = await axios.get(`${BASE_URL}/users`)
    expect(response.status).toBe(200)
    expect(response.data.length).toBeGreaterThan(0)
  })

  test('GET /users/:id', async () => {
    const response = await axios.get(`${BASE_URL}/users/1`)
    expect(response.status).toBe(200)
    expect(response.data.id).toBe('1')
  })

  test('POST /users', async () => {
    const newUser = { name: 'Test User', email: 'test@example.com' }
    const response = await axios.post(`${BASE_URL}/users`, newUser)
    expect(response.status).toBe(201)
    expect(response.data).toMatchObject(newUser)
  })

  test('PUT /users/:id', async () => {
    const updatedUser = { name: 'Updated User' }
    const response = await axios.put(`${BASE_URL}/users/1`, updatedUser)
    expect(response.status).toBe(200)
    expect(response.data.name).toBe(updatedUser.name)
  })

  test('DELETE /users/:id', async () => {
    const response = await axios.delete(`${BASE_URL}/users/1`)
    expect(response.status).toBe(200)
  })

  // Posts
  test('GET /posts', async () => {
    const response = await axios.get(`${BASE_URL}/posts`)
    expect(response.status).toBe(200)
    expect(response.data.length).toBeGreaterThan(0)
  })

  test('GET /posts/:id', async () => {
    const response = await axios.get(`${BASE_URL}/posts/1`)
    expect(response.status).toBe(200)
    expect(response.data.id).toBe('1')
  })

  test('POST /posts', async () => {
    const newPost = {
      title: 'New Post',
      content: 'This is a new post.',
      userId: 1,
    }
    const response = await axios.post(`${BASE_URL}/posts`, newPost)
    expect(response.status).toBe(201)
    expect(response.data).toMatchObject(newPost)
  })

  test('PUT /posts/:id', async () => {
    const updatedPost = { title: 'Updated Post' }
    const response = await axios.put(`${BASE_URL}/posts/1`, updatedPost)
    expect(response.status).toBe(200)
    expect(response.data.title).toBe(updatedPost.title)
  })

  test('DELETE /posts/:id', async () => {
    const response = await axios.delete(`${BASE_URL}/posts/1`)
    expect(response.status).toBe(200)
  })

  // Comments
  test('GET /comments', async () => {
    const response = await axios.get(`${BASE_URL}/comments`)
    expect(response.status).toBe(200)
    expect(response.data.length).toBeGreaterThan(0)
  })

  test('GET /comments/:id', async () => {
    const response = await axios.get(`${BASE_URL}/comments/1`)
    expect(response.status).toBe(200)
    expect(response.data.id).toBe('1')
  })

  test('POST /comments', async () => {
    const newComment = { content: 'New Comment', postId: 1, userId: 1 }
    const response = await axios.post(`${BASE_URL}/comments`, newComment)
    expect(response.status).toBe(201)
    expect(response.data).toMatchObject(newComment)
  })

  test('PUT /comments/:id', async () => {
    const updatedComment = { content: 'Updated Comment' }
    const response = await axios.put(`${BASE_URL}/comments/1`, updatedComment)
    expect(response.status).toBe(200)
    expect(response.data.content).toBe(updatedComment.content)
  })

  test('DELETE /comments/:id', async () => {
    const response = await axios.delete(`${BASE_URL}/comments/1`)
    expect(response.status).toBe(200)
  })
})
