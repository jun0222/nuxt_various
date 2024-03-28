import fs from 'fs'
import path from 'path'
import axios from 'axios'
const BASE_URL = 'http://localhost:3001'
const DB_FILE = path.resolve(__dirname, '..', '..', 'server', 'api', 'db.json')
const ORIGINAL_DB_FILE = path.resolve(
  __dirname,
  '..',
  '..',
  'server',
  'api',
  'db.save.json'
)

describe('JSON Server', () => {
  // テスト前にオリジナルのデータをバックアップ
  beforeAll(() => {
    fs.copyFileSync(DB_FILE, ORIGINAL_DB_FILE)
  })

  // 各テストの前にデータをリセット
  beforeEach(() => {
    fs.copyFileSync(ORIGINAL_DB_FILE, DB_FILE)
  })

  // テスト後にオリジナルのデータを復元
  afterAll(() => {
    fs.copyFileSync(ORIGINAL_DB_FILE, DB_FILE)
    fs.unlinkSync(ORIGINAL_DB_FILE)
  })

  // Users
  test('GET /users', async () => {
    const response = await axios.get(`${BASE_URL}/users`)
    expect(response.status).toBe(200)
    expect(response.data.length).toBe(2)
  })

  test('GET /users/:id', async () => {
    const newUser = { name: 'John Doe', email: 'john@example.com' }
    const createdUser = await axios.post(`${BASE_URL}/users`, newUser)
    const response = await axios.get(`${BASE_URL}/users/${createdUser.data.id}`)
    expect(response.status).toBe(200)
    expect(response.data.id).toBe(createdUser.data.id)
  })

  test('POST /users', async () => {
    const newUser = { name: 'Test User', email: 'test@example.com' }
    const response = await axios.post(`${BASE_URL}/users`, newUser)
    expect(response.status).toBe(201)
    expect(response.data).toMatchObject(newUser)
  })

  test('PUT /users/:id', async () => {
    const newUser = { name: 'John Doe', email: 'john@example.com' }
    const createdUser = await axios.post(`${BASE_URL}/users`, newUser)
    const updatedUser = { name: 'Updated User' }
    const response = await axios.put(
      `${BASE_URL}/users/${createdUser.data.id}`,
      updatedUser
    )
    expect(response.status).toBe(200)
    expect(response.data.name).toBe(updatedUser.name)
  })

  test('DELETE /users/:id', async () => {
    const newUser = { name: 'John Doe', email: 'john@example.com' }
    const createdUser = await axios.post(`${BASE_URL}/users`, newUser)
    const response = await axios.delete(
      `${BASE_URL}/users/${createdUser.data.id}`
    )
    expect(response.status).toBe(200)
  })

  // Posts
  test('GET /posts', async () => {
    const response = await axios.get(`${BASE_URL}/posts`)
    expect(response.status).toBe(200)
    expect(response.data.length).toBe(2)
  })

  test('GET /posts/:id', async () => {
    const newUser = { name: 'John Doe', email: 'john@example.com' }
    const createdUser = await axios.post(`${BASE_URL}/users`, newUser)
    const newPost = {
      title: 'Test Post',
      content: 'This is a test post.',
      userId: createdUser.data.id,
    }
    const createdPost = await axios.post(`${BASE_URL}/posts`, newPost)
    const response = await axios.get(`${BASE_URL}/posts/${createdPost.data.id}`)
    expect(response.status).toBe(200)
    expect(response.data.id).toBe(createdPost.data.id)
  })

  test('POST /posts', async () => {
    const newUser = { name: 'John Doe', email: 'john@example.com' }
    const createdUser = await axios.post(`${BASE_URL}/users`, newUser)
    const newPost = {
      title: 'New Post',
      content: 'This is a new post.',
      userId: createdUser.data.id,
    }
    const response = await axios.post(`${BASE_URL}/posts`, newPost)
    expect(response.status).toBe(201)
    expect(response.data).toMatchObject(newPost)
  })

  test('PUT /posts/:id', async () => {
    const newUser = { name: 'John Doe', email: 'john@example.com' }
    const createdUser = await axios.post(`${BASE_URL}/users`, newUser)
    const newPost = {
      title: 'Test Post',
      content: 'This is a test post.',
      userId: createdUser.data.id,
    }
    const createdPost = await axios.post(`${BASE_URL}/posts`, newPost)
    const updatedPost = { title: 'Updated Post' }
    const response = await axios.put(
      `${BASE_URL}/posts/${createdPost.data.id}`,
      updatedPost
    )
    expect(response.status).toBe(200)
    expect(response.data.title).toBe(updatedPost.title)
  })

  test('DELETE /posts/:id', async () => {
    const newUser = { name: 'John Doe', email: 'john@example.com' }
    const createdUser = await axios.post(`${BASE_URL}/users`, newUser)
    const newPost = {
      title: 'Test Post',
      content: 'This is a test post.',
      userId: createdUser.data.id,
    }
    const createdPost = await axios.post(`${BASE_URL}/posts`, newPost)
    const response = await axios.delete(
      `${BASE_URL}/posts/${createdPost.data.id}`
    )
    expect(response.status).toBe(200)
  })

  // Comments
  test('GET /comments', async () => {
    const response = await axios.get(`${BASE_URL}/comments`)
    expect(response.status).toBe(200)
    expect(response.data.length).toBe(2)
  })

  test('GET /comments/:id', async () => {
    const newUser = { name: 'John Doe', email: 'john@example.com' }
    const createdUser = await axios.post(`${BASE_URL}/users`, newUser)
    const newPost = {
      title: 'Test Post',
      content: 'This is a test post.',
      userId: createdUser.data.id,
    }
    const createdPost = await axios.post(`${BASE_URL}/posts`, newPost)
    const newComment = {
      content: 'Test Comment',
      postId: createdPost.data.id,
      userId: createdUser.data.id,
    }
    const createdComment = await axios.post(`${BASE_URL}/comments`, newComment)
    const response = await axios.get(
      `${BASE_URL}/comments/${createdComment.data.id}`
    )
    expect(response.status).toBe(200)
    expect(response.data.id).toBe(createdComment.data.id)
  })

  test('POST /comments', async () => {
    const newUser = { name: 'John Doe', email: 'john@example.com' }
    const createdUser = await axios.post(`${BASE_URL}/users`, newUser)
    const newPost = {
      title: 'Test Post',
      content: 'This is a test post.',
      userId: createdUser.data.id,
    }
    const createdPost = await axios.post(`${BASE_URL}/posts`, newPost)
    const newComment = {
      content: 'New Comment',
      postId: createdPost.data.id,
      userId: createdUser.data.id,
    }
    const response = await axios.post(`${BASE_URL}/comments`, newComment)
    expect(response.status).toBe(201)
    expect(response.data).toMatchObject(newComment)
  })

  test('PUT /comments/:id', async () => {
    const newUser = { name: 'John Doe', email: 'john@example.com' }
    const createdUser = await axios.post(`${BASE_URL}/users`, newUser)
    const newPost = {
      title: 'Test Post',
      content: 'This is a test post.',
      userId: createdUser.data.id,
    }
    const createdPost = await axios.post(`${BASE_URL}/posts`, newPost)
    const newComment = {
      content: 'Test Comment',
      postId: createdPost.data.id,
      userId: createdUser.data.id,
    }
    const createdComment = await axios.post(`${BASE_URL}/comments`, newComment)
    const updatedComment = { content: 'Updated Comment' }
    const response = await axios.put(
      `${BASE_URL}/comments/${createdComment.data.id}`,
      updatedComment
    )
    expect(response.status).toBe(200)
    expect(response.data.content).toBe(updatedComment.content)
  })

  test('DELETE /comments/:id', async () => {
    const newUser = { name: 'John Doe', email: 'john@example.com' }
    const createdUser = await axios.post(`${BASE_URL}/users`, newUser)
    const newPost = {
      title: 'Test Post',
      content: 'This is a test post.',
      userId: createdUser.data.id,
    }
    const createdPost = await axios.post(`${BASE_URL}/posts`, newPost)
    const newComment = {
      content: 'Test Comment',
      postId: createdPost.data.id,
      userId: createdUser.data.id,
    }
    const createdComment = await axios.post(`${BASE_URL}/comments`, newComment)
    const response = await axios.delete(
      `${BASE_URL}/comments/${createdComment.data.id}`
    )
    expect(response.status).toBe(200)
  })
})
